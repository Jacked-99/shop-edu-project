import { createContext, useState } from "react";
import LoginContext from "./loginContext";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";

const loginContextProvider = (props) => {
  const [userName, setUserName] = useState(null);
  const onLogin = (name) => {
    setUserName(name);
  };
  const onLogout = () => {
    setUserName(null);
    return async () => {
      await signOut(auth);
    };
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
