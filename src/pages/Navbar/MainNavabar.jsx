import { NavLink } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import styles from "./MainNavbar.module.scss";
import SearchBar from "../../Components/SearchBar/SearchBar";
import CartContext from "../../context/cartContext";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import LoginContext from "../../context/loginContext";

const MainNav = () => {
  const cartContext = useContext(CartContext);
  const LoginCtx = useContext(LoginContext);

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
              <span>
                <motion.div
                  animate={{ scale: [0, 1, 2, 1], x: [0, 100, 0] }}
                  transition={{ scale: 1000 }}
                >
                  {cartContext.totalAmount > 0 ? cartContext.totalAmount : ""}
                </motion.div>
              </span>
            </div>
          </NavLink>
        </li>
        <li>
          {LoginCtx.username !== null ? (
            <>
              <NavLink to={"/Login"}>Logout</NavLink>
              <p>{LoginCtx.username}</p>
            </>
          ) : (
            <NavLink to={"/Login"}>Login</NavLink>
          )}
        </li>
      </ul>
    </header>
  );
};

export default MainNav;
