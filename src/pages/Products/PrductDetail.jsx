import { useLoaderData, useParams } from "react-router-dom";
import ProductDetails from "../../Components/PrdouctDetail/ProductDetails";

const ProductDetailPage = () => {
  const { desc, name, mainPic, price } = useLoaderData();
  return <ProductDetails name={name} desc={desc} img={mainPic} price={price} />;
};

export default ProductDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.eventId;
  const fetchedPlane = `/plane${id}`;
  const response = await fetch(
    `https://sacred-dahlia-367713-default-rtdb.europe-west1.firebasedatabase.app/Products${fetchedPlane}.json`
  );
  if (!response.ok) {
    throw json({ message: "ohno" }, { status: 500 });
  }
  const data = await response.json();
  return data;
};
