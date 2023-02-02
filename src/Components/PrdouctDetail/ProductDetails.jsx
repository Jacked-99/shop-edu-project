import Card from "../../UI/BackgroundCard";

const ProductDetails = ({ name, desc, img }) => {
  return (
    <Card>
      <h1>{name}</h1>
      <div>
        <p>{desc}</p>
        <img src={img}></img>
      </div>
    </Card>
  );
};
export default ProductDetails;
