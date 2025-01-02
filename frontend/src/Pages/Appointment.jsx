import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../Components/RelatedDoctors';

const Appointment = () => {

  const {docId} = useParams(); // Get the docId from the URL

  const {doctors , currencySymbol} = useContext(AppContext); // Get the doctors and currencySymbol from the AppContext

  const [docInfo, setDocInfo] = useState(null); // State to store the doctor info

  const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']; // Array to store the days of the week

  const [docSlot , setDocSlots] = useState([]); // State to store the doctor slots

  const [selectedSlots , setSelectedSlots] = useState({}); // State to store the selected date and time separately

  const [slotIndex , setSlotIndex] = useState(0); // State to store the selected slot index

  // ==================================================== FETCH DOC INFO =====================================================

  const fetchDocInfo = async () => {

    const docInfo = doctors.find(doc => doc._id === docId);

    setDocInfo(docInfo);

  }

  // ==================================================== FETCH DOC SLOTS =====================================================

  useEffect(() => {

    fetchDocInfo();

  }, [doctors , docId]);

  // ==================================================== GET AVAILABLE SLOTS ================================================

  const getAvailableSlots = async() => {

    setDocSlots([]); // Clear previous slots

    let today = new Date(); // Get the current date

    // Loop to calculate the next 7 days of slots
    for (let i = 0; i < 7; i++) {

      let currentDate = new Date(today);

      currentDate.setDate(today.getDate() + i); // Increment the date


      let endTime = new Date();

      endTime.setDate(today.getDate() + i);

      endTime.setHours(21, 0, 0, 0); // Set end time to 9:00 PM


      if(today.getDate() === currentDate.getDate()) {

        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);

        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);

      } 
      else 
      {

        currentDate.setHours(10);

        currentDate.setMinutes(0);

      }

      let timeSlots = [];

      while (currentDate < endTime) 
      {
        let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

        timeSlots.push({

          datetime: new Date(currentDate),

          time: formattedTime

        });

        currentDate.setMinutes(currentDate.getMinutes() + 30); // Add 30 minutes

      }

      setDocSlots(prev => ([...prev, timeSlots]));

    }

  }

  // ==================================================== HANDLE SLOT SELECTION =====================================================

  const handleSlotSelection = (dateIndex, time) => 
  {

    setSelectedSlots(prev => ({...prev, [dateIndex]: time}));

  }

  // ==================================================== HANDLE CLEAR =====================================================

  const handleClear = () => 
  {

    setSlotIndex(0); // Reset the selected date index

    setSelectedSlots({}); // Clear all selected slots

  }

  // ==================================================== INITIAL SETUP =====================================================

  useEffect(() => 
  {

    getAvailableSlots();

  }, [docInfo]);

  return docInfo && (
    <div>

      {/* ==================================================== DOC DETAILS =============================================== */}

      <div className='flex flex-col sm:flex-row gap-4'>

        <div>

          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />

        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80] sm:mt-0'>

          <p className='flex items-center gap-2 text-xl font-medium text-gray-900'>{docInfo.name} <img className='w-5' src={assets.verified_icon} alt="" /></p>

          <div className='flex items-center gap-2 mt-3 text-sm text-gray-500'>

            <p>{docInfo.degree} - {docInfo.speciality}</p>

            <button className='py-0.5 border px-2 text-xs rounded-full'>{docInfo.experience}</button>

          </div>

          <div className=''>

            <p className='flex items-center gap-2 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>

            <p className='text-sm text-gray-500 max-w-[700px] mt-1.5'>{docInfo.about}</p>

          </div>

          <p className='text-gray-500 font-medium mt-3'>Appointment Fees: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>

        </div>

      </div>


      {/* ================================================ BOOKING SLOTS ================================================= */}

      <div className=' mt-8 text-gray-700'>

        <p className='text-center md:text-start'>Book Your Appointment Here</p>

        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4 justify-between'>

          {docSlot.length && docSlot.map((item, index) => (

            <div 

              onClick={() => setSlotIndex(index)} 

              className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-300'}`} 

              key={index}>

              <p>{item[0] && dayOfWeek[item[0].datetime.getDay()]}</p>

              <p>{item[0] && item[0].datetime.getDate()}</p>

            </div>

          ))}

        </div>


        <div className='flex flex-wrap items-center justify-center sm:justify-start mt-5 gap-2'>

          {docSlot.length && docSlot[slotIndex].map((item, index) => (

            <p 

              onClick={() => handleSlotSelection(slotIndex, item.time)} 

              className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${selectedSlots[slotIndex] === item.time ? 'bg-primary text-white' : 'border border-gray-300'}`} 

              key={index}>

              {item.time.toLowerCase()}

            </p>

          ))}

        </div>

        <button className='w-full mt-5 bg-primary text-white py-2.5 rounded-full'>Book an Appointment</button>

        <button onClick={handleClear} className='w-full mt-5 border border-primary text-gray-700 py-2.5 rounded-full'>Clear</button>

      </div>

      {/* ==================================================== RELATED DOCTORS ========================================== */}

      <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>

    </div>

  );

}

export default Appointment;
