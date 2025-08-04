import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
    const [ isOpen, setIsOpen ] = useState(false);

    const linksArr = [
        { name: 'Home' }, 
        { name: 'Patient', dropdown: ['Patient Information', 'Patient Status Update', 'Patient Status'] }, 
        { name: 'FAQ' }, 
        { name: 'Log In', path: '/login' }
    ]

    const links = linksArr.map((link, index) => {

        const isLastLink = index === linksArr.length - 1;

        const linkStyle = isLastLink 
        ? 'text-white bg-[#008C99] rounded-[30px] px-[24px] py-[14px] shadow-md/50 cursor-pointer hover:bg-[#A8D5BA]'
        : 'text-[#4F4F4F] dm-sans text-[1.125rem] hover:text-[#333] cursor-pointer'

        if (link.dropdown) {
            return (
                <div 
                    key={index} 
                    className="relative group" 
                    onMouseEnter={() => setIsOpen(true)} 
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <div className={linkStyle}>
                        {link.name}  {isOpen ? <FontAwesomeIcon icon={faAngleUp}/> : <FontAwesomeIcon icon={faAngleDown}/> }
                    </div>
                    <div className="absolute w-full h-5 top-full left-0 bg-transparent"></div>
                    {isOpen && (
                        <div className={`absolute w-[220px] flex-col bg-white rounded shadow-lg mt-5 px-5 pb-5 z-10 border border-[#D4D2E3]`}>
                        {link.dropdown.map((item, subIndex) => {

                            const isLastSublink = subIndex === link.dropdown.length - 1;

                            const subLinkStyle = isLastSublink ? 'pt-5' : 'border-b border-[#D4D2E3] pb-5 pt-5';
                            
                            return (
                                //If statement only included because not all links have paths. Take out when they're all there
                                <div 
                                    key={subIndex} 
                                    className={subLinkStyle}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className='text-[#79747E] hover:text-[#4F4F4F] dm-sans hover:font-semibold cursor-pointer'>
                                        {item}
                                    </span>
                                </div>
                            )})
                        }
                    </div>
                    )}
                    
                    
                </div>
            )
        }

        return (
            //If statement only included because not all links have paths. Take out when they're all there
            <div key={index} className={linkStyle} onClick={() => {if (link.path) navigate(link.path);}}>
                {link.name}
            </div>
        );
    });
        
        
    

    return (
        <nav className="hidden lg:flex items-center space-x-17">
            {links}
        </nav>
    )
}

export default Navbar