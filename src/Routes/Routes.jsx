import { createBrowserRouter } from "react-router";
import MianLayout from "../Layout/MianLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Loading from "../Pages/Loading";
import Login from "../Pages/Login";
import MyProfile from "../Pages/MyProfile";
import PlantDetails from "../Pages/PlantDetails";
import PlantsCategory from "../Pages/PlantsCategory";
import Register from "../Pages/Register";
import PrivetRoutes from "../Provider/PrivetRoutes";
import AllPlants from "../Pages/AllPlants";
import TopRatedPlants from "../Pages/TopRatedPlants";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MianLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("/Data/Plant.json"),
      },
      {
        path: "/plants",
        Component: PlantsCategory,
      },
      {
        path: "/myprofile",
        Component: MyProfile,
      },
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path:'/allplants',
        Component: AllPlants,
        loader:() => fetch('/Data/Plant.json'),
        hydrateFallbackElement:<Loading/>
      },
      // {
      //   path:'/topratedplants',
      //   Component:TopRatedPlants,
      //   loader:() => fetch('Data/Plant.json'),
      //   hydrateFallbackElement:<Loading/>
      // }
    ],
  },
  {
    path: "/plantdetails/:id",
    element: (
      <PrivetRoutes>
        <PlantDetails></PlantDetails>
      </PrivetRoutes>
    ),
    loader: () => fetch("/Data/Plant.json"),

  },

  {
    path: "/*",
    Component: Error,
  },
]);

export default router;
