
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
<div id="body">
    <div className=" flex ml-24 my-4 gap-[10px] mt-8">
       
         <input className="w-60 border border-black rounded-xl pl-4 " type="text" placeholder="Search Food" value={search} onChange={(e)=>{
                     setsearch(e.target.value);
         }}></input>
       
          <div className="bg-cyan-300 px-8 rounded-sm shadow-lg"     onClick={()=>{
            const newvar=dibya.filter((val)=>{
               return val.info.name.toLowerCase().includes(search.toLowerCase());  
            })
            setduplicatedibya(newvar)
            //  console.log(duplicatedibya[1]);
            }}    >search</div>
         
    </div>
    
    <div className="flex flex-wrap gap-[40px] ml-20 mt-24">
      
      {
        
        duplicatedibya.map((a)=>(  
            
                     a.info.isOpen==true ?<SetPromotedLabel key={a.info.id} po={a} />: <Cards key={a.info.id}po={a}  />
                     
                     

                                                                        
    
                      
))}     
</div>

</div>
)}

export default Body;





