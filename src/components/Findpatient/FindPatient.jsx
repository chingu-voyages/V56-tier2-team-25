import React, { useEffect, useState } from "react";
import patientsdb from "../patients";
import "./findpatient.css";
import { useNavigate } from "react-router-dom";

const FindPatient = ({ currentPatient, setCurrentPatient }) => {
  const [patients, setPatients] = useState(patientsdb);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {}, [currentPatient]);

  const getPatient = () => {
    const patient = patients.filter((item) => item.id === Number(inputValue));
    if (patient.length === 0) {
      setError("error");
    } else {
      setCurrentPatient(patient[0]);
      setError(null);
      navigate("/updateStatus");
    }
  };

  return (
    <section>
      <div className="min-h-screen w-full flex flex-col">      
        <Header />
          <div className="flex flex-1 flex-col items-center justify-center bg-[#F5F3EA]">
            <div className="mb-16">
              <h1 className="text-[#4F4F4F] font-bold text-4xl dm-sans">Find Patient</h1>
            </div>
            <div className="mb-11 text-[#090909] text-[1.125rem] dm-sans">
              <p>Input patient number to find an existing patient.</p>
            </div>
            <div className="mb-14">
              <input
                className="w-[262px] bg-white border-1 border-[#000] px-5 py-[10px] rounded-[10px] placeholder-[#3C3C43/30]"
                type="text"
                placeholder="Type patient number here"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            {error === null ? null : (
              <div className="mb-8 text-red-400">
                No patient with entered ID exists
              </div>
            )}
            <div className="flex text-center items-center justify-center gap-7">
              <div
                className="bg-[#008C99] text-white text-[1.125rem] font-bold rounded-[40px] px-15 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
                onClick={() => {
                  getPatient(inputValue);
                }}
              >
                Enter
              </div>
              <div 
                className="bg-white text-[#4F4F4F] text-[1.125rem] font-bold rounded-[40px] border border-[#CAC4D0] px-15 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA] hover:text-white hover-border-none" 
                onClick={() => navigate("../Login")}>Cancel</div>
            </div>
          </div>
      </div>
      <Footer/>
    </section>
  );
};

export default FindPatient;
