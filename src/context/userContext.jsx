import { createContext } from "react";
const userContext = createContext({
  username: "",
  isLoggedIn: true,
  onLogin: () => {},
  onLogout: () => {},
});
