import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 mt-8 text-[#4F378A] text-sm">
            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 text-center sm:text-left">
                    <div>
                        <h3 className="font-semibold mb-1">Product</h3>
                        <ul className="space-y-[2px]">
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">FAQ</a></li>
                            <li>
                                <a
                                    href="https://github.com/chingu-voyages/V56-tier2-team-25"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    Our Repository
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-1">Design Team</h3>
                        <ul className="space-y-[2px]">
                            <li>Mingshi</li>
                            <li>Nidhi</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-1">Dev Team</h3>
                        <ul className="space-y-[2px]">
                            <li>Ben</li>
                            <li>Dylan</li>
                            <li>Matthew</li>
                            <li>Omar</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-1">Scrum Master</h3>
                        <ul className="space-y-[2px]">
                            <li>Nika</li>
                            <li>Ms. Jaydee (Shadow)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-1">Voyage Guide</h3>
                        <ul className="space-y-[2px]">
                            <li>Val</li>
                        </ul>
                    </div>
                </div>

                <hr className="my-4 border-gray-300" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="logo" className="h-5" />
                        <span className="font-semibold text-black text-sm">Surgery Status</span>
                    </div>
                    <p className="text-center sm:text-right">© 2025 Chingu V56 T2 T25 | All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
