import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/Register/SignUp";
import CardDetails from "../components/Home/AdvertisementSection/CardDetails";
import { allProperties } from "../api/properties";

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
        path: "cardDetail/:id",
        element: <CardDetails></CardDetails>,
        loader: ({ params }) => fetch(`./advertisment.json/${params.id}`),
      },
    ],
  },
]);

export default router;
