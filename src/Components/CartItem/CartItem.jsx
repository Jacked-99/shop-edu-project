import styles from "./CartItem.module.scss";
import { useContext } from "react";
import CartContext from "../../context/cartContext";

const CartItem = ({ name, img, price, quantity }) => {
  const cartCtx = useContext(CartContext);
  const onDecreaseClick = () => {
    cartCtx.removeItem({ id: name });
  };
  const onIncreaseClick = () => {
    cartCtx.addItem({
      name,
      img,
      quantity: 1,
      price,
    });
  };
  return (
    <div className={styles.cartItem}>
      <img src={img} className={styles.img}></img>
      <div>
        <h2>{name}</h2>
        <span>
          <button onClick={onDecreaseClick}>-</button>
          <span>{quantity}</span>
          <button onClick={onIncreaseClick}>+</button>
        </span>
        <h2>{quantity * price} zł</h2>
      </div>
    </div>
  );
};

export default CartItem;
