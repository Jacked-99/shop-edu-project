import ProductsItem from "./ProductsItem";
import Card from "../../UI/BackgroundCard";
import useInterObserver from "../../hooks/useInterObserver";
import styles from "./ProductList.module.scss";

const ProductsList = ({ products }) => {
  // loader fetches list from backend

  return (
    <Card>
      {products.map((product) => (
        <ProductsItem key={product.id} id={product.id} />
      ))}
    </Card>
  );
};

export default ProductsList;
