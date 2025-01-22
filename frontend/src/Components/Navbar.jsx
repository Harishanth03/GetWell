import React, { useContext, useState } from 'react'

import { assets } from '../assets/assets'

import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';

const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);

    const {token , setToken} = useContext(AppContext);

    const logOut = () => {

        setToken(false);

        localStorage.removeItem('token');

        navigate('/')

    }

    const toggleMenu = () => {

        setShowMenu((prev) => !prev);

    }

    const closeMenu = () => {

        setShowMenu(false);
    }

  return (

    <div className='flex items-center justify-between text-sm py-4 mb-5 '>

        <img onClick={() => navigate('/')} className='w-[140px] cursor-pointer'  src={assets.logo} alt="" />

        <ul className='hidden md:flex items-start py-2 gap-5 text-[#49577e] text-base'>

            <NavLink to={'/'}>

                <li className="py-1">Home</li>

                <hr className='border-none outline-none h-0.5 bg-primary w-full m-auto hidden'/>
                
            </NavLink>

            <NavLink to={'/doctors'}>

                <li className="py-1">All Doctors</li>

               <hr  className='border-none outline-none h-0.5 bg-primary w-full m-auto hidden'/>

            </NavLink>

            <NavLink to={'/about'}>

                <li className="py-1">About</li>

               <hr className='border-none outline-none h-0.5 bg-primary w-full m-auto hidden' />

            </NavLink>

            <NavLink to={'/contact'}>

                <li className="py-1">Contact</li>

               <hr  className='border-none outline-none h-0.5 bg-primary w-full m-auto hidden'/>

            </NavLink>

        </ul>

        <div className='flex items-center cursor-pointer gap-4'>

            {token ? 

                <div className='flex items-center gap-2 cursor-pointer group relative'> 
                    
                    <img className='w-11 rounded-full ' src={assets.profile_pic} alt="" />

                    <img className='w-3' src={assets.dropdown_icon} alt="" />

                    <div className='absolute top-0 right-0 pt-14 text-base font-normal text-[#49577e] hidden group-hover:block'>

                        <div className='min-w-48 bg-stone-100 flex flex-col gap-3 p-4 rounded-md'>

                            <p onClick={() => navigate('/my-profile')} className='hover:text-black'>My profile</p>

                            <p onClick={() => navigate('/my-appointments')} className='hover:text-black'>My Appointment</p>

                            <p onClick={logOut} className='hover:text-black'>Logout</p>

                        </div>

                    </div>
                
                 </div> 

                : <button onClick={() => navigate('/login')} className='focus:outline-none bg-primary text-white text-base py-2 px-4  md:py-3 md:px-5 cursor-pointer text-center rounded-md md:block'>Sign Up</button>

            }

            <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

            {/* ============================================= MOBILE MENU ================================================*/}

            <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>

                <div className='flex items-center justify-between px-5 py-6'>

                    <img className='w-36' src={assets.logo} alt="" />

                    <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />

                </div>

                <ul className='flex flex-col items-center gap-5 mt-5 px-5 text-base font-normal'>

                    <NavLink  onClick={() => setShowMenu(false)} to={'/'}><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>

                    <NavLink  onClick={() => setShowMenu(false)} to={'doctors'}><p className='px-4 py-2 rounded inline-block'>All Doctors</p></NavLink>

                    <NavLink  onClick={() => setShowMenu(false)} to={'/about'}><p className='px-4 py-2 rounded inline-block'>About Us</p></NavLink>

                    <NavLink  onClick={() => logOut} to={'/contact'}><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>

                </ul>

            </div>

        </div>

    </div>

  )

}

export default Navbar