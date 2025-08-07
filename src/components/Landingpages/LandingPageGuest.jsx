import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const LandingPageGuest = () => {
  return (
    <div>
    <Header />
    <div className="lp-guest-wrapper">
      <div className="lp-guest-container">
        <h1 className="lp-guest-title">Welcome, Guest!</h1>
        <p className="lp-guest-desc">
          "Your loved one is in trusted heands. As each phase of care unfolds,
          may you feel comfort in knowing they are surrounded by skill,
          compassion, and hope."
        </p>
        <div className="lp-guest-button">Track Patient Status</div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default LandingPageGuest;
