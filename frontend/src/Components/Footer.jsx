import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {

  return (

    <div className=''>

        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/* ================================================ LEFT =================================================== */}

            <div>

                <img className='mb-5 w-30' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>At Getwell, we are dedicated to providing compassionate, personalized, and top-quality healthcare to our community. Our team of experienced professionals works tirelessly to ensure you and your loved ones receive the care you deserve. Whether it's preventive care, treatment, or recovery, we’re here to support your journey to better health. Thank you for trusting Getwell with your well-being.</p>

            </div>

            {/* ================================================ CENTER ================================================== */}

            <div>

                <p className='text-xl font-medium'>GETWELL</p>

                <ul>

                    <li>Home</li>
                    <li>ABoutUs</li>
                    <li>ContactUs</li>
                    <li>privacy Policy</li>

                </ul>

            </div>

            {/* ================================================ RIGHT =================================================== */}

            <div>

                <p  className='text-xl font-medium'>GET IN TOUCH</p>

                <ul>

                    <li>+764132578</li>
                    <li>Harishanth08@gmail.com</li>

                </ul>

            </div>

        </div>

        {/* ================================================ COPY RIGHT ================================================== */}

        <div>

            <hr />
            <p>Copyright 2024@ Getwell - All Right Reserved </p>

        </div>

    </div>

  )

}

export default Footer