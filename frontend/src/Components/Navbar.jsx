import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

    <div className='flex items-center justify-between text-sm py-4 mb-5 '>

        <img className='w-[150]'  src={assets.logo} alt="" />

        <ul className='hidden md:flex items-center gap-5 text-[#49577e] text-base'>

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

        <div>

            <button>Create Account</button>

        </div>

    </div>
  )
}

export default Navbar