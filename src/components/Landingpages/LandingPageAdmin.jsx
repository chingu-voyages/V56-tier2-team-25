import React from "react";
import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

const LandingPageAdmin = () => {
  const userData = useSelector((state) => state.user.userData);

  const navigate = useNavigate();

  return (
    <div className="lp-admin-wrapper">
      <Header />
      <div
        className="lp-admin-container"
        style={{ backgroundColor: "#F5F3EA" }}
      >
        <h1 className="text-2xl font-semibold text-gray-800 mb-10">
          Welcome back, {userData?.name}!
        </h1>
        <p className="text-sm text-gray-600 mb-10">
          Would you like to update the patient's surgery status or edit <br />{" "}
          their personal information?
        </p>
        <div className="flex gap-4 justify-center">
          <button
            className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition shadow-md"
            onClick={() => navigate("/FindPatient")}
          >
            Update Patient Status
          </button>
          <button
            className="bg-white text-gray-800 px-6 py-2 rounded-full shadow hover:bg-gray-100 transition shadow-md"
            onClick={() => navigate("/adminEdit")}
          >
            Edit Patient Info
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPageAdmin;
