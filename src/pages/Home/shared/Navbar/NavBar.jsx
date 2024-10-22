import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../../../authprovaider/Authprovaider";
import { FaShoppingCart } from 'react-icons/fa';
import UseCart from "../../../../Hoks/usehoks/usecart/Usecart";
import { PuffLoader } from "react-spinners";

const NavBar = () => {
  const { user, logout } = useContext(Authcontext);
  const [cart] = UseCart();

  const handlelogout = () => {
    logout()
      .then(() => { })
      .catch(error => console.log(error))
  };

  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-white text-black font-bold lg:max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Our Menu</Link></li>
            <li><Link to="/order/salad">Order</Link></li>
            <li>
              <Link to='/dashbort/cart'>
                <button>
                  <FaShoppingCart></FaShoppingCart>
                  <div className="badge badge-secondary">+{cart.length}</div>
                </button>
              </Link>
            </li>
            {user ? (
              <li><button onClick={handlelogout} className="btn btn-ghost">Log out</button></li>
            ) : (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/singUp">Sign Up</Link></li>
              </>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Our Menu</Link></li>
          <li><Link to="/order/salad">Order</Link></li>
          <li>
            <Link to='/dashboard/cart'>
              <button className="btn">
                <FaShoppingCart className="mr-2"></FaShoppingCart>
                <div className="badge badge-secondary">+{cart.length}</div>
              </button>
            </Link>
          </li>
          {user ? (
            <li><button onClick={handlelogout} className="btn btn-ghost">Log out</button></li>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/singUp">Sign Up</Link></li>
            </>
          )}
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className='relative'>
            <div className='absolute -top-[13px] right-[10px]'>
              <PuffLoader color='blue' size={75}></PuffLoader>
            </div>
            <div className="avatar mr-6">
              <div title={user.displayName} className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img 
                  src={user.photoURL || 'https://via.placeholder.com/150'} 
                  alt="User Avatar"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }} 
                />
              </div>
            </div>
          </div>
        ) : (
          <NavLink to="/login">
            <button className="text-xl text-white relative px-5 py-2 font-semibold group">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-[#188d18] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-[#32CC32] group-hover:bg-[#188d18] group-hover:-skew-x-[18deg]"></span>
              <span className="flex items-center justify-center gap-2 relative">
                <span>Login</span>
              </span>
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
