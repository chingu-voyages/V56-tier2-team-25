import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'

const MobileMenu = ( { menuOpen, setMenuOpen, linksArr }) => {

    const navigate = useNavigate()

    useEffect(() => {
        menuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow=''
        return () => document.body.style.overflow = ''
    }, [menuOpen])

    return (
        <>
            {menuOpen && (
                <div
                    className="fixed inset-0 backdrop-brightness-75 z-40"
                    onClick={() => setMenuOpen(false)}
                />
            )}
            <div
            
                className={`
                    fixed top-0 left-0 h-screen w-[77%] bg-[#A8D5BA] flex flex-col pt-30 px-7 transition-all duration-300 ease-in-out z-50
                    ${ menuOpen ? 'translate-x-0' : '-translate-x-full' }
                `}
            >
                <button 
                    onClick={() => setMenuOpen(false)} 
                    className="absolute flex items-center justify-center w-8 h-8 top-8 right-8 text-3xl bg-[#4F4F4F] focus:outline-none cursor-pointer rounded-full text-white"
                    aria-label='Close Menu'
                >
                    &times;
                </button>

                <nav className="flex flex-col mt-8 space-y-8">
                    {linksArr.map((link, i) => {
                        if (link.dropdown) {
                            return link.dropdown.map((item, j) => (
                                <div
                                    key={`${i} - ${j}`}
                                    className="dm-sans"
                                    onClick={() => {
                                        setMenuOpen(false)
                                        navigate(item.path)
                                    }}
                                >   
                                    <div className="flex items-center gap-4">
                                        {item.icon && <span className=" text-white">{item.icon}</span>}
                                        {item.name}
                                    </div>
                                    
                                </div>
                            ))
                        }
                        return (
                            <div
                                key={i}
                                className="dm-sans"
                                onClick={() => {
                                    setMenuOpen(false)
                                    if (link.action) link.action()
                                    else if (link.path) navigate(link.path)
                                }}
                            >
                                <div className="flex items-center gap-4">
                                    {link.icon && <span className="text-white">{link.icon}</span>}
                                    {link.name}
                                </div>
                                

                            </div>
                        )   
                    })}       

                </nav>
                
                
            </div>
        </>
    )
}

export default MobileMenu