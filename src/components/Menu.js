import React from "react";
import Orders from "./Orders";
import platter from "./assets/platter.jpg";
import platter2 from "./assets/platter2.jpg";
import platter3 from "./assets/platter3.jpg";
import moneybag from "./assets/moneybag.jpg";
import freshwrap2 from "./assets/freshwrap2.jpg";
import freshwrap3 from "./assets/freshwrap3.jpg";

function Menu() {
  function hideContent1(){
    document.getElementById("myDropDown1").classList.toggle("show")
  }
  function hideContent2(){
    document.getElementById("myDropDown2").classList.toggle("show")
  }
  function hideContent3(){
    document.getElementById("myDropDown3").classList.toggle("show")
  }
  function hideContent4(){
    document.getElementById("myDropDown4").classList.toggle("show")
  }
  function hideContent5(){
    document.getElementById("myDropDown5").classList.toggle("show")
  }
  function hideContent6(){
    document.getElementById("myDropDown6").classList.toggle("show")
  }

  return (
    <>
    
    <div className="menu">
      <h1>Services we offer:</h1>
      <hr></hr>
      <div className="dropdown">
        <button className="dropbtn" onClick={hideContent1}>Platters</button>
        <div id="myDropDown1" className="dropdown-content">
            <Orders img1={platter} img2={platter2} img3={platter3}/>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn" onClick={hideContent2}>Fresh Wraps</button>
        <div id="myDropDown2" className="dropdown-content">
            <Orders img1={moneybag} img2={freshwrap2} img3={freshwrap3}/>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn" onClick={hideContent3}>Party Packs</button>
        <div id="myDropDown3" className="dropdown-content">
            <Orders/>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn" onClick={hideContent4}>Office Luncheon</button>
        <div id="myDropDown4" className="dropdown-content">
            <Orders/>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn" onClick={hideContent5}>Puff-Mix</button>
        <div id="myDropDown5" className="dropdown-content">
            <Orders/>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn" onClick={hideContent6}>Weddings and Events</button>
        <div id="myDropDown6" className="dropdown-content">
            <Orders/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Menu;
