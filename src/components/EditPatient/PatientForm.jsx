import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import Header from "../Header";
import Footer from "../Footer";

const PatientForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const patientFromNav = location.state?.patient;
  const patientNo = patientFromNav?.patientNo;

  const [formData, setFormData] = useState({
    patientNo: "",
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    country: "",
    telephone: "",
    email: "",
  });

  useEffect(() => {
    const fetchPatient = async () => {
      if (!patientNo) return;
      const docRef = doc(db, "patient_info", String(patientNo));
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setFormData(docSnap.data());
      }
    };

    if (patientFromNav) {
      setFormData(patientFromNav);
    } else {
      fetchPatient();
    }
  }, [patientNo, patientFromNav]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    if (!patientNo) {
      alert("No patient number found.");
      return;
    }
    const docRef = doc(db, "patient_info", String(patientNo));
    await updateDoc(docRef, formData);
    alert("Patient info updated successfully!");
  };

  return (
    <>
      <div className='w-full min-h-screen flex flex-col'>
        <Header/>
        <div className="flex flex-col flex-1 items-center justify-center bg-[#F5F3EA]">
          <div className="bg-[#F5F3EA] rounded-lg w-full max-w-lg">
            <h2 className="text-[#4F4F4F] font-bold text-2xl text-center lg:text-4xl dm-sans mb-10 md:mb-24">
              Patient Information
            </h2>

            <form className="space-y-[10px]">
              {[
                { label: "Patient No.:", name: "patientNo", placeholder: "Patient Number" },
                { label: "First Name:", name: "firstName", placeholder: "First name" },
                { label: "Last Name:", name: "lastName", placeholder: "Last name" },
                { label: "Street:", name: "street", placeholder: "Street" },
                { label: "City:", name: "city", placeholder: "City" },
                { label: "State:", name: "state", placeholder: "State" },
                { label: "Country:", name: "country", placeholder: "Country" },
                { label: "Telephone:", name: "telephone", placeholder: "Telephone number" },
                { label: "Contact Email:", name: "email", placeholder: "Contact email" },
              ].map((field) => (
                <div key={field.name} className="flex items-center">
                  <label className="w-40 text-gray-700">{field.label}</label>
                  <input
                    type="text"
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="flex-none w-64 bg-white border border-gray-500 rounded px-3 py-1 focus:outline-none focus:border-blue-500"
                  />
                </div>
              ))}
            </form>

            <div className="flex justify-center space-x-6 mt-8">
              <button
                type="button"
                onClick={handleSave}
                className="bg-[#008C99] text-white text-[1.125rem] font-bold rounded-[40px] px-18 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
              >
                Update Patient
              </button>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="bg-white text-[#4F4F4F] text-[1.125rem] font-bold rounded-[40px] border border-[#CAC4D0] px-15 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
};

export default PatientForm;
