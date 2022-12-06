import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "@Pages/Login";
import Home from "@Pages/Home";
import NotFound from "@Pages/NotFound";

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
