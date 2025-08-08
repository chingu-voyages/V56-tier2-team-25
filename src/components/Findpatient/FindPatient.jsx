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
    <div className="h-[70vh] w-[100vw] flex flex-col items-center text-center justify-center bg-[#F0F0FA]">
      <div className="mb-10 mt-10">
        <h1 className="text-[#5d5a88] font-bold text-4xl">Find Patient</h1>
      </div>
      <div className="mb-10">
        <p>Input patient number to find an existing patient.</p>
      </div>
      <div className="mb-6">
        <input
          className="bg-white border-1 border-[#5d5a88] p-2 mb-4"
          type="text"
          placeholder="Enter Patient ID"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      {error === null ? null : (
        <div className="mb-8 text-red-400">
          No patient with entered ID exists
        </div>
      )}
      <div className="flex text-center items-center justify-center">
        <div
          className="find-patient-button-left"
          onClick={() => {
            getPatient(inputValue);
          }}
        >
          Enter
        </div>
        <div className="find-patient-button-right">Cancel</div>
      </div>
    </div>
  );
};

export default FindPatient;
