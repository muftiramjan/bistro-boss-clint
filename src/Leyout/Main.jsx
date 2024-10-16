import { Outlet, useLocation } from "react-router-dom";
import Fotter from "../pages/Home/shared/footer/Fotter";
import NavBar from "../pages/Home/shared/Navbar/NavBar";


const Main = () => {
    const location = useLocation();
    const noHederFotter = location.pathname.includes('login') ||location.pathname.includes('signup')
    return (
        <div>
            {noHederFotter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHederFotter || <Fotter></Fotter>}
        </div>
    );
};

export default Main;