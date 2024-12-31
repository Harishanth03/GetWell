import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className=''>

        {/* ======================================================= LEFT =============================================== */}

        <div>

            <p>Book Appointment</p>
            <p>With 50+ Trusted Doctors</p>

        </div>

        <button>Create Account</button>

        {/* ======================================================= RIGHT =============================================== */}

        <div>

            <img src={assets.appointment_img} alt="" />

        </div>

    </div>
  )
}

export default Banner