import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/Roots/Root";
import ProductsPage, {
  loader as productsLoader,
} from "./pages/Products/ProductsPage";
import ErrorPage from "./pages/Error/Error";
import LoginPage, { action as loginAction } from "./pages/Login/Login";
import ProductDetailPage from "./pages/Products/PrductDetail";
import StoreRoot from "./pages/Roots/StoreRoot";
import Cart from "./pages/Cart/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        {
          path: "/",
          element: <StoreRoot />,
          children: [
            {
              index: true,
              element: <ProductsPage />,
              loader: productsLoader,
            },
            { path: ":eventId", element: <ProductDetailPage /> },
          ],
        },
        { path: "cart", element: <Cart /> },
        { path: "login", element: <LoginPage />, action: loginAction },
      ],
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
// context for login and cart (possible redux?)
