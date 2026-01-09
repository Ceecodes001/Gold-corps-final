import React, { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { auth, db } from '../../../firebase.js'
import HEADER from '../head/header'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from "react-router-dom"
import './auth.css'

const Signup = () => {
  const [mode, setMode] = useState('signup') // signup | reset
  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  const navigate = useNavigate()

  const resetMessages = () => {
    setError("")
    setMessage("")
  }

  // ===== SIGNUP =====
  const handleSignup = async (e) => {
    e.preventDefault()
    resetMessages()

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    try {
      setLoading(true)
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      await setDoc(doc(db, "users", user.uid), {
        fullName,
        email,
        createdAt: new Date(),
        wallets: []
      })

      sessionStorage.setItem("newSignup", "true")
      navigate("/profile")
    } catch (err) {
      console.error(err.message)
      setError("Signup failed. Try again.")
    } finally {
      setLoading(false)
    }
  }

  // ===== GOOGLE SIGNUP =====
  const handleGoogleSignup = async () => {
    resetMessages()
    try {
      setLoading(true)
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      await setDoc(
        doc(db, "users", user.uid),
        {
          fullName: user.displayName || "",
          email: user.email,
          createdAt: new Date(),
          wallets: []
        },
        { merge: true }
      )

      sessionStorage.setItem("newSignup", "true")
      navigate("/profile")
    } catch (err) {
      console.error(err.message)
      setError("Google signup failed. Try again.")
    } finally {
      setLoading(false)
    }
  }

  // ===== PASSWORD RESET =====
  const handlePasswordReset = async (e) => {
    e.preventDefault()
    resetMessages()

    if (!email) {
      setError("Enter your email address")
      return
    }

    try {
      setLoading(true)
      await sendPasswordResetEmail(auth, email)
      setMessage("Password reset link sent to your email ✔")
    } catch (err) {
      console.error(err.message)
      setError("Failed to send reset email")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="body">
      <HEADER />

      <div className="page">
        <form onSubmit={mode === 'signup' ? handleSignup : handlePasswordReset}>
          <h1 className="h1">
            {mode === 'signup' ? 'Create Account' : 'Reset Password'}
          </h1>

          <input
            className="input"
            type="email"
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />

          {mode === 'signup' && (
            <>
              <input
                className="input"
                type="text"
                placeholder="Full name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={loading}
              />

              <input
                className="input"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </>
          )}

          <button type="submit" className="btn btn1" disabled={loading}>
            {loading
              ? 'Processing...'
              : mode === 'signup'
              ? 'Sign Up'
              : 'Send Reset Link'}
          </button>

          {mode === 'signup' && (
            <button
              type="button"
              className="google-btn"
              onClick={handleGoogleSignup}
              disabled={loading}
            >
              <FcGoogle className="google-icon" />
              Continue with Google
            </button>
          )}

          {mode === 'signup' ? (
            <>
              <p>
                Already have an account?{" "}
                <Link to="/login" className="Login-txt">
                  Login
                </Link>
              </p>

              <p
                className="Login-txt"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  resetMessages()
                  setMode('reset')
                }}
              >
                Forgotten password?
              </p>
            </>
          ) : (
            <p
              className="Login-txt"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                resetMessages()
                setMode('signup')
              }}
            >
              ← Back to signup
            </p>
          )}

          {error && <span className="error-text">{error}</span>}
          {message && (
            <span style={{ color: '#2ecc71', textAlign: 'center' }}>
              {message}
            </span>
          )}
        </form>
      </div>
    </div>
  )
}

export default Signup
