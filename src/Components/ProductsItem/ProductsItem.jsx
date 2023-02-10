import Card from "../../UI/BackgroundCard";
import styles from "./ProductsItem.module.scss";
import { useContext, useRef } from "react";
import CartContext from "../../context/cartContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductsItem = ({ id, src, desc, name }) => {
  const cartContext = useContext(CartContext);
  const scrollRef = useRef(null);
  //add Inter sect observer
  const handleClick = () => {
    cartContext.addItem({
      img: src,
      name: name,
      quantity: 1,
      price: 10,
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ root: scrollRef }}
      transition={{
        duration: 0.3,
        ease: "easeIn",
        delay: id * 0.1 < 2 ? id * 0.1 : 2,
      }}
    >
      <Card className={`${styles.container} `} ref={scrollRef}>
        <Link to={`/${id}`}>
          <img src={src} className={styles.img}></img>
        </Link>
        <div className={styles.itemInfo}>
          <h3>
            <Link to={`/${id}`}>{name}</Link>
          </h3>
        </div>
        <Button
          onClick={handleClick}
          className={styles.button}
          endIcon={<AddShoppingCartIcon />}
        >
          Add to cart
        </Button>
      </Card>
    </motion.div>
  );
};
export default ProductsItem;
