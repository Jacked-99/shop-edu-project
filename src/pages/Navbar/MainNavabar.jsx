import { NavLink } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import styles from "./MainNavbar.module.scss";
import SearchBar from "../../Components/SearchBar/SearchBar";
import CartContext from "../../context/cartContext";
import { useContext, useState, useEffect } from "react";
import { easeIn, easeInOut, motion, useAnimationControls } from "framer-motion";
import LoginContext from "../../context/loginContext";
import LogoutUser from "../../Components/Logout/LogoutUser";

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

  if (playAnimation) {
    controls.start({
      scale: [1, 1.3, 1],
      rotate: [0, 25, -25, 0],
      transition: { duration: 0.5, ease: easeInOut },
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
                initial={{ scale: 1, backgroundColor: "transparent" }}
              >
                {cartContext.totalAmount > 0 ? cartContext.totalAmount : ""}
              </motion.span>
            </div>
          </NavLink>
        </li>
        <li>
          {LoginCtx.username !== null ? (
            <LogoutUser onClick={onLogout} />
          ) : (
            <NavLink to={"/signup"}>Login</NavLink>
          )}
        </li>
      </ul>
    </header>
  );
};

export default MainNav;
