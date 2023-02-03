import Card from "../../UI/BackgroundCard";
import styles from "./ProductDetails.module.scss";
import { motion } from "framer-motion";
const ProductDetails = ({ name, desc, img }) => {
  return (
    <Card>
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.content}>
        <motion.p
          initial={{ y: "-200%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: "easeIn",
          }}
        >
          {desc}
        </motion.p>
        <motion.img
          src={img}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeIn",
          }}
        ></motion.img>
      </div>
    </Card>
  );
};
export default ProductDetails;
