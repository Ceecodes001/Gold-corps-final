import { collection, query, where, orderBy, onSnapshot, addDoc, doc, getDoc, updateDoc, getDocs, serverTimestamp, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

const API_KEY = "f369cba8b4f18e797805679cfb09562b";
const CURRENCY = "USD";
const DEFAULT_GOLD_PRICE = 119.50;
const PRICE_CACHE_KEY = "goldPriceData";

export const GOLD_PLANS = [
  {
    id: 1,
    name: "BEGINNERS PLAN",
    profitPercent: 5,
    min: 200,
    max: 19999,
    duration: 7,
    description: "Perfect for beginners starting with gold investment"
  },
  {
    id: 2,
    name: "MASTERS PLAN",
    profitPercent: 30,
    min: 20000,
    max: 999999,
    duration: 14,
    description: "Ideal for consistent wealth accumulation"
  },
  {
    id: 3,
    name: "PREMIUM PLAN",
    profitPercent: 50,
    min: 1000000,
    max: Infinity,
    duration: 30,
    description: "For premium investors building a substantial portfolio"
  },
  {
    id: 99,
    name: "🧪 TEST PLAN (1-Minute)",
    profitPercent: 10,
    min: 1,
    max: 1000,
    duration: 5,
    description: "⚠️ TEST PLAN ONLY - Credits every 1 minute for testing",
    isTestPlan: true
  }
];

export const CRYPTO_WALLETS = [
  { type: "Bitcoin (BTC)", address: "bc1qd0l4rpekuxey4dchuaqt963wuz5djpskj9az06" },
  { type: "Ethereum (ETH)", address: "0x2F549207342b44ADF00d25893580b23902f3137B" },
  { type: "USDT (ERC20)", address: "0x2F549207342b44ADF00d25893580b23902f3137B" },
  { type: "Dogecoin (DOGE)", address: "D7whXjWwZzsXqnfZdy3rSkBtvTbyefr4d4" },
  { type: "Tron (TRX)", address: "TNyKcnXh9GhANHaCgQyTdnXGmMc72ykQFC" },
  { type: "Litecoin (LTC)", address: "LYeqNHY5YR258V41SEMN8WmdHHrm76EzkD" }
];

export const validateDepositAmount = (amount, plan) => {
  if (!plan || typeof amount !== "number" || Number.isNaN(amount) || amount <= 0) {
    return { valid: false, error: "Please enter a valid amount greater than 0." };
  }

  if (amount < plan.min || (plan.max !== Infinity && amount > plan.max)) {
    return {
      valid: false,
      error: `Please enter a valid amount between $${plan.min} and ${plan.max === Infinity ? 'unlimited' : `$${plan.max}`}`
    };
  }

  return { valid: true };
};

export const fetchGoldPrice = async () => {
  try {
    const cachedData = localStorage.getItem(PRICE_CACHE_KEY);
    if (cachedData) {
      const { price, timestamp } = JSON.parse(cachedData);
      const now = Date.now();
      const twelveHours = 12 * 60 * 60 * 1000;

      if (now - timestamp < twelveHours) {
        return price;
      }
    }

    const res = await fetch(`https://api.metalpriceapi.com/v1/latest?api_key=${API_KEY}&base=XAU&currencies=${CURRENCY}`);
    if (!res.ok) {
      throw new Error("Failed to fetch gold price");
    }

    const data = await res.json();
    if (data.rates && typeof data.rates[CURRENCY] === "number") {
      const pricePerGram = data.rates[CURRENCY] / 28.3495;
      localStorage.setItem(PRICE_CACHE_KEY, JSON.stringify({ price: pricePerGram, timestamp: Date.now() }));
      return pricePerGram;
    }

    throw new Error("Invalid gold price response format");
  } catch (err) {
    console.error("Error fetching gold price:", err);

    const cachedData = localStorage.getItem(PRICE_CACHE_KEY);
    if (cachedData) {
      const { price } = JSON.parse(cachedData);
      return price;
    }

    return DEFAULT_GOLD_PRICE;
  }
};

export const createGoldPurchase = async ({ userId, selectedPlan, depositAmount, goldPrice, selectedWallet, depositMethod }) => {
  const amount = Number(depositAmount);
  const profitPercent = selectedPlan.profitPercent;
  const goldAllocation = amount / goldPrice;
  const startDate = new Date();
  const nextPaymentDate = new Date(startDate);
  nextPaymentDate.setDate(startDate.getDate() + selectedPlan.duration);
  const approvalRequired = depositMethod === "wire" || depositMethod === "check";

  const transactionData = {
    userId,
    type: "deposit",
    amount,
    goldAmount: goldAllocation,
    profitPercent: `${profitPercent}%`,
    plan: selectedPlan.name,
    planId: selectedPlan.id,
    interest: `$${(amount * profitPercent / 100).toFixed(0)}`,
    duration: selectedPlan.duration,
    description: selectedPlan.description,
    status: approvalRequired ? "pending" : "completed",
    requiresApproval: approvalRequired,
    approvalStatus: approvalRequired ? "pending" : "approved",
    approvalMethod: depositMethod,
    adminQueue: approvalRequired,
    timestamp: serverTimestamp(),
    startDate: Timestamp.fromDate(startDate),
    nextPaymentDate: Timestamp.fromDate(nextPaymentDate),
    interestEarned: 0,
    totalInterestEarned: 0,
    walletType: selectedWallet ? selectedWallet.type : depositMethod,
    walletAddress: selectedWallet ? selectedWallet.address : "N/A",
    goldPriceAtPurchase: goldPrice,
    daysCredited: 0,
    isActive: true,
    depositMethod,
    isTestPlan: selectedPlan.isTestPlan || false
  };

  const newTransactionRef = await addDoc(collection(db, "transactions"), transactionData);

  if (approvalRequired) {
    try {
      await addDoc(collection(db, "adminQueue"), {
        transactionId: newTransactionRef.id,
        userId,
        type: "deposit",
        depositMethod,
        amount,
        plan: selectedPlan.name,
        status: "pending",
        createdAt: serverTimestamp(),
        notes: `Wire/check deposit requires admin approval for ${selectedPlan.name}`
      });
    } catch (queueError) {
      console.error("Failed to add transaction to admin queue:", queueError);
      // The main transaction has already been created, so do not fail the user's deposit flow.
    }
  } else {
    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      const userData = userDoc.data();
      await updateDoc(userRef, {
        balance: (userData.balance || 0) + amount,
        goldBalance: (userData.goldBalance || 0) + goldAllocation
      });
      await updateDoc(doc(db, "transactions", newTransactionRef.id), {
        approvedAt: serverTimestamp(),
        approvedBy: "system",
        processedAt: serverTimestamp()
      });
    }
  }

  return newTransactionRef.id;
};

