import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppContext from "../helpers/AppContext";

const Login = () => {
  const { setIsLoggedIn, setContextValue } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    const searchParams = new URLSearchParams(location.search);
    const redirect = searchParams.get("redirect") || "/";
    // Vaša logika prihlasovania by mala byť tu
    // ...
    // Ak je prihlásenie úspešné, nastavte isLoggedIn na true
    setContextValue({
      id: 3,
      name: "Peter",
      role: "Admin",
      isLoggedIn: true,
      setIsLoggedIn: setIsLoggedIn
    });
    // Presmerujte na požadovanú stránku
    navigate(redirect);
  };

  return (
    <div>
      <h1>Prihlásiť sa</h1>
      <button onClick={handleLogin}>Prihlásiť sa</button>
    </div>
  );
};

export default Login;
