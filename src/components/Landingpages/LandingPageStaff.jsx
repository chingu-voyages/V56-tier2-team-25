import React from "react";

const LandingPageStaff = () => {
  return (
    <div className="lp-staff-wrapper">
      <div className="lp-staff-container">
        <h1 className="lp-staff-title">
          "Stay Ahead of the Procedure. Every Detail, One Dashboard."
        </h1>
        <p className="lp-staff-desc">
          Real-time updates. Seamless communication. Designed for surgical
          efficiency.
        </p>
        <h1 className="lp-staff-welcome"> Welcome, Vivian!</h1>
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
    </div>
  );
};

export default LandingPageStaff;
