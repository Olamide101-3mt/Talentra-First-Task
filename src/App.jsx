import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
// Import exact filename (include extension) to avoid case-sensitivity issues on Linux/Vercel
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar";

import Dashboard from "./routes/Mainpage";
import Transactions from "./routes/Transactions";
import Invoices from "./routes/Invoices";
import Wallets from "./routes/Wallets";
import Settings from "./routes/Settings";
import Help from "./routes/Help";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const user = useAuthStore((s) => s.user);
  const fetchCurrentUser = useAuthStore((s) => s.fetchCurrentUser);

  React.useEffect(() => {
    fetchCurrentUser()
      .finally(() => setIsLoading(false));
  }, []);

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  // Redirect to signin if not authenticated
  if (!user && (window.location.pathname !== '/signin' && window.location.pathname !== '/signup')) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <div className="min-h-screen flex">
      {user && <Sidebar />}
      <div className="flex-1">
        {user && <Topbar />}
        <main className={user ? "p-6 lg:p-10" : ""}>
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/transactions" element={<PrivateRoute><Transactions /></PrivateRoute>} />
            <Route path="/invoices" element={<PrivateRoute><Invoices /></PrivateRoute>} />
            <Route path="/wallets" element={<PrivateRoute><Wallets /></PrivateRoute>} />
            <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
            <Route path="/help" element={<PrivateRoute><Help /></PrivateRoute>} />

            <Route path="*" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          </Routes>
          
        </main>
      </div>
    </div>
  );
}
