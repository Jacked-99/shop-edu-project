import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div style={{ display: "block", textAlign: "center" }}>
      <h1>An error had occured 😥</h1>
      <h2>Sometimes thibgs just go wrong</h2>
      <br></br>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorPage;
