import Cards from "./Cards";
const PromotedLabel=(Cards)=>{
    return(props)=>{
        return(
            <div  className="  bg-neutral-200  ">

            
                 <label className="absolute bg-black text-white" >OPEN</label>
                 <Cards {...props}/>
            </div>
        )
    }
}
export default PromotedLabel;