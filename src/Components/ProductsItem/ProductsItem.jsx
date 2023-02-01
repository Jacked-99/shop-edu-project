import Card from "../../UI/BackgroundCard";
import styles from "./ProductsItem.module.scss";
import { useContext, useRef } from "react";
import CartContext from "../../context/cartContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductsItem = ({ id }) => {
  const cartContext = useContext(CartContext);
  const scrollRef = useRef(null);
  //add Inter sect observer
  const handleClick = () => {
    cartContext.addItem({
      img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Dummy Product",
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
        <img
          src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          className={styles.img}
        ></img>
        <div className={styles.itemInfo}>
          <h3>
            <Link to={id}>Dummy Product</Link>
          </h3>
          <p>Super juicy and delicious apple</p>
        </div>
        <button onClick={handleClick} className={styles.button}>
          Add to cart
        </button>
      </Card>
    </motion.div>
  );
};
export default ProductsItem;
