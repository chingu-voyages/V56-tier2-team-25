import React from "react";
import { useState } from "react";
import "./landingpages.css";

const LandingPageAdmin = () => {
  return (
    <div className="lp-admin-wrapper">
      <div className="lp-admin-container">
        <h1 className="lp-admin-title">Welcome back, Amy!</h1>
        <p className="lp-admin-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in ligula
          nec eros molestie ornare sed sit amet orci. Content that advertises
          the purpose of the app and its benefits
        </p>
        <div className="lp-admin-button-div">
          <div className="lp-admin-button-left">Update Patient Status</div>
          <div className="lp-admin-button-right">Edit Patient Info</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageAdmin;
