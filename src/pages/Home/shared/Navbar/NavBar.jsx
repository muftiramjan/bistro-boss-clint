import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../../authprovaider/Authprovaider";
import {FaShoppingCart} from 'react-icons/fa';
import Usecart from "../../../../Hoks/usehoks/usecart/Usecart";

const NavBar = () => {
  const { user, loguot } = useContext(Authcontext);
const [cart] =Usecart();
  const handelloguot = () => {
    loguot()
      .then(() => { })
      .catch(error => console.log(error))

  }



  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-black lg:max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li>
              <Link to="/menu"> Our menu</Link>
            </li>
            <li> <Link to="/order/salad">Order</Link></li>
            <li> <Link to="/secret">secret</Link></li>
            <li>
            <Link to='/dashbort/cart'>
              <button className="">
          <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">+{cart.length}</div>
              </button>
            </Link>
          </li>

            {
              user ? <>
                <li><button onClick={handelloguot} className="btn btn-ghost">loguot</button></li>
              </>
                : <>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/signup">signup</Link></li>
                </>
            }
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li> <Link to="/menu">Our menu</Link></li>
          <li><Link to="/order/salad">Order</Link></li>
          <li> <Link to="/secret">secret</Link></li>
          <li>
            <Link to='/dashbort/cart'>
              <button className="btn">
               <FaShoppingCart className="mr-2"></FaShoppingCart>
                <div className="badge badge-secondary">+{cart.length}</div>
              </button>
            </Link>
          </li>
          {
            user ? <>
              <li><button onClick={handelloguot} className="btn btn-ghost">loguot</button></li>
            </>
              : <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">signup</Link></li>
              </>
          }
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
