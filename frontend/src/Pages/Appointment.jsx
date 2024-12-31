import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
import { assets } from '../assets/assets';

const Appointment = () => {

  const {docId} = useParams();

  const {doctors , currencySymbol} = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    
    const docInfo = doctors.find(doc => doc._id === docId);

    setDocInfo(docInfo);

  }

  useEffect(() => {

    fetchDocInfo();

  }, [doctors , docId])

  return  docInfo && (
    
    <div >

      {/* ==================================================== DOC DETAILS =============================================== */}
      <div className='flex flex-col sm:flex-row gap-4'>

        <div>

          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />

        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80] sm:mt-0'>

          {/* ================================================ DOC INFO ================================================= */}

          <p className='flex items-center gap-2 text-xl font-medium text-gray-900'>{docInfo.name} <img className='w-5' src={assets.verified_icon} alt="" /></p>

          <div className='flex items-center gap-2 mt-3 text-sm text-gray-500'>

            <p>{docInfo.degree} - {docInfo.speciality}</p>

            <button className='py-0.5 border px-2 text-xs rounded-full'>{docInfo.experience}</button>

          </div>

          {/* ================================================ Comment ================================================= */}

          <div className=''>

            <p className='flex items-center gap-2 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>

            <p className='text-sm text-gray-500 max-w-[700px] mt-3'>{docInfo.about}</p>

          </div>

          <p>Appointment Fees: <span>{currencySymbol}{docInfo.fees}</span></p>


        </div>

      </div>

    </div>
  )
}

export default Appointment