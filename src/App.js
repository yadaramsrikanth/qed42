import React,{useState} from "react"
import {Switch,Route,BrowserRouter} from "react-router-dom"
import Home from './Components/Home/index'
import Products  from "./Components/Products/index"
import ProductDetails from "./Components/ProductDetails/index"
import Cart from "./Components/Cart/index"
import CartContext from "./context/CartContext"

const App=()=>{
  const [cartList,setCartList]=useState([])

const addcartItem=(product)=>{
  const productObject=cartList.find((eachCartItem)=>eachCartItem.id===product.id)
  if(productObject){
    setCartList((cartList)=>cartList.map((eachCartItem)=>{
      if(eachCartItem.id===productObject.id){
        const updatedQuantity=eachCartItem.quantity+product.quantity
        return {...eachCartItem,quantity:updatedQuantity}
      }else{
        return eachCartItem
      }
    }))
  }else{
    const updatedList=[...cartList,product]
    setCartList(updatedList)
  }
console.log(cartList)
}
const incrementcartItemQuantity=(id)=>{
  
    setCartList((cartList)=>cartList.map((eachItem)=>{
      if(eachItem.id===id){
        const updatedQuantity=eachItem.quantity+1
        return {...eachItem,quantity:updatedQuantity}
      }else{
        return eachItem
      }
    }))
  
}
const decrementcartItemQuantity=(id)=>{
  const productObject=cartList.find((item)=>item.id===id)
  if(productObject.quantity>1){
    setCartList((cartList)=>cartList.map((eachItem)=>{
      if (eachItem.id===id){
        const updatedQuantity=eachItem.quantity-1
        return {...eachItem,quantity:updatedQuantity}
      }else{
          return eachItem
      }
    }))
  }else{
    removecartItem(id)
  }
}
const removecartItem=(id)=>{
  const filteredCartList=cartList.filter((item)=>item.id!==id)
  setCartList(filteredCartList)
}


  return (
    <CartContext.Provider  value={{
      cartList,
      addcartItem,
      removecartItem,
      incrementcartItemQuantity,
      decrementcartItemQuantity
    }}>

<BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/products" component={Products} />
    <Route exact path="/products/:id" component={ProductDetails} />
    <Route exact path="/cart" component={Cart} />
  </Switch>
  </BrowserRouter>
    </CartContext.Provider>
  )
  
  
 
}
export default App