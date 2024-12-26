import {Link} from "react-router-dom"
import Header from "../Header"
import React,{useContext} from "react"
import CartContext from "../../context/CartContext"
import CartItem from "../CartItem"
import CartSummary from "../CartSummary"

const Cart=()=>{

    const {cartList}=useContext(CartContext)
    const cartListLength=cartList.length===0
    console.log(cartList)
    return (<>
    <Header/>
    {cartListLength?<div className="cart-container">

    
<h1>Your Cart Is Empty</h1>
<Link to="/products">
<button className='home-page-button'>ShopNow</button>
</Link>

</div>:<CartItem />}
{cartListLength?null:<div><CartSummary/></div>}
    </>)
}



export default Cart