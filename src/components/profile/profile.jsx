import React, { useEffect, useState, useRef } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";

// Icons (Inline SVGs to avoid installing external libraries)
const Icons = {
  User: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
  Phone: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path></svg>,
  Map: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  Calendar: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
  Briefcase: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"></path></svg>,
  Wallet: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 12V8H6a2 2 0 01-2-2 2 2 0 012-2h12v4"></path><path d="M4 6v12a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2H6.978"></path></svg>,
  Lock: () => <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0110 0v4"></path></svg>,
  Camera: () => <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
,Home: () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M3 9l9-7 9 7"></path>
    <path d="M9 22V12h6v10"></path>
  </svg>
)

};

const Profile = () => {
  const navigate = useNavigate();
  const hasCheckedInitialPhone = useRef(false);

  // State
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    location: "",
    dob: "",
    phone: "",
    gender: "",
    occupation: "",
    bio: "",
    btcWallet: "",
    ethWallet: "",
    usdtWallet: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [isMandatoryUpdate, setIsMandatoryUpdate] = useState(false);
  const [completion, setCompletion] = useState(0);

  // Calculate Profile Completion Percentage
  useEffect(() => {
    const totalFields = 8; // Excluding wallets
    let filled = 0;
    if (form.fullName) filled++;
    if (form.username) filled++;
    if (form.dob) filled++;
    if (form.phone) filled++;
    if (form.gender) filled++;
    if (form.location) filled++;
    if (form.occupation) filled++;
    if (form.bio) filled++;
    setCompletion(Math.round((filled / totalFields) * 100));
  }, [form]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setIsMounted(true);
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        navigate("/login");
        return;
      }

      // Only check Firestore once on initial load
      if (!hasCheckedInitialPhone.current) {
        try {
          const ref = doc(db, "users", u.uid);
          const snap = await getDoc(ref);
          
          if (snap.exists()) {
            const data = snap.data();
            // Check phone only once on initial load
            if (!data.phone?.trim()) {
              setIsMandatoryUpdate(true);
            }
            // No else case - don't set to false here to avoid race conditions

            const btcWallet = data.wallets ? data.wallets.find(w => w.type === 'btc')?.address || "" : "";
            const ethWallet = data.wallets ? data.wallets.find(w => w.type === 'eth')?.address || "" : "";
            const usdtWallet = data.wallets ? data.wallets.find(w => w.type === 'usdt')?.address || "" : "";

            setForm((prev) => ({ ...prev, ...data, btcWallet, ethWallet, usdtWallet }));
          } else {
            // New user - require phone
            setIsMandatoryUpdate(true);
          }
        } catch (e) {
          console.error("Error:", e);
          setError("Failed to load profile.");
        } finally {
          setLoading(false);
        }
        hasCheckedInitialPhone.current = true;
      }
    });
    return () => unsub();
  }, [navigate]);

  const isValid = () =>
    form.fullName.trim().length > 1 &&
    form.username.trim().length > 1 &&
    // Safer validation with optional chaining
    form.phone?.trim().length >= 10 &&
    form.dob;

  const handleSave = async (e) => {
    e.preventDefault();
    const currentUser = auth.currentUser;
    if (!currentUser) return;
    if (!isValid()) {
      setError("Please fill in all required fields.");
      return;
    }

    setSaving(true);
    setError("");
    setSuccess("");

    try {
      const ref = doc(db, "users", currentUser.uid);
      const wallets = [];
      if (form.btcWallet) wallets.push({ type: 'btc', address: form.btcWallet });
      if (form.ethWallet) wallets.push({ type: 'eth', address: form.ethWallet });
      if (form.usdtWallet) wallets.push({ type: 'usdt', address: form.usdtWallet });

      // Create data object with all form fields
      const dataToSave = {
        ...form,
        email: currentUser.email,
        wallets,
        updatedAt: serverTimestamp(),
      };
      
      // Remove temporary wallet keys before saving to Firestore
      delete dataToSave.btcWallet;
      delete dataToSave.ethWallet;
      delete dataToSave.usdtWallet;

      const existingData = await getDoc(ref);
      if (!existingData.exists() || !existingData.data()?.createdAt) {
        dataToSave.createdAt = serverTimestamp();
      }

      await setDoc(ref, dataToSave, { merge: true });
      setSuccess("Profile saved successfully!");
      
      // CRITICAL: Immediately update local state to reflect completion
      // This prevents any route protection from redirecting back to profile
      setIsMandatoryUpdate(false);
      
      // Navigate immediately without setTimeout
      navigate("/dashboard");
    } catch (e) {
      console.error(e);
      setError("Save failed. Try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="loader-container"><div className="spinner"></div></div>;

  return (
    <div className="profile-page">
      <div className={`profile-container ${isMounted ? 'mounted' : ''}`}>
        
        {/* --- Header Section --- */}
        <div className="profile-header">
            <div className="avatar-wrapper">
                <div className="avatar-circle">
                    <span className="avatar-initials">{form.fullName ? form.fullName.charAt(0) : "U"}</span>
                    <div className="avatar-overlay"><Icons.Camera /></div>
                </div>
            </div>
            <div className="header-text">
                <h1>{isMandatoryUpdate ? "Complete Your Profile" : "Edit Profile"}</h1>
                <p>Ensure your details and phone number are up to date.</p>
                
                {/* Completion Bar */}
                <div className="progress-container">
                    <div className="progress-label">
                        <span>Profile Completion</span>
                        <span>{completion}%</span>
                    </div>
                    <div className="progress-bar-bg">
                        <div className="progress-bar-fill" style={{ width: `${completion}%` }}></div>
                    </div>
                </div>
            </div>
        </div>

        <form onSubmit={handleSave}>
          <div className="form-layout">
            
            {/* --- Left Column: Identity --- */}
            <div className="column">
                <h3 className="section-title">Personal Details</h3>
                
                <div className="input-group">
                    <label>Full Name *</label>
                    <div className="input-wrapper">
                        <div className="icon"><Icons.User /></div>
                        <input name="fullName" type="text" value={form.fullName} onChange={handleChange} required placeholder="John Doe" />
                    </div>
                </div>

                <div className="input-group">
                    <label>Username *</label>
                    <div className="input-wrapper">
                        <div className="icon"><Icons.User /></div>
                        <input name="username" type="text" value={form.username} onChange={handleChange} required placeholder="@username" />
                    </div>
                </div>

                <div className="row">
                    <div className="input-group half">
                        <label>Date of Birth *</label>
                        <div className="input-wrapper">
                            <div className="icon"><Icons.Calendar /></div>
                            <input name="dob" type="date" value={form.dob} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="input-group half">
                        <label>Gender</label>
                        <div className="input-wrapper select-wrapper">
                            <select name="gender" value={form.gender} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div className="input-group">
                    <label>Bio</label>
                    <textarea name="bio" value={form.bio} onChange={handleChange} placeholder="Tell us a little about yourself..."></textarea>
                </div>
            </div>

            {/* --- Right Column: Contact & Crypto --- */}
            <div className="column">
                <h3 className="section-title">Contact Information</h3>
                
                {/* MANDATORY PHONE */}
                <div className={`input-group ${isMandatoryUpdate && !form.phone ? 'pulse-error' : ''}`}>
                    <label style={{color: isMandatoryUpdate && !form.phone ? '#e74c3c' : 'inherit'}}>
                        Phone Number * {isMandatoryUpdate && !form.phone && "(Required)"}
                    </label>
                    <div className="input-wrapper">
                        <div className="icon"><Icons.Phone /></div>
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="+1 234 567 8900" />
                    </div>
                </div>

                <div className="input-group">
                    <label>Location</label>
                    <div className="input-wrapper">
                        <div className="icon"><Icons.Map /></div>
                        <input name="location" type="text" value={form.location} onChange={handleChange} placeholder="City, Country" />
                    </div>
                </div>
                
                <div className="input-group">
                    <label>Occupation</label>
                    <div className="input-wrapper">
                        <div className="icon"><Icons.Briefcase /></div>
                        <input name="occupation" type="text" value={form.occupation} onChange={handleChange} placeholder="Job Title" />
                    </div>
                </div>

                {/* --- Wallet Card --- */}
                <div className="wallet-section">
                    <h3 className="section-title white">Wallet Addresses</h3>
                    <div className="wallet-input">
                        <span className="coin-badge btc">BTC</span>
                        <input name="btcWallet" placeholder="Bitcoin Address" value={form.btcWallet} onChange={handleChange} />
                    </div>
                    <div className="wallet-input">
                        <span className="coin-badge eth">ETH</span>
                        <input name="ethWallet" placeholder="Ethereum Address" value={form.ethWallet} onChange={handleChange} />
                    </div>
                    <div className="wallet-input">
                        <span className="coin-badge usdt">USDT</span>
                        <input name="usdtWallet" placeholder="Tether Address" value={form.usdtWallet} onChange={handleChange} />
                    </div>
                </div>
            </div>
          </div>

          {/* --- Messages & Actions --- */}
          {error && <div className="message error">{error}</div>}
          {success && <div className="message success">{success}</div>}

          <div className="action-bar">
            {!isMandatoryUpdate && (
                <button type="button" onClick={() => navigate("/dashboard")} className="btn-cancel">Cancel</button>
            )}
            <button type="submit" className="btn-save" disabled={saving || !isValid()}>
              {saving ? <span className="spinner-sm"></span> : (!isValid() && <Icons.Lock />)}
              <span>{saving ? "Saving..." : "Save Changes"}</span>
            </button>
        {!isMandatoryUpdate && (
  <button
    type="button"
    className="btn-dashboard"
    onClick={() => navigate("/dashboard")}
  >
    <Icons.Home />
    <span>Go to Dashboard</span>
  </button>
)}

          </div>
        </form>
      </div>

      <style jsx>{`
        /* --- General Layout --- */
        .profile-page {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #f0f2f5 0%, #cbd2d9 100%);
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            padding: 20px;
        }

        .profile-container {
            background: #ffffff;
            width: 100%;
            max-width: 900px;
            border-radius: 24px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.1);
            overflow: hidden;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .profile-container.mounted { opacity: 1; transform: translateY(0); }

        /* --- Header --- */
        .profile-header {
            background: #fff;
            padding: 30px 40px;
            border-bottom: 1px solid #edf2f7;
            display: flex;
            gap: 24px;
            align-items: center;
        }

        .avatar-circle {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: linear-gradient(135deg, #2c3e50, #4ca1af);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            cursor: pointer;
            overflow: hidden;
        }
        .avatar-initials { font-size: 32px; color: white; font-weight: bold; }
        .avatar-overlay {
            position: absolute; top:0; left:0; width:100%; height:100%;
            background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center;
            opacity: 0; transition: opacity 0.3s;
        }
        .avatar-circle:hover .avatar-overlay { opacity: 1; }

        .header-text h1 { margin: 0; font-size: 24px; color: #1a202c; }
        .header-text p { margin: 4px 0 12px; color: #718096; font-size: 14px; }

        /* --- Progress Bar --- */
        .progress-container { width: 100%; min-width: 250px; }
        .progress-label { display: flex; justify-content: space-between; font-size: 12px; font-weight: 600; color: #4a5568; margin-bottom: 4px; }
        .progress-bar-bg { width: 100%; height: 6px; background: #edf2f7; border-radius: 3px; overflow: hidden; }
        .progress-bar-fill { height: 100%; background: linear-gradient(90deg, #FFD700, #FDB931); transition: width 0.5s ease; }

        /* --- Form Grid --- */
        .form-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            padding: 40px;
        }
        .section-title { font-size: 14px; text-transform: uppercase; letter-spacing: 1.2px; color: #a0aec0; margin-bottom: 20px; font-weight: 700; border-bottom: 1px solid #edf2f7; padding-bottom: 10px; }
        .section-title.white { color: rgba(255,255,255,0.7); border-color: rgba(255,255,255,0.1); }

        /* --- Inputs --- */
        .input-group { margin-bottom: 20px; }
        .input-group label { display: block; font-size: 13px; font-weight: 600; color: #4a5568; margin-bottom: 6px; }
        .input-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            background: #f7fafc;
            border: 2px solid transparent;
            border-radius: 12px;
            transition: all 0.3s;
        }
        .input-wrapper:focus-within { background: #fff; border-color: #DAA520; box-shadow: 0 0 0 4px rgba(218, 165, 32, 0.1); }
        
        .icon { padding: 0 12px; color: #a0aec0; display: flex; align-items: center; }
        .input-wrapper input, .input-wrapper select {
            width: 100%; border: none; background: transparent; padding: 12px 12px 12px 0;
            font-size: 15px; color: #2d3748; outline: none;
        }
        textarea { width: 100%; padding: 12px; border-radius: 12px; border: 1px solid #e2e8f0; background: #f7fafc; resize: vertical; min-height: 80px; font-family: inherit; }
        textarea:focus { border-color: #DAA520; outline: none; background: #fff; }

        .row { display: flex; gap: 16px; }
        .half { flex: 1; }

        /* --- Wallet Section --- */
        .wallet-section {
            background: #1a202c;
            padding: 24px;
            border-radius: 16px;
            color: white;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        .wallet-input { display: flex; align-items: center; background: rgba(255,255,255,0.05); margin-bottom: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; transition: 0.3s; }
        .wallet-input:focus-within { border-color: #FFD700; background: rgba(255,255,255,0.1); }
        .coin-badge { font-size: 11px; font-weight: bold; padding: 8px 12px; min-width: 40px; text-align: center; color: #1a202c; }
        .btc { background: #f7931a; } .eth { background: #627eea; color: white; } .usdt { background: #26a17b; color: white; }
        .wallet-input input { flex: 1; background: transparent; border: none; padding: 10px; color: #fff; font-size: 13px; outline: none; }

        /* --- Pulse Animation for Error --- */
        .pulse-error .input-wrapper { border-color: #e53e3e; animation: pulse 2s infinite; }
        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(229, 62, 62, 0.4); } 70% { box-shadow: 0 0 0 10px rgba(229, 62, 62, 0); } 100% { box-shadow: 0 0 0 0 rgba(229, 62, 62, 0); } }

        /* --- Action Bar --- */
        .action-bar { padding: 30px 40px; background: #f8f9fa; border-top: 1px solid #edf2f7; display: flex; justify-content: flex-end; gap: 16px; }
        
        .btn-cancel { padding: 12px 24px; border: none; background: transparent; color: #718096; font-weight: 600; cursor: pointer; transition: 0.2s; }
        .btn-cancel:hover { color: #2d3748; background: #edf2f7; border-radius: 8px; }
        
        .btn-save {
            padding: 12px 32px; background: linear-gradient(135deg, #FFD700, #DAA520); color: #1a202c; border: none; border-radius: 8px;
            font-weight: 700; cursor: pointer; transition: all 0.3s; display: flex; align-items: center; gap: 8px;
            box-shadow: 0 4px 6px -1px rgba(218, 165, 32, 0.4);
        }
        .btn-save:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 15px -3px rgba(218, 165, 32, 0.5); }
        .btn-save:disabled { background: #cbd5e0; color: #718096; cursor: not-allowed; box-shadow: none; transform: none; }

        .message { padding: 12px; margin: 0 40px; text-align: center; border-radius: 8px; font-size: 14px; }
        .error { background: #fff5f5; color: #c53030; border: 1px solid #feb2b2; }
        .success { background: #f0fff4; color: #2f855a; border: 1px solid #9ae6b4; }

        .loader-container { height: 100vh; display: flex; justify-content: center; align-items: center; }
        .spinner { width: 40px; height: 40px; border: 4px solid #edf2f7; border-top-color: #DAA520; border-radius: 50%; animation: spin 1s linear infinite; }
        .spinner-sm { width: 16px; height: 16px; border: 2px solid rgba(0,0,0,0.1); border-top-color: #000; border-radius: 50%; animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* --- Responsive --- */
        @media (max-width: 768px) {
            .form-layout { grid-template-columns: 1fr; gap: 20px; padding: 20px; }
            .profile-header { flex-direction: column; text-align: center; }
            .progress-container { margin: 0 auto; }
            .action-bar { flex-direction: column-reverse; }
            .btn-save, .btn-cancel { width: 100%; justify-content: center; }
        }
            .btn-dashboard {
  padding: 12px 28px;
  background: #1a202c;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.btn-dashboard:hover {
  background: #2d3748;
  transform: translateY(-1px);
}

.btn-dashboard svg {
  stroke: white;
}

      `}</style>
    </div>
  );
};

export default Profile;