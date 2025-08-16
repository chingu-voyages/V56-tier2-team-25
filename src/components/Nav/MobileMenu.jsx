

const MobileMenu = ( { menuOpen, setMenuOpen }) => {

    

    return (
        <div 
            className={`
                fixed top-0 left-0 h-screen w-[72%] bg-[#A8D5BA] flex flex-col pt-30 pl-8  transition-all duration-300 ease-in-out
                ${ menuOpen ? 'translate-x-0' : '-translate-x-full' }`
            }
        >
            <button 
                onClick={() => setMenuOpen(false)} 
                className="absolute flex items-center justify-center w-8 h-8 top-6 right-6 text-3xl bg-[#4F4F4F] focus:outline-none cursor-pointer rounded-full text-[#A8D58A]"
                aria-label='Close Menu'
            >
                &times;
            </button>
            
        
        </div>
        
    )
}

export default MobileMenu