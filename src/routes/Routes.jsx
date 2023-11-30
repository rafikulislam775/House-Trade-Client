import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/Register/SignUp";
import CardDetails from "../components/Home/AdvertisementSection/CardDetails";
import { allProperties, property } from "../api/properties";
import UserDashboard from "../UserDashboard/UserDashboard";
import Wishlist from "../UserDashboard/Wishlist";
import Error from "../components/Home/Error";
import PrivateRoute from "./PrivateRoute";
import Review from "../UserDashboard/Review";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
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
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
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
