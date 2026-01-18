
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useRestmenu } from "../../util/useRestmenu";
import { innerLogo } from "../../util/constants";
import Cordian from "./Cordian";




const Inner=()=>{

const {Id}=useParams();


   
    const Restmenu1=useRestmenu(Id);
    

    if(Restmenu1==null){
        return (
          <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-400 text-lg">Loading menu...</p>
          </div>
        );
    }else{
        // console.log(Restmenu1);
   const data=Restmenu1.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
 
    



    const categories= data.filter((el)=>{
           return el.card.card["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
      })
      
     
   

return (
    <div className="min-h-screen py-8">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto px-4 mb-8">
          <h1 className="text-3xl font-bold gradient-text text-center">Restaurant Menu</h1>
          <p className="text-gray-400 text-center mt-2">Select a category to view items</p>
        </div>
        
        {/* Categories */}
        <div className="space-y-4">
          {
            categories.map((el, index)=>{
              return <Cordian key={index} data={el.card.card}/>
            })
          }
        </div>
    </div>
)
} 

    


   
    
    
    

}

export default Inner;




