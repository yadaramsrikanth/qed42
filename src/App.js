import React from "react"
import {Switch,Route,BrowserRouter} from "react-router-dom"
import Home from './Components/Home/index'
import Products  from "./Components/Products/index"
import ProductDetails from "./Components/ProductDetails/index"
const App=()=>{
  return <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/products" component={Products} />
    <Route exact path="/products/:id" component={ProductDetails} />
  </Switch>
  </BrowserRouter>
}
export default App