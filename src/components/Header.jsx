
import {logo} from "../../util/constants";
import { Link } from "react-router-dom";
import userContext from "../../util/userContext";
import { useContext } from "react";
import { useSelector } from "react-redux";




const Header=()=>{
let {loggedInUser}=useContext(userContext);
const cartitems=useSelector((store)=>{
    
    return store.cart.items
})



return(
    <header className="sticky top-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover ring-2 ring-emerald-500/50" src={logo} alt="GoodFood"/>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-emerald-400 font-medium transition-colors duration-200 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-emerald-400 font-medium transition-colors duration-200 relative group">
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/Cart" className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full font-medium shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300">
              <span>🛒</span>
              <span>Cart ({cartitems.length})</span>
            </Link>
            <Link to="/Designer" className="text-gray-300 hover:text-emerald-400 font-medium transition-colors duration-200 relative group">
              Designer
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          
          {/* Mobile menu */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/Cart" className="flex items-center gap-1 bg-emerald-500 text-white px-3 py-1.5 rounded-full text-sm font-medium">
              🛒 {cartitems.length}
            </Link>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <nav className="md:hidden flex justify-center gap-6 pb-3 text-sm">
          <Link to="/" className="text-gray-300 hover:text-emerald-400">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-emerald-400">About</Link>
          <Link to="/Designer" className="text-gray-300 hover:text-emerald-400">Designer</Link>
        </nav>
      </div>
    </header>
)
};


    export default Header;