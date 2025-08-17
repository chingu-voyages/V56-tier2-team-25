import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleUp, faArrowRightFromBracket, faSpinner, faClipboard, faPencil} from '@fortawesome/free-solid-svg-icons';
import {faHouse, faHeart, faCircleQuestion,} from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import { signOut, getAuth } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearUserData } from '../../store/userSlice';
import MobileMenu from './MobileMenu';


const Navbar = ( {menuOpen, setMenuOpen }) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.userData);
    const auth = getAuth();

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
    }, [menuOpen])
    
    const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(clearUserData()); // THIS line clears redux + localStorage
      navigate('/');
    });
  };

    const linksArr = [
        { name: 'Home', path: '/', icon: <FontAwesomeIcon icon={faHouse} size='2xl' /> },
        {
            name: 'Patient',
            dropdown: user
                ? [
                    { name: 'Patient Information', path: '/viewPatient', icon: <FontAwesomeIcon icon={faClipboard} size='2xl'/>},
                    { name: 'Patient Status Update', path: '/findPatient', icon: <FontAwesomeIcon icon={faSpinner}size='2xl'/> },
                    { name: 'Patient Status', path: '/waitingRoom', icon: <FontAwesomeIcon icon={faHeart} size='2xl'/> },
                    ...(user?.role === 'Admin' ? [{ name: 'Edit Patient Information', path: '/editPatient', icon: <FontAwesomeIcon icon={faPencil} size='2xl'/>}] : [])
                ]
                : [
                    { name: 'Patient Status', path: '../guest', icon: <FontAwesomeIcon icon={faSpinner}size='2xl'/> }
                ]
        },
        { name: 'FAQ', path: '/faq', icon: <FontAwesomeIcon icon={faCircleQuestion} size='2xl'/> },
        user
            ? { name: 'Sign Out', action: handleSignOut, icon: <FontAwesomeIcon icon={faArrowRightFromBracket} size='2xl'/>}
            : { name: 'Log In', path: '/login', icon: <FontAwesomeIcon icon={faArrowRightFromBracket} size='2xl'/>}
    ];

    const links = linksArr.map((link, index) => {
        const isLastLink = index === linksArr.length - 1;

        const linkStyle = isLastLink 
            ? 'text-white bg-[#008C99] rounded-[30px] px-[24px] py-[14px] shadow-md/50 cursor-pointer hover:bg-[#A8D5BA]'
            : 'text-[#4F4F4F] dm-sans text-[1.125rem] hover:text-[#333] cursor-pointer';

        if (link.dropdown) {
            return (
                <div 
                    key={index} 
                    className="relative group" 
                    onMouseEnter={() => setIsOpen(true)} 
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <div className={linkStyle}>
                        {link.name} {isOpen ? <FontAwesomeIcon icon={faAngleUp}/> : <FontAwesomeIcon icon={faAngleDown}/> }
                    </div>
                    <div className="absolute w-full h-5 top-full left-0 bg-transparent"></div>
                    {isOpen && (
                        <div className="absolute w-[225px] flex-col bg-white rounded shadow-lg mt-5 px-5 pb-5 z-10 border border-[#D4D2E3]">
                            {link.dropdown.map((item, subIndex) => {
                                const isLastSublink = subIndex === link.dropdown.length - 1;
                                const subLinkStyle = isLastSublink ? 'pt-5' : 'border-b border-[#D4D2E3] pb-5 pt-5';
                                return (
                                    <div 
                                        key={subIndex} 
                                        className={subLinkStyle}
                                        onClick={() => {
                                            setIsOpen(false);
                                            navigate(item.path);
                                        }}
                                    >
                                        <span className='text-[#79747E] hover:text-[#4F4F4F] dm-sans hover:font-semibold cursor-pointer'>
                                            {item.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            );
        }

        return (
            <div 
                key={index} 
                className={linkStyle} 
                onClick={() => {
                    if (link.action) {
                        link.action();
                    } else if (link.path) {
                        navigate(link.path);
                    }
                }}
            >
                {link.name}
            </div>
        );
    });

    return (
        <>
            
            <nav className="hidden lg:flex items-center space-x-17">
                {links}
            </nav>
            <MobileMenu
                linksArr={linksArr}
                menuOpen={menuOpen} 
                setMenuOpen={setMenuOpen}
            />
        </>
    );
};

export default Navbar;