import Card from "../../UI/BackgroundCard";
import styles from "./ProductDetails.module.scss";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import CartContext from "../../context/cartContext";
import AddRemoveButtons from "../ChangeQuantity/AddRemoveButtons";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductDetails = ({ name, desc, img, price }) => {
  const [value, setValue] = useState(0);
  const cartCtx = useContext(CartContext);
  const onDecreaseClick = () => {
    if (value > 0) {
      setValue((prev) => prev - 1);
    } else {
      setValue(0);
    }
  };
  const onIncreaseClick = () => {
    setValue((prev) => prev + 1);
  };
  const handleAddtoCart = () => {
    cartCtx.addItem({
      name,
      img,
      quantity: value,
      price,
    });
  };
  return (
    <Card>
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.content}>
        <motion.img
          src={img}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeIn",
          }}
        ></motion.img>
        <motion.p
          initial={{ y: "-200%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: "easeIn",
          }}
        >
          {desc}
          <div className={styles.actions}>
            <AddRemoveButtons
              onDecreaseClick={onDecreaseClick}
              onIncreaseClick={onIncreaseClick}
              displayedValue={value}
            />
            <span className={styles.value}>{`${value * price} zł`}</span>
            <Button
              onClick={handleAddtoCart}
              className={styles.button}
              endIcon={<AddShoppingCartIcon />}
            >
              Add to cart
            </Button>
          </div>
        </motion.p>
      </div>
    </Card>
  );
};
export default ProductDetails;
