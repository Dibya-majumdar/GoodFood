<!-- // op.map((a)=>(                                                                
//     <Cards po={a}  />
// ))

//       |
//       |
//       v

// In React, the difference between using curly braces {} and parentheses () in an arrow function is that:

// Parentheses () imply an implicit return—meaning the function will automatically return the JSX expression following the arrow =>.
// Curly braces {} require an explicit return statement if you want to return something from the function. -->

        
 <!-- <Cards po={op[0]}/> 
 <Cards po={op[1]}/>
<Cards po={op[2]}/>
<Cards po={op[3]}/>
<Cards po={op[4]}/>
<Cards po={op[5]}/>
<Cards po={op[6]}/>
<Cards po={op[7]}/>
<Cards po={op[8]}/>
<Cards po={op[9]}/>
<Cards po={op[10]}/> -->



<!-- for stooping build in terminal use ctrl+c -->


<!-- made by me for one selection for resturant cards menu (ex recommended component) -->
                 <!-- 
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useRestmenu } from "../../util/useRestmenu";
import { innerLogo } from "../../util/constants";
import { useHeadRestmenu } from "../../util/useHeadResturntmenu.JS";


const Inner=()=>{
const [Isopen,setIsOpen]=useState(false);
const {Id}=useParams();


   
    const Restmenu=useRestmenu(Id);
    const HeadRestmenu=useHeadRestmenu();
    

if(Restmenu==null){  
    <h1>loading...</h1>
}else{


return (
   
<div className="w-60 ">
    {/* {console.log(Restmenu[0].card.info)} */}
    {/* {console.log(HeadRestmenu.title)} */}
<div className="flex justify-between w-[560px] ml-[440px] bg-slate-200 mt-4 h-full ">
<h1 className="font-bold">{HeadRestmenu}</h1>
<h1 className="cursor-pointer" onClick={()=>{
setIsOpen(!Isopen);
}}
>🔽</h1>
</div>

   
    {


Isopen &&(
        Restmenu.map((el)=>{
     return <div className="flex w-[550px] justify-between mt-8 justify-self-center border-t-[1px] border-stone-950 ml-[1200px]">
    <div>
       <p className="font-bold">{el.card.info.name}</p>
       <p>₹{el.card.info.price/100 || el.card.info.defaultPrice/100}</p>
       <p className="pt-2">{el.card.info.description}</p>
       <p className="pt-4">★{el.card.info.ratings.aggregatedRating.rating+ " "+"("+el.card.info.ratings.aggregatedRating.ratingCountV2+")"}</p>
    </div>
       <img className="w-40"   src={innerLogo+el.card.info.imageId}></img>
        
      </div> 
     }))

    }
    
    
</div>
)
}
}
export default Inner; -->



<!--  -->



