import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';

const Doctor = () => {

  const {speciality} = useParams();

  const {doctors} = useContext(AppContext);

  const navigate = useNavigate();

  const [filterDoctors , setFilterDoctors] = useState([]);

  const applyFilter = () => {

    if(speciality)
    {
      setFilterDoctors(doctors.filter(doc => doc.speciality === speciality));
    }
    else
    {
      setFilterDoctors(doctors);
    }

  }

  useEffect(() => {
    
    applyFilter();

  } , [doctors , speciality]);

  return (

    <div>
        
      <p>Browse using doctors speciality.</p>

      <div>

        <div>

          <p>General physician</p>
          <p>Gynecologist</p>
          <p>Dermatologist</p>
          <p>Pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroenterologist</p>

        </div>
        {/* ===================================================== RIGHT ================================================ */}
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>

          {
           
            filterDoctors.map((item , index) => (

              <div onClick={() => navigate(`/appointment/:${item._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer'>

                <img className='bg-blue-50' src={item.image} alt="" />

                <div className='p-4 text-center sm:text-start'>

                  <div className='flex items-center justify-center sm:justify-normal gap-2 text-sm text-center text-green-500'>

                    <p className='w-2 h-2 bg-green-500 rounded-full'></p> <p>Available</p>

                  </div>

                  <p className='text-gray-900 text-base font-normal'>{item.name}</p>

                  <p className='text-gray-600 text-sm'>{item.speciality}</p>

                </div>

              </div>

            ))

          }
          
        </div>

      </div>

    </div>

  )

}

export default Doctor