import MenuCardsHeading from "./MenuCardsHeading"

const CartMenu=({data1})=>{
    return(
      <div className="divide-y divide-gray-700/50">
        {
          data1.map((el, index)=>{
            return <MenuCardsHeading key={index} items={el} isCart={true}/>
          })
        }
      </div> 
    )
}
export default CartMenu;