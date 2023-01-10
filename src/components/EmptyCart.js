import React from 'react'
import { Link } from 'react-router-dom'
import shoppingcart from './assets/shoppingcart.jpg'

function EmptyCart() {
  return (
    <div className='emptycart'>
        <div className='emptycartimgcontainer'>
            <img src={shoppingcart} alt="emptycart" className='emptycartimg'/>
        </div>
        <div className="emptycarttextcontainer">
        <h3> Your Cart is Empty!</h3>
        <p>Browse our categories and discover our best deals!</p>
        <Link to="/menu">
        <button>START SHOPPING</button>
        </Link>
        </div>
        
    </div>
  )
}

export default EmptyCart