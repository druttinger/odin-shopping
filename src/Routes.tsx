import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import App from "./App"

const routes = ([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    // path: "profile/:name",
    path: ":name",
    element: <Profile />,
  },
]);

export default routes;