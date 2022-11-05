import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import promonov from "./assets/promonov.jpg";

function Promo() {
  return (
    <div className="promobox">
        <div className="promoimg">
          <img src={promonov} alt="promo for november" />
        </div>
      <Link to="login">
            <button className="btn1">
              Order Now
            </button>
      </Link>
      <Outlet/>
    </div>
  );
}

export default Promo;
