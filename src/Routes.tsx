import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import Layout from "./App";
import Products from "./Products";
import Home from "./Home";
import Cart from "./Cart";

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
        element: <h1>Something is missing</h1>,
      },
    ],
  },
];

export default routes;
