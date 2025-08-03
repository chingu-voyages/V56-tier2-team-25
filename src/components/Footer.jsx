import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="mt-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-37 text-center mb-20">
                    <div>
                        <h3 className="font-bold text-[1.25rem] dm-sans text-[#4F4F4F] mb-10">Product</h3>
                        <ul className="space-y-4 text-[rgb(126,126,126)] text-[1.125rem]">
                            <li><a href="#" className="hover:text-[#4F4F4F]">FAQ</a></li>
                            <li>
                                <a
                                    href="https://github.com/chingu-voyages/V56-tier2-team-25"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#4F4F4F]"
                                >
                                    Our Repository
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold dm-sans text-[1.25rem] text-[#4F4F4F] mb-10">Design Team</h3>
                        <ul className="space-y-4 text-[#7E7E7E] text-[1.125rem]space-y-[2px]">
                            <li>Mingshi</li>
                            <li>Nidhi</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold dm-sans text-[1.25rem] text-[#4F4F4F] mb-10">Dev Team</h3>
                        <ul className="space-y-2 text-[#7E7E7E] text-[1.125rem]">
                            <li><a href="https://www.linkedin.com/in/rubenaguilar-/">Ben</a></li>
                            <li>Dylan</li>
                            <li>Matthew</li>
                            <li>Omar</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold dm-sans text-[1.25rem] text-[#4F4F4F] mb-10">Scrum Master</h3>
                        <ul className="space-y-4 text-[#7E7E7E] text-[1.125rem]">
                            <li>Tanika</li>
                            <li>Jamika</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold dm-sans text-[1.25rem] text-[#4F4F4F] mb-10">Voyage Guide</h3>
                        <ul className="space-y-4 text-[#7E7E7E] text-[1.125rem]">
                            <li>Valeriy </li>
                        </ul>
                    </div>
                </div>

                <hr className="my-4 border-gray-300" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
                    <div className="flex gap-7 items-center my-11">
                        <img src={logo} alt="logo" className="" />
                        <span className="text-[2rem] font-medium text-shadow-md text-[#006B44]">Surgery Status</span>
                    </div>
                    <p className="dm-sans text-[1.125rem] text-[#4F4F4F]">Copyright © 2025 Chingu V56 T2 T25 | All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