export const createWithdrawalRequest = async ({ userId, amount, currency, destinationWallet, destinationAddress }) => {
  const withdrawalRef = await addDoc(collection(db, "withdrawals"), {
    userId,
    amount,
    currency,
    destinationWallet,
    destinationAddress,
    status: "pending",
    createdAt: serverTimestamp()
  });
  return withdrawalRef.id;
};

export const claimInvestmentInterest = async (userId) => {
  const transactionsQuery = query(
    collection(db, "transactions"),
    where("userId", "==", userId),
    where("type", "==", "deposit"),
    where("status", "==", "completed")
  );

  const querySnapshot = await getDocs(transactionsQuery);
  const claimed = [];

  for (const docSnap of querySnapshot.docs) {
    const transaction = docSnap.data();
    if (transaction.interestEarned && transaction.interestEarned > 0 && !transaction.interestClaimed) {
      await updateDoc(doc(db, "transactions", docSnap.id), {
        interestClaimed: true,
        interestClaimedAt: serverTimestamp()
      });
      claimed.push(docSnap.id);
    }
  }

  return claimed;
};

export const subscribeToTransactions = (userId, onUpdate, onError) => {
  const q = query(
    collection(db, "transactions"),
    where("userId", "==", userId),
    orderBy("timestamp", "desc")
  );

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const transactionsData = [];
    querySnapshot.forEach((docSnap) => {
      transactionsData.push({ id: docSnap.id, ...docSnap.data() });
    });
    onUpdate(transactionsData);
  }, (error) => {
    if (onError) onError(error);
  });

  return unsubscribe;
};
