import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import hamburger from '../assets/icon-hamburger.svg'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const Navlinks = () => {
        return (
            <>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/services'>Services</NavLink>
            </>
        )
    }

    const handleOpen = () => {
        if (isOpen) setIsOpen(false);
        else setIsOpen(true);
        
        
    }
    return (
        <div className='flex justify-between p-[1rem] text-[white]'>
        <h1 className='font-[Barlow] font-semibold text-[18px] '>sunnyside</h1>
        <div className='lg:hidden z-10'>
            <img onClick={handleOpen} src={hamburger}/>
        </div>
        <div className={` max-[350px]:w-screen max-[350px]:h-screen ${!isOpen ? 'max-[350px]:hidden' : 'max-[350px]:absolute'}`}>
            <div className='max-[350px]:relative max-[350px]:z-10 left-[45%] top-[90px]'>
                <div className='lg:space-x-5 flex flex-col lg:flex-row text-[black] lg:text-[white]'>
                    <Navlinks />
                </div>
            </div>
            <div className='max-[350px]:bg-[white] w-[250px] h-[150px] top-[40px] left-[6%] absolute'>
                <div className='relative'></div>
                <div className="max-[350px]:w-0 h-0 max-[350px]:border-l-[20px] max-[350px]:border-l-transparent max-[350px]:border-b-[20px] max-[350px]:top-[-19px] max-[350px]:left-[92%] max-[350px]:border-b-white max-[350px]:border-r-transparent absolute">
                </div>
            </div>
        </div>
    </div>
    )
}

export default NavBar