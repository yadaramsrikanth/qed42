import {Link} from "react-router-dom"
import Header from "../Header"
import React from "react"

const Cart=()=><>
<Header/>
<div className="cart-container">

    
    <h1>Your Cart Is Empty</h1>
    <Link to="/products">
    <button className='home-page-button'>ShopNow</button>
    </Link>

</div>
</>

export default Cart