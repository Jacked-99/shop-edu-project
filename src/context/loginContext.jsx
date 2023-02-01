import { createContext } from "react";

const LoginContext = createContext({
  username: "",
  login: () => {},
  logout: () => {},
});
export default LoginContext;
