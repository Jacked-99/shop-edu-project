import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import CartContextPrvider from "./context/cartContextProvider";
import LoginContextProvider from "./context/loginContextProvider";
import { MotionConfig } from "framer-motion";
import StoreContextProvider from "./context/storeContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <LoginContextProvider>
        <StoreContextProvider>
          <CartContextPrvider>
            <App />
          </CartContextPrvider>
        </StoreContextProvider>
      </LoginContextProvider>
    </MotionConfig>
  </React.StrictMode>
);
