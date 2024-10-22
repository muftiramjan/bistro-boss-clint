import { createBrowserRouter, } from "react-router-dom";
import Main from "../Leyout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/order/Order";
import Login from "../pages/login/Login";
import PraivetRout from "../pages/PraivetRout/PraivetRout";
import Dashbort from "../pages/DashBort/Dashbort";
import Cart from "../pages/DashBort/Cart";
import AdminRout from "../pages/PraivetRout/AdminRout";
import ItemsAdd from "../pages/DashBort/ItemsAdd";
import Manageitems from "../pages/DashBort/Manageitems/Manageitems";
import UpdateItem from "../pages/DashBort/update/UpdateItem";
import AllUsers from "../pages/DashBort/Allusers/AllUsers";
import Signup from "../pages/signup/singUp";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singUp',
                element: <Signup></Signup>
            },
          
        ]
    },
    {
        path: "dashboard",
        element: <PraivetRout><Dashbort></Dashbort></PraivetRout>,
        children: [
            {
                path: "cart",
                element: <Cart></Cart>
            },
            // admin routs
            {
                path: "additem",
                element:<AdminRout> <ItemsAdd></ItemsAdd> </AdminRout>
            },
            {
                path: "manageitems",
                element:<AdminRout> <Manageitems></Manageitems> </AdminRout>
            },
            {
                path: "UpdateItem/:id",
                element:<AdminRout> <updateItem></updateItem> </AdminRout>,
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path: "AllUsers",
                element:<AdminRout><AllUsers></AllUsers></AdminRout> 
                
            }
        ]
    }
]);