import { createContext, useState } from "react";
import LoginContext from "./loginContext";

const loginContextProvider = (props) => {
  const [userName, setUserName] = useState(null);
  const onLogin = (name) => {
    setUserName(name);
  };
  const onLogout = () => {
    setUserName(null);
  };
  const newLoginContext = {
    username: userName,
    login: onLogin,
    logout: onLogout,
  };

  return (
    <LoginContext.Provider value={newLoginContext}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default loginContextProvider;
