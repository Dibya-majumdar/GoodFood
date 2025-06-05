
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
    <div  className=" h-24 flex justify-between bg-teal-200 text-black text-xl uppercase font-medium shadow-lg">
       <img className="w-28 " src={logo}></img>
       <div>
       <ul className="flex gap-[100px] mr-12 mt-8">
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about us</Link></li>
        <li><Link to="/Cart">cart-({cartitems.length})items</Link></li>
        <li><Link to="/Designer">Designer</Link></li>
       
       </ul>
       </div>
    </div>
)
};


    export default Header;