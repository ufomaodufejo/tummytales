import React from "react";
import promonov from "./assets/promonov.jpg";

function Promo() {
  return (
    <div className="promobox">
      <div className="promo">
        <div>
          <h1><span>Ongoing Promo...</span></h1>
          <h1><span>Promo valid while stock last</span></h1>
        </div>
        <div>
          <img src={promonov} alt="promo for november" />
        </div>
      </div>
    </div>
  );
}

export default Promo;
