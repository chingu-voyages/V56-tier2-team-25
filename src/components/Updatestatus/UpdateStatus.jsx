import React, { useEffect, useState } from "react";
import patientsdb from "../patients";
import "./updatestatus.css";

const UpdateStatus = ({ currentPatient, setCurrentPatient }) => {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    "Checked-In",
    "Pre-Procedure",
    "In-Progress",
    "Surgery Completed",
    "Recovery",
    "Recovery Complete",
    "Discharge",
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="h-[70vh] w-[100vw] flex flex-col items-center text-center justify-center bg-[#F0F0FA]">
      <div className="mb-10 mt-10">
        <h1 className="text-[#5d5a88] font-bold text-4xl">Patient Status</h1>
      </div>
      <div className="">
        <div className="flex text-center items-center justify-between mb-4 font-bold">
          <p>Patient No:</p>
          {currentPatient === null || currentPatient.length === 0 ? null : (
            <p>{currentPatient.id}</p>
          )}
        </div>
        <div className="flex text-center items-center justify-between mb-4 font-bold">
          <p>Current Status:</p>
          {currentPatient === null || currentPatient.length === 0 ? null : (
            <p>{currentPatient.status}</p>
          )}
        </div>
        <div className="flex mb-10 font-bold">
          <p>New Status:</p>

          <div className="w-[200px] relative">
            <button
              className="w-[100%] flex justify-end"
              onClick={toggleDropdown}
            >
              {selected || "Select New Status"}
            </button>

            {isOpen && (
              <ul className="w-[90%] ml-6 mt-1 border-1 border-[#ccc] absolute bg-white">
                {currentPatient === null ||
                currentPatient.length === 0 ? null : (
                  <div>
                    {currentPatient.status === "Checked-In"
                      ? options.slice(0, 2).map((option) => (
                          <li
                            key={option}
                            className="p-[10px] cursor:pointer border-b border-[#eee] flex justify-end"
                            onClick={() => handleOptionClick(option)}
                          >
                            {option}
                          </li>
                        ))
                      : null}
                    {currentPatient.status === "Pre-Procedure"
                      ? options.slice(0, 3).map((option) => (
                          <li
                            key={option}
                            className="p-[10px] cursor:pointer border-b border-[#eee] flex justify-end"
                            onClick={() => handleOptionClick(option)}
                          >
                            {option}
                          </li>
                        ))
                      : null}
                    {currentPatient.status === "In-Progress"
                      ? options.slice(1, 4).map((option) => (
                          <li
                            key={option}
                            className="p-[10px] cursor:pointer border-b border-[#eee] flex justify-end"
                            onClick={() => handleOptionClick(option)}
                          >
                            {option}
                          </li>
                        ))
                      : null}
                    {currentPatient.status === "Surgery Completed"
                      ? options.slice(2, 5).map((option) => (
                          <li
                            key={option}
                            className="p-[10px] cursor:pointer border-b border-[#eee] flex justify-end"
                            onClick={() => handleOptionClick(option)}
                          >
                            {option}
                          </li>
                        ))
                      : null}
                    {currentPatient.status === "Recovery"
                      ? options.slice(3, 6).map((option) => (
                          <li
                            key={option}
                            className="p-[10px] cursor:pointer border-b border-[#eee] flex justify-end"
                            onClick={() => handleOptionClick(option)}
                          >
                            {option}
                          </li>
                        ))
                      : null}
                    {currentPatient.status === "Recovery Complete"
                      ? options.slice(4, 7).map((option) => (
                          <li
                            key={option}
                            className="p-[10px] cursor:pointer border-b border-[#eee] flex justify-end"
                            onClick={() => handleOptionClick(option)}
                          >
                            {option}
                          </li>
                        ))
                      : null}
                    {currentPatient.status === "Discharge"
                      ? options.slice(5, 7).map((option) => (
                          <li
                            key={option}
                            className="p-[10px] cursor:pointer border-b border-[#eee] flex justify-end"
                            onClick={() => handleOptionClick(option)}
                          >
                            {option}
                          </li>
                        ))
                      : null}
                  </div>
                )}
              </ul>
            )}
          </div>
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
