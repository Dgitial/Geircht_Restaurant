import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <Newsletter />
    // <FooterOverlay />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          5th Avenue off peter parkers balirina tupus view
        </p>
        <p className="p__opensans">+234-111-768-3763</p>
        <p className="p__opensans">+234-667-343-4251</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          The best way to loose yourself is in the service of others
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: "15rem" }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Mon-Fri</p>
        <p className="p__opensans">---- ----</p>
        <p className="p__opensans">---- ----</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">
        2021 Lorem ipsum dolor sit amet consectetur adipis
      </p>
    </div>
  </div>
);

export default Footer;
