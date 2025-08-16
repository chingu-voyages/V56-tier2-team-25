import React from "react";
import { useState } from "react";
import "../../index.css";
import Header from "../Nav/Header";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";

const AdminFindPatient = () => {
  const navigate = useNavigate();

  const [patientNumber, setPatientNumber] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      setError("");
      setResult(null);

      const patientsRef = collection(db, "patient_info");
      const q = query(patientsRef, where("patientNo", "==", patientNumber));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        const data = doc.data();
        localStorage.setItem("selectedPatient", JSON.stringify(data));
        navigate(`/adminPatients`, { state: { patient: data } });
        setResult(data);
      } else {
        setError("Patient not found.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while searching.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section>
      <div className="min-h-screen w-full flex flex-col">
        <Header />
        <div className="flex flex-1 flex-col items-center py-11 md:py-4 md:px-2 md:justify-center bg-[#F5F3EA]">
          <div className="mb-16">
            <h1 className="text-[#4F4F4F] font-bold text-2xl lg:text-4xl dm-sans">
              Find Patient
            </h1>
          </div>
          <div className="mb-14 lg:mb-11 max-w-[256px] lg:max-w-full text-[#090909] text-[1.125rem] dm-sans text-center">
            <p>Input patient number to find an existing patient.</p>
          </div>
          <div className="mb-14">
            <input
              className="w-[262px] bg-white border-1 border-[#000] px-5 py-[10px] rounded-[10px] placeholder-[#3C3C43/30]"
              type="text"
              placeholder="Type patient number here"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <div>
              {error && <p className="text-red-500 flex justify-center mt-5">{error}</p>}
            </div>
            
          </div>

          

          {result && (
            <div className="mt-6 bg-white p-4 rounded shadow w-72 text-left">
              <h3 className="text-lg font-medium text-gray-800">
                Patient Found:
              </h3>
              <pre className="text-sm text-gray-700 mt-2">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          )}

          <div className="flex flex-col md:flex-row text-center items-center justify-center gap-7 md:gap-2 lg:gap-7">
            <div
              className="bg-[#008C99] text-white text-[1.125rem] font-bold rounded-[40px] px-15 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
              onClick={handleSearch}
            >
              Update Status
            </div>
            <div
              className="bg-white text-[#4F4F4F] text-[1.125rem] font-bold rounded-[40px] border border-[#CAC4D0] px-15 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA] hover:text-white hover-border-none"
              onClick={() => navigate(-1)}
            >
              Cancel
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default AdminFindPatient;
