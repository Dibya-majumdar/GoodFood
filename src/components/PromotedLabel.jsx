import Cards from "./Cards";
const PromotedLabel=(Cards)=>{
    return(props)=>{
        return(
            <div className="relative">
              <div className="absolute top-5 left-3 z-10 flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                OPEN NOW
              </div>
              <Cards {...props}/>
            </div>
        )
    }
}
export default PromotedLabel;