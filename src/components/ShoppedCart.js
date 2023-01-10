import React from "react";
import { useAuth } from "../Contexts/LoginContext";
import { Link } from "react-router-dom";

function ShoppedCart() {
 const auth = useAuth()
  
  return (
    <>
    <div className="shoppedcartcontainer">
    { auth.cartItems.map(item =>
      <div className="shoppedcartdiv">
        <div className="menuimg-div">
          <img src={item.img} alt="smallchops" />
        </div>
        <div className="menucard-body">
          <h2 className="menucard-title">{item.title}</h2>
          <p className="menucard-text">{item.text}</p>
          <p className="menucard-price">{item.price}</p>
          <p>Instock</p>
          <div className="qtydiv">
            <button className="shoppedcartbtn" onClick={auth.handleDecrement}>-</button>
            <h3>Qty: {item.qty}</h3>
            <button className="shoppedcartbtn" onClick={auth.handleIncrement}>+</button>
          </div>
        </div>
      </div>  )}
      
      <div className="cartsummary">
            <h3>Cart Summary</h3>
            <hr></hr>
            <h4>Subtotal: 3000</h4>
            <h4>Delivery Fee: 2000</h4>
            <h4>Total: 5000</h4>
            <button className="checkoutbtn">CHECKOUT (5000)</button>
      </div>
    </div> 
    <div className="contactdetails shoppingbtn">
      <Link to="/menu">
       <button>Continue Shopping</button>
      </Link>
    </div>
    </>
  );
}

export default ShoppedCart;
