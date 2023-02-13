import { NavLink } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import styles from "./MainNavbar.module.scss";
import SearchBar from "../../Components/SearchBar/SearchBar";
import CartContext from "../../context/cartContext";
import { useContext, useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import LoginContext from "../../context/loginContext";

const MainNav = () => {
  const controls = useAnimationControls();
  const [playAnimation, setPlayAnimation] = useState(false);
  const cartContext = useContext(CartContext);
  const LoginCtx = useContext(LoginContext);
  const onLogout = () => {
    LoginCtx.logout();
  };
  useEffect(() => {
    if ((cartContext.totalAmount = 0)) {
      return;
    }
    setPlayAnimation(true);
    const timeout = setTimeout(() => {
      setPlayAnimation(false);
    }, 500);

    return clearTimeout(timeout);
  }, [cartContext.totalAmount]);
  const bumping = {};
  if (playAnimation) {
    controls.start({
      scale: [1, 1.5, 1],
      rotate: [0, 45, 0],
      transition: { duration: 0.5 },
    });
  }
  return (
    <header>
      <ul className={styles.navContainer}>
        <li>
          <NavLink to={"/"}>
            <HomeRoundedIcon aria-label="Go to Home Page" aria-hidden={false} />
          </NavLink>
        </li>
        <SearchBar />
        <li>
          <NavLink to={"cart"}>
            <div className={styles.shoppingCart}>
              <ShoppingCartRoundedIcon
                aria-label="Open cart"
                aria-hidden={false}
              />

              <motion.span
                animate={controls}
                initial={{ scale: 1 }}
                transition={{
                  duration: 5,
                  delay: 0.3,
                  ease: [0.5, 0.71, 1, 1.5],
                }}
              >
                {cartContext.totalAmount > 0 ? cartContext.totalAmount : ""}
              </motion.span>
            </div>
          </NavLink>
        </li>
        <li>
          {LoginCtx.username !== null ? (
            <>
              <button onClick={onLogout}>Logout</button>
              <p>{LoginCtx.username}</p>
            </>
          ) : (
            <NavLink to={"/signup"}>Login</NavLink>
          )}
        </li>
      </ul>
    </header>
  );
};

export default MainNav;
