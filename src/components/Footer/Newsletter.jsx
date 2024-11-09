import React from "react";

import "./Newsletter.css";
import SubHeading from "../SubHeading/SubHeading";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 clalssName="headtext__cormoant">Subscribe to our Newsletter</h1>
      <p className="p__opensans">And never miss Latest Updates</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your Name" />
      <button className="custom__button">submit</button>
    </div>
  </div>
);

export default Newsletter;
