import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";


export default function App() {
  const [loading, setLoading] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

 const [page, setPage] = useState<"login" | "register">("login");

  // Show loading screen for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Check if a user is already logged in
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");

    if (currentUser) {
      setIsLoggedIn(true);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!isLoggedIn) {
  if (page === "register") {
    return (
      <Register
        onRegister={() => setPage("login")}
        goToLogin={() => setPage("login")}
      />
    );
  }

  return (
    <Login
      onLogin={() => setIsLoggedIn(true)}
      goToRegister={() => setPage("register")}
    />
  );
}
  return (
    <Dashboard
      onLogout={() => setIsLoggedIn(false)}
    />
  );
}