import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useSelector } from "react-redux";

const LandingPageStaff = () => {

  const userData = useSelector((state) => state.user.userData);

  return (
    <div className="lp-staff-wrapper">
      <Header />
      <div className="lp-staff-container">
        <h1 className="lp-staff-title">
          "Stay Ahead of the Procedure. Every Detail, One Dashboard."
        </h1>
        <p className="lp-staff-desc">
          Real-time updates. Seamless communication. Designed for surgical
          efficiency.
        </p>
        <h1 className="lp-staff-welcome"> Welcome, {userData?.name}!</h1>
        <div className="lp-staff-button-div">
          <div className="lp-staff-button-left">View Today's Schedule</div>
          <div className="lp-staff-button-center">Critical Alerts</div>
          <div className="lp-staff-button-right">Update Case Status</div>
        </div>
        <div className="lp-staff-button-div2">
          <div className="lp-staff-button-left">Team Notifications</div>
          <div className="lp-staff-button-right">Live Case Status</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPageStaff;
