import MenuCardsHeading from "./MenuCardsHeading"

const CartMenu=({data1})=>{
    return(
        <div>
                 {
                     data1.map((el)=>{
                        //  console.log(el)
                            return <MenuCardsHeading items={el}/>
                     })
                 }
        </div> 
 )
}
export default CartMenu;