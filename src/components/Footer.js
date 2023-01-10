import React from "react";
import logo from "./assets/logo.png";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footerinfo">
        <div className="footerlogo">
          <img src={logo} alt="tummytales logo" />
          <p>
            Tummytales is an all day smallchops home located at the center of
            Lagos. We cater for both office events as well as wedding events. We
            also sell freshwraps smallchops.
          </p>
        </div>
        <div className="businesshours">
          <h4>Business Hours </h4> 
          <p>Mon: 9:00 AM – 6:00 PM </p>
          <p>Tue: 9:00 AM – 6:00 PM</p> 
          <p>Wed: 9:00 AM – 6:00 PM</p> 
          <p>Thu: 9:00 AM – 6:00 PM</p>
          <p>Fri: 9:00 AM – 6:00 PM</p>
          <p>Sat: 9:00 AM – 6:00 PM </p>
        </div>
        <div className="contactdetails">
          <Link to="/contact-us">
          <button >Contact Us</button>
          </Link>
        </div>
      </div>
      <hr></hr>

      <div className="socials">
        <div className="socialsdetails">
          <SocialIcon
            url="https://instagram.com/tummytales.ng"
            style={{ height: 40, width: 40 }}
          />
        </div>
        <div className="socialsdetails">
          <SocialIcon
            url="https://facebook.com/in/jaketrent"
            style={{ height: 40, width: 40 }}
          />
        </div>
        <div className="socialsdetails">
          <SocialIcon
          network="whatsapp"
            url="http://wa.me/2348091590666"
            style={{ height: 40, width: 40 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
