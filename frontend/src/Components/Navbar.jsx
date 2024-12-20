import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

    <div className='flex items-center justify-between text-sm py-4 mb-4 border-b border-b-gray-400'>

        <img src={assets.logo} alt="" />

        <ul>
            <NavLink>

                <li>Home</li>

                <hr />

            </NavLink>

            <NavLink>

                <li>All Doctors</li>

                <hr />

            </NavLink>

            <NavLink>

                <li>About</li>

                <hr />

            </NavLink>

            <NavLink>

                <li>Contact</li>

                <hr />

            </NavLink>

            <NavLink>

                <li>Home</li>

                <hr />

            </NavLink>

        </ul>

        <div>

            <button>Create Account</button>

        </div>

    </div>
  )
}

export default Navbar