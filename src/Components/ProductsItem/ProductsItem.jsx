import Card from "../../UI/BackgroundCard";
import styles from "./ProductsItem.module.scss";
import { useContext, useRef } from "react";
import CartContext from "../../context/cartContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      initial={{ opacity: 0, x: "-100%" }}
      whileInView={{ opacity: 1, x: "0%" }}
      viewport={{ root: scrollRef }}
      transition={{ x: { duration: 0.7, ease: "easeIn" } }}
    >
      <Card className={`${styles.container} `} ref={scrollRef}>
        <img src={src} className={styles.img}></img>
        <div className={styles.itemInfo}>
          <h3>
            <Link to={`/${id}`}>{name}</Link>
          </h3>
          <p>{desc}</p>
        </div>
        <button onClick={handleClick} className={styles.button}>
          Add to cart
        </button>
      </Card>
    </motion.div>
  );
};
export default ProductsItem;
