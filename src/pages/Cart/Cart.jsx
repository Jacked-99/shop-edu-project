import { useContext } from "react";
import Card from "../../UI/BackgroundCard";
import CartContext from "../../context/cartContext";
import { Link, redirect } from "react-router-dom";
import styles from "./Cart.module.scss";
import CartItem from "../../Components/CartItem/CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const onClearCart = () => {
    cartCtx.clearCart();
  };

  return (
    <Card className={styles.wraper}>
      {cartCtx.items.length > 0 ? (
        <>
          <button onClick={onClearCart}>Clear Cart</button>
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
