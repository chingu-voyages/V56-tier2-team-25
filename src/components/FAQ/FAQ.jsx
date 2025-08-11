import Footer from "../Footer"
import Header from "../Header"
import Accordion from './Accordion'

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

    const faqs = faqArr.map((faq, index) => {
        return (
            <Accordion key={index} question={faq.question} answer={faq.answer}/>
        )
    })


    return(
        <>
            <div className="w-full min-h-screen flex flex-col">
                <Header/>
                <div className="flex flex-1 flex-col md:justify-center items-center pt-11 md:pt-0 px-8 md:px-0 bg-[#F5F3EA] dm-sans">
                    <h2 className="text-2xl md:text-[3.5rem] font-bold text-[#4F4F4F] mb-12 md:mb-26 text-center">Frequently Asked Questions (FAQ)</h2>
                    <div className="md:w-[866px]">
                        <h3 className="text-[1.25rem] md:text-4xl font-semibold md:font-bold text-[#4F4F4F] mb-[30px] md:mb-13">Surgery Updates</h3>
                        {faqs}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default FAQ