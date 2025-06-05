import { useDispatch } from "react-redux";
import { innerLogo } from "../../util/constants";
import { additem } from "../../util/cartSlice"; 
const MenuCardsHeading=({items})=>{
    
console.log(items);
    const dispatch=useDispatch();


    return(
        <div className="flex justify-between  mb-4 border-b-4 h-full">
<div className="ml-8">
      <h1>{items.card.info.name}</h1>
      <h1 className="w-[500px]">{items.card.info.description}</h1>
      <h1 className="mt-2">₹{items.card.info.price/100 || items.card.info.defaultPrice/100}</h1>
      
      <h1 className="mt-2 mb-4">★{items.card.info.ratings.aggregatedRating.rating}({items.card.info.ratings.aggregatedRating.ratingCountV2 || "not given"})</h1>
     
      

</div>
<div className=" mr-8 rounded-md overflow-hidden">
    <img  className="rounded-md max-h-max w-80" src={innerLogo+items.card.info.imageId || null} onError={(e) => {
    e.target.style.display = 'none'; // Hide the image
  }}></img>
    <div className="relative  w-24 cursor-pointer bg-black rounded-lg overflow-hidden text-white h-7 left-5  pl-2" onClick={()=>{
        // console.log(items);
        dispatch(additem(items));
    }}>Buton+ </div>
   
</div>
</div>
    )
}
export default MenuCardsHeading;


export const MenuLongDiv=()=>{
    return(
         <div className="w-full bg-slate-200 h-4 mt-4 ">

        </div> 
    )
}
export const Menu=({data1})=>{
    return(
           <div>
                    {
                        data1.itemCards.map((el)=>{
                            // console.log(el)
                               return <MenuCardsHeading items={el}/>
                        })
                    }
           </div> 
    )
}


