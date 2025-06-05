
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useRestmenu } from "../../util/useRestmenu";
import { innerLogo } from "../../util/constants";
import Cordian from "./Cordian";




const Inner=()=>{

const {Id}=useParams();


   
    const Restmenu1=useRestmenu(Id);
    

    if(Restmenu1==null){
        return <h1>waiting</h1>;
    }else{
        // console.log(Restmenu1);
   const data=Restmenu1.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
   console.log(data);
 
    



    const categories= data.filter((el)=>{
           return el.card.card["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
      })
      
     
   

return (
    <div>
        {/* header */}
        
        {
            categories.map((el)=>{
                
                 return<Cordian data={el.card.card}/>
            })
        }
        

   

</div>
)
} 

    


   
    
    
    

}

export default Inner;




