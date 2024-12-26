import React,{useContext} from "react"
import CartContext from "../../context/CartContext"
import CartListView from "../CartListView"
import "./index.css"

const CartItem=()=>{
    const {cartList}=useContext(CartContext)
    return <ul className="cart-items-container">
       {cartList.map((item)=>(
        <CartListView key={item.id} item={item}/>
       ))}
        </ul>
}

export default CartItem