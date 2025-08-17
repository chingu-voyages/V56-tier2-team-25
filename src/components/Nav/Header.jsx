import logo from '../../assets/logo.png';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Header = () => {

    const [ menuOpen, setMenuOpen ] = useState(false)
    const navigate = useNavigate();
    const date = new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})

    return (
        <header className="flex w-full h-[108px] items-center transition-all duration-300 shadow-2xl px-[25px] md:px-0 lg:bg-white bg-[rgba(168,213,186,0.3)]">
                 
            <div className="container mx-auto flex items-center md:px-2 lg:py-[28px]">
                <div 
                className='absolute cursor-pointer z-40 lg:hidden text-3xl'
                onClick={() => setMenuOpen(prev => !prev)}
            >
                &#9776; 
            </div>
                <div className='w-full flex lg:gap-4 items-center justify-center md:justify-start cursor-pointer' onClick={() => navigate("/")} >
                    <img className='hidden md:block' src={logo} alt="logo"/>
                    <h1 className='text-2xl lg:text-[2rem] font-medium text-shadow-md text-[#006B44]'>Surgery Status</h1>
                    <span className='hidden lg:block md:ml-1 lg:mt-[.6rem]  pb-3 lg:pb-0 text-[#4F4F4F] text-xs lg:text-base font-bold lg:font-medium'>{date}</span>
                    <span className='lg:hidden absolute top-20 right-[26px] md:ml-1 lg:mt-[.6rem] pb-3 lg:pb-0 text-[#4F4F4F] text-[.75rem] lg:text-base font-bold lg:font-medium'>{date}</span>

                </div>
                
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
            </div>
            
        </header>
    )
}

export default Header