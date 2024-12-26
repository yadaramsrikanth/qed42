import CartContext from "../../context/CartContext"
import {BsPlusSquare, BsDashSquare} from "react-icons/bs";
import {AiFillCloseCircle} from 'react-icons/ai'
import React,{useContext} from "react"
import "./index.css"

const CartListView=(props)=>{
    const {incrementcartItemQuantity,decrementcartItemQuantity,removecartItem}=useContext(CartContext)
    const {item}=props
    const {image,title,quantity,price,id}=item
const onClickRemoveCartItem=()=>{
    removecartItem(id)
}
const onclickIncremntQuantity=()=>{
    incrementcartItemQuantity(id)
}
const onclickDecrementQuantity=()=>{
    decrementcartItemQuantity(id)
}


    return <li className="cart-item-list-itemss">
        <img src={image} alt={title}  className="cart-item-image"/>
        <div className="buttons-container">
        <button className="decrement-button" onClick={onclickDecrementQuantity}><BsDashSquare/></button>   
        <p>{quantity}</p>
        <button className="decrement-button" onClick={onclickIncremntQuantity}><BsPlusSquare/></button> 
        </div>
        <p className="total-price-cart">Rs {quantity*price} /-</p>
        <button type="button" className="delete-button" onClick={onClickRemoveCartItem}><AiFillCloseCircle/></button>
    </li>
}

export default CartListView