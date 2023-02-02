import ProductsList from "../../Components/ProductsItem/ProductsList";
import {
  useNavigation,
  Link,
  Outlet,
  json,
  useLoaderData,
} from "react-router-dom";
import styles from "./Products.module.scss";
import Spinner from "../../UI/Spinner";

const ProductsPage = () => {
  let planes = [];
  const data = useNavigation();
  const loaderData = useLoaderData();
  for (let key in loaderData) {
    planes.push(loaderData[key]);
  }

  return (
    <>
      {data.state === "loading" && <Spinner />}

      <ProductsList products={planes} />
    </>
  );
};

export default ProductsPage;

export const loader = async ({ request, params }) => {
  const response = await fetch(
    "https://sacred-dahlia-367713-default-rtdb.europe-west1.firebasedatabase.app/Products.json"
  );
  if (!response.ok) {
    throw json({ message: "ohno" }, { status: 500 });
  }
  const data = await response.json();
  return data;
};
