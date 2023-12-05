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
import ContactUs from "../components/Home/ContactUs/ContactUs";
import AdminDashboard from "../AdminDashboard/Admindashboard";
import AllUsers from "../AdminDashboard/AllUsers";
import Adviertisement from "../components/Home/AdvertisementSection/Adviertisement";
import PropertyBought from "../UserDashboard/PropertyBought";
import DashboardLayout from "../UserDashboard/DashboardLayout";
import UserProfile from "../UserDashboard/UserProfile";

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
        path: "allProperties",
        element: <Adviertisement></Adviertisement>,
        loader: () => allProperties(),
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "contactUs",
        element: <ContactUs></ContactUs>,
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
    // element: <UserDashboard></UserDashboard>,
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "myProfile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "propertyBought",
        element: <PropertyBought></PropertyBought>,
      },
    ],
  },
  //admin routes
  {
    path: "adminDashboard",
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;
