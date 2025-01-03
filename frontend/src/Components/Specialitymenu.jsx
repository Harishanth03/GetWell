import React from 'react'
import { specialityData } from '../assets/assets'
import { Link, Navigate } from 'react-router-dom'

const Specialitymenu = () => {

  return (

    <div className='flex flex-col items-center gap-4 py-16' id='specality'>

        <h1 className='text-3xl font-medium'>Find by Speciality</h1>

        <p className='text-center sm:w-1/3 text-sm'>Simply browse with our expensive list of trusted doctors, schedule your appointment hassle-free.</p>

        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>

            {specialityData.map((data , index) => (

              <Link onClick={() => scrollTo(0,0)} to={`/doctors/${data.speciality}`} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transection-all duration-500' key={index} >
              
                <img className='w-16 sm:w-18 mb-2' src={data.image} alt="" />

                <p>{data.speciality}</p>

              </Link>

            ))}

        </div>

    </div>

  )
  
}

export default Specialitymenu