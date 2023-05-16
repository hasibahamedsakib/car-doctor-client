import { Outlet, createBrowserRouter } from "react-router-dom";
import NavbarCompo from "../Components/Navbar/Navbar";
import Bookings from "../Layout/Bookings/Bookings";
import Checkout from "../Layout/Checkout/Checkout";
import Home from "../Layout/Home/Home/Home";
import Login from "../Layout/Login/Login";
import Main from "../Layout/Main/Main";
import Register from "../Layout/Register/Register";
import PrivetRoute from "./Privetroute";

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
        element: (
          <PrivetRoute>
            {" "}
            <Checkout />{" "}
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-green-five.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "bookings",
        element: (
          <PrivetRoute>
            <Bookings />,
          </PrivetRoute>
        ),
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
