import React from "react"
import { Link} from "react-router-dom"
import "./index.css"

const ProductItem=(props)=>{
    const {eachProductItem}=props
    const {image,title,category,price,id}=eachProductItem
    return  <li className="product-item-card"> 
    <Link to={`/products/${id}`} className='product-link-item'>
   
        <img className="product-image" src={image} alt={title} />
        <h1 className='title'>{title}</h1>
        <p className='category'>{category}</p>
        <p className='price'>Rs {price} /-</p>

    </Link></li>
}

export default ProductItem