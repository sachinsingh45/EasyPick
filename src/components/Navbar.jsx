import {FaShoppingCart} from "react-icons/fa"
import { FaHome } from 'react-icons/fa';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div >
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/" className="flex items-center ml-5 text-white hover:text-gray-300 transition-colors duration-300">
        <img src="/logo.webp" alt="EasyPick Logo" className="h-14 w-auto mr-2 hidden md:block" />
        <span className="text-2xl font-bold">EasyPick</span>
        </NavLink>
          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
            <NavLink to="/">
              <FaHome className="text-2xl"/>
            </NavLink>

            <NavLink to="/cart">
              <div className="relative">
                  <FaShoppingCart className="text-2xl"/>
                  {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
                  
              </div>
            </NavLink>
            
          </div>
      </nav>
    </div>
  )
};

export default Navbar;
