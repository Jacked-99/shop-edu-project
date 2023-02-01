import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import CartContextPrvider from "./context/cartContextProvider";
import LoginContextProvider from "./context/loginContextProvider";
import { MotionConfig } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <LoginContextProvider>
        <CartContextPrvider>
          <App />
        </CartContextPrvider>
      </LoginContextProvider>
    </MotionConfig>
  </React.StrictMode>
);
