const MobileMenu = ( { menuOpen, setMenuOpen }) => {

    // const linksArr = [
    //         { name: 'Home', path: '/' },
    //         {
    //             name: 'Patient',
    //             dropdown: user
    //                 ? [
    //                     { name: 'Patient Information', path: '/viewPatient' },
    //                     { name: 'Patient Status Update', path: '/findPatient' },
    //                     { name: 'Patient Status', path: '/waitingRoom' },
    //                     ...(user?.role === 'Admin' ? [{ name: 'Edit Patient Information', path: '/editPatient' }] : [])
    //                 ]
    //                 : [
    //                     { name: 'Patient Status', path: '../guest' }
    //                 ]
    //         },
    //         { name: 'FAQ', path: '/faq' },
    //         user
    //             ? { name: 'Sign Out', action: handleSignOut }
    //             : { name: 'Log In', path: '/login' }
    //     ];
    
    //     const links = linksArr.map((link, index) => {
    //         const isLastLink = index === linksArr.length - 1;
    
    //         const linkStyle = isLastLink 
    //             ? 'text-white bg-[#008C99] rounded-[30px] px-[24px] py-[14px] shadow-md/50 cursor-pointer hover:bg-[#A8D5BA]'
    //             : 'text-[#4F4F4F] dm-sans text-[1.125rem] hover:text-[#333] cursor-pointer';
    
    //         if (link.dropdown) {
    //             return (
    //                 <div 
    //                     key={index} 
    //                     className="relative group" 
    //                     onMouseEnter={() => setIsOpen(true)} 
    //                     onMouseLeave={() => setIsOpen(false)}
    //                 >
    //                     <div className={linkStyle}>
    //                         {link.name} {isOpen ? <FontAwesomeIcon icon={faAngleUp}/> : <FontAwesomeIcon icon={faAngleDown}/> }
    //                     </div>
    //                     <div className="absolute w-full h-5 top-full left-0 bg-transparent"></div>
    //                     {isOpen && (
    //                         <div className="absolute w-[225px] flex-col bg-white rounded shadow-lg mt-5 px-5 pb-5 z-10 border border-[#D4D2E3]">
    //                             {link.dropdown.map((item, subIndex) => {
    //                                 const isLastSublink = subIndex === link.dropdown.length - 1;
    //                                 const subLinkStyle = isLastSublink ? 'pt-5' : 'border-b border-[#D4D2E3] pb-5 pt-5';
    //                                 return (
    //                                     <div 
    //                                         key={subIndex} 
    //                                         className={subLinkStyle}
    //                                         onClick={() => {
    //                                             setIsOpen(false);
    //                                             navigate(item.path);
    //                                         }}
    //                                     >
    //                                         <span className='text-[#79747E] hover:text-[#4F4F4F] dm-sans hover:font-semibold cursor-pointer'>
    //                                             {item.name}
    //                                         </span>
    //                                     </div>
    //                                 );
    //                             })}
    //                         </div>
    //                     )}
    //                 </div>
    //             )
    //         }
    //     })

    return (
        <div 
            className={`
                fixed top-0 left-0 h-screen w-[72%] bg-[#A8D5BA] flex flex-col items-center justify-center transition-all duration-300 ease-in-out
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