import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

const TokenContext = createContext(null);

export function TokenProvider({ children }) {
  const [userToken, setUserToken] = useState(() =>
    localStorage.getItem("userToken")
  );

  const saveUserToken = useCallback(() => {
    const token = localStorage.getItem("userToken");
    setUserToken(token);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveUserToken();
    }
  }, [saveUserToken]);

  return (
    <TokenContext.Provider value={{ userToken, setUserToken, saveUserToken }}>
      {children}
    </TokenContext.Provider>
  );
}

export function useToken() {
  return useContext(TokenContext);
}
