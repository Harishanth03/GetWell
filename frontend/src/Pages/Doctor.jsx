import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';

const Doctor = () => {

  const {speciality} = useParams();

  const {doctors} = useContext(AppContext);

  const [showFilter , setShowFilter] = useState(false);

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
        
      <p className='text-gray-600'>Browse using doctors speciality.</p>

      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>

        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Filter</button>

        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden' }`}>

          <p onClick={() => speciality === 'General physician'? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer py-1.5 ${speciality === "General physician" ? "bg-indigo-100 text-black" : ""}`}>General physician</p>
          <p onClick={() => speciality === 'Gynecologist'? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer py-1.5 ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}>Gynecologist</p>
          <p onClick={() => speciality === 'Dermatologist'? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer py-1.5 ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}>Dermatologist</p>
          <p onClick={() => speciality === 'Pediatricians'? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer py-1.5 ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}>Pediatricians</p>
          <p onClick={() => speciality === 'Neurologist'? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer py-1.5 ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""}`}>Neurologist</p>
          <p onClick={() => speciality === 'Gastroenterologist'? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer py-1.5 ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}>Gastroenterologist</p>

        </div>

        {/* ===================================================== RIGHT ================================================ */}

        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>

          {
           
            filterDoctors.map((item , index) => (

              <div onClick={() => navigate(`/appointment/${item._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer'>

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