import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import patientsdb from "../patients";
import "./updatestatus.css";
import Header from "../Header";
import Footer from "../Footer";

const UpdateStatus = ({
  currentPatient,
  setCurrentPatient,
  patients,
  setPatients,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState("Select New Status");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {}, []);

  console.log(patients);

  const options = [
    "Checked-In",
    "Pre-Procedure",
    "In-Progress",
    "Surgery Completed",
    "Recovery",
    "Recovery Complete",
    "Discharge",
  ];

  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  const updatePatient = (id) => {
    const updatedPatients = patients.map((patient) =>
      patient.id === id ? { ...patient, status: { selected } } : patient
    );
    if (
      selected === "Select New Status" ||
      selected === currentPatient.status
    ) {
      setError("error");
    } else {
      setPatients(updatedPatients);
      setShowModal(true);
    }
  };

  const styles = {
    modalOverlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
  };

  // const handleSelectChange = () => {
  //   if (selected !== "Select New Status") {
  //     setError(null);
  //   } else {
  //     null;
  //   }
  // };

  return (
    <div className="flex flex-col">
      <Header />
      <div className="h-[90vh] w-[100vw] flex flex-col items-center text-center justify-center bg-[#F5F3EA]">
        <div className="mb-20 mt-10">
          <h1 className="text-gray-600 font-bold text-4xl">Patient Status</h1>
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
            <p className="flex justify-center items-center">New Status:</p>
            <div className="w-[200px] relative flex justify-end">
              <button
                className="flex justify-end w-[90%] p-[10px] cursor-pointer border-1 border-[#ccc] bg-white"
                onClick={toggleDropdown}
              >
                {selected}
              </button>

              {isOpen && (
                <ul className="w-[90%] ml-6 mt-11 border-1 border-[#ccc] absolute bg-white">
                  {currentPatient === null ||
                  currentPatient.length === 0 ? null : (
                    <div>
                      {currentPatient.status === "Checked-In"
                        ? options.slice(0, 2).map((option) => (
                            <li
                              key={option}
                              className="p-[10px] cursor-pointer border-b border-[#eee] flex justify-end"
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
                              className="p-[10px] cursor-pointer border-b border-[#eee] flex justify-end"
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
                              className="p-[10px] cursor-pointer border-b border-[#eee] flex justify-end"
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
                              className="p-[10px] cursor-pointer border-b border-[#eee] flex justify-end"
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
                              className="p-[10px] cursor-pointer border-b border-[#eee] flex justify-end"
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
                              className="p-[10px] cursor-pointer border-b border-[#eee] flex justify-end"
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
                              className="p-[10px] cursor-pointer border-b border-[#eee] flex justify-end"
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
        {error === null ? null : (
          <div className="mb-8 text-red-400">Please select a new status</div>
        )}
        <div className="flex text-center items-center justify-center">
          <div
            className="bg-[#008C99] mr-4 text-white text-[1.125rem] font-bold rounded-[40px] px-18 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
            onClick={() => {
              updatePatient(currentPatient.id);
            }}
          >
            Add/Update
          </div>
          <div
            className="bg-[#008C99] ml-4 text-white text-[1.125rem] font-bold rounded-[40px] px-18 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
            onClick={() => {
              navigate("/findPatient");
            }}
          >
            Cancel
          </div>
        </div>
        {showModal && (
          <div
            style={styles.modalOverlay}
            className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50"
          >
            <div className="bg-white p-20 rounded-[30px] shadow-lg text-center max-w-md w-full">
              <p className="mb-10 text-[20px]">Patient has been updated!</p>
              <button
                className="bg-[#008C99] text-white text-[1rem] font-bold rounded-[40px] px-10 py-4 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
                onClick={() => {
                  navigate("/findPatient");
                }}
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default UpdateStatus;
