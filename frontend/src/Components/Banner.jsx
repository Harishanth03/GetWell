import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='flex bg-primary rounded-lg px-6 md:px-14 lg:px-12 my-20 md:mx-10'>

        {/* ======================================================= LEFT =============================================== */}

        <div>

            <div>

                <p>Book Appointment</p>
                <p>With 50+ Trusted Doctors</p>

            </div>

            <button>Create Account</button>
            
        </div>

        {/* ======================================================= RIGHT =============================================== */}

        <div>

            <img src={assets.appointment_img} alt="" />

        </div>

    </div>
  )
}

export default Banner