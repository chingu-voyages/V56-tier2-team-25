import logo from '../assets/logo.png'
import Navbar from './Navbar'

const Header = () => {

    const date = new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})

    return (
        <header className="w-full transition-all duration-300 shadow-2xl">
            <div className="container mx-auto flex items-center justify-between py-[28px]">
                <div className='flex items-center gap-8'>
                    <a href="#">
                        <div className='flex gap-7 items-center'>
                            <img src={logo} alt="logo"/>
                            <h1 className='text-[2rem] font-medium text-shadow-md text-[#006B44]'>Surgery Status</h1>
                        </div>
                    </a>
                    <span className='ml-1 mt-[.6rem] text-[#4F4F4F] font-medium'>{date}</span>
                </div>
                <Navbar/>
            </div>
        </header>
    )
}

export default Header