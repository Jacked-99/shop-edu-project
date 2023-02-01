import ProductsList from "../../Components/ProductsItem/ProductsList";
import { useNavigation, Link, Outlet } from "react-router-dom";
import styles from "./Products.module.scss";
import Spinner from "../../UI/Spinner";
const dummyProducts = [
  { id: "1", title: "Product" },
  { id: "2", title: "Product" },
  { id: "3", title: "Product" },
  { id: "4", title: "Product" },
  { id: "5", title: "Product" },
  { id: "6", title: "Product" },
  { id: "7", title: "Product" },
];
const ProductsPage = () => {
  const data = useNavigation();

  return (
    <>
      {data.state === "loading" && <Spinner />}
      <ProductsList products={dummyProducts} />
    </>
  );
};

export default ProductsPage;

export const loader = async ({ request, params }) => {};
