import { createBrowserRouter } from "react-router-dom";
import Root from "~/Root";
import Login from "@Pages/Login";
import Home from "@Pages/Home";
import NotFound from "@Pages/NotFound";
import SignUp from "~/Pages/SignUp";

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
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
