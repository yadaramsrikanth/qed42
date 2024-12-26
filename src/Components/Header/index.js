import React,{useContext} from "react"
import {Link} from "react-router-dom"
import CartContext from "../../context/CartContext"
import "./index.css"

const Header=()=>{
    const {cartList}=useContext(CartContext)
    const cartlistlength=cartList.length
    return <nav className="nav-bar-container">
        <Link to="/" className='link-item'>
        <h1 className="e-commerce-heading-logo">E-COMMERCE</h1> </Link>
        <ul className="nav-menu">
        <Link to="/" className='link-item'>   <li className="nav-item">Home</li></Link> 
        <Link to="/products" className='link-item'><li className="nav-item">Products</li></Link> 
        <Link to='/cart' className='link-item'><li className="nav-item">Cart {cartlistlength===0?null:<span className="cart-items-count">{cartlistlength}</span>}</li></Link>
        </ul>
    </nav>
}

export default Header