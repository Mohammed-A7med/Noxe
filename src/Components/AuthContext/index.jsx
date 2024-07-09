import React, { useContext, useEffect, useState, useMemo } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = React.createContext({
  currentUser: null,
  userLoginIn: false,
  loading: true,
  error: null,
  logout: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoginIn, setUserLoginIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unLoginIn = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setCurrentUser(user);
          setUserLoginIn(true);
        } else {
          setCurrentUser(null);
          setUserLoginIn(false);
        }
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );

    return unLoginIn;
  }, []);

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setCurrentUser(null);
      setUserLoginIn(false);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const value = useMemo(
    () => ({ currentUser, userLoginIn, loading, logout, error }),
    [currentUser, userLoginIn, loading, error]
  );

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
