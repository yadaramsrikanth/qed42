import {useState,useEffect,useCallback} from "react"
import { ThreeDots } from "react-loader-spinner"
import { BsStar,BsPlusSquare, BsDashSquare} from "react-icons/bs";

import Header from "../Header"
import "./index.css"

const apiStatusConstants={
    initial:"INITIAL",
    failure:"FAILURE",
    success:"SUCCESS",
    inprogress:"INPROGRESS"
}

 


const ProductDetails=(props)=> {
const [apiStatus,setApiStatus]=useState(apiStatusConstants.initial)
const [item,setItem]=useState({})
const [quantity,setQuantity]=useState(1)

const decrementQuantity=()=>{
    if (quantity>1){
        setQuantity(quantity-1)
    }
}

const incremenetQuantity=()=>setQuantity(quantity+1)

const {match}=props
const {params}=match
const {id}=params

const getProductDetails=useCallback(async()=>{
   setApiStatus(apiStatusConstants.inprogress)
   const url=`https://fakestoreapi.com/products/${id}`
   const response=await fetch(url)
   if(response.ok){
    const data=await response.json()
    console.log(data)
    setItem(data)
    setApiStatus(apiStatusConstants.success)
   }else{
    setApiStatus(apiStatusConstants.failure)
   }
},[id])


useEffect(()=>{
    getProductDetails()
},[getProductDetails])

const retryProductsDetailsView=()=>getProductDetails()


const renderProductsDetailsSuccessView=()=>{
    const {title,description,price,rating,category,image}=item
    const {rate}=rating
    return <div className="product-details-view-container">
        <img src={image} alt={title} className="description-image"/>
        <div className="product-details">
            <h1 className="product-details-title">{title}</h1>
            <p className="product-details-price">Rs {price} /-</p>
            <div className="rating-contaier">
              <p className="rating">{rate}</p>
              <BsStar />
            </div>
            <p className="product-details-description">{description}</p>
            <p className="product-details-category">{category}</p>
            <hr className="horizontal-line"/>
            <div className="buttons-container">
             <button className="decrement-button" onClick={decrementQuantity}><BsDashSquare/></button>   
                <p>{quantity}</p>
                <button className="decrement-button" onClick={incremenetQuantity}><BsPlusSquare/></button> 
            </div>
            <button type="button" className="add-to-cart">ADD TO CART</button>
        </div>
    </div>
}

const renderProductsDetailsLoadingView=()=><div className="products-loader-spinner">
    <ThreeDots color="#0b69ff" height="50" width="50"/>
</div>

const renderProductsDetailsFailureView=()=><div className="products-failure-view">
<h1 className="products-failure-heading">Oops! Something Went Wrong</h1>
<p className="products-failure-description">We are having some trouble processing your request. Please try again.</p>
<button onClick={retryProductsDetailsView}  type="button" className="products-failure-retry-button">Retry</button>
</div>

const renderProductDetailsView=()=>{
    switch(apiStatus){
        case apiStatusConstants.success:
            return renderProductsDetailsSuccessView()
        case apiStatusConstants.failure:
            return renderProductsDetailsFailureView()
        case apiStatusConstants.inprogress:
            return renderProductsDetailsLoadingView()
        default:
            return null            
    }
}
   
return <><Header/><div className="products-container">{renderProductDetailsView()}</div></> 
}
export default ProductDetails