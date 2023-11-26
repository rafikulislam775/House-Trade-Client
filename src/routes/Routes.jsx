import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/Register/SignUp";
import CardDetails from "../components/Home/AdvertisementSection/CardDetails";
import { allProperties, property } from "../api/properties";
import UserDashboard from "../UserDashboard/UserDashboard";
import Wishlist from "../UserDashboard/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => allProperties(),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "properties/:id",
        element: <CardDetails></CardDetails>,
        loader: ({ params }) => property(params.id),
      },
    ],
  },
  {
    path: "userDashboard",
    element: <UserDashboard></UserDashboard>,
    children: [
      {
        path: "wishlist",
        element: <Wishlist></Wishlist>,
      },
    ],
  },
]);

export default router;
