import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../Context/AdminContext'
import { Navigate } from 'react-router-dom'

const Navbar = () => {

    const {atoken , setatoken} = useContext(AdminContext);

    const logOut = () => {
        
        Navigate('/');
        atoken && setatoken("");
        atoken && setatoken(localStorage.removeItem('atoken'))
    }

  return (

    <div className='flex justify-between px-4 sm:px-10 py-3 border-b bg-white'>

        <div className='flex items-center gap-2 text-sm'>

            <img className='w-36 sm:w-40 cursor-pointer' src={assets.logo}/>

            <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{atoken ? "Admin" : "Doctor"}</p>

        </div>

        <button onClick={logOut} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>

    </div>
  )
}

export default Navbar