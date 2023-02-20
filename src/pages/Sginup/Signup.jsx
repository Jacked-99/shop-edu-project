import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigate,
} from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import Card from "../../UI/BackgroundCard";
import styles from "./Signup.module.scss";
import { TextField } from "@mui/material";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import LoginContext from "../../context/loginContext";

const LoginPage = () => {
  const action = useActionData();
  const navigate = useNavigate();
  const loginCtx = useContext(LoginContext);
  if (action?.email) {
    const email = action.email;
    loginCtx.login(email);
    setTimeout(() => {
      navigate("/");
    }, 6000);
  }
  return (
    <Card className={styles.container}>
      <Form method="post">
        <div className={styles.inputContainer}>
          <TextField
            className={styles.input}
            variant="outlined"
            type="email"
            name="email"
            label="E-mail"
            error={action?.msg && true}
            required
            helperText={action?.msg && "Incorrect data"}
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
          <button className={styles.button}>Login</button>
        </div>
      </Form>
    </Card>
  );
};

export default LoginPage;
export const action = async ({ request, params }) => {
  let error = {};
  const data = await request.formData();
  const userData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  signInWithEmailAndPassword(auth, userData.email, userData.password)
    .then((userCredntials) => {
      const user = userCredntials.user;
    })

    .catch((err) => (error.msg = err.message));

  if (Object.keys(error).length) {
    return error;
  }

  return userData;
};
