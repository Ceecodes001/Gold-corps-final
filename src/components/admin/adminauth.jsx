// AdminLogin.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; // adjust path if needed
import { useNavigate } from "react-router-dom";
import { FaUserShield, FaLock } from "react-icons/fa";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      if (userCredential.user.email === "admin@goldcorps.org") {
        navigate("/admin");
      } else {
        setError("❌ Unauthorized: You are not the admin.");
      }
    } catch (err) {
      setError("⚠️ Login failed: " + err.message);
    }
  };

  return (
    <div className="admin-login-container">
      <form onSubmit={handleLogin} className="admin-login-form">
        <div className="form-header">
          <FaUserShield className="shield-icon" />
          <h2>Admin Access</h2>
        </div>

        {error && <div className="error-box">{error}</div>}

        <div className="input-group">
          <FaUserShield className="input-icon" />
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn">Login</button>
      </form>

      {/* --- CSS STYLES --- */}
      <style>{`
        .admin-login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #fff 0%, #fdfdfd 100%);
        }

        .admin-login-form {
          width: 380px;
          padding: 40px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 215, 0, 0.3);
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
          text-align: center;
          animation: fadeIn 1s ease forwards;
        }

        .form-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 25px;
        }

        .form-header h2 {
          font-size: 1.8rem;
          font-weight: 800;
          background: linear-gradient(90deg, #FFD700, #DAA520);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-top: 10px;
        }

        .shield-icon {
          font-size: 3rem;
          color: #FFD700;
          filter: drop-shadow(0 0 6px rgba(255,215,0,0.5));
        }

        .input-group {
          position: relative;
          margin-bottom: 20px;
        }

        .input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #DAA520;
          font-size: 1.2rem;
        }

        input {
          width: 100%;
          padding: 12px 12px 12px 40px;
          border-radius: 10px;
          border: 1px solid rgba(255, 215, 0, 0.3);
          background: rgba(255,255,255,0.08);
          color: #111;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        input:focus {
          outline: none;
          border-color: #FFD700;
          background: rgba(255,255,255,0.2);
          box-shadow: 0 0 10px rgba(255,215,0,0.3);
        }

        .login-btn {
          width: 100%;
          padding: 12px;
          margin-top: 10px;
          border: none;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1rem;
          background: linear-gradient(90deg, #FFD700, #DAA520);
          color: #111;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(255,215,0,0.35);
        }

        .login-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(255,215,0,0.5);
        }

        .error-box {
          margin-bottom: 15px;
          padding: 10px;
          border-radius: 8px;
          font-size: 0.9rem;
          background: rgba(255,0,0,0.1);
          color: #b71c1c;
          border: 1px solid rgba(255,0,0,0.2);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default AdminLogin;
