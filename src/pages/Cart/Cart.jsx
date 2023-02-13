import { useContext } from "react";
import Card from "../../UI/BackgroundCard";
import CartContext from "../../context/cartContext";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Cart.module.scss";
import CartItem from "../../Components/CartItem/CartItem";
import { Button } from "@mui/material";
import LoginContext from "../../context/loginContext";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const loginCtx = useContext(LoginContext);
  const navigate = useNavigate();
  const onClearCart = () => {
    cartCtx.clearCart();
  };
  const onfinalClick = () => {
    console.log(loginCtx.username);
    if (loginCtx.username === null) {
      navigate("/signup");
    }
  };

  return (
    <Card className={styles.wraper}>
      {cartCtx.items.length > 0 ? (
        <>
          <Button variant="contained" onClick={onClearCart}>
            Clear Cart
          </Button>
          <ul>
            {cartCtx.items.map((item) => {
              return (
                <CartItem
                  key={item.name}
                  name={item.name}
                  img={item.img}
                  quantity={item.quantity}
                  price={item.price}
                ></CartItem>
              );
            })}
          </ul>
          <Button
            variant="contained"
            style={{ fontSize: "1.2rem" }}
            size="large"
            onClick={onfinalClick}
          >
            Finalize purchase
          </Button>
        </>
      ) : (
        <>
          <h1>Your cart is empty </h1>
          <Link to={"/"}>Go to store and add something you like</Link>
        </>
      )}
    </Card>
  );
};

export default Cart;
