import React from 'react'
import { doctors } from '../assets/assets'

const TopDoctors = () => {

  return (

    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:my-0'>

      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>

      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of doctors</p>

      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>

        {doctors.slice(0,10).map((doctors , index) => (

          <div key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer'>

            <img src={doctors.image} alt="" />

            <div>

              <div>

                <p></p> <p>Available</p>

              </div>

              <p>{doctors.name}</p>

              <p>{doctors.speciality}</p>

            </div>

          </div>

        ))}

      </div>

      <button>More</button>

    </div>

  )

}

export default TopDoctors