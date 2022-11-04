import React from "react";
import { Link, Outlet } from "react-router-dom";

function Orders(props) {
  return (
    <div className="categories">
      <div className="gallery-category">

        <div className="gallery">
          <img src={props.img1} alt="smallchops" />
          <Link to="login">
            <button className="btn1">Order Now</button>
          </Link>
        </div>

        <div className="gallery">
          <img src={props.img2} alt="smallchops" />
          <Link to="login">
            <button className="btn1">Order Now</button>
          </Link>
        </div>

        <div className="gallery">
          <img src={props.img3} alt="smallchops" />
          <Link to="login">
            <button className="btn1">Order Now</button>
          </Link>
        </div>

        <div className="gallery">
          <img src={props.img4} alt="smallchops" />
          <Link to="login">
            <button className="btn1">Order Now</button>
          </Link>
        </div>
      </div>
      <Outlet/>
    </div>
  );
}

export default Orders;
