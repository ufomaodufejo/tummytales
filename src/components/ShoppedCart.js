import React, { useState } from "react";
import grills from "./assets/grills.jpg";


function ShoppedCart() {
  const [counter, setcounter] = useState(1);
  const handleIncrement = () => {
    setcounter(count => count + 1 );
  }
  const handleDecrement = ()  => {
    setcounter(count => count - 1);
  }
  
  return (
    <div className="shoppedcartcontainer">
      <div className="shoppedcartdiv">
        <div className="menuimg-div">
          <img src={grills} alt="smallchops" />
        </div>
        <div className="menucard-body">
          <h2 className="menucard-title">Smallchops Platter</h2>
          <p className="menucard-text">Our moneybag is available for 3,000naira for 10 pieces only</p>
          <p className="menucard-price">3000</p>
          <p>Instock</p>
          <div className="qtydiv">
            <button className="shoppedcartbtn" onClick={handleDecrement}>-</button>
            <h3>Qty: {counter}</h3>
            <button className="shoppedcartbtn" onClick={handleIncrement}>+</button>
          </div>
        </div>
      </div>
      <div className="cartsummary">
            <h3>Cart Summary</h3>
            <hr></hr>
            <h4>Subtotal: 3000</h4>
            <h4>Delivery Fee: 2000</h4>
            <h4>Total: 5000</h4>
            <button className="checkoutbtn">CHECKOUT (5000)</button>
      </div>
    </div>
  );
}

export default ShoppedCart;
