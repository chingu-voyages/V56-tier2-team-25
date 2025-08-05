import React from "react";
import { useState } from "react";
import "./landingpages.css";
import Header from "../Header";
import Footer from "../Footer";
import { useSelector } from "react-redux";

const LandingPageAdmin = () => {

  const userData = useSelector((state) => state.user.userData);

  return (
    <div className="lp-admin-wrapper">
      <Header />
      <div className="lp-admin-container">
        <h1 className="lp-admin-title">Welcome back, {userData?.name}!</h1>
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
      <Footer />
    </div>
  );
};

export default LandingPageAdmin;
