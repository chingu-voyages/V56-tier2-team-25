import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import Header from "../Nav/Header";
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
  const [showModal, setShowModal] = useState(false);

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
    setShowModal(true);
  };

  const styles = {
    modalOverlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 flex-col items-center py-11 md:py-4 md:px-2 md:justify-center bg-[#F5F3EA]">
          <h2 className="text-[#4F4F4F] font-bold text-2xl text-center lg:text-4xl dm-sans mb-10 md:mb-20">
            Patient Information
          </h2>

          <form className="flex flex-col">
            {[
              {
                label: "Patient No.:",
                name: "patientNo",
                placeholder: "Patient Number",
                mobileLabel: "Patient Number",
              },
              {
                label: "First Name:",
                name: "firstName",
                placeholder: "First name",
                mobileLabel: "First Name",
              },
              {
                label: "Last Name:",
                name: "lastName",
                placeholder: "Last name",
                mobileLabel: "Last Name",
              },
              {
                label: "Street:",
                name: "street",
                placeholder: "Street",
                mobileLabel: "Street",
              },
              {
                label: "City:",
                name: "city",
                placeholder: "City",
                mobileLabel: "City",
              },
              {
                label: "State:",
                name: "state",
                placeholder: "State",
                mobileLabel: "State",
              },
              {
                label: "Country:",
                name: "country",
                placeholder: "Country",
                mobileLabel: "Country",
              },
              {
                label: "Telephone:",
                name: "telephone",
                placeholder: "Telephone number",
                mobileLabel: "Telephone",
              },
              {
                label: "Contact Email:",
                name: "email",
                placeholder: "Contact email",
                mobileLabel: "Email",
              },
            ].map((field) => (
              <div
                key={field.name}
                className="flex flex-col md:flex-row justify-between items-center mb-[18px] px-10 md:px-0 md:gap-20"
              >
                <label className="md:hidden font-semibold text-sm text-[#333333] self-start mb-1">
                  {field.mobileLabel}
                </label>
                <label className="hidden md:block font-semibold text-xl dm-sans text-[#333333] mb-0">
                  {field.label}
                </label>
                <input
                  type="text"
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="bg-white border w-[331px] md:w-[262px] border-[#333333] rounded-[10px] px-3 py-2 text-[#333333]"
                />
              </div>
            ))}
          </form>

          <div className="flex flex-col md:flex-row items-center justify-center gap-7 mt-10 mb-12 md:mb-0">
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
          {showModal && (
            <div
              style={styles.modalOverlay}
              className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50"
            >
              <div className="bg-white p-20 rounded-[10px] shadow-lg text-center max-w-md w-full">
                <p className="mb-10 text-[20px] dm-sans font-semibold">
                  Patient updated!
                </p>
                <button
                  className="bg-[#008C99] text-white text-[1rem] font-bold rounded-[40px] px-10 py-4 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
                  onClick={() => {
                    navigate(-2);
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PatientForm;
