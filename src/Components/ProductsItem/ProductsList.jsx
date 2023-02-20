import ProductsItem from "./ProductsItem";
import Card from "../../UI/BackgroundCard";
import useInterObserver from "../../hooks/useInterObserver";
import styles from "./ProductList.module.scss";
import Categories from "../../Components/Categories/Categories";
import { useActionData } from "react-router-dom";

const ProductsList = ({ products }) => {
  return (
    <Card className={styles.contentContainer}>
      <Categories />

      <Card className={styles.container}>
        {products.map((product) => (
          <ProductsItem
            key={product.id}
            id={product.id}
            src={product.mainPic}
            desc={product.desc}
            name={product.name}
            price={product.price}
          />
        ))}
      </Card>
    </Card>
  );
};

export default ProductsList;
