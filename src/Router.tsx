import { createBrowserRouter } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import Root from "./Root";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
