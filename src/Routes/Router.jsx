import { Outlet, createBrowserRouter } from "react-router-dom";
import NavbarCompo from "../Components/Navbar/Navbar";
import Checkout from "../Layout/Checkout/Checkout";
import Home from "../Layout/Home/Home/Home";
import Login from "../Layout/Login/Login";
import Main from "../Layout/Main/Main";
import Register from "../Layout/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <>error is hear...</>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "checkout/:id",
        element: <Checkout />,
        loader: ({ params }) =>
          fetch(`http://localhost:3001/services/${params.id}`),
      },
    ],
  },
  {
    path: "user",
    element: (
      <>
        <NavbarCompo />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
