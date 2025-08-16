import logo from '../../assets/logo.png';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../firebase';

const Header = () => {

    const [ menuOpen, setMenuOpen ] = useState(false)
    const navigate = useNavigate();
    const date = new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})

    return (
        <header className="w-full transition-all duration-300 shadow-2xl lg:bg-white bg-[rgba(168,213,186,0.3)]">
            <div className="container mx-auto flex items-center justify-between px-2 pt-4 lg:py-[28px]">
                <div className='flex flex-col lg:flex-row items-center gap-6 lg:gap-8'>    
                    <div className='flex lg:gap-4 items-center cursor-pointer' onClick={() => navigate("/")} >
                        <img className='hidden lg:block' src={logo} alt="logo"/>
                        <h1 className='text-2xl lg:text-[2rem] font-medium text-shadow-md text-[#006B44]'>Surgery Status</h1>
                    </div>
                    <span className='ml-1 lg:mt-[.6rem] pb-3 lg:pb-0 text-[#4F4F4F] text-xs lg:text-base font-bold lg:font-medium'>{date}</span>
                </div>
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            </div>
        </header>
    )
}

export default Header