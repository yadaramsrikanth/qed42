import {useState,useEffect} from "react"
import {ThreeDots} from "react-loader-spinner"
import ProductItem from "../ProductItem"
import Header from "../Header"
import "./index.css"
const apiStatusConstants={
    initial:"INITIAL",
    success:"SUCCESS",
    failure:"FAILURE",
    inprogress:"INPROGRESS"
}


const Products=()=>{
    const [apiStatus,setApiStatus]=useState(apiStatusConstants.initial)
    const [productsList,setProductsList]=useState([])
  
const getProductsList=async()=>{
    setApiStatus(apiStatusConstants.inprogress)
    const url="https://fakestoreapi.com/products"
    const response=await fetch(url)
    
    if(response.ok){
    const responseData=await response.json()
    setProductsList(responseData)
    setApiStatus(apiStatusConstants.success)
    }else{
        setApiStatus(apiStatusConstants.failure)
    }
}

useEffect(()=>{
getProductsList()
},[])

const retryProductsList=()=>getProductsList()


const renderProductListView=()=><ul className="products-list-container">
{
    productsList.map((eachProductItem)=><ProductItem eachProductItem={eachProductItem} key={eachProductItem.id}/>)
}

</ul>






const renderLoadingView=()=><div className="products-loader-spinner">
    <ThreeDots color="#0b69ff" height="50" width="50"/>
</div>
const renderFailureView=()=><div className="products-failure-view">
    <h1 className="products-failure-heading">Oops! Something Went Wrong</h1>
    <p className="products-failure-description">We are having some trouble processing your request. Please try again.</p>
    <button onClick={retryProductsList} type="button" className="products-failure-retry-button">Retry</button>
</div>

const renderAllProducts=()=>{
    switch(apiStatus){
        case apiStatusConstants.success:
            return renderProductListView()
        case apiStatusConstants.failure:
            return renderFailureView()
        case apiStatusConstants.inprogress:
            return renderLoadingView()
        default:
            return null           
    }

}


    return <>
    <Header/>
    <div className="products-container">
        <h1 className="products-heading">All Products</h1>
        {renderAllProducts()}

    </div>
    </>
} 

export default Products