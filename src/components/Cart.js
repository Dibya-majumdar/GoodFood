import { useDispatch, useSelector } from "react-redux";
import CartMenu from "./CartMenu";
import appStore from "../../util/appStore";


let Cart=()=>{
    
    const cartCards=useSelector((store)=>store.cart.items);
    // console.log(cartCards)
    // console.log(appStore.cart.items)

    return (
        <div id="Contact_div" className="">
            <div className="text-center text-xl">cart </div>
            {/* {appStore.cart.items.length==0?<h1>add something</h1>: <div className="mx-64 h-10 mt-10 "> <CartMenu   data1={cartCards}/></div>} */}
               
            <div className="mx-64   "> <CartMenu   data1={cartCards}/></div>
                

        </div>
    )
}

export default Cart;