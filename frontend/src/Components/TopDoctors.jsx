import React from 'react'
import { doctors } from '../assets/assets'

const TopDoctors = () => {

  return (

    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:my-0'>

      <h1 >Top Doctors to Book</h1>

      <p>Simply browse through our extensive list of doctors</p>

      <div>

        {doctors.slice(0,10).map((doctors , index) => (

          <div key={index}>

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

    </div>

  )

}

export default TopDoctors