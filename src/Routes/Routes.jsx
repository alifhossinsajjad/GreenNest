import { createBrowserRouter } from "react-router";
import MianLayout from "../Layout/MianLayout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import PlantsCategory from "../Pages/PlantsCategory";
import Login from "../Pages/Login";
import Register from "../Pages/Register";




const router = createBrowserRouter([
    {
        path: '/',
        Component: MianLayout,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
                loader: () => fetch('/Data/Plant.json')

            },
            {
                path: '/plants',
                Component: PlantsCategory,
                loader: () => fetch('/Data/Plant.json')
            },
            {
                path: '/auth/login',
                Component: Login,
            },
            {
                path: '/auth/register',
                Component: Register,
            }
        
        ]
    },
    // {
    //     path: '/auth',
    //     Component: MianLayout,
    //     children: [
            
    // },

    {
        path: '/*',
        Component: Error
    }
])

export default router;