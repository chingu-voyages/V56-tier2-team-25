import Footer from "./Footer"
import Header from "./Header"
import construction from '../assets/construction.png'

const UnderConstruction = () => {
    return (
        <>
            <div className="w-full min-h-screen flex flex-col">
                <Header />
                <section className="flex flex-1 flex-col items-center pt-11 md:pt-0 px-3 md:justify-center bg-[#F5F3EA]">
                    <h2 className="text-[#4F4F4F] text-2xl md:text-4xl dm-sans font-bold px-5 text-center pb-17">Page Under Construction. Sorry For Your Inconvenience.</h2>
                    <div className="w-[60%] flex justify-center">
                        <img className="mb-17" src={construction} alt={'construction worker holding plans'}/>
                    </div>
                    <button
                        type="button"
                        className="bg-white text-[#4F4F4F] text-[1.125rem] font-bold rounded-[40px] border border-[#CAC4D0] px-15 py-6 cursor-pointer shadow-md/60 hover:bg-[#A8D5BA]"
                        onClick={() => navigate(-1)}
                        >
                        Return
                    </button>
                </section>
            </div>
            <Footer/>
        </>
    )
}

export default UnderConstruction