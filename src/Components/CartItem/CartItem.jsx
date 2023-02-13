import styles from "./CartItem.module.scss";
import { useContext } from "react";
import CartContext from "../../context/cartContext";
import { Button } from "@mui/material";
import { borderColor } from "@mui/system";

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
          <span>
            <Button
              style={{
                fontSize: "1.2rem",
                color: "#FFF",
                borderColor: "#fff",
                backgroundColor: "rgba(#FFF,0.4)",
              }}
              variant="outlined"
              onClick={onDecreaseClick}
            >
              —
            </Button>
            <span className={styles.quantity}>{quantity}</span>
            <Button
              style={{
                fontSize: "1.2rem",
                color: "#FFF",
                borderColor: "#fff",
                backgroundColor: "rgba(#023e8a,0.5)",
                marginRight: "0.5",
              }}
              variant="outlined"
              onClick={onIncreaseClick}
            >
              +
            </Button>
          </span>
          <h2>{quantity * price} zł</h2>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
