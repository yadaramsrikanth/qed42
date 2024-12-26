import React, {useContext} from "react"
import CartContext from "../../context/CartContext"
import "./index.css"

const CartSummary=()=>{
    const {cartList}=useContext(CartContext)
    let total=0
    cartList.forEach((item)=>{
        total+=item.quantity*item.price
    })
    return <div className="cart-list-summary">
        
        <h1 className="order-details">Order total: <span className="total-amount">Rs {total} /-</span></h1>
        <p className="items-in-cart">{cartList.length} Items in cart</p>
        
    </div>
}

export default CartSummary