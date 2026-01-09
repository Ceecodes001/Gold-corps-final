import React, { useState } from 'react';
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from '../../../firebase.js';
import HEADER from '../head/header';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import './auth.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [resetMode, setResetMode] = useState(false);

  const navigate = useNavigate();

  const isProfileComplete = (data) => {
    return (
      data &&
      typeof data.fullName === "string" &&
      data.fullName.trim().length > 1 &&
      Array.isArray(data.wallets) &&
      data.wallets.length > 0
    );
  };

  const redirectAfterLogin = async (user) => {
    const userRef = doc(db, "users", user.uid);
    const snap = await getDoc(userRef);
    const data = snap.exists() ? snap.data() : {};

    if (isProfileComplete(data)) {
      navigate("/dashboard");
    } else {
      navigate("/profile");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      await redirectAfterLogin(cred.user);
    } catch {
      setError("Invalid email or password");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        await setDoc(ref, {
          fullName: user.displayName || "",
          email: user.email,
          createdAt: new Date(),
          wallets: []
        });
      }

      await redirectAfterLogin(user);
    } catch {
      setError("Google login failed");
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      setError("Enter your email first");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess("Password reset email sent");
    } catch {
      setError("Failed to send reset email");
    }
  };

  return (
    <div className="body">
      <HEADER />

      <div className="page">
        <h1 className="h1">{resetMode ? "Reset Password" : "Login"}</h1>

        <div className="auth-card">
          {!resetMode ? (
            <form onSubmit={handleLogin} className="login-form">
              <input
                className="input"
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="password-wrapper">
                <input
                  className="input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="eye"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <button className="btn btn1" type="submit">
                Login
              </button>

              <button
                type="button"
                className="google-btn"
                onClick={handleGoogleLogin}
              >
                <FcGoogle /> Continue with Google
              </button>

              <span
                className="forgot"
                onClick={() => setResetMode(true)}
              >
                Forgot password?
              </span>

              <p>
                Don’t have an account?{" "}
                <Link to="/signup" className="Login-txt">Signup</Link>
              </p>

              {error && <span className="error-text">{error}</span>}
            </form>
          ) : (
            <form onSubmit={handlePasswordReset} className="login-form">
              <input
                className="input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button className="btn btn1" type="submit">
                Send Reset Link
              </button>

              <span
                className="forgot"
                onClick={() => setResetMode(false)}
              >
                ← Back to login
              </span>

              {error && <span className="error-text">{error}</span>}
              {success && <span className="success-text">{success}</span>}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
