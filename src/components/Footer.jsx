import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="pt-12 lg:pt-20 lg:bg-white bg-[rgba(168,213,186,0.3)]">
            <div className="container mx-auto lg:px-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-11 lg:gap-32 text-center lg:mb-20">
                    <div>
                        <h3 className="font-bold text-[1.25rem] dm-sans text-[#4F4F4F] mb-[18px] lg:mb-10">Product</h3>
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
                        <h3 className="font-bold text-[1.25rem] dm-sans text-[#4F4F4F] mb-[18px] lg:mb-10">Design Team</h3>
                        <ul className="space-y-4 text-[#7E7E7E] text-[1.125rem]">
                            <li className='hover:text-[#4F4F4F]'>
                                <a href="https://www.linkedin.com/in/mingshi-hui/">Mingshi</a>
                            </li>
                            <li className='hover:text-[#4F4F4F]'>
                                <a href="https://linkedin.com/in/nidhi-gupta-46423b24">Nidhi</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-[1.25rem] dm-sans text-[#4F4F4F] mb-[18px] lg:mb-10">Dev Team</h3>
                        <ul className="space-y-4 text-[#7E7E7E] text-[1.125rem]">
                            <li className='hover:text-[#4F4F4F]'>
                                <a href="https://www.linkedin.com/in/dylanzimmereads/">Dylan</a>
                            </li>
                            <li className='hover:text-[#4F4F4F]'>
                                <a href="https://linkedin.com/in/matthew-neie">Matthew</a>
                            </li>
                            <li className='hover:text-[#4F4F4F]'>
                                <a href="https://github.com/oramos-correa">Omar</a>
                            </li>
                            <li className='hover:text-[#4F4F4F]'>
                                <a href="https://www.linkedin.com/in/rubenaguilar-/">Ruben</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-[1.25rem] dm-sans text-[#4F4F4F] mb-[18px] lg:mb-10">Scrum Master</h3>
                        <ul className="space-y-4 text-[#7E7E7E] text-[1.125rem]">
                            <li className='hover:text-[#4F4F4F]'>
                                <a href="https://linkedin.com/in/jamika-arnwine/">Jamika (shadow)</a>
                            </li>
                            <li className='hover:text-[#4F4F4F]'>
                                <a href="https://www.linkedin.com/in/tanika-watson">Tanika</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-[1.25rem] dm-sans text-[#4F4F4F] mb-[18px] lg:mb-10">Voyage Guide</h3>
                        <ul className="space-y-4 text-[#7E7E7E] text-[1.125rem]">
                            <li className='hover:text-[#4F4F4F]'>
                                <a href="https://www.linkedin.com/in/valeriylysenko">Valeriy</a>
                            </li>
                        </ul>
                    </div>
                </div>

               

               
            </div>
            <div className='container mx-auto lg:px-2'>
                <hr className="my-4 border-0 lg:border lg:border-gray-200" />
                <div className="flex flex-col sm:flex-row items-center justify-between lg:gap-2 text-gray-500">
                    <div className="flex gap-7 items-center my-6 lg:my-11">
                        <img src={logo} alt="logo" className="" />
                        <span className="text-[2rem] font-medium text-shadow-md text-[#006B44]">Surgery Status</span>
                    </div>
                    <p className="dm-sans text-xs font-semibold lg:font-normal lg:text-[16px] text-[#4F4F4F] mb-3">Copyright © 2025 Chingu V56 T2 T25 | All Rights Reserved</p>
                </div>
            </div>
             
        </footer>
    )
}

export default Footer
