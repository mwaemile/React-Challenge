import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Loading from "./components/Loading";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import PublicRoute from "./components/PublicRoute";
import Home from "./Pages/Home";


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
  <Routes>
  <Route path="/" element={<Home />} />

  <Route
    path="/login"
    element={
      <PublicRoute>
        <Login />
      </PublicRoute>
    }
  />

  <Route
    path="/register"
    element={
      <PublicRoute>
        <Register />
      </PublicRoute>
    }
  />

  <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />

  <Route path="*" element={<Navigate to="/" replace />} />
</Routes>
);
}