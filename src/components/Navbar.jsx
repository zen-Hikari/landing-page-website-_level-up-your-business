import './Global.css'
import { useState } from 'react'
function Navbar() {
    const [isMenuOpen,setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return(
        <header className='py-5'>
            <nav className='flex justify-center '>
               <div className="container flex items-center justify-center">
               <div className="logo">
                    <h1 className='nav-logo text-3xl font-medium'>
                    <i className="nav-ico ai-arrow-up"></i>
                        UP BUSINESS
                    </h1>
                </div>

                

                <div className={`${isMenuOpen ? ' top-40 ' : 'hidden'} link-menu font-medium flex ml-auto mr-20 gap-8 xl:flex xl:flex-row flex-row`}>
                    <a href="">Home</a>
                    <a href="">How We Work</a>
                    <a href="">Our team</a>
                    <a href="">Pricing</a>

                    <div className="btn">
                        <a href="" className='text-white py-2 px-5 rounded-lg'>Book a call</a>
                    </div>
                </div>

                <button className="hamburger ml-auto xl:hidden lg:hidden flex flex-col space-y-2"
                onClick={toggleMenu}
                >
                    <span className={` rounded-4xl bg-black w-8  h-[4px] ${isMenuOpen ? 'rotate-45 translate-y-2' : ''} transition-all`}></span>
                    <span className={` rounded-4xl bg-black w-8 h-[4px] ${isMenuOpen ? 'opacity-0' : ''} transition-all`}></span>
                    <span className={` rounded-4xl bg-black w-8 h-[4px] ${isMenuOpen ? '-rotate-45 -translate-y-4' : ''} transition-all`}></span>
                </button>

               </div>
            </nav>
        </header>
    )
}

export default Navbar