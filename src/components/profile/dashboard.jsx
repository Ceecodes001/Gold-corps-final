import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, sendPasswordResetEmail } from "firebase/auth";
import { doc, getDoc, updateDoc, collection, addDoc, onSnapshot, query, where, orderBy, serverTimestamp, Timestamp, runTransaction, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {
  fetchGoldPrice as fetchGoldPriceFromService,
  createGoldPurchase,
  validateDepositAmount
} from "../../services/cryptoTransactionService";
import {
  FaSignOutAlt,
  FaUser,
  FaChartBar,
  FaCog,
  FaWallet,
  FaBitcoin,
  FaEthereum,
  FaClock,
  FaCheckCircle,
  FaExclamationCircle,
  FaPlusSquare,
  FaMinusSquare,
  FaHistory,
  FaUserPlus,
  FaCoins,
  FaUpload,
  FaReceipt,
  FaBars,
  FaTimes,
  FaCopy,
  FaCalendarAlt,
  FaComments,
  FaPaperPlane,
  FaTimesCircle,
  FaUniversity,
  FaMoneyCheck,
  FaMoneyBillWave,
  FaEnvelope
} from "react-icons/fa";

// Component for the Chat window
const ChatWindow = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user || !isOpen) return;

    const q = query(
      collection(db, "chats"),
      where("userId", "==", user.uid),
      orderBy("timestamp", "asc")
    );
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesData = [];
      querySnapshot.forEach((doc) => {
        messagesData.push({ id: doc.id, ...doc.data() });
      });
      setMessages(messagesData);
      setTimeout(() => {
        const chatContainer = document.getElementById("chat-messages");
        if (chatContainer) {
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }
      }, 100);
    }, (err) => {
      console.error("Error loading messages:", err);
      setError("Failed to load messages");
    });
    
    return () => unsubscribe();
  }, [user, isOpen]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setLoading(true);
    try {
      await addDoc(collection(db, "chats"), {
        userId: user.uid,
        userName: user.displayName || user.email,
        message: newMessage.trim(),
        isAdmin: false,
        timestamp: serverTimestamp(),
        read: false
      });
      setNewMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return "";
    return timestamp.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <div 
        className={`chat-button ${isOpen ? 'chat-button-hidden' : ''}`}
        onClick={() => setIsOpen(true)}
      >
        <FaComments size={20} />
        <span>Support</span>
      </div>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Customer Support</h3>
            <button 
              className="chat-close-btn"
              onClick={() => setIsOpen(false)}
            >
              <FaTimesCircle />
            </button>
          </div>
          
          <div id="chat-messages" className="chat-messages">
            {messages.length === 0 ? (
              <div className="chat-empty">
                <p>Start a conversation with our support team!</p>
                <p>We're here to help you with any questions.</p>
              </div>
            ) : (
              messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`message ${msg.isAdmin ? 'admin-message' : 'user-message'}`}
                >
                  <div className="message-content">
                    <p>{msg.message}</p>
                    <span className="message-time">
                      {msg.timestamp ? formatTime(msg.timestamp) : 'Sending...'}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          <form onSubmit={sendMessage} className="chat-input-form">
            {error && <div className="chat-error">{error}</div>}
            <div className="chat-input-container">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message here..."
                disabled={loading}
              />
              <button 
                type="submit" 
                disabled={loading || !newMessage.trim()}
                className="chat-send-btn"
              >
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

const GOLD_PLANS = [
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
  // 🧪 TEST PLAN - Credits every 1 minute
  {
    id: 99,
    name: "🧪 TEST PLAN (1-Minute)",
    profitPercent: 10,
    min: 1,
    max: 1000,
    duration: 5, // Will complete after 5 minutes
    description: "⚠️ TEST PLAN ONLY - Credits every 1 minute for testing",
    isTestPlan: true // Flag to identify test plan
  }
];

const CRYPTO_WALLETS = [
  { type: "Bitcoin (BTC)", address: "bc1qd0l4rpekuxey4dchuaqt963wuz5djpskj9az06" },
  { type: "Ethereum (ETH)", address: "0x2F549207342b44ADF00d25893580b23902f3137B" },
  { type: "USDT (ERC20)", address: "0x2F549207342b44ADF00d25893580b23902f3137B" },
  { type: "Dogecoin (DOGE)", address: "D7whXjWwZzsXqnfZdy3rSkBtvTbyefr4d4" },
  { type: "Tron (TRX)", address: "TNyKcnXh9GhANHaCgQyTdnXGmMc72ykQFC" },
  { type: "Litecoin (LTC)", address: "LYeqNHY5YR258V41SEMN8WmdHHrm76EzkD" }
];

// Component for the Profile section
const ProfileSection = ({ user }) => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      if (user) {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setProfileData(docSnap.data());
          } else {
            setError("Profile data not found.");
          }
        } catch (err) {
          setError("Failed to fetch profile data.");
          console.error(err);
        }
      }
      setLoading(false);
    };
    fetchProfileData();
  }, [user]);

  if (loading) {
    return <div className="loading">Loading profile...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="profile-container">
      <h2 className="section-title">User Profile</h2>
      <div className="profile-grid">
        <div className="profile-card">
          <strong>Full Name:</strong> <span>{profileData.fullName || "N/A"}</span>
        </div>
        <div className="profile-card">
          <strong>Email:</strong> <span>{user.email}</span>
        </div>
        <div className="profile-card">
          <strong>Username:</strong> <span>{profileData.username || "N/A"}</span>
        </div>
        <div className="profile-card">
          <strong>Phone:</strong> <span>{profileData.phone || "N/A"}</span>
        </div>
        <div className="profile-card">
          <strong>Location:</strong> <span>{profileData.location || "N/A"}</span>
        </div>
        <div className="profile-card">
          <strong>Occupation:</strong> <span>{profileData.occupation || "N/A"}</span>
        </div>
      </div>
      <div className="bio-card">
        <strong>Bio:</strong>
        <p>{profileData.bio || "No bio provided."}</p>
      </div>
      <button
        className="btn-primary"
        onClick={() => navigate("/edit-profile")}
      >
        Edit Profile
      </button>
    </div>
  );
};

