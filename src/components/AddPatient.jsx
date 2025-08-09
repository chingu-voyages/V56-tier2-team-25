
import { db } from '../../firebase';
import { doc, setDoc } from "firebase/firestore";
import Footer from "./Footer"
import Header from "./Header"

const AddPatient = () => {

    const inputs = [
        { label: "Patient No.:", type: 'text', name: 'patientNo', placeholder: 'Patient number'},
        { label: "First Name:", type: 'text', name: 'firstName', placeholder: 'First name' },
        { label: "Last Name:", type: 'text', name: 'lastName', placeholder: 'Last name' },
        { label: "Street:", type: 'text', name: 'street', placeholder: 'Street' },
        { label: "City:", type: "text", name: 'city', placeholder: 'City' },
        { label: "State:", type: 'text', name: 'state', placeholder: 'State' },
        { label: "Country:", type: 'text', name: 'country', placeholder: 'Country' },
        { label: "Telephone:", type: 'tel', name: 'telephone', placeholder: 'Telephone number' },
        { label: "Contact Email:", type: 'email', name: 'email', placeholder: 'Contact email' }, 
    ]

    const formInputs = inputs.map(input => {
        return (
            <div className="flex items-center justify-between mb-[18px]" key = {input.name}>
                <label 
                    htmlFor={input.name}
                    className="font-semibold text-xl dm-sans text-[#333333] mr-[40px]"
                >
                    {input.label}
                </label>
                <input 
                    type={input.type} 
                    id={input.name} 
                    name={input.name}
                    placeholder={input.placeholder}
                    className="bg-white border w-[230px] border-[#333333] rounded-[10px] px-3 py-2 text-[#333333]"
                /> 
            </div>
        )
    })

    const submitForm = async (e) => {
        e.preventDefault()
        const formElement = e.currentTarget
        const formData = new FormData(formElement)
        const dataForDB = Object.fromEntries(formData.entries());
        if (dataForDB.patientNo !== "") {
            await setDoc(doc(db, "patient_info", dataForDB.patientNo), dataForDB);
            console.log("Created");
        } else {
            console.log("Not created");
        }
        formElement.reset()
    }
    
    return (
        <>
        <section className="min-h-screen w-full flex flex-col">
            <Header/>
            <div className="flex-1 flex flex-col items-center justify-center bg-[#F5F3EA]">
                <h2 className="text-4xl font-bold text-[#4F4F4F] mb-24">Patient Information</h2>
                <form onSubmit={submitForm} className="flex flex-col">
                    {formInputs}
                    <div className="flex gap-6 mt-10">
                            <button 
                                type="submit"
                                className="bg-[#008C99] text-white text-[1.125rem] font-bold rounded-[40px] px-18 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
                                >
                                Add New Patient
                            </button>
                            <button
                                type="button"
                                className="bg-white text-[#4F4F4F] text-[1.125rem] font-bold rounded-[40px] border border-[#CAC4D0] px-15 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
                                >
                                Cancel
                            </button>
                    </div>
                </form>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default AddPatient