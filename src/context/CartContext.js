import React from "react"

const CartContext=React.createContext({
    cartList:[],
    addcartItem:()=>{},
    incrementcartItemQuantity:()=>{},
    decrementcartItemQuantity:()=>{},
    removecartItem:()=>{}
})

export default CartContext