// Component for the Settings section
const SettingsSection = ({ user }) => {
  const [resetStatus, setResetStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePasswordReset = async () => {
    if (!user || !user.email) {
      setResetStatus("error");
      return;
    }

    setLoading(true);
    setResetStatus(null);

    try {
      await sendPasswordResetEmail(auth, user.email);
      setResetStatus("success");
    } catch (error) {
      console.error("Password reset error:", error);
      setResetStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="settings-container">
      <div className="settings-card">
        <h2 className="section-title">Account Settings</h2>
        <div className="setting-item">
          <h3>Password & Security</h3>
          <p>Request a password reset link to be sent to your email.</p>
          <button
            className="btn-primary"
            onClick={handlePasswordReset}
            disabled={loading}
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
          {resetStatus === "success" && (
            <span className="success-message">
              <FaCheckCircle style={{ marginRight: "5px" }} /> Password reset email sent! Check your inbox.
            </span>
          )}
          {resetStatus === "error" && (
            <span className="error-message">
              <FaExclamationCircle style={{ marginRight: "5px" }} /> Failed to send reset email. Please try again.
            </span>
          )}
        </div>
      </div>
      <div className="settings-card">
        <h2 className="section-title">Notification Preferences</h2>
        <div className="setting-item">
          <p>Manage how you receive updates and alerts.</p>
          <button
            className="btn-secondary"
            onClick={() => alert("Notification settings update coming soon!")}
          >
            Configure Notifications
          </button>
        </div>
      </div>
    </div>
  );
};

// Component for the Deposit section - Updated with all deposit methods
const DepositSection = ({ user, updateBalance, goldPrice }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [depositAmount, setDepositAmount] = useState("");
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [depositConfirmed, setDepositConfirmed] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [step, setStep] = useState(0);
  const [addressCopied, setAddressCopied] = useState(false);
  const [depositMethod, setDepositMethod] = useState("crypto");
  const [showMethodSelection, setShowMethodSelection] = useState(false);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setDepositAmount("");
    setSelectedWallet(null);
    setDepositConfirmed(false);
    setUploaded(false);
    setTransactionSuccess(false);
    setError(null);
    setShowMethodSelection(false);
    setStep(1); // Move directly to deposit amount entry after selecting a plan
  };

  const handleMethodSelect = (method) => {
    setDepositMethod(method);
    if (method === "crypto") {
      setStep(3); // Go to wallet selection
    } else {
      setStep(5); // Go to non-crypto method details
    }
  };

  const handleAmountSubmit = () => {
    const amount = parseFloat(depositAmount);
    const validation = validateDepositAmount(amount, selectedPlan);
    if (!validation.valid) {
      setError(validation.error);
      return;
    }

    setError(null);
    setShowMethodSelection(true);
    setStep(2); // Advance to payment method selection after a valid amount
  };

  const handleWalletSelect = (wallet) => {
    setSelectedWallet(wallet);
    setStep(4);
  };

  const handleConfirmTransfer = async () => {
    setDepositConfirmed(true);
    await processTransaction();
  };

  const processTransaction = async () => {
    if (!selectedPlan || !depositAmount || !goldPrice) return;
    setError(null);

    try {
      const amount = parseFloat(depositAmount);
      const validation = validateDepositAmount(amount, selectedPlan);
      if (!validation.valid) {
        setError(validation.error);
        return;
      }

      await createGoldPurchase({
        userId: user.uid,
        selectedPlan,
        depositAmount: amount,
        goldPrice,
        selectedWallet,
        depositMethod
      });

      setTransactionSuccess(true);
      setStep(0);
      setSelectedPlan(null);
      setDepositConfirmed(false);
      setUploaded(false);
      setShowMethodSelection(false);
    } catch (err) {
      setError("Failed to process transaction. Please try again.");
      console.error(err);
    }
  };

  const handleFileChange = async (e) => {
    if (e.target.files[0]) {
      setUploaded(true);
      await processTransaction();
    }
  };

  const handleCopyAddress = () => {
    if (selectedWallet?.address) {
      navigator.clipboard.writeText(selectedWallet.address);
      setAddressCopied(true);
      setTimeout(() => setAddressCopied(false), 2000);
    }
  };

  const handleSupportContact = () => {
    window.location.href = "mailto:goldcorps.org@hotmail.com";
  };

  return (
    <div className="section-card">
      <h2 className="section-title">Purchase Gold</h2>
      <div className="gold-price-info">
        Current Gold Price: <strong>${goldPrice ? goldPrice.toFixed(2) : 'Loading...'}/g</strong>
      </div>
      {error && (
        <span className="error-message">
          <FaExclamationCircle style={{ marginRight: "5px" }} /> {error}
        </span>
      )}
      {transactionSuccess ? (
        <div>
          <h3>Transaction Submitted for Approval!</h3>
          <span className="success-message">
            <FaCheckCircle style={{ marginRight: "5px" }} /> Your deposit has been submitted and is awaiting admin approval.
          </span>
          <button
            className="btn-secondary"
            onClick={() => {
              setTransactionSuccess(false);
              setShowMethodSelection(false);
              setStep(0);
            }}
          >
            Back to Plans
          </button>
        </div>
      ) : step === 0 ? (
        <>
          <p>Select a gold plan to purchase:</p>
          <div className="gold-plans-container">
            {GOLD_PLANS.map(plan => (
              <div
                key={plan.id}
                className={`gold-plan-card ${selectedPlan?.id === plan.id ? 'selected-plan' : ''} ${plan.isTestPlan ? 'test-plan-card' : ''}`}
                onClick={() => handlePlanSelect(plan)}
              >
                <FaCoins size={36} color="#D4AF37" />
                <h3 className="plan-title">{plan.name}</h3>
                <p className="plan-price">${plan.min}  - {plan.max === Infinity ? 'and above' : plan.max} USD</p>
                <p className="plan-description"><strong>Profit:</strong> {plan.profitPercent}% every {plan.duration} {plan.isTestPlan ? 'minutes' : 'days'}</p>
                <p className="plan-description">{plan.description}</p>
                {plan.isTestPlan && (
                  <div className="test-badge-plan">🧪 Test Plan</div>
                )}
              </div>
            ))}
          </div>
        </>
      ) : step === 1 ? (
        <>
          <h3>Selected Plan: {selectedPlan.name}</h3>
          <div className="form-group">
            <label htmlFor="deposit-amount">Enter Deposit Amount:</label>
            <input
              id="deposit-amount"
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              placeholder={`Enter amount between $${selectedPlan.min} and $${selectedPlan.max === Infinity ? 'unlimited' : selectedPlan.max}`}
            />
          </div>
          {depositAmount && goldPrice && (
            <div className="gold-calculation">
              <p>At current gold price (${goldPrice.toFixed(2)}/g), you will receive:</p>
              <p className="gold-amount">{(parseFloat(depositAmount) / goldPrice).toFixed(4)}g of gold</p>
            </div>
          )}
          <button className="btn-primary" onClick={handleAmountSubmit}>
            Proceed to Payment Method
          </button>
          <button className="btn-secondary" onClick={() => setStep(0)}>
            Back
          </button>
        </>
      ) : step === 2 ? (
        <>
          <h3>Select a Deposit Method</h3>
          <div className="deposit-methods-grid">
            <button type="button" className="deposit-method-card" onClick={() => handleMethodSelect("crypto")}>
              <FaBitcoin size={36} color="#F7931A" />
              <h4>Cryptocurrency</h4>
              <p>BTC, ETH, USDT, DOGE, TRX, LTC</p>
            </button>
            <button type="button" className="deposit-method-card" onClick={() => handleMethodSelect("wire")}>
              <FaUniversity size={36} color="#2C3E50" />
              <h4>Wire Transfer</h4>
              <p>Bank to bank transfer</p>
            </button>
            <button type="button" className="deposit-method-card" onClick={() => handleMethodSelect("check")}>
              <FaMoneyCheck size={36} color="#27AE60" />
              <h4>Cashier's Check</h4>
              <p>Certified bank check</p>
            </button>
            <button type="button" className="deposit-method-card" onClick={() => handleMethodSelect("cash")}>
              <FaMoneyBillWave size={36} color="#F39C12" />
              <h4>Cash & Money Orders</h4>
              <p>Cash deposits & money orders</p>
            </button>
          </div>
          <button className="btn-secondary" onClick={() => setStep(1)}>
            Back
          </button>
        </>
      ) : step === 3 ? (
        <>
          <h3>Select a Cryptocurrency Wallet</h3>
          <p>After clicking the Cryptocurrency button, choose your wallet and send the exact amount to one of the supported addresses below.</p>
          <div className="gold-plans-container">
            {CRYPTO_WALLETS.map((wallet, index) => (
              <button
                key={index}
                type="button"
                className={`gold-plan-card ${selectedWallet?.type === wallet.type ? 'selected-plan' : ''}`}
                onClick={() => handleWalletSelect(wallet)}
              >
                {wallet.type.includes("Bitcoin") && <FaBitcoin size={36} color="#F7931A" />}
                {wallet.type.includes("Ethereum") && <FaEthereum size={36} color="#627EEA" />}
                {wallet.type.includes("USDT") && <FaCoins size={36} color="#26A17B" />}
                {!wallet.type.includes("Bitcoin") && !wallet.type.includes("Ethereum") && !wallet.type.includes("USDT") && <FaWallet size={36} color="#D4AF37" />}
                <h3 className="plan-title">{wallet.type}</h3>
                <p className="plan-description" style={{fontSize: '12px', wordBreak: 'break-all'}}>{wallet.address.substring(0, 20)}...</p>
              </button>
            ))}
          </div>
          <button className="btn-secondary" onClick={() => setStep(2)}>
            Back
          </button>
        </>
      ) : step === 4 ? (
        <>
          <h3>Selected Plan: {selectedPlan.name}</h3>
          <p>Amount: ${depositAmount}</p>
          {goldPrice && (
            <p>Gold Allocation: {(parseFloat(depositAmount) / goldPrice).toFixed(4)}g</p>
          )}
          <p>Please send exactly <strong>${depositAmount}</strong> to the following address:</p>
          <div className="deposit-address">
            <p><strong>{selectedWallet.type} Address:</strong></p>
            <p style={{wordBreak: 'break-all'}}>{selectedWallet.address}</p>
            <button className="btn-secondary" onClick={handleCopyAddress}>
              {addressCopied ? "Copied!" : "Copy Address"} <FaCopy style={{ marginLeft: "5px" }} />
            </button>
          </div>
          <p>After completing your transfer, click the button below to confirm.</p>
          <button
            className="btn-primary"
            onClick={handleConfirmTransfer}
          >
            I've Sent the Payment
          </button>
          <button
            className="btn-secondary"
            onClick={() => setStep(3)}
          >
            Choose Different Wallet
          </button>
        </>
      ) : step === 5 ? (
        <>
          <h3>{depositMethod === "wire" ? "Wire Transfer" : depositMethod === "check" ? "Cashier's Check" : "Cash & Money Orders"}</h3>
          <div className="deposit-method-info">
            <div className="method-icon-large">
              {depositMethod === "wire" && <FaUniversity size={48} color="#2C3E50" />}
              {depositMethod === "check" && <FaMoneyCheck size={48} color="#27AE60" />}
              {depositMethod === "cash" && <FaMoneyBillWave size={48} color="#F39C12" />}
            </div>
            
            <h4>Amount: ${depositAmount}</h4>
            <p>Gold Allocation: {(parseFloat(depositAmount) / goldPrice).toFixed(4)}g</p>
            
            <div className="method-instructions">
              <p><strong>Instructions:</strong></p>
              {depositMethod === "wire" && (
                <>
                  <p>For wire transfers, please contact our Live Support team or email <a href="mailto:goldcorps.org@hotmail.com">goldcorps.org@hotmail.com</a> to receive our wire transfer instructions, including:</p>
                  <ul>
                    <li>Bank name</li>
                    <li>Routing number</li>
                    <li>Account number</li>
                    <li>Reference/payment details required to ensure your deposit is credited promptly</li>
                  </ul>
                </>
              )}
              {depositMethod === "check" && (
                <>
                  <p>For cashier's check deposits, please contact our Live Support team or email <a href="mailto:goldcorps.org@hotmail.com">goldcorps.org@hotmail.com</a> to receive the appropriate mailing and payment instructions. This ensures your funds are credited securely and without delay.</p>
                </>
              )}
              {depositMethod === "cash" && (
                <>
                  <p>For cash deposits or money orders, please contact our Live Support team or email <a href="mailto:goldcorps.org@hotmail.com">goldcorps.org@hotmail.com</a> to receive the correct payee information and mailing instructions. Once your payment has been received, verified, and processed, your account balance will be updated accordingly.</p>
                </>
              )}
            </div>
            
            <div className="support-contact">
              <button className="btn-primary" onClick={handleSupportContact}>
                <FaEnvelope style={{marginRight: '8px'}} /> Contact Support
              </button>
            </div>
            
            <p style={{marginTop: '20px', color: '#7f8c8d'}}>After completing your payment, click the button below to confirm.</p>
            <button
              className="btn-primary"
              onClick={() => {
                setDepositConfirmed(true);
                processTransaction();
              }}
            >
              I've Sent the Payment
            </button>
          </div>
          <button className="btn-secondary" onClick={() => setStep(2)}>
            Back to Methods
          </button>
        </>
      ) : null}
      
      {!showMethodSelection && step === 0 && selectedPlan && (
        <div style={{marginTop: '20px'}}>
          <button className="btn-primary" onClick={() => setStep(1)}>
            Continue with {selectedPlan.name}
          </button>
        </div>
      )}

      <div className="deposit-important-info">
        <h3>Important Information</h3>
        <ul>
          <li>All deposits are subject to verification and compliance review.</li>
          <li>Processing times vary depending on the selected payment method.</li>
          <li>Funds will be credited to your account only after successful confirmation and approval.</li>
          <li>Please ensure all payment details are entered accurately to avoid processing delays.</li>
          <li>If you have any questions before making a deposit, please contact our support team for assistance.</li>
        </ul>
      </div>
      
      <style>{`
        .deposit-methods-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }
        
        .deposit-method-card {
          background: white;
          padding: 25px 20px;
          border-radius: 16px;
          text-align: center;
          cursor: pointer;
          border: 2px solid #e9ecef;
          transition: all 0.3s ease;
        }
        
        .deposit-method-card:hover {
          border-color: #3498db;
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        
        .deposit-method-card h4 {
          margin: 15px 0 5px;
          color: #2c3e50;
        }
        
        .deposit-method-card p {
          color: #7f8c8d;
          font-size: 14px;
          margin: 5px 0 0;
        }

        .method-note {
          font-size: 12px;
          color: #56657f;
          margin-top: 10px;
        }

        .deposit-important-info {
          background: #f7f9fc;
          border: 1px solid #dfe6ed;
          border-radius: 14px;
          padding: 18px 20px;
          margin: 20px 0 0;
        }

        .deposit-important-info h3 {
          margin: 0 0 12px;
          font-size: 18px;
          color: #2c3e50;
        }

        .deposit-important-info ul {
          margin: 0;
          padding-left: 20px;
          color: #4f5d72;
        }

        .deposit-important-info ul li {
          margin-bottom: 8px;
        }
        
        .method-icon-large {
          text-align: center;
          margin: 20px 0;
        }
        
        .method-instructions {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 12px;
          margin: 20px 0;
          border-left: 4px solid #3498db;
        }
        
        .method-instructions a {
          color: #3498db;
          text-decoration: none;
          font-weight: 600;
        }
        
        .method-instructions a:hover {
          text-decoration: underline;
        }
        
        .support-contact {
          text-align: center;
          margin: 20px 0;
        }
        
        .test-plan-card {
          border: 2px solid #ff9800;
          position: relative;
        }
        
        .test-badge-plan {
          display: inline-block;
          background: #ff9800;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          margin-top: 10px;
        }
        
        .deposit-method-info {
          background: white;
          padding: 20px;
          border-radius: 12px;
          margin: 20px 0;
        }
      `}</style>
    </div>
  );
};

// Component for Withdraw Section
const WithdrawSection = ({ user, balance, goldBalance, updateBalance, goldPrice }) => {
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawType, setWithdrawType] = useState("usd");
  const [destinationWallet, setDestinationWallet] = useState("");
  const [destinationAddress, setDestinationAddress] = useState("");
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleWithdraw = async () => {
    setMessage({ text: "", type: "" });

    if (!withdrawAmount || !destinationWallet || !destinationAddress) {
      setMessage({ text: "Please fill all fields", type: "error" });
      return;
    }

    const amount = parseFloat(withdrawAmount);
    if (isNaN(amount) || amount <= 0) {
      setMessage({ text: "Please enter a valid amount", type: "error" });
      return;
    }

    const minAmount = withdrawType === "usd" ? 50 : 1;
    if (amount < minAmount) {
      setMessage({ text: `Minimum withdrawal is $${minAmount} USD or ${minAmount}g Gold`, type: "error" });
      return;
    }

    if (withdrawType === "usd" && amount > balance) {
      setMessage({ text: "Insufficient USD balance", type: "error" });
      return;
    }

    if (withdrawType === "gold" && amount > goldBalance) {
      setMessage({ text: "Insufficient gold balance", type: "error" });
      return;
    }

    setProcessing(true);

    try {
      const amountInUSD = withdrawType === "usd" ? amount : amount * (goldPrice || 65);
      const transactionData = {
        userId: user.uid,
        type: "withdrawal",
        amount: amountInUSD,
        goldAmount: withdrawType === "gold" ? amount : 0,
        status: "pending",
        walletType: destinationWallet,
        walletAddress: destinationAddress,
        timestamp: serverTimestamp()
      };

      await addDoc(collection(db, "transactions"), transactionData);

      setMessage({ 
        text: "Withdrawal request submitted successfully! It will be processed within 24 hours.", 
        type: "success" 
      });
      
      setWithdrawAmount("");
      setDestinationWallet("");
      setDestinationAddress("");

    } catch (error) {
      console.error("Error processing withdrawal:", error);
      setMessage({ text: "Failed to process withdrawal. Please try again.", type: "error" });
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="section-card">
      <h2 className="section-title">Withdraw Funds</h2>
      
      <div className="balance-info">
        <p>Available Balance: <strong>${balance.toLocaleString()} USD</strong> | <strong>{goldBalance.toFixed(2)}g Gold</strong></p>
        {goldPrice && <p>Current Gold Price: <strong>${goldPrice.toFixed(2)}/g</strong></p>}
      </div>

      <div className="withdraw-form">
        <div className="form-group">
          <label htmlFor="withdraw-type">Withdraw Type:</label>
          <select 
            id="withdraw-type"
            value={withdrawType} 
            onChange={(e) => {
              setWithdrawType(e.target.value);
              setWithdrawAmount("");
              setDestinationWallet("");
              setDestinationAddress("");
            }}
          >
            <option value="usd">USD</option>
            <option value="gold">Gold</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="withdraw-amount">
            Amount to Withdraw {withdrawType === "gold" ? "(in grams)" : "(in USD)"}:
          </label>
          <input
            id="withdraw-amount"
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            placeholder={withdrawType === "usd" ? "Enter USD amount" : "Enter gold amount in grams"}
          />
          {withdrawType === "gold" && goldPrice && withdrawAmount && (
            <p className="withdraw-conversion">
              ≈ ${(parseFloat(withdrawAmount) * goldPrice).toFixed(2)} USD
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="destination-wallet">Destination Wallet Type:</label>
          <select
            id="destination-wallet"
            value={destinationWallet}
            onChange={(e) => setDestinationWallet(e.target.value)}
          >
            <option value="">Select a wallet type</option>
            {CRYPTO_WALLETS.map((wallet, index) => (
              <option key={index} value={wallet.type}>{wallet.type}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="destination-address">Destination Wallet Address:</label>
          <input
            id="destination-address"
            type="text"
            value={destinationAddress}
            onChange={(e) => setDestinationAddress(e.target.value)}
            placeholder="Enter your wallet address"
          />
        </div>

        {message.text && (
          <div className={message.type === "success" ? "success-message" : "error-message"}>
            {message.type === "success" ? 
              <FaCheckCircle style={{ marginRight: "5px" }} /> : 
              <FaExclamationCircle style={{ marginRight: "5px" }} />}
            {message.text}
          </div>
        )}

        <button
          className="btn-primary"
          onClick={handleWithdraw}
          disabled={processing || !withdrawAmount || !destinationWallet || !destinationAddress}
        >
            {processing ? "Processing..." : "Request Withdrawal"}
        </button>
      </div>

      <div className="withdrawal-info">
        <h4>Withdrawal Information:</h4>
        <ul>
          <li>Withdrawals are processed within 24 hours</li>
          <li>Gold withdrawals are converted to USD at current market rates</li>
          <li>Minimum withdrawal: $50 USD or 1g Gold</li>
          <li>Network fees may apply</li>
          <li>All withdrawals require admin approval</li>
        </ul>
      </div>
    </div>
  );
};

// Component for History Section
const HistorySection = ({ user }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;
    
    const q = query(
      collection(db, "transactions"),
      where("userId", "==", user.uid),
      orderBy("timestamp", "desc")
    );
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const transactionsData = [];
      querySnapshot.forEach((doc) => {
        transactionsData.push({ id: doc.id, ...doc.data() });
      });
      setTransactions(transactionsData);
      setLoading(false);
    }, (err) => {
      setError("Failed to load transaction history.");
      console.error(err);
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, [user]);

  const getStatusClass = (status) => {
    switch (status) {
      case "completed":
        return "status-completed";
      case "processing":
        return "status-processing";
      case "pending":
        return "status-pending";
      case "rejected":
        return "status-rejected";
      default:
        return "status-pending";
    }
  };

  if (loading) {
    return <div className="section-card">Loading transaction history...</div>;
  }

  if (error) {
    return <div className="section-card error-message">{error}</div>;
  }

  return (
    <div className="section-card">
      <h2 className="section-title">Transaction History</h2>
      
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <div className="table-container">
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Gold Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>
                    {transaction.type === "deposit" ? 
                      <FaPlusSquare className="icon-deposit" /> : 
                      <FaMinusSquare className="icon-withdraw" />
                    }
                    {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                    {transaction.plan && ` (${transaction.plan})`}
                  </td>
                  <td>${transaction.amount?.toLocaleString() || 'N/A'}</td>
                  <td>{transaction.goldAmount ? `${transaction.goldAmount.toFixed(4)}g` : 'N/A'}</td>
                  <td>
                    {transaction.timestamp?.toDate().toLocaleString() || 'N/A'}
                  </td>
                  <td>
                    <span className={`status-indicator ${getStatusClass(transaction.status)}`}>
                      {transaction.status?.charAt(0).toUpperCase() + transaction.status?.slice(1) || 'Pending'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// Component for Referral Section
const ReferralSection = ({ user }) => {
  const referralLink = `goldcorps.org`;
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="section-card">
      <h2 className="section-title">Referral Program</h2>
      <p>Invite friends and earn rewards! Share your unique referral link.</p>
      <div className="referral-container">
        <strong>Your Referral Link:</strong>
        <p className="referral-link">{referralLink}</p>
        <button className="btn-primary" onClick={handleCopyLink}>
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
      <div className="referral-info">
        <h4>How It Works:</h4>
        <ul>
          <li>Share your link with friends</li>
          <li>Earn 5% bonus on their first deposit</li>
          <li>Track your referrals in your dashboard</li>
        </ul>
      </div>
    </div>
  );
};

// Component for Investments Section - UPDATED with automatic crediting and 1-minute test support
const InvestmentsSection = ({ user, updateBalance, goldPrice }) => {
  const [investments, setInvestments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [lastCredited, setLastCredited] = useState(null);
  const [testMode, setTestMode] = useState(false);
  const [creditLogs, setCreditLogs] = useState([]);

  // Function to calculate and credit interest automatically
  const processInvestmentInterest = async () => {
    console.log('🔍 Checking for investment credits...');
    console.log(`👤 User: ${user?.email || user?.uid}`);
    
    if (!user || !investments.length) {
      console.log('❌ No user or no investments found');
      return;
    }

    const activeInvestments = investments.filter(inv => inv.isActive !== false);
    console.log(`📊 Found ${activeInvestments.length} active investments`);
    
    if (activeInvestments.length === 0) {
      console.log('ℹ️ No active investments to process');
      setProcessing(false);
      return;
    }

    // Log each investment details
    activeInvestments.forEach((inv, index) => {
      console.log(`💰 Investment ${index + 1}:`, {
        id: inv.id,
        plan: inv.plan,
        amount: inv.amount,
        daysCredited: inv.daysCredited || 0,
        duration: inv.duration,
        isTestPlan: inv.isTestPlan || false,
        lastCreditedDate: inv.lastCreditedDate?.toDate?.() || 'Not set',
        isActive: inv.isActive
      });
    });

    try {
      setProcessing(true);
      
      // Process each investment
      for (const investment of activeInvestments) {
        await processSingleInvestment(investment);
      }
      
      setProcessing(false);
    } catch (err) {
      console.error("Error processing investment interest:", err);
      setError("Failed to process investment interest");
      setProcessing(false);
    }
  };

  // Process a single investment
  const processSingleInvestment = async (investment) => {
    console.log(`🔄 Processing investment: ${investment.id}`);
    
    try {
      const investmentRef = doc(db, "transactions", investment.id);
      
      await runTransaction(db, async (transaction) => {
        const investmentDoc = await transaction.get(investmentRef);
        
        if (!investmentDoc.exists()) {
          console.log(`❌ Investment ${investment.id} not found`);
          return;
        }
        
        const invData = investmentDoc.data();
        
        // Check if this is a test plan
        const isTestPlan = invData.isTestPlan || false;
        
        console.log(`📈 Investment ${investment.id} current state:`, {
          daysCredited: invData.daysCredited || 0,
          duration: invData.duration,
          isActive: invData.isActive,
          isTestPlan: isTestPlan,
          lastCreditedDate: invData.lastCreditedDate?.toDate?.() || 'Never'
        });
        
        // Check if investment is still active
        if (invData.isActive === false) {
          console.log(`⏹️ Investment ${investment.id} is already completed`);
          return;
        }
        
        const daysCredited = invData.daysCredited || 0;
        const totalDuration = invData.duration || 0;
        
        if (daysCredited >= totalDuration) {
          console.log(`✅ Investment ${investment.id} has reached its duration, marking as complete`);
          transaction.update(investmentRef, {
            isActive: false,
            status: "completed"
          });
          return;
        }
        
        // Calculate time since last credit
        const lastCreditedDate = invData.lastCreditedDate?.toDate() || invData.startDate?.toDate() || new Date();
        const now = new Date();
        
        let timeElapsed;
        let creditInterval;
        
        if (isTestPlan) {
          // Test plan: credit every minute
          const minutesElapsed = Math.floor((now - lastCreditedDate) / (1000 * 60));
          timeElapsed = minutesElapsed;
          creditInterval = 1; // 1 minute
          console.log(`⏱️ Test plan: ${minutesElapsed} minutes since last credit`);
        } else {
          // Normal plan: credit every day
          const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
          const lastDate = new Date(lastCreditedDate.getFullYear(), lastCreditedDate.getMonth(), lastCreditedDate.getDate());
          const daysElapsed = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));
          timeElapsed = daysElapsed;
          creditInterval = 1; // 1 day
          console.log(`📅 Normal plan: ${daysElapsed} days since last credit`);
        }
        
        // If less than interval has passed, skip
        if (timeElapsed < creditInterval) {
          console.log(`⏳ Less than ${creditInterval} ${isTestPlan ? 'minute' : 'day'} passed, skipping credit for ${investment.id}`);
          return;
        }
        
        // Calculate how many intervals to credit (don't exceed total duration)
        const remainingIntervals = totalDuration - daysCredited;
        const intervalsToCredit = Math.min(Math.floor(timeElapsed / creditInterval), remainingIntervals);
        
        console.log(`📆 Intervals to credit: ${intervalsToCredit}`);
        
        if (intervalsToCredit <= 0) {
          console.log(`ℹ️ No intervals to credit for ${investment.id}`);
          return;
        }
        
        // Calculate earnings
        const profitPercent = parseFloat(invData.profitPercent) || 0;
        const amount = invData.amount || 0;
        const totalInterest = (amount * profitPercent) / 100;
        const dailyInterest = totalInterest / totalDuration;
        
        // For test plans, we credit per minute, so divide daily interest by 1440 (minutes in a day)
        const intervalInterest = isTestPlan ? dailyInterest / 1440 : dailyInterest;
        const earnings = intervalInterest * intervalsToCredit;
        
        console.log(`💰 Calculated earnings: $${earnings.toFixed(6)} (${intervalsToCredit} intervals × $${intervalInterest.toFixed(6)}/interval)`);
        
        // Get current user data
        const userRef = doc(db, "users", user.uid);
        const userDoc = await transaction.get(userRef);
        
        if (!userDoc.exists()) {
          console.log(`❌ User ${user.uid} not found`);
          return;
        }
        
        const currentBalance = userDoc.data().balance || 0;
        console.log(`💵 Current balance: $${currentBalance.toFixed(2)}`);
        console.log(`➕ New balance will be: $${(currentBalance + earnings).toFixed(2)}`);
        
        // Update user's balance
        transaction.update(userRef, {
          balance: currentBalance + earnings,
          lastInvestmentCredit: Timestamp.fromDate(now)
        });
        
        // Update investment document
        const newDaysCredited = daysCredited + intervalsToCredit;
        const isComplete = newDaysCredited >= totalDuration;
        
        transaction.update(investmentRef, {
          lastCreditedDate: Timestamp.fromDate(now),
          daysCredited: newDaysCredited,
          interestEarned: earnings,
          totalInterestEarned: (invData.totalInterestEarned || 0) + earnings,
          ...(isComplete && { isActive: false, status: "completed" })
        });
        
        console.log(`✅ Investment ${investment.id} credited successfully!`);
        console.log(`📊 Days credited: ${daysCredited} → ${newDaysCredited}`);
        console.log(`📊 Total interest earned: $${((invData.totalInterestEarned || 0) + earnings).toFixed(2)}`);
        
        // Create transaction record
        const creditTransactionRef = doc(collection(db, "transactions"));
        transaction.set(creditTransactionRef, {
          userId: user.uid,
          type: "interest_credit",
          amount: earnings,
          description: `Interest from ${invData.plan || 'Investment'} (${intervalsToCredit} ${isTestPlan ? 'minutes' : 'days'})`,
          investmentId: investment.id,
          status: "completed",
          timestamp: Timestamp.fromDate(now),
          isTestPlan: isTestPlan
        });
        
        if (isComplete) {
          console.log(`🏁 Investment ${investment.id} is now complete!`);
        }
        
        // Update credit logs for UI
        setCreditLogs(prev => [...prev, {
          timestamp: new Date(),
          investment: invData.plan,
          amount: earnings,
          intervals: intervalsToCredit,
          totalEarned: (invData.totalInterestEarned || 0) + earnings
        }]);
      });
      
    } catch (err) {
      console.error(`❌ Error processing investment ${investment.id}:`, err);
      setError(`Failed to process investment: ${err.message}`);
    }
  };

  // Set up automatic crediting with interval for test plans
  useEffect(() => {
    if (user && investments.length > 0) {
      // Check for test plans
      const hasTestPlan = investments.some(inv => inv.isTestPlan === true && inv.isActive !== false);
      
      if (hasTestPlan) {
        console.log('🧪 Test plan detected! Setting up 1-minute credit interval...');
        setTestMode(true);
        
        // Process immediately on mount
        processInvestmentInterest();
        
        // Set up interval to check every minute for test plans
        const intervalId = setInterval(() => {
          console.log('⏰ Running scheduled credit check (every 1 minute)...');
          processInvestmentInterest();
        }, 60000); // 1 minute
        
        return () => {
          console.log('🧹 Cleaning up test interval');
          clearInterval(intervalId);
        };
      } else {
        // Normal plans: check daily using localStorage
        const today = new Date().toDateString();
        const lastCreditDate = localStorage.getItem(`lastCredit_${user.uid}`);
        
        if (lastCreditDate !== today) {
          console.log('📅 Processing daily credits...');
          processInvestmentInterest().then(() => {
            localStorage.setItem(`lastCredit_${user.uid}`, today);
          });
        }
      }
    }
  }, [user, investments]);

  // Fetch investments
  useEffect(() => {
    if (!user) return;
    
    const q = query(
      collection(db, "transactions"),
      where("userId", "==", user.uid),
      where("type", "==", "deposit"),
      where("status", "in", ["completed", "active", "pending"]),
      orderBy("timestamp", "desc")
    );
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const investmentsData = [];
      querySnapshot.forEach((doc) => {
        investmentsData.push({ id: doc.id, ...doc.data() });
      });
      setInvestments(investmentsData);
      setLoading(false);
    }, (err) => {
      setError("Failed to load investments.");
      console.error(err);
      setLoading(false);
    });
    
    return () => unsubscribe();
  }, [user]);

  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    return timestamp.toDate().toLocaleString();
  };

  const getStatusText = (investment) => {
    if (investment.isActive === false) return "Completed";
    const daysCredited = investment.daysCredited || 0;
    const totalDuration = investment.duration || 0;
    if (daysCredited >= totalDuration) return "Completed";
    if (investment.isTestPlan) return "Testing (1-min credits)";
    return "Active";
  };

  if (loading) {
    return <div className="section-card">Loading investments...</div>;
  }

  if (error) {
    return <div className="section-card error-message">{error}</div>;
  }

  return (
    <div className="section-card">
      <h2 className="section-title">
        My Investments
        {testMode && <span className="test-badge">🧪 TEST MODE ACTIVE</span>}
      </h2>
      
      {creditLogs.length > 0 && (
        <div className="credit-logs">
          <h4>Recent Credits:</h4>
          <div className="logs-container">
            {creditLogs.slice(-5).reverse().map((log, index) => (
              <div key={index} className="log-entry">
                <span className="log-time">{log.timestamp.toLocaleTimeString()}</span>
                <span className="log-investment">{log.investment}</span>
                <span className="log-amount">+${log.amount.toFixed(6)}</span>
                <span className="log-total">Total: ${log.totalEarned.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {investments.length === 0 ? (
        <p>No active investments yet.</p>
      ) : (
        <>
          <div className="investments-container">
            {investments.map((investment) => {
              const daysCredited = investment.daysCredited || 0;
              const totalDuration = investment.duration || 0;
              const daysRemaining = Math.max(0, totalDuration - daysCredited);
              const isComplete = investment.isActive === false || daysCredited >= totalDuration;
              const totalInterestEarned = investment.totalInterestEarned || 0;
              const isTestPlan = investment.isTestPlan || false;
              
              return (
                <div key={investment.id} className={`investment-card ${isComplete ? 'completed-investment' : ''} ${isTestPlan ? 'test-investment' : ''}`}>
                  <div className="investment-header">
                    <h3>
                      {investment.plan || 'Investment'}
                      {isTestPlan && <span className="test-label">🧪 TEST</span>}
                    </h3>
                    <span className="investment-amount">${investment.amount?.toLocaleString() || 'N/A'}</span>
                  </div>
                  
                  <div className="investment-details">
                    <div className="investment-detail">
                      <span className="detail-label">Gold Allocation:</span>
                      <span className="detail-value">{investment.goldAmount?.toFixed(4) || 'N/A'}g</span>
                    </div>
                    
                    <div className="investment-detail">
                      <span className="detail-label">Profit Rate:</span>
                      <span className="detail-value">{investment.profitPercent || 'N/A'}</span>
                    </div>
                    
                    <div className="investment-detail">
                      <span className="detail-label">Duration:</span>
                      <span className="detail-value">{investment.duration || 'N/A'} {isTestPlan ? 'minutes' : 'days'}</span>
                    </div>
                    
                    <div className="investment-detail">
                      <span className="detail-label">Credited:</span>
                      <span className="detail-value">{daysCredited} / {totalDuration}</span>
                    </div>
                    
                    <div className="investment-detail">
                      <span className="detail-label">Remaining:</span>
                      <span className="detail-value">{daysRemaining}</span>
                    </div>
                    
                    <div className="investment-detail">
                      <span className="detail-label">Status:</span>
                      <span className={`detail-value ${isComplete ? 'status-completed' : 'status-active'}`}>
                        {getStatusText(investment)}
                      </span>
                    </div>
                    
                    <div className="investment-detail">
                      <span className="detail-label">Total Interest Earned:</span>
                      <span className="detail-value">${totalInterestEarned.toFixed(4)}</span>
                    </div>
                    
                    <div className="investment-detail">
                      <span className="detail-label">Last Credited:</span>
                      <span className="detail-value">{formatDate(investment.lastCreditedDate) || 'Not yet'}</span>
                    </div>
                  </div>
                  
                  {isTestPlan && !isComplete && (
                    <div className="test-indicator">
                      <span className="pulse-dot"></span>
                      Auto-crediting every minute...
                    </div>
                  )}
                  
                  {isComplete && (
                    <div className="completed-badge">
                      <FaCheckCircle /> Investment Complete
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {processing && (
            <div className="processing-indicator">
              Processing investment credits...
            </div>
          )}
          
          {/* Test Controls */}
          {testMode && (
            <div className="test-controls">
              <button 
                onClick={() => {
                  console.log('🧪 Manual credit trigger...');
                  processInvestmentInterest();
                }}
                className="btn-primary"
                disabled={processing}
              >
                🔄 Manually Trigger Credit
              </button>
              <button 
                onClick={() => {
                  setCreditLogs([]);
                  console.log('🧹 Credit logs cleared');
                }}
                className="btn-secondary"
              >
                Clear Logs
              </button>
            </div>
          )}
        </>
      )}
      
      <style>{`
        .test-badge {
          display: inline-block;
          background: #ff9800;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          margin-left: 12px;
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .test-investment {
          border: 2px solid #ff9800;
          background: linear-gradient(135deg, #fff8e1 0%, #ffffff 100%);
        }
        
        .test-label {
          display: inline-block;
          background: #ff9800;
          color: white;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 10px;
          margin-left: 8px;
        }
        
        .test-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: #fff3e0;
          border-radius: 8px;
          margin-top: 15px;
          font-size: 14px;
          color: #e65100;
        }
        
        .pulse-dot {
          display: inline-block;
          width: 10px;
          height: 10px;
          background: #4caf50;
          border-radius: 50%;
          animation: pulse-dot 1s ease-in-out infinite;
        }
        
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        
        .credit-logs {
          background: #f5f5f5;
          padding: 15px;
          border-radius: 12px;
          margin-bottom: 20px;
        }
        
        .credit-logs h4 {
          margin: 0 0 10px 0;
          color: #333;
          font-size: 14px;
        }
        
        .logs-container {
          max-height: 150px;
          overflow-y: auto;
        }
        
        .log-entry {
          display: flex;
          gap: 15px;
          padding: 6px 0;
          border-bottom: 1px solid #e0e0e0;
          font-size: 13px;
        }
        
        .log-time {
          color: #666;
          min-width: 80px;
        }
        
        .log-investment {
          flex: 1;
          color: #333;
        }
        
        .log-amount {
          color: #4caf50;
          font-weight: 600;
          min-width: 80px;
        }
        
        .log-total {
          color: #2196f3;
          min-width: 100px;
        }
        
        .test-controls {
          display: flex;
          gap: 10px;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #e0e0e0;
        }
      `}</style>
    </div>
  );
};

// Dashboard Main Component
const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [balance, setBalance] = useState(0);
  const [goldBalance, setGoldBalance] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [goldPrice, setGoldPrice] = useState(null);
  const [goldPriceError, setGoldPriceError] = useState(null);

  const fetchGoldPrice = async () => {
    try {
      const price = await fetchGoldPriceFromService();
      setGoldPrice(price);
      setGoldPriceError(null);
    } catch (err) {
      console.error("Error fetching gold price:", err);
      setGoldPriceError("Failed to fetch current gold price. Using default value.");
      setGoldPrice(null);
    }
  };

  useEffect(() => {
    fetchGoldPrice();
    
    const intervalId = setInterval(fetchGoldPrice, 12 * 60 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  // Function to process all investments on login
  const processAllInvestmentsOnLogin = async (uid) => {
    try {
      const today = new Date().toDateString();
      const lastProcessDate = localStorage.getItem(`lastCredit_${uid}`);
      
      if (lastProcessDate === today) {
        return;
      }

      const investmentsQuery = query(
        collection(db, "transactions"),
        where("userId", "==", uid),
        where("type", "==", "deposit"),
        where("status", "in", ["completed", "active"])
      );
      
      const querySnapshot = await getDocs(investmentsQuery);
      const activeInvestments = querySnapshot.docs.filter(doc => {
        const data = doc.data();
        return data.isActive !== false && (data.daysCredited || 0) < (data.duration || 0);
      });
      
      if (activeInvestments.length === 0) {
        localStorage.setItem(`lastCredit_${uid}`, today);
        return;
      }
      
      for (const doc of activeInvestments) {
        const investment = { id: doc.id, ...doc.data() };
        await processSingleInvestmentOnLogin(investment, uid);
      }
      
      localStorage.setItem(`lastCredit_${uid}`, today);
    } catch (err) {
      console.error("Error processing investments on login:", err);
    }
  };

  // Process a single investment on login
  const processSingleInvestmentOnLogin = async (investment, uid) => {
    try {
      const investmentRef = doc(db, "transactions", investment.id);
      
      await runTransaction(db, async (transaction) => {
        const investmentDoc = await transaction.get(investmentRef);
        
        if (!investmentDoc.exists()) {
          return;
        }
        
        const invData = investmentDoc.data();
        
        if (invData.isActive === false) {
          return;
        }
        
        const daysCredited = invData.daysCredited || 0;
        const totalDuration = invData.duration || 0;
        
        if (daysCredited >= totalDuration) {
          transaction.update(investmentRef, {
            isActive: false,
            status: "completed"
          });
          return;
        }
        
        const lastCreditedDate = invData.lastCreditedDate?.toDate() || invData.startDate?.toDate() || new Date();
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const lastDate = new Date(lastCreditedDate.getFullYear(), lastCreditedDate.getMonth(), lastCreditedDate.getDate());
        
        const elapsedDays = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));
        
        if (elapsedDays < 1) {
          return;
        }
        
        const remainingDays = totalDuration - daysCredited;
        const daysToCredit = Math.min(elapsedDays, remainingDays);
        
        if (daysToCredit <= 0) {
          return;
        }
        
        const profitPercent = parseFloat(invData.profitPercent) || 0;
        const amount = invData.amount || 0;
        const totalInterest = (amount * profitPercent) / 100;
        const dailyInterest = totalInterest / totalDuration;
        const earnings = dailyInterest * daysToCredit;
        
        const userRef = doc(db, "users", uid);
        const userDoc = await transaction.get(userRef);
        
        if (!userDoc.exists()) {
          return;
        }
        
        const currentBalance = userDoc.data().balance || 0;
        const currentGoldBalance = userDoc.data().goldBalance || 0;
        const goldPriceUsed = invData.goldPriceAtPurchase || goldPrice || 65;
        const goldEarnings = earnings / goldPriceUsed;
        
        transaction.update(userRef, {
          balance: currentBalance + earnings,
          goldBalance: currentGoldBalance + goldEarnings,
          lastInvestmentCredit: Timestamp.fromDate(today)
        });
        
        const newDaysCredited = daysCredited + daysToCredit;
        const isComplete = newDaysCredited >= totalDuration;
        
        transaction.update(investmentRef, {
          lastCreditedDate: Timestamp.fromDate(today),
          daysCredited: newDaysCredited,
          interestEarned: earnings,
          totalInterestEarned: (invData.totalInterestEarned || 0) + earnings,
          ...(isComplete && { isActive: false, status: "completed" })
        });
        
        const creditTransactionRef = doc(collection(db, "transactions"));
        transaction.set(creditTransactionRef, {
          userId: uid,
          type: "interest_credit",
          amount: earnings,
          goldAmount: goldEarnings,
          description: `Interest from ${invData.plan || 'Investment'} (${daysToCredit} days)`,
          investmentId: investment.id,
          status: "completed",
          timestamp: Timestamp.fromDate(today)
        });
      });
      
    } catch (err) {
      console.error(`Error processing investment ${investment.id} on login:`, err);
    }
  };

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (u) => {
      if (u) {
        setUser(u);
        const userRef = doc(db, "users", u.uid);
        const unsubscribeUser = onSnapshot(userRef, async (docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data();
            setUserData(data);
            setBalance(data.balance || 0);
            setGoldBalance(data.goldBalance || 0);
            setLoading(false);
            
            if (!data.lastInvestmentCredit || 
                new Date(data.lastInvestmentCredit.toDate()).toDateString() !== new Date().toDateString()) {
              await processAllInvestmentsOnLogin(u.uid);
            }
          } else {
            setError("User data not found.");
            setLoading(false);
          }
        }, (err) => {
          setError("Failed to load user data.");
          console.error(err);
          setLoading(false);
        });

        return () => unsubscribeUser();
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribeAuth();
  }, [navigate]);

  const updateBalance = (newBalance, newGoldBalance) => {
    setBalance(newBalance);
    setGoldBalance(newGoldBalance);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error.message);
      setError("Failed to logout. Please try again.");
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error || !user || !userData) {
    return <div className="error-message">{error || "Failed to load dashboard."}</div>;
  }

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="overview-container">
            <div className="card">
              <h3>Account Balance</h3>
              <p className="metric">${balance.toLocaleString()}</p>
              <p className="subtext">Available USD</p>
            </div>
            <div className="card">
              <h3>Gold Holdings</h3>
              <p className="metric">{goldBalance.toFixed(2)}g</p>
              <p className="subtext">Pure Gold</p>
            </div>
            <div className="card">
              <h3>Total Value</h3>
              <p className="metric">${(balance + (goldBalance * (goldPrice || 65))).toLocaleString()}</p>
              <p className="subtext">Based on current gold prices</p>
            </div>

            <div className="section-card">
              <h2 className="section-title">Recent Activity</h2>
              <ul className="activity-list">
                <li><FaCheckCircle className="activity-icon" /> Account created <span className="activity-time">1 week ago</span></li>
                {balance > 0 && (
                  <li><FaCheckCircle className="activity-icon" /> Deposit of ${balance.toLocaleString()} <span className="activity-time">Recently</span></li>
                )}
                {goldBalance > 0 && (
                  <li><FaCheckCircle className="activity-icon" /> Purchased {goldBalance.toFixed(2)}g of gold <span className="activity-time">Recently</span></li>
                )}
              </ul>
            </div>
          </div>
        );
      case "deposit":
        return <DepositSection user={user} updateBalance={updateBalance} goldPrice={goldPrice} />;
      case "withdraw":
        return <WithdrawSection user={user} balance={balance} goldBalance={goldBalance} updateBalance={updateBalance} goldPrice={goldPrice} />;
      case "history":
        return <HistorySection user={user} />;
      case "investments":
        return <InvestmentsSection user={user} updateBalance={updateBalance} goldPrice={goldPrice} />;
      case "referral":
        return <ReferralSection user={user} />;
      case "profile":
        return <ProfileSection user={user} />;
      case "settings":
        return <SettingsSection user={user} />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <ChatWindow user={user} />
      
      <div className={`sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <FaWallet size={24} className="sidebar-icon" />
          <h2 className="gold-text">MyWallet</h2>
        </div>
        <button className="mobile-close-btn" onClick={() => setMobileMenuOpen(false)}>
          <FaTimes />
        </button>
        <ul className="nav-list">
          <li
            className={`nav-item ${activeSection === "dashboard" ? 'nav-item-active' : ''}`}
            onClick={() => {
              setActiveSection("dashboard");
              setMobileMenuOpen(false);
            }}
          >
            <FaChartBar /> <span>Dashboard</span>
          </li>
          <li
            className={`nav-item ${activeSection === "deposit" ? 'nav-item-active' : ''}`}
            onClick={() => {
              setActiveSection("deposit");
              setMobileMenuOpen(false);
            }}
          >
            <FaPlusSquare /> <span>Buy Gold</span>
          </li>
          <li
            className={`nav-item ${activeSection === "withdraw" ? 'nav-item-active' : ''}`}
            onClick={() => {
              setActiveSection("withdraw");
              setMobileMenuOpen(false);
            }}
          >
            <FaMinusSquare /> <span>Withdraw</span>
          </li>
          <li
            className={`nav-item ${activeSection === "investments" ? 'nav-item-active' : ''}`}
            onClick={() => {
              setActiveSection("investments");
              setMobileMenuOpen(false);
            }}
          >
            <FaCoins /> <span>My Investments</span>
          </li>
          <li
            className={`nav-item ${activeSection === "history" ? 'nav-item-active' : ''}`}
            onClick={() => {
              setActiveSection("history");
              setMobileMenuOpen(false);
            }}
          >
            <FaHistory /> <span>History</span>
          </li>
          <li
            className={`nav-item ${activeSection === "referral" ? 'nav-item-active' : ''}`}
            onClick={() => {
              setActiveSection("referral");
              setMobileMenuOpen(false);
            }}
          >
            <FaUserPlus /> <span>Referral</span>
          </li>
          <li
            className={`nav-item ${activeSection === "profile" ? 'nav-item-active' : ''}`}
            onClick={() => {
              setActiveSection("profile");
              setMobileMenuOpen(false);
            }}
          >
            <FaUser /> <span>Profile</span>
          </li>
          <li
            className={`nav-item ${activeSection === "settings" ? 'nav-item-active' : ''}`}
            onClick={() => {
              setActiveSection("settings");
              setMobileMenuOpen(false);
            }}
          >
            <FaCog /> <span>Settings</span>
          </li>
        </ul>
        <div className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> <span>Logout</span>
        </div>
      </div>
      <div className="main-content">
        <div className="header">
          <div className="header-left">
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
              <FaBars />
            </button>
            <h1 className="title">
              {activeSection === "dashboard" ? "Dashboard" : 
              activeSection === "deposit" ? "Buy Gold" : 
              activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
            </h1>
          </div>
          <span className="user-info">
            Balance: <strong>${balance.toLocaleString()}</strong> | Gold: <strong>{goldBalance.toFixed(2)}g</strong>
            {goldPrice && <span className="gold-price-header"> | Gold Price: ${goldPrice.toFixed(2)}/g</span>}
            {goldPriceError && <span className="error-message" style={{marginLeft: '10px'}}>{goldPriceError}</span>}
          </span>
        </div>
        <div className="content-area">{renderContent()}</div>
      </div>

      <style>{`
        /* Dashboard Styles */
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
        }

        /* Sidebar */
        .sidebar {
          width: 280px;
          background: linear-gradient(180deg, #2c3e50 0%, #1a2530 100%);
          color: #ecf0f1;
          padding: 0;
          display: flex;
          flex-direction: column;
          box-shadow: 5px 0 15px rgba(0,0,0,0.1);
          position: relative;
          z-index: 100;
          overflow: hidden;
        }

        .sidebar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #FFD700, #DAA520, #B8860B);
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          padding: 25px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          background: rgba(0,0,0,0.1);
        }

        .sidebar-icon {
          margin-right: 12px;
          font-size: 24px;
          color: #FFD700;
        }

        .gold-text {
          font-size: 24px;
          font-weight: 700;
          background: linear-gradient(90deg, #FFD700, #DAA520, #FFD700);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: goldShimmer 3s ease infinite;
          letter-spacing: 0.5px;
        }

        @keyframes goldShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .nav-list {
          list-style: none;
          padding: 20px 0;
          margin: 0;
          flex: 1;
        }

        .nav-item {
          display: flex;
          align-items: center;
          padding: 14px 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 4px 10px;
          border-radius: 12px;
          position: relative;
          overflow: hidden;
        }

        .nav-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 3px;
          background: #FFD700;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nav-item:hover {
          background: rgba(255,255,255,0.05);
          transform: translateX(5px);
        }

        .nav-item:hover::before {
          opacity: 1;
        }

        .nav-item-active {
          background: linear-gradient(90deg, rgba(255,215,0,0.15) 0%, transparent 100%);
          color: #FFD700;
        }

        .nav-item-active::before {
          opacity: 1;
        }

        .nav-item svg {
          margin-right: 12px;
          font-size: 18px;
          min-width: 20px;
          transition: transform 0.3s ease;
        }

        .nav-item:hover svg {
          transform: scale(1.1);
        }

        .logout-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 20px;
          cursor: pointer;
          background: linear-gradient(90deg, #e74c3c 0%, #c0392b 100%);
          margin: 20px;
          border-radius: 12px;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);
        }

        .logout-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
        }

        .logout-btn svg {
          margin-right: 10px;
          font-size: 18px;
        }

        /* Mobile Menu */
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 24px;
          color: #2c3e50;
          cursor: pointer;
          margin-right: 15px;
          padding: 8px;
          border-radius: 8px;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          z-index: 1001;
        }

        .mobile-close-btn {
          display: none;
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          font-size: 24px;
          color: white;
          cursor: pointer;
          padding: 5px;
          border-radius: 50%;
          background: rgba(0,0,0,0.2);
        }

        /* Main Content */
        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 0;
          width: 100%;
          overflow: hidden;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 30px;
          background: white;
          box-shadow: 0 2px 15px rgba(0,0,0,0.08);
          position: sticky;
          top: 0;
          z-index: 90;
        }

        .header-left {
          display: flex;
          align-items: center;
        }

        .title {
          font-size: 28px;
          font-weight: 700;
          color: #2c3e50;
          margin: 0;
          background: linear-gradient(90deg, #2c3e50 0%, #4a6580 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .user-info {
          font-size: 14px;
          font-weight: 500;
          color: #7f8c8d;
          background: #f8f9fa;
          padding: 8px 16px;
          border-radius: 20px;
          border: 1px solid #e9ecef;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .gold-price-header {
          color: #D4AF37;
          font-weight: 600;
        }

        .content-area {
          flex: 1;
          padding: 30px;
          overflow-y: auto;
        }

        /* Cards and Layout */
        .overview-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          margin-bottom: 30px;
        }

        .card {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          padding: 25px;
          border-radius: 16px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          border: 1px solid rgba(255,255,255,0.5);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .metric {
          font-size: 32px;
          font-weight: 800;
          color: #0080ffff;
          margin: 15px 0;
          background: linear-gradient(90deg, #2c3e50 0%, #4a6580 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtext {
          color: #7f8c8d;
          font-size: 14px;
          font-weight: 500;
        }

        .section-card {
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 5px 25px rgba(0,0,0,0.06);
          margin-bottom: 30px;
          border: 1px solid #f1f3f4;
        }

        .section-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 25px;
          color: #2c3e50;
          position: relative;
          padding-bottom: 15px;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #FFD700, #DAA520);
          border-radius: 3px;
        }

        /* Gold Price Info */
        .gold-price-info {
          padding: 12px 16px;
          background: #f8f9fa;
          border-radius: 8px;
          margin-bottom: 20px;
          border: 1px solid #e9ecef;
          font-size: 16px;
          color: #2c3e50;
        }

        .gold-calculation {
          margin: 15px 0;
          padding: 12px;
          background: #f0f8ff;
          border-radius: 8px;
          border: 1px solid #cce5ff;
        }

        .gold-amount {
          font-size: 18px;
          font-weight: 700;
          color: #D4AF37;
          margin-top: 5px;
        }

        /* Profile Section */
        .profile-container {
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 5px 25px rgba(0,0,0,0.06);
        }

        .profile-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-bottom: 25px;
        }

        .profile-card {
          padding: 20px;
          background: #f8f9fa;
          border-radius: 12px;
          border-left: 4px solid #3498db;
        }

        .bio-card {
          padding: 20px;
          background: #f8f9fa;
          border-radius: 12px;
          border-left: 4px solid #27ae60;
          margin-bottom: 25px;
        }

        .wallet-info {
          padding: 25px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 16px;
          border: 1px solid #e9ecef;
        }

        .wallet-list {
          list-style: none;
          padding: 0;
          margin: 15px 0 0 0;
        }

        .wallet-list li {
          margin-bottom: 12px;
          padding: 12px;
          background: white;
          border-radius: 8px;
          border: 1px solid #e9ecef;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .link {
          color: #3498db;
          cursor: pointer;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .link:hover {
          color: #2980b9;
          text-decoration: underline;
        }

        /* Settings Section */
        .settings-container {
          display: grid;
          gap: 25px;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        }

        .settings-card {
          padding: 25px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          border: 1px solid #f1f3f4;
        }

        .setting-item {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        /* Buttons */
        .btn-primary {
          padding: 12px 24px;
          background: linear-gradient(90deg, #3498db 0%, #2980b9 100%);
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          font-size: 14px;
          box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
        }

        .btn-primary:disabled {
          background: #bdc3c7;
          cursor: not-allowed;
          box-shadow: none;
        }

        .btn-secondary {
          padding: 12px 24px;
          background: white;
          color: #2c3e50;
          border: 1px solid #bdc3c7;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          font-size: 14px;
        }

        .btn-secondary:hover {
          background: #f8f9fa;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        /* Messages */
        .success-message {
          color: #27ae60;
          display: flex;
          align-items: center;
          margin-top: 12px;
          padding: 10px 15px;
          background: #d4edda;
          border-radius: 8px;
          border: 1px solid #c3e6cb;
        }

        .error-message {
          color: #e74c3c;
          display: flex;
          align-items: center;
          margin-top: 12px;
          padding: 10px 15px;
          background: #f8d7da;
          border-radius: 8px;
          border: 1px solid #f5c6cb;
        }

        /* Gold Plans */
        .gold-plans-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-bottom: 30px;
        }

        .gold-plan-card {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          padding: 30px 25px;
          border-radius: 20px;
          box-shadow: 0 5px 25px rgba(0,0,0,0.08);
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .gold-plan-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #FFD700, #DAA520, #B8860B);
        }

        .gold-plan-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
          border-color: #FFD700;
        }

        .selected-plan {
          border-color: #D4AF37;
          background: linear-gradient(135deg, #FFF9C4 0%, #FFFDE7 100%);
          box-shadow: 0 8px 30px rgba(212, 175, 55, 0.2);
        }

        .plan-title {
          font-size: 20px;
          font-weight: 700;
          color: #D4AF37;
          margin: 15px 0;
        }

        .plan-price {
          font-size: 28px;
          font-weight: 800;
          color: #2c3e50;
          margin: 15px 0;
        }

        .plan-description {
          color: #7f8c8d;
          margin: 12px 0;
          line-height: 1.5;
        }

        /* Deposit Section */
        .deposit-address {
          padding: 20px;
          background: #f8f9fa;
          border-radius: 12px;
          border: 1px solid #e9ecef;
          margin: 20px 0;
          text-align: center;
          word-break: break-all;
          font-family: 'Courier New', monospace;
        }

        .deposit-address button {
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .receipt-container {
          background: #f8f9fa;
          padding: 25px;
          border-radius: 16px;
          margin: 25px 0;
          border: 1px solid #e9ecef;
        }

        .status-success {
          color: #27ae60;
          font-weight: 600;
        }

        /* Withdraw Section */
        .balance-info {
          margin-bottom: 25px;
          padding: 15px 20px;
          background: #f8f9fa;
          border-radius: 12px;
          border: 1px solid #e9ecef;
        }

        .withdraw-form {
          display: grid;
          gap: 20px;
          margin-bottom: 25px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-weight: 600;
          color: #2c3e50;
          font-size: 14px;
        }

        .form-group input, .form-group select {
          padding: 12px 16px;
          border-radius: 10px;
          border: 1px solid #ddd;
          font-size: 16px;
          transition: all 0.3s ease;
          background: white;
        }

        .form-group input:focus, .form-group select:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }

        .withdraw-conversion {
          font-size: 14px;
          color: #7f8c8d;
          margin-top: 5px;
        }

        .withdrawal-info {
          padding: 20px;
          background: #f8f9fa;
          border-radius: 12px;
          border: 1px solid #e9ecef;
        }

        .withdrawal-info ul {
          margin: 15px 0 0 0;
          padding-left: 20px;
        }

        .withdrawal-info li {
          margin-bottom: 8px;
          color: #7f8c8d;
        }

        /* History Section */
        .table-container {
          overflow-x: auto;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          margin-top: 20px;
        }

        .transactions-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background: white;
          border-radius: 12px;
          overflow: hidden;
        }

        .transactions-table th {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 16px;
          text-align: left;
          font-weight: 600;
          color: #2c3e50;
          border-bottom: 1px solid #e9ecef;
        }

        .transactions-table td {
          padding: 16px;
          border-bottom: 1px solid #f1f3f4;
          color: #2c3e50;
        }

        .transactions-table tr:last-child td {
          border-bottom: none;
        }

        .transactions-table tr:hover {
          background: #f8f9fa;
        }

        .icon-deposit {
          color: #27ae60;
          margin-right: 8px;
          font-size: 16px;
        }

        .icon-withdraw {
          color: #e74c3c;
          margin-right: 8px;
          font-size: 16px;
        }

        .status-indicator {
          display: inline-flex;
          align-items: center;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .status-pending {
          background: #FFF3CD;
          color: #856404;
        }

        .status-completed {
          background: #D4EDDA;
          color: #155724;
        }

        .status-processing {
          background: #CCE5FF;
          color: #004085;
        }

        .status-rejected {
          background: #F8D7DA;
          color: #721C24;
        }

        .next-payment {
          display: flex;
          align-items: center;
          color: #3498db;
          font-size: 14px;
        }

        /* Investments Section - Updated */
        .investments-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }

        .investment-card {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          padding: 25px;
          border-radius: 16px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          border: 1px solid rgba(255,255,255,0.5);
          transition: all 0.3s ease;
          position: relative;
        }

        .investment-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
        }

        .investment-card.completed-investment {
          opacity: 0.7;
          border-color: #27ae60;
        }

        .investment-card.completed-investment::after {
          content: '✓';
          position: absolute;
          top: -5px;
          right: -5px;
          background: #27ae60;
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }

        .investment-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e9ecef;
        }

        .investment-header h3 {
          margin: 0;
          color: #2c3e50;
          font-size: 18px;
        }

        .investment-amount {
          font-size: 20px;
          font-weight: 700;
          color: #27ae60;
        }

        .investment-details {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          margin-bottom: 20px;
        }

        .investment-detail {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .detail-label {
          font-weight: 600;
          color: #7f8c8d;
        }

        .detail-value {
          font-weight: 600;
          color: #2c3e50;
        }

        .detail-value.status-active {
          color: #27ae60;
        }

        .detail-value.status-completed {
          color: #3498db;
        }

        .completed-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: #27ae60;
          color: white;
          border-radius: 20px;
          font-weight: 600;
          font-size: 14px;
          margin-top: 15px;
        }

        .processing-indicator {
          text-align: center;
          padding: 20px;
          color: #3498db;
          font-weight: 600;
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Referral Section */
        .referral-container {
          padding: 25px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 16px;
          border: 1px dashed #bdc3c7;
          margin-top: 25px;
          text-align: center;
        }

        .referral-link {
          overflow-wrap: break-word;
          margin: 15px 0;
          color: #3498db;
          font-family: 'Courier New', monospace;
          padding: 12px;
          background: white;
          border-radius: 8px;
          border: 1px solid #e9ecef;
        }

        .referral-info {
          margin-top: 20px;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 12px;
          border: 1px solid #e9ecef;
        }

        .referral-info ul {
          margin: 15px 0 0 0;
          padding-left: 20px;
        }

        .referral-info li {
          margin-bottom: 8px;
          color: #7f8c8d;
        }

        /* Activity List */
        .activity-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .activity-list li {
          display: flex;
          align-items: center;
          padding: 15px 0;
          border-bottom: 1px solid #f1f3f4;
          transition: background 0.3s ease;
        }

        .activity-list li:hover {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 15px;
        }

        .activity-icon {
          margin-right: 12px;
          color: #27ae60;
          font-size: 16px;
        }

        .activity-time {
          font-size: 12px;
          color: #95a5a6;
          margin-left: auto;
          background: #f1f3f4;
          padding: 4px 8px;
          border-radius: 12px;
        }

        /* Loading */
        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 200px;
          font-size: 16px;
          color: #7f8c8d;
        }

        /* Chat Window Styles */
        .chat-button {
          position: fixed;
          bottom: 25px;
          right: 25px;
          background: linear-gradient(90deg, #3498db 0%, #2980b9 100%);
          color: white;
          padding: 15px 20px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
          z-index: 999;
          transition: all 0.3s ease;
        }

        .chat-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(52, 152, 219, 0.4);
        }

        .chat-button-hidden {
          display: none;
        }

        .chat-window {
          position: fixed;
          bottom: 25px;
          right: 25px;
          width: 350px;
          height: 450px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 5px 25px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          z-index: 1000;
          overflow: hidden;
        }

        .chat-header {
          padding: 15px 20px;
          background: linear-gradient(90deg, #2c3e50 0%, #4a6580 100%);
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chat-header h3 {
          margin: 0;
          font-size: 16px;
        }

        .chat-close-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chat-messages {
          flex: 1;
          padding: 15px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .chat-empty {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          text-align: center;
          color: #7f8c8d;
        }

        .message {
          display: flex;
          max-width: 80%;
        }

        .user-message {
          align-self: flex-end;
        }

        .admin-message {
          align-self: flex-start;
        }

        .message-content {
          padding: 10px 15px;
          border-radius: 18px;
          position: relative;
        }

        .user-message .message-content {
          background: #3498db;
          color: white;
          border-bottom-right-radius: 5px;
        }

        .admin-message .message-content {
          background: #f1f3f4;
          color: #2c3e50;
          border-bottom-left-radius: 5px;
        }

        .message-time {
          font-size: 10px;
          opacity: 0.8;
          display: block;
          margin-top: 5px;
        }

        .chat-input-form {
          padding: 15px;
          border-top: 1px solid #e9ecef;
        }

        .chat-error {
          color: #e74c3c;
          font-size: 12px;
          margin-bottom: 10px;
          text-align: center;
        }

        .chat-input-container {
          display: flex;
          gap: 10px;
        }

        .chat-input-container input {
          flex: 1;
          padding: 12px 15px;
          border-radius: 20px;
          border: 1px solid #ddd;
          outline: none;
        }

        .chat-input-container input:focus {
          border-color: #3498db;
        }

        .chat-send-btn {
          background: #3498db;
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .chat-send-btn:hover:not(:disabled) {
          background: #2980b9;
        }

        .chat-send-btn:disabled {
          background: #bdc3c7;
          cursor: not-allowed;
        }

        /* Responsive Styles */
        @media (max-width: 1200px) {
          .sidebar {
            width: 250px;
          }
          
          .content-area {
            padding: 25px;
          }
        }

        @media (max-width: 992px) {
          .sidebar {
            width: 220px;
          }
          
          .gold-text {
            font-size: 22px;
          }
          
          .title {
            font-size: 24px;
          }
          
          .overview-container {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .dashboard-container {
            position: relative;
          }
          
          .sidebar {
            position: fixed;
            left: -100%;
            top: 0;
            bottom: 0;
            width: 85%;
            max-width: 320px;
            z-index: 1000;
            transition: left 0.3s ease;
            box-shadow: 5px 0 25px rgba(0,0,0,0.2);
          }
          
          .sidebar.mobile-open {
            left: 0;
          }
          
          .mobile-menu-btn {
            display: block;
          }
          
          .mobile-close-btn {
            display: block;
          }
          
          .header {
            padding: 15px 20px;
          }
          
          .content-area {
            padding: 20px;
          }
          
          .overview-container {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .settings-container {
            grid-template-columns: 1fr;
          }
          
          .gold-plans-container {
            grid-template-columns: 1fr;
          }
          
          .investments-container {
            grid-template-columns: 1fr;
          }
          
          .profile-grid {
            grid-template-columns: 1fr;
          }
          
          .title {
            font-size: 22px;
          }
          
          .user-info {
            font-size: 13px;
            padding: 6px 12px;
          }
        }

        @media (max-width: 576px) {
          .header {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }
          
          .header-left {
            width: 100%;
          }
          
          .content-area {
            padding: 15px;
          }
          
          .card, .section-card, .profile-container, .settings-container {
            padding: 20px;
          }
          
          .metric {
            font-size: 28px;
          }
          
          .section-title {
            font-size: 20px;
          }
          
          .gold-plan-card {
            padding: 20px 15px;
          }
          
          .plan-title {
            font-size: 18px;
          }
          
          .plan-price {
            font-size: 24px;
          }
          
          .btn-primary, .btn-secondary {
            width: 100%;
            margin: 5px 0;
          }
          
          .transactions-table {
            font-size: 14px;
          }
          
          .transactions-table th,
          .transactions-table td {
            padding: 12px 8px;
          }
          
          .investment-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }

        /* Animation for page transitions */
        .content-area > * {
          animation: fadeIn 0.4s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Scrollbar styling */
        .content-area::-webkit-scrollbar {
          width: 8px;
        }

        .content-area::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }

        .content-area::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }

        .content-area::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;