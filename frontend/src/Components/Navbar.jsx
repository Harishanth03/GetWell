import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

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

            <button onClick={() => navigate('/login')} className='focus:outline-none bg-transparent text-[#49577e] text-sm border-2 border-primary py-2 px-4 cursor-pointer text-center rounded-md md:block'>Create Account</button>

        </div>

    </div>
  )
}

export default Navbar