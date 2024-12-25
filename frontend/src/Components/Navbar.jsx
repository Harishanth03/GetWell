import React, { useState } from 'react'

import { assets } from '../assets/assets'

import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);

    const [token , setToken] = useState(true);

  return (

    <div className='flex items-center justify-between text-sm py-4 mb-5 '>

        <Link to={'/'}><img to={'/'} className='w-[140px] cursor-pointer'  src={assets.logo} alt="" /></Link>

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

        <div className='flex items-center gap-4'>

            {token ? 

                <div className='flex items-center gap-2 cursor-pointer group relative'> 
                    
                    <img className='w-11 rounded-full ' src={assets.profile_pic} alt="" />

                    <img className='w-3' src={assets.dropdown_icon} alt="" />

                    <div className='absolute top-0 right-0 pt-14 text-base font-normal text-[#49577e] hidden group-hover:block'>

                        <div className='min-w-48 bg-stone-100 flex flex-col gap-3 p-4 rounded-md'>

                            <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My profile</p>

                            <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointment</p>

                            <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>

                        </div>

                    </div>
                
                 </div> 

                : <button onClick={() => navigate('/login')} className='focus:outline-none bg-primary text-white text-base  py-3 px-5 cursor-pointer text-center rounded-md md:block'>Create Account</button>

            }

        </div>

    </div>

  )

}

export default Navbar