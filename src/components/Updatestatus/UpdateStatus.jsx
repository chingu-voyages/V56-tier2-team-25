import React, { useEffect, useState } from "react";
import patientsdb from "../patients";
import "./updatestatus.css";

const UpdateStatus = () => {
  const [patients, setPatients] = useState(patientsdb);
  const [patient, setPatient] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);

  console.log(patients);

  useEffect(() => {}, [patient]);

  const getPatient = () => {
    const patient = patients.filter((item) => item.id === Number(inputValue));
    console.log(patient);
    if (patient.length === 0) {
      setError("error");
    } else {
      setPatient(patient[0]);
      setError(null);
    }
  };

  return (
    <div className="h-[70vh] w-[100vw] flex flex-col items-center text-center justify-center bg-[#F0F0FA]">
      <div>
        <input
          className="bg-white border-1 border-[#5d5a88] p-2 mb-4"
          type="text"
          placeholder="Enter Patient ID"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="p-2 bg-[#5d5a88] text-white ml-2 hover:cursor-pointer"
          onClick={() => {
            getPatient(inputValue);
          }}
        >
          Search
        </button>
      </div>
      {error === null ? null : (
        <div className="mb-4 text-red-400">
          No patient with entered ID exists
        </div>
      )}
      <div className="mb-10 mt-10">
        <h1 className="text-[#5d5a88] font-bold text-4xl">Patient Status</h1>
      </div>
      <div className="">
        <div className="flex text-center items-center justify-between mb-4 font-bold">
          <p>Patient No:</p>
          {patient === null || patient.length === 0 ? null : (
            <p>{patient.id}</p>
          )}
        </div>
        <div className="flex text-center items-center justify-between mb-4 font-bold">
          <p>Current Status</p>
          {patient === null || patient.length === 0 ? null : (
            <p>{patient.status}</p>
          )}
        </div>
        <div className="flex mb-10 font-bold">
          <p>New Status</p>
          <input></input>
        </div>
      </div>
      <div className="flex text-center items-center justify-center">
        <div className="update-status-button-left">Add/Update</div>
        <div className="update-status-button-right">Cancel</div>
      </div>
    </div>
  );
};

export default UpdateStatus;
