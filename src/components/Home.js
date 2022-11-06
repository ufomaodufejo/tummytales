import React from "react";
import chops from "./assets/chops.png";
import smallchops from "./assets/smallchops.jpg";
import partyplates from "./assets/partyplates.jpg";
import platter from "./assets/platter.jpg";
import puffmix from "./assets/puffmix.jpg";
import freshwraps from "./assets/freshwraps.jpg";
import event from "./assets/event.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="mainpage">
        <div className="about">
          <h1>
            <span>W</span>elcome to TummyTales
          </h1>
          <br />
          <h3>
            Enjoy Our Soulfully made small chops delivered to your
            doorstep.
          </h3>
          <br />
          <p>
            Behind every delicious and Soulfully made small chops and at the
            forefront of every great customer experience stands a passionate and
            committed person. This is why
            <span>"People Capability Always"</span> is a driving force within
            our business and the golden thread that runs through everything we
            do ever since our inception in 2017.
          </p>
          <br />
          <Link to="/menu">
            <button className="btn">Our Menu</button>
          </Link>
        </div>
        <div className="images">
          <img src={chops} alt="smallchops" />
        </div>
      </div>

      <div className="categories">
        <h2>Our Products....</h2><hr></hr>
        
        <div className="gallery-category">

          <div className="gallery">
            <img src={smallchops} alt="smallchops" />
            <div className="desc">Office Luncheon</div>
          </div>

          <div className="gallery">
            <img src={partyplates} alt="smallchops" />
            <div className="desc">Party Packs</div>
          </div>

          <div className="gallery">
            <img src={platter} alt="smallchops" />
            <div className="desc">Platters</div>
          </div>

          <div className="gallery">
            <img src={freshwraps} alt="smallchops" />
            <div className="desc">Fresh Wraps</div>
          </div>

          <div className="gallery">
            <img src={puffmix} alt="smallchops" />
            <div className="desc">Puff-mix</div>
          </div>

          <div className="gallery">
            <img src={event} alt="smallchops" />
            <div className="desc">Weddings and Events</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
