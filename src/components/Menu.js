import React from "react";
import Orders from "./Orders";
import platter from "./assets/platter.jpg";
import platter2 from "./assets/platter2.jpg";
import platter3 from "./assets/platter3.jpg";
import moneybag from "./assets/moneybag.jpg";
import freshwrap2 from "./assets/freshwrap2.jpg";
import freshwrap3 from "./assets/freshwrap3.jpg";
import partyplates1 from "./assets/partyplates1.jpg";
import partyplates2 from "./assets/partyplates2.jpg";
import partyplates3 from "./assets/partyplates3.jpg";
import grills from "./assets/grills.jpg";
import grills2 from "./assets/grills2.jpg";
import grills3 from "./assets/grills3.jpg";
import events from "./assets/events.jpg";
import events2 from "./assets/events2.jpg";
import events3 from "./assets/events3.jpg";
import puffmix from "./assets/puffmix.jpg";
import puffmix2 from "./assets/puffmix2.jpg";
import puffmix3 from "./assets/puffmix3.jpg";

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
            <Orders img1={platter} img2={platter2} img3={platter3} />
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
            <Orders img1={partyplates1} img2={partyplates2} img3={partyplates3}/>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn" onClick={hideContent4}>Grills</button>
        <div id="myDropDown4" className="dropdown-content">
            <Orders img1={grills} img2={grills2} img3={grills3}/>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn" onClick={hideContent5}>Puff-Mix</button>
        <div id="myDropDown5" className="dropdown-content">
            <Orders img1={puffmix} img2={puffmix2} img3={puffmix3}/>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn" onClick={hideContent6}>Weddings and Events</button>
        <div id="myDropDown6" className="dropdown-content">
            <Orders img1={events} img2={events2} img3={events3}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Menu;
