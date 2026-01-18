
import Cards from "./Cards" ;
import { useEffect, useState } from "react";
import PromotedLabel from "./PromotedLabel";
import op from "../../util/mocdata"



const Body=()=>{
   
    useEffect(()=>{
        fetchdata();
    },[]);

    const [dibya,setdibya]=useState([]);
    const [duplicatedibya,setduplicatedibya]=useState([]);
    const [search,setsearch]=useState("");
   

const fetchdata=async ()=>{
  try {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  console.log(json);
  setdibya(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  setduplicatedibya(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
} catch (error) {
  console.error("Failed to fetch restaurant data:", error);
  console.log("pls download corr extension and on it else api will not work")
  const json = op;
  console.log(json);
  setdibya(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  setduplicatedibya(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
 
}


};
  
const SetPromotedLabel=PromotedLabel(Cards);
        
    

    //  console.log("render");
    return (
<div id="body" className="min-h-screen pb-12">
    {/* Hero Section */}
    <div className="relative py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">
            Discover Delicious Food
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Order from the best restaurants near you
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <div className="relative flex-1 w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            <input 
              className="input-dark w-full pl-12 pr-4 py-3" 
              type="text" 
              placeholder="Search for restaurants or cuisines..." 
              value={search} 
              onChange={(e)=>{ setsearch(e.target.value); }}
            />
          </div>
          <button 
            className="btn-primary w-full sm:w-auto"
            onClick={()=>{
              const newvar=dibya.filter((val)=>{
                return val.info.name.toLowerCase().includes(search.toLowerCase());  
              })
              setduplicatedibya(newvar)
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
    
    {/* Restaurant Grid */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-white mb-6">Popular Restaurants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {
          duplicatedibya.map((a)=>(  
            a.info.isOpen==true 
              ? <SetPromotedLabel key={a.info.id} po={a} />
              : <Cards key={a.info.id} po={a} />
          ))
        }     
      </div>
      
      {duplicatedibya.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-xl">No restaurants found</p>
        </div>
      )}
    </div>
</div>
)}

export default Body;





