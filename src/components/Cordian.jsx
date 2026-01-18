import MenuCardsHeading from "./MenuCardsHeading";
import { MenuLongDiv,Menu } from "./MenuCardsHeading";
import { useState } from "react";

const Cordian=({data})=>{
const [accordian,setaccordian]=useState(false);

    return (
      <div className="w-full max-w-3xl mx-auto px-4 mb-4">
        {/* Accordion Header */}
        <div 
          className={`glass-effect rounded-xl overflow-hidden transition-all duration-300 ${
            accordian ? 'ring-2 ring-emerald-500/50' : 'hover:ring-1 hover:ring-gray-600'
          }`}
        >
          <div 
            className="flex items-center justify-between p-4 cursor-pointer select-none"
            onClick={()=>{ setaccordian(!accordian); }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🍽️</span>
              <div>
                <h3 className="font-bold text-lg text-white">{data.title}</h3>
                <p className="text-sm text-gray-400">{data.itemCards.length} items</p>
              </div>
            </div>
            <div className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-700/50 transition-transform duration-300 ${accordian ? 'rotate-180' : ''}`}>
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          {/* Accordion Content */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            accordian ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="border-t border-gray-700/50 p-4">
              <Menu data1={data}/>
            </div>
          </div>
        </div>
        
        {!accordian && <MenuLongDiv/>}
      </div>
    )
}
export default Cordian;