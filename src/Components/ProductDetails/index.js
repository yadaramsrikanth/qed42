import {useState,useEffect,useCallback} from "react"
import { ThreeDots } from "react-loader-spinner"
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


const renderProductsDetailsSuccessView=()=><h1>renderProductsDetailsSuccessView</h1>

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