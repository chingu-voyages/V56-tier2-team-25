import Footer from "./Footer"
import Header from "./Header"

const FAQ = () => {

    const faqArr = [
        {
            question: 'How long will the surgery take?',
            answer: `The length of a surgery can vary significantly, from as little as 30 minutes for minor procedures to several 
            hours for more complex surgeries. The duration depends on the type of surgery, its complexity, and the patient's overall health.`
        },
        {
            question: 'Will someone update me during the surgery?',
            answer: `Yes, a staff member will try to reach you when your loved one is in the next stage of the surgery. You can also find updates 
            on our app by going into the Surgery Status page and inputting your loved one’s patient number to find live updates on the surgery.`
        },
        {
            question: 'How will I get updates on the surgery?',
            answer: `You can find live updates on our app, by going into the Surgery Status page and inputting your loved one’s patient number, 
            to search for their surgery status.`
        }
    ]

    const info = faqArr.map((faq, index) => {
        return (
            <div key={index}>
                <h4>{faq.question}</h4>
                <p className="">{faq.answer}</p>
            </div>
        )
    })


    return(
        <div>
            <section className="w-full min-h-screen flex flex-col">
                <Header/>
                <div className="flex flex-1 flex-col justify-center items-center bg-[#F5F3EA] dm-sans">
                    <h2 className="text-[3.5rem] font-bold text-[#4F4F4F]">Frequently Asked Questions (FAQ)</h2>
                    <div className="w-[866px]">
                        <h3 className="text-4xl font-bold text-[#4F4F4F]">Surger Updates</h3>
                        {info}
                    </div>
                    
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default FAQ