import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Usecart from "../../Hoks/usehoks/usecart/Usecart";
import Useadmin from "../../Hoks/usehoks/useadmin/Useadmin";


const Dashbort = () => {
    const [cart] =Usecart();
    const [isAdmin] = Useadmin();
    return (
        <div className="flex">
            <div className="w-64 h-screen bg-orange-400">
                <ul className="menu">
              {
                isAdmin ? <>
                  <li><NavLink to="/dashbort/AdminHome">
                        <FaHome></FaHome>
                        Admin Home</NavLink>
                    </li>

                    <li><NavLink to="/dashbort/additem">
                       <FaUtensils></FaUtensils>
                       add itemd</NavLink>
                    </li>
                  

                    <li><NavLink to="/dashbort/manageitems">
                        <FaList></FaList>
                        manage items </NavLink>
                        
                    </li>
                    <li><NavLink to="/dashbort/bookins">
                        <FaBook></FaBook>
                       manage bookins</NavLink>
                        
                    </li>
                    <li><NavLink to="/dashbort/allusers">
                        <FaUser></FaUser>
                       allusers</NavLink>
                        
                    </li>

                </>:
                 <>
                   <li><NavLink to="/dashbort/userHome">
                        <FaHome></FaHome>
                        user Home</NavLink>
                    </li>

                    <li><NavLink to="/dashbort/rezarvtion">
                       <FaCalendar></FaCalendar>
                        rezarvtion</NavLink>
                    </li>
                  

                    <li><NavLink to="/dashbort/cart">
                        <FaShoppingCart></FaShoppingCart>
                        my cart ({cart.length})</NavLink>
                        
                    </li>
                    <li><NavLink to="/dashbort/reviw">
                        <FaAd></FaAd>
                       Add a reviw</NavLink>
                        
                    </li>
                    <li><NavLink to="/dashbort/bokings">
                        <FaList></FaList>
                        my Bokings</NavLink>
                        
                    </li>

                 </>
              }
                    {/* shared nav links */}
                    <div className="divider"></div>
                     <li><NavLink to="/">
                        <FaHome></FaHome>
                        Home</NavLink>
                    </li>
                     <li><NavLink to="/order/salad">
                        <FaSearch></FaSearch>
                        Menu</NavLink>
                    </li>
                     <li><NavLink to="/order/contact">
                        <FaEnvelope></FaEnvelope>
                        contact</NavLink>
                    </li>

                </ul>

            </div>
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbort;