import React from "react";
import smallchops from "./assets/smallchops.jpg";
import partyplates from "./assets/partyplates.jpg";
import platter from "./assets/platter.jpg";
import puffmix from "./assets/puffmix.jpg";
import freshwraps from "./assets/freshwraps.jpg";
import event from "./assets/event.jpg";
import { Link } from "react-router-dom";
import BannerSlideShow from "./BannerSlideShow";
import SliderData from "./SliderData";

function Home() {
  return (
    <div className="home">
      <BannerSlideShow slides={SliderData} />

      <div className="about">
        <h4> WELCOME TO TUMMYTALES</h4>
        <hr></hr>
        <h1>
          Enjoy Our Soulfully made small chops delivered to your doorstep.
        </h1>
        <br />
        <p>
          Behind every delicious and Soulfully made small chops and at the
          forefront of every great customer experience stands a passionate and
          committed person. This is why "People Capability Always" is a driving
          force within our business and the golden thread that runs through
          everything we do ever since our inception in 2017. The authentic taste
          comes from family recipes and from fresh, simple and tasteful
          ingredients straight from home.
        </p>
        <br />
        <Link to="/menu">
          <button className="btn">Our Menu</button>
        </Link>
      </div>

      <div className="categories">
        <h2>Our Products....</h2>
        <hr></hr>

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
      <div className="facts">
        <h1>Fun Facts About Small Chops</h1>
        <div className="facts-details">
          <p>
            In Nigeria, finger foods are popularly referred to as small chops,
            served as appetizers back in the days, and they were limited to
            doughnuts, chin chin, puff puff and the like. But these days, some
            imported world recipes have joined the Nigerian Small Chops family,
            including cupcakes, samosas etc.
          </p>
          <p>
            Small chops basically contain : puff-puff, samosa, spring rolls and
            meat. Of recent, mosa ( deep fried rice banana/plantain) was added
            to the mix. Puff-puff proudly is of Nigerian decent and the meat,
            but samosa is of Indian decent and this was introduced into the
            Nigerian dining in the 50s before the civil war. Spring rolls and
            tiger prawns came with the Chinese merchants and diplomas after the
            war and has since become a widely cherished delicacy.
          </p>
          <p>
            So when a platter of small chops is served to you in an event, know
            that you are eating a mixture of three major national cuisines,
            simple yet carrying the history of each nation before and after the
            war. Some items on the small chops platter originate from Nigeria,
            while about two dates to China and India. This is a further
            indication of how food unites us as a people.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
