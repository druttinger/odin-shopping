import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import Layout from "./App";
import Products from "./Products";
import Home from "./Home";
import Cart from "./Cart";
import Missing from "./Missing";

const routes = [
  {
    path: "/*",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <Profile />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <Missing />,
      },
    ],
  },
];

export default routes;
