import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load user from backend or localStorage on mount
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        // Try to get user from backend (e.g., session/cookie based)
        const res = await fetch("/api/auth/me", {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        setUser(null);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    setIsAuthenticated(!!user);
  }, [user]);

  // Login function
  const login = async (credentials) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(credentials),
      });
      if (!res.ok) throw new Error("Login failed");
      const data = await res.json();
      setUser(data.user);
      // Optionally store in localStorage if needed
      localStorage.setItem("authUser", JSON.stringify(data.user));
    } catch (err) {
      setUser(null);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    setLoading(true);
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
      // Ignore errors on logout
    }
    setUser(null);
    localStorage.removeItem("authUser");
    setLoading(false);
  };

  // Register function
  const register = async (userInfo) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInfo),
      });
      if (!res.ok) throw new Error("Registration failed");
      const data = await res.json();
      setUser(data.user);
      localStorage.setItem("authUser", JSON.stringify(data.user));
    } catch (err) {
      setUser(null);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, isAuthenticated, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
