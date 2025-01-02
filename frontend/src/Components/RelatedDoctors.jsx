import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const RelatedDoctors = ({docId , speciality}) => {

    const {doctors} = useContext(AppContext);

    const [relatedDoctors , setRelatedDoctors] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

      if(doctors.length > 0 && speciality)
      {

        const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc.id !== docId);

        setRelatedDoctors(doctorsData);

      }

    }, [doctors , docId , speciality])

  
  return (

    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:my-0'>

      <h1 className='text-3xl font-medium mt-6'>Top Doctors to Book</h1>

      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of doctors</p>

      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>

        {relatedDoctors.slice(0,5).map((doctors , index) => (

          <div onClick={() => {navigate(`/appointment/${doctors._id}`); scrollTo(0,0)}} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer'>

            <img className='bg-blue-50' src={doctors.image} alt="" />

            <div className='p-4 text-center sm:text-start'>

              <div className='flex items-center justify-center sm:justify-normal gap-2 text-sm text-center text-green-500'>

                <p className='w-2 h-2 bg-green-500 rounded-full'></p> <p>Available</p>

              </div>

              <p className='text-gray-900 text-base font-normal'>{doctors.name}</p>

              <p className='text-gray-600 text-sm'>{doctors.speciality}</p>

            </div>

          </div>

        ))}

      </div>

      <button onClick={() => {navigate('/doctors'); scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full sm:mt-5 mt-6'>More</button>

    </div>

  )

}

export default RelatedDoctors