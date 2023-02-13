import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/Roots/Root";
import ProductsPage, {
  loader as productsLoader,
} from "./pages/Products/ProductsPage";
import ErrorPage from "./pages/Error/Error";
import SignupPage, { action as signUpAction } from "./pages/Login/Login";
import ProductDetailPage, {
  loader as productDetailsLoader,
} from "./pages/Products/PrductDetail";
import StoreRoot from "./pages/Roots/StoreRoot";
import Cart from "./pages/Cart/Cart";
import { action as productsAction } from "./pages/Products/ProductsPage";
import LoginPage, { action as loginAction } from "./pages/Sginup/Signup";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        {
          path: "/",
          element: <StoreRoot />,
          action: productsAction,
          children: [
            {
              index: true,
              element: <ProductsPage />,
              loader: productsLoader,

              id: "products",
            },
            {
              path: ":eventId",
              element: <ProductDetailPage />,
              loader: productDetailsLoader,
            },
          ],
        },
        { path: "cart", element: <Cart /> },
        { path: "login", element: <LoginPage />, action: loginAction },
        { path: "signup", element: <SignupPage />, action: signUpAction },
      ],
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
// context for login and cart (possible redux?)
