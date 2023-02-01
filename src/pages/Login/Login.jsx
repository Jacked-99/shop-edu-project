import { Form, json, Link, redirect, useActionData } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import { useState, useContext } from "react";
import { motion } from "framer-motion";
import CartContext from "../../context/cartContext";
import Card from "../../UI/BackgroundCard";
import styles from "./Login.module.scss";
import LoginContext from "../../context/loginContext";
import { useEffect } from "react";

const LoginPage = () => {
  const redirectFunc = () => {
    setTimeout(() => {
      redirect("/");
    }, 1000);
  };

  const action = useActionData();
  const loginCtx = useContext(LoginContext);
  if (action?.userName) {
    loginCtx.login(action.userName);
    redirectFunc();
  }
  return (
    <Card className={styles.container}>
      {action?.userName ? (
        <div>
          <DoneIcon />
          <p>Successfull login</p>

          <Link to={"/"}>Go to main page</Link>
        </div>
      ) : (
        <Form method="post">
          <div className={styles.inputContainer}>
            <input type="text" name="username" placeholder="Username" />
            {action?.userNameError && <p>{action.userNameError}</p>}
          </div>
          <div className={styles.inputContainer}>
            <input type="email" name="email" placeholder="E-mail" />
            {action?.emailError && <p>{action.emailError}</p>}
          </div>
          <div className={styles.inputContainer}>
            <input type="password" name="password" placeholder="Password" />
            {action?.passwordEemailError && <p>{action.passwordEemailError}</p>}
          </div>
          <button className={styles.button}>Login</button>
        </Form>
      )}
    </Card>
  );
};

export default LoginPage;
export const action = async ({ request, params }) => {
  const data = await request.formData();
  const userData = {
    userName: data.get("username"),
    email: data.get("email"),
    password: data.get("password"),
    isLoggedIn: true,
    cart: [],
  };
  const error = {};
  if (userData.userName.trim() === "") {
    error.userNameError = "Enter username";
  }
  if (userData.email.trim() === "" || userData.email.includes("@") === false) {
    error.emailError = "Wrong Login";
  }
  if (userData.password.trim().length < 6) {
    error.passwordError = "Password is to short";
  }
  const response = await fetch(
    "https://sacred-dahlia-367713-default-rtdb.europe-west1.firebasedatabase.app/Users.json",
    { method: request.method, body: JSON.stringify(userData) }
  );

  if (!response.ok) {
    throw json({ message: "ohno" });
  }
  if (Object.keys(error).length) {
    return error;
  }

  return userData;
};
