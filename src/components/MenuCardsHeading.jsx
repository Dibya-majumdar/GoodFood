import { useDispatch } from "react-redux";
import { innerLogo } from "../../util/constants";
import { additem, removeitem } from "../../util/cartSlice"; 

const MenuCardsHeading=({items, isCart = false})=>{
    const dispatch=useDispatch();

    return(
      <div className="flex flex-col sm:flex-row gap-4 p-4 hover:bg-white/5 transition-colors duration-200">
        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start gap-2">
            <span className={`w-4 h-4 border-2 rounded-sm mt-1 flex-shrink-0 ${
              items.card.info.isVeg ? 'border-green-500' : 'border-red-500'
            }`}>
              <span className={`block w-2 h-2 rounded-full m-0.5 ${
                items.card.info.isVeg ? 'bg-green-500' : 'bg-red-500'
              }`}></span>
            </span>
            <div>
              <h3 className="text-white font-semibold text-lg">{items.card.info.name}</h3>
              <p className="text-emerald-400 font-bold mt-1">
                ₹{items.card.info.price/100 || items.card.info.defaultPrice/100}
              </p>
            </div>
          </div>
          
          {/* Rating */}
          {items.card.info.ratings?.aggregatedRating?.rating && (
            <div className="flex items-center gap-2 mt-2">
              <span className="flex items-center gap-1 bg-green-600 text-white text-xs px-2 py-0.5 rounded">
                <span>★</span>
                {items.card.info.ratings.aggregatedRating.rating}
              </span>
              <span className="text-gray-500 text-sm">
                ({items.card.info.ratings.aggregatedRating.ratingCountV2 || "No ratings"})
              </span>
            </div>
          )}
          
          {/* Description */}
          <p className="text-gray-400 text-sm mt-2 line-clamp-2">
            {items.card.info.description}
          </p>
        </div>
        
        {/* Image and Button */}
        <div className="relative flex-shrink-0 w-full sm:w-36">
          {items.card.info.imageId && (
            <img  
              className="w-full h-28 sm:w-36 sm:h-28 object-cover rounded-xl" 
              src={innerLogo+items.card.info.imageId} 
              alt={items.card.info.name}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          )}
          
          {/* Add/Remove Button */}
          {isCart ? (
            <button 
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-1.5 rounded-lg shadow-lg transition-all duration-300"
              onClick={() => dispatch(removeitem())}
            >
              Remove
            </button>
          ) : (
            <button 
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold px-6 py-1.5 rounded-lg shadow-lg shadow-emerald-500/30 transition-all duration-300"
              onClick={() => dispatch(additem(items))}
            >
              ADD +
            </button>
          )}
        </div>
      </div>
    )
}
export default MenuCardsHeading;


export const MenuLongDiv=()=>{
    return(
      <div className="w-full h-2 bg-gradient-to-r from-transparent via-gray-700 to-transparent my-2 rounded-full"></div>
    )
}

export const Menu=({data1})=>{
    return(
      <div className="space-y-2">
        {
          data1.itemCards.map((el, index)=>{
            return <MenuCardsHeading key={index} items={el}/>
          })
        }
      </div> 
    )
}


