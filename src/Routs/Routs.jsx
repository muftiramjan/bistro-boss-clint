import { createBrowserRouter, } from "react-router-dom";
import Main from "../Leyout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/order/Order";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Secret from "../pages/Home/shared/Secret/Secret";
import PraivetRout from "../pages/PraivetRout/PraivetRout";
import Dashbort from "../pages/DashBort/Dashbort";
import Cart from "../pages/DashBort/Cart";
import AllUsers from "../pages/DashBort/Allusers/AllUsers";
import AdminRout from "../pages/PraivetRout/AdminRout";
import ItemsAdd from "../pages/DashBort/ItemsAdd";
import Manageitems from "../pages/DashBort/Manageitems/Manageitems";
import Updeteitem from "../pages/DashBort/updeteItem/Updeteitem";


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
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/secret',
                element: <PraivetRout><Secret></Secret></PraivetRout>
            }
        ]
    },
    {
        path: "dashbort",
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
                path: "updeteItem/:id",
                element:<AdminRout> <Updeteitem></Updeteitem> </AdminRout>,
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path: "allusers",
                element:<AdminRout> <AllUsers></AllUsers> </AdminRout>
            }
        ]
    }
]);