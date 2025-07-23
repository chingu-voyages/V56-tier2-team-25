const Navbar = () => {
    return (
        <nav className="flex items-center space-x-17 text-[#5D5A88] nav-links text-[1.125rem]">
            <a href="#">Home</a>
            <a href="#">Patient</a>
            <a href="#">Help</a>
            <a href="#" >
                <button 
                    className="text-white bg-[#4F3788] rounded-[30px] px-[24px] py-[18px] border-2 border-[#D4D2E3]
                    shadow-xl/30 cursor-pointer">Log In
                </button>
            </a>
        </nav>
        
    )
}

export default Navbar