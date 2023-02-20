import styles from "./CartItem.module.scss";
import { useContext } from "react";
import CartContext from "../../context/cartContext";
import { Button } from "@mui/material";
import { borderColor } from "@mui/system";
import AddRemoveButtons from "../ChangeQuantity/AddRemoveButtons";

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
      <div className={styles.mainInfo}>
        <h2>{name}</h2>
        <div className={styles.info}>
          <AddRemoveButtons
            onDecreaseClick={onDecreaseClick}
            onIncreaseClick={onIncreaseClick}
            displayedValue={quantity}
          />

          <h2>{quantity * price} zł</h2>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
