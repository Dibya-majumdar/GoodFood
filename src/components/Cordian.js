import MenuCardsHeading from "./MenuCardsHeading";
import { MenuLongDiv,Menu } from "./MenuCardsHeading";
import { useState } from "react";
const Cordian=({data})=>{
console.log(data);
const [accordian,setaccordian]=useState(false);





    return (


        // <div className=" bg-slate-50">
        <div className="w-[700px] ml-[590px]  mt-4 mb-4">
            {/* <div>{console.log(data)}</div> */}
                <div className=" flex  justify-between w-full pt-4   " onClick={()=>{
                          
                            setaccordian(!accordian);
                        }}  >
                        <p className="font-bold text-lg ml-4 cursor-pointer">{data.title}({data.itemCards.length})</p>
                        <p className="cursor-pointer" >🔽</p>
                 
                   </div>

                   {accordian?<Menu  data1={data}/>:<MenuLongDiv/>}
                 
                 
        </div>
        
    )
}
export default Cordian;