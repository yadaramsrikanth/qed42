import React from "react"
import {Link} from "react-router-dom"
import Header  from "../Header"
import "./index.css"

const Home=()=>(
     <>
        <Header />
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
                <p className='home-para'> Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.</p>
         
         <Link to="/products">
         <button className='home-page-button'>ShopNow</button>
         </Link>
          
            </div>
            <img className="home-page-image" src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png" alt="home-page-image"/>
        </div>

    </>
    
    
)
export default Home