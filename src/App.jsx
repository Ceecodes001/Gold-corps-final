import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

import HEADER from "./components/homepage1/head/header";
import BODY from "./components/homepage1/body/body";
import BODYC from "./components/homepage1/body-content/body-content";
import STATS from "./components/homepage1/status/status";
import FOOTER from "./components/homepage1/footer/footer";
import DASHBOARD from "./components/profile/dashboard";
import LOGIN from "./components/homepage1/auth/login";
import SIGNUP from "./components/homepage1/auth/signup";
import STOCK from "./components/homepage1/stock/stock";
import PROFILE from "./components/profile/profile";
import NotFound from "./components/error/404";

import ADMIN from "./components/admin/admin";
import MESSAGE from "./components/admin/message";
import TRANSACTION from "./components/admin/transaction";
import ADMINAUTH from "./components/admin/adminauth";

function Home() {
  return (
    <>
      <HEADER />
      <BODY />
      <BODYC />
      <STATS />
      <FOOTER />
    </>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Track auth and fetch user data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const snap = await getDoc(doc(db, "users", firebaseUser.uid));
        const data = snap.exists() ? snap.data() : {};

        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          phoneNumber: data.phone?.trim() || "", // empty string if not set
        });
      } catch (err) {
        console.error("Error fetching user data:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div style={{ textAlign: "center", marginTop: 50 }}>Loading...</div>;

  // Protected route helper
  const ProtectedRoute = ({ children }) => {
    if (!user) return <Navigate to="/login" replace />;
    if (!user.phoneNumber) return <Navigate to="/profile" replace />;
    return children;
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LOGIN />} />
      <Route path="/signup" element={<SIGNUP />} />

      {/* DASHBOARD - only if user has phone */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DASHBOARD />
          </ProtectedRoute>
        }
      />

      {/* PROFILE - must be logged in */}
      <Route
        path="/profile"
        element={user ? <PROFILE user={user} setUser={setUser} /> : <Navigate to="/login" replace />}
      />

      {/* OTHER ROUTES */}
      <Route path="/messages" element={<MESSAGE />} />
      <Route path="/management" element={<TRANSACTION />} />
      <Route path="/stock" element={<STOCK />} />
      <Route path="/admin" element={<ADMIN />} />
      <Route path="/admin-login" element={<ADMINAUTH />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
