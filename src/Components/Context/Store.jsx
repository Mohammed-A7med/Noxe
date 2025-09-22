import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const TokenContext = createContext(null);

export function TokenProvider({ children }) {
  const [userToken, setUserToken] = useState(() => localStorage.getItem("userToken"));
  const navigate = useNavigate();

  const saveUserToken = useCallback(() => {
    const token = localStorage.getItem("userToken");
    setUserToken(token);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveUserToken();
    }
  }, [saveUserToken]);

  const logout = useCallback(() => {
    localStorage.removeItem("userToken");
    setUserToken(null);
    navigate("/login");
  }, [navigate]);

  return (
    <TokenContext.Provider value={{ userToken, saveUserToken, logout }}>
      {children}
    </TokenContext.Provider>
  );
}

export function useToken() {
  return useContext(TokenContext);
}
