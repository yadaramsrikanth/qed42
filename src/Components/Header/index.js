import {Link} from "react-router-dom"
import "./index.css"

const Header=()=>{
    return <nav className="nav-bar-container">
        <Link to="/" className='link-item'>
        <h1 className="e-commerce-heading-logo">E-COMMERCE</h1> </Link>
        <ul className="nav-menu">
        <Link to="/" className='link-item'>   <li className="nav-item">Home</li></Link> 
        <Link to="/products" className='link-item'><li className="nav-item">Products</li></Link> 
        <Link to='/cart' className='link-item'><li className="nav-item">Cart</li></Link>
        </ul>
    </nav>
}

export default Header