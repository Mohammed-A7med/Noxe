import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useToken } from "../store/Store";

export default function UseLogout() {
  const { setUserToken } = useToken();
  const navigate = useNavigate();

  const logout = useCallback(() => {
    localStorage.removeItem("userToken");
    setUserToken(null);
    navigate("/login");
  }, [navigate, setUserToken]);

  return logout;
}
