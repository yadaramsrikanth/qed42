import {useState,useEffect,useCallback} from "react"
import {ThreeDots} from "react-loader-spinner"
import ProductItem from "../ProductItem"
import Header from "../Header"
import { FiSearch } from "react-icons/fi";
import "./index.css"
const apiStatusConstants={
    initial:"INITIAL",
    success:"SUCCESS",
    failure:"FAILURE",
    inprogress:"INPROGRESS"
}
const sortbyOptions = [
    {
      optionId: 'desc',
      displayText: 'Price (High-Low)',
    },
    {
      optionId: 'asc',
      displayText: 'Price (Low-High)',
    },
  ]


const categoryOptions = [
    {
      name:"men's clothing",
      categoryId: '1',
    },
    {
      name: 'electronics',
      categoryId: '2',
    },
    {
      name: 'jewelery',
      categoryId: '3',
    },
    {
        name:"women's clothing",
        categoryId: '4',
      },
    
  ]

const Products=()=>{
    const [apiStatus,setApiStatus]=useState(apiStatusConstants.initial)
    const [productsList,setProductsList]=useState([])
    const [inputText,setInputText]=useState("")
    const [category,setCategory]=useState(categoryOptions[0].name)
    const [activeoption,setOption]=useState(sortbyOptions[0].optionId)

const onSearchCategoery=event=>{
    setInputText(event.target.value)
}

const onchnagecategoryoptions=event=>{
    setCategory(event.target.value)
}

const onchnagesortoption=event=>{
    setOption(event.target.value)
}

const getProductsList=useCallback(async()=>{
    setApiStatus(apiStatusConstants.inprogress)
    const url=`https://fakestoreapi.com/products/category/${category}`
    const response=await fetch(url)
    
    if(response.ok){
    const responseData=await response.json()
    let filterProducts=responseData.filter((product)=>product.title.toLowerCase().includes(inputText.toLocaleLowerCase()))
    
    filterProducts=filterProducts.sort((a,b)=>{
        if(activeoption==="asc"){
            return a.price-b.price
        }else{
            return b.price-a.price
        }
    })
    setProductsList(filterProducts)
    setApiStatus(apiStatusConstants.success)
    }else{
        setApiStatus(apiStatusConstants.failure)
    }
},[inputText,category,activeoption])




useEffect(()=>{
getProductsList()
},[getProductsList])


const onsearchInput=event=>{
    if(event.key==="Enter"){
        getProductsList()
    }
}

const onclicksearchInput=()=>getProductsList()

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
        <div className="filters-container">
        <h1 className="products-heading">All Products</h1>
        <div className="search-container">
        <input type="search" placeholder="search"  className="input-element" value={inputText} onChange={onSearchCategoery} onKeyDown={onsearchInput}/> 
        <button type="button" className="search-button" onClick={onclicksearchInput}><FiSearch />  </button>
        </div>
        <select className="category-options-select" value={category} onChange={onchnagecategoryoptions}>
        {categoryOptions.map((eachoption)=>
    <option className="option-name" key={eachoption.id} value={eachoption.name} >{eachoption.name}</option>    
    )

        }

        </select>
        <select className="category-options-select" value={activeoption} onChange={onchnagesortoption}>
        {sortbyOptions.map((eachoption)=>
        <option key={eachoption.optionId} value={eachoption.optionId} className="option-name">{eachoption.displayText}</option>
        )}

        </select>
        </div>
       
        
        {renderAllProducts()}

    </div>
    </>
} 

export default Products