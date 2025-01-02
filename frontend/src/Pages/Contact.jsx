import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {

  return (

    <div>

      <div className='text-center text-2xl text-gray-500'>

        <p>CONTACT <span className='text-primary font-semibold'>US</span></p>

      </div>

      <div className='my-10 flex flex-col gap-10 md:flex-row justify-center mb-28 text-sm'>

        <img className='w-full max-w-[360px] rounded-md' src={assets.contact_image} alt="" />

        <div className='flex  flex-col justify-center items-start gap-6'>

          <p className='font-bold text-md md:text-lg text-primary'>Our OFFICE</p>
          <p className='font-semibold text-md md:text-md text-gray-600'>233 , 1st cross street <br /> Anbuvalipuram, Trincomalee , USA</p>
          <p className='font-semibold text-md md:text-md text-gray-600'>Tel: (076) 4132578 <br /> Email: Harishanth08@gmail.com</p>
          <p className='font-bold text-md md:text-lg text-primary'>Careers at GETWELL</p>
          <p className='font-semibold text-md md:text-md text-gray-600'>Learn more about our teams and job openings.</p>

          <button className='border border-primary py-4 w-full rounded-md hover:cursor-pointer hover:bg-primary hover:text-white'>Explore Jobs</button>

        </div>

      </div>
        
    </div>
  )
}

export default Contact