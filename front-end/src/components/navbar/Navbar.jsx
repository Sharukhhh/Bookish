import React , {useState} from 'react'
import NavList from '../texts/NavList'

const Navbar = ({isUser}) => {

    const [navMenu , setNavMenu] = useState(false);

    return (
        <>
        <nav className='fixed w-full bg-blue-700 p-6 top-0 z-10'>
            <div className='container mx-auto flex justify-between items-center md:justify-evenly'>
                <div className='text-white text-lg font-bold'>
                    {isUser ? 'WELCOME' : 'ADMIN'}
                </div>
                <ul className='hidden md:flex space-x-8'>
                    <NavList listTitle={'...'}/>
                    <NavList listTitle={'...'}/>
                    <NavList listTitle={'...'}/>
                    <NavList listTitle={'...'}/>
                </ul>
                <div className='md:hidden'>
                    <button onClick={() => setNavMenu(!navMenu)} className='text-white focus:outline-none'>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M4 6h16M4 12h16m-7 6h7">
                        </path>
                    </svg>
                    </button>
                </div>
            </div>

            {navMenu && (
                <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                    navMenu ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <ul className='space-y-4 mt-4'>
                        <NavList listTitle={'...'}/>
                        <NavList listTitle={'...'}/>
                        <NavList listTitle={'...'}/>
                        <NavList listTitle={'...'}/>
                    </ul>
                </div>
            )}    
        </nav>
        </>
    )
}

export default Navbar