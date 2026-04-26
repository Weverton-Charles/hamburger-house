import { createHashRouter } from "react-router";
import { Layout } from "../layout/Layout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/Home";
import NotFound404 from "../pages/common/not_found/NotFound404";

export const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },
  // catch-all route
  {
    path: "*",
    element: <NotFound404 />,
  },
]);
