import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const [ isOpen, setIsOpen ] = useState(false)

    const linksArr = [
        { name: 'Home' }, 
        { name: 'Patient', dropdown: ['Patient Information', 'Patient Status Update', 'Patient Status'] }, 
        { name: 'Help' }, 
        { name: 'Log In' }
    ]

    const handleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const links = linksArr.map((link, index) => {

        const isLastLink = index === linksArr.length - 1

        const linkStyle = isLastLink 
        ? 'text-white bg-[#4F3788] rounded-4xl px-[24px] py-[18px] border-1 border-[#D4D2E3] shadow-md/60 cursor-pointer hover:bg-[#56428a]'
        : 'text-[#5D5A88] dm-sans text-[1.125rem] hover:text-[#4F378A]'

        if (link.dropdown) {
            return (
                <div key={index} className="relative group" onClick={handleDropdown}>
                    <a href="#" className={linkStyle}>
                        {link.name} {isOpen ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
                    </a>
                    <div className={`absolute ${isOpen ? 'flex' : 'hidden'} w-[220px] flex-col bg-white rounded shadow-lg mt-5 px-5 pb-5 z-10 border border-[#D4D2E3]`}>
                        {link.dropdown.map((item, subIndex) => {

                            const isLastSublink = subIndex === link.dropdown.length - 1

                            const subLinkStyle = isLastSublink ? 'pt-5' : 'border-b border-[#D4D2E3] pb-5 pt-5'
                            
                            return (
                                <div key={subIndex} className={subLinkStyle}>
                                    <a href="#" key={subIndex} className='text-[#79747E] hover:text-[#4F378A] dm-sans hover:font-semibold'>
                                        {item}
                                    </a>
                                </div>
                            )})
                        }
                    </div>
                </div>
            )
        }
        return <a key={index} href='#' className={linkStyle}>{link.name}</a>
    })

    return (
        <nav className="hidden md:flex items-center space-x-17">
            {links}
        </nav>
    )
}

export default Navbar