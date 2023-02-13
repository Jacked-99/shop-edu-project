import {
  Form,
  json,
  Link,
  useActionData,
  useFetcher,
  useNavigate,
} from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import { useState, useContext } from "react";
import Card from "../../UI/BackgroundCard";
import styles from "./Login.module.scss";
import LoginContext from "../../context/loginContext";
import { TextField } from "@mui/material";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupPage = () => {
  const action = useActionData();
  const navigate = useNavigate();
  const loginCtx = useContext(LoginContext);

  if (action?.userName) {
    loginCtx.login(action.userName);
    setTimeout(() => {
      navigate("/");
    }, 6000);
  }
  return (
    <Card className={styles.container}>
      {action?.userName ? (
        <div>
          <DoneIcon />
          <p>Successfully signed up</p>

          <Link to={"/"}>Go to main page</Link>
        </div>
      ) : (
        <Form method="post">
          {action?.msg && <p>Email already in use</p>}
          <div className={styles.inputContainer}>
            <TextField
              className={styles.input}
              variant="outlined"
              type="text"
              name="username"
              label="Username"
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <TextField
              className={styles.input}
              variant="outlined"
              type="email"
              name="email"
              label="E-mail"
              error={action?.msg && true}
              required
              helperText={action?.msg && "Email already in use"}
            />
          </div>
          <div className={styles.inputContainer}>
            <TextField
              className={styles.input}
              variant="outlined"
              type="password"
              name="password"
              label="Password"
              required
            />
          </div>
          <div>
            <Link to={"/login"} className={styles.link}>
              Already have an account?
            </Link>
            <button className={styles.button}>Sign up</button>
          </div>
        </Form>
      )}
    </Card>
  );
};

export default SignupPage;
export const action = async ({ request, params }) => {
  const data = await request.formData();
  const userData = {
    userName: data.get("username"),
  };
  let error = {};
  // if (userData.userName.trim() === "") {
  //   error.userNameError = "Enter username";
  // }
  // if (userData.email.trim() === "" || userData.email.includes("@") === false) {
  //   error.emailError = "Wrong Login";
  // }
  // if (userData.password.trim().length < 6) {
  //   error.passwordError = "Password is to short";
  // }
  await createUserWithEmailAndPassword(
    auth,
    data.get("email"),
    data.get("password")
  )
    .then((userCredntials) => {
      const user = userCredntials.user;
    })

    .catch((err) => (error.msg = err.message));

  if (Object.keys(error).length) {
    return error;
  }
  return userData;
};
