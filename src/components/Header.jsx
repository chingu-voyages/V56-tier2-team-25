import logo from '../assets/logo.png'

const Header = () => {

    const date = new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})

    return (
        <header className="w-full z-50 transition-all duration-300 border border-dashed">
            <div className="container px-[52px] py-[38px] flex items-center justify-between">
                <div className='flex items-center gap-7'>
                    <img src={logo} alt="logo"/>
                    <h1 className='text-[2rem] font-medium'>Surgery Status</h1>
                    <span className='ml-1 mt-[.6rem] text-[#4F378A] font-medium'>{date}</span>
                </div>
            </div>
        </header>
    )
}

export default Header