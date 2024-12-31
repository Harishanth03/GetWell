import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
import { assets } from '../assets/assets';

const Appointment = () => {

  const {docId} = useParams();

  const {doctors} = useContext(AppContext);

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

        <div>

          {/* ================================================ DOC INFO ================================================= */}

          <p>{docInfo.name} <img src={assets.verified_icon} alt="" /></p>

          <div>

            <p>{docInfo.degree} - {docInfo.speciality}</p>

            <button>{docInfo.experience}</button>

          </div>

          {/* ================================================ Comment ================================================= */}

          <div>

            <p>About <img src={assets.info_icon} alt="" /></p>

            <p>{docInfo.about}</p>

          </div>


        </div>

      </div>

    </div>
  )
}

export default Appointment