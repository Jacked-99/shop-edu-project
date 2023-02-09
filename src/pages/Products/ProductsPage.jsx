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
import { useContext, useEffect, useMemo } from "react";
import StoreContext from "../../context/storeContext";

const ProductsPage = () => {
  const storeCtx = useContext(StoreContext);
  let planes = [];
  const data = useNavigation();
  const loaderData = useLoaderData();
  for (let key in loaderData) {
    planes.push(loaderData[key]);
  }

  useEffect(() => {
    storeCtx.setItems({ type: "add", value: planes });
  }, []);
  return (
    <>
      {data.state === "loading" && <Spinner />}

      <ProductsList products={storeCtx.items} />
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

export const action = () => {};
