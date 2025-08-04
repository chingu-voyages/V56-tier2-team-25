import Footer from "./Footer"
import Header from "./Header"

const AddPatient = () => {

    const inputs = [
        { label: "Patient No:", type: 'text', name: 'patientNo'},
        { label: "First Name:", type: 'text', name: 'firstName' },
        { label: "Last Name:", type: 'text', name: 'lastName' },
        { label: "Street:", type: 'text', name: 'street' },
        { label: "City:", type: "text", name: 'city' },
        { label: "State:", type: 'text', name: 'state' },
        { label: "Country:", type: 'text', name: 'country' },
        { label: "Telephone:", type: 'tel', name: 'telephone' },
        { label: "Contact Email:", type: 'email', name: 'email' }, 
    ]

    const formInputs = inputs.map(input => {
        return (
            <div className="flex items-center justify-between mb-[18px]">
                <label 
                    htmlFor={input.name}
                    className="font-semibold text-xl dm-sans text-[#333333]"
                >
                    {input.label}
                </label>
                <input 
                    type={input.type} 
                    id={input.name} 
                    name={input.name}
                    className="bg-white w-31 border border-[#333333] px-2 py-1 text-[#333333]"
                /> 
            </div>
        )
    })

    const submitForm = (e) => {
        e.preventDfault()
        const formElement = e.currentTarget
        const formData = new FormData(formElement)
        formElement.reset()
    }
    
    return (
        <>
        <section className="min-h-screen w-full flex flex-col">
            <Header/>
            <div className="flex-1 flex flex-col items-center justify-center bg-[#F5F3EA]">
                <h2 className="text-4xl font-bold text-[#4F4F4F] mb-24">Patient Information</h2>
                <form onSubmit={submitForm} className="flex flex-col w-[314px]">
                    {formInputs}
                </form>
                <div className="flex gap-6 mt-10">
                        <button 
                            type="submit"
                            className="bg-[#008C99] text-white text-[1.125rem] font-bold rounded-[40px] px-10 py-5 cursor-pointer shadow-md/50"
                        >
                            Add New Patient
                        </button>
                        <button
                            type="button"
                            className="bg-white text-[#4F4F4F] border border-[#CAC4D0] text-[1.125rem] font-bold rounded-[40px] px-10 py-5 cursor-pointer shadow-md/50"
                        >
                            Cancel
                        </button>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default AddPatient