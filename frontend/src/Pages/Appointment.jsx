import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
import { assets } from '../assets/assets';

const Appointment = () => {

  const {docId} = useParams(); // Get the docId from the URL

  const {doctors , currencySymbol} = useContext(AppContext); // Get the doctors and currencySymbol from the AppContext

  const [docInfo, setDocInfo] = useState(null); // State to store the doctor info

  const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']; // Array to store the days of the week

  const [docSlot , setDocSlots] = useState([]); // State to store the doctor slots

  const [slotIndex , setSlotIndex] = useState(0); // State to store the selected slot index

  const [slotTime , setSlotTime] = useState(''); // State to store the selected slot time


  // ==================================================== FETCH DOC INFO =====================================================

  const fetchDocInfo = async () => {
    
    const docInfo = doctors.find(doc => doc._id === docId);

    setDocInfo(docInfo);

  }

  // ==================================================== FETCH DOC SLOTS =====================================================

  useEffect(() => {

    fetchDocInfo();

  }, [doctors , docId]);

  // ==================================================== SELECT SLOT =====================================================

  useEffect(() => {

    getAvailableSlots(); // when doctor information will change at the same time available slots also changes

  } , [docInfo]);

  useEffect(() => {

    console.log(docSlot);

  }, [docSlot])

  // ==================================================== GET AVAILABLE SLOTS ================================================

  const getAvailableSlots = async() => {
    
    setDocSlots([]); //first we need to clear previous slots

    let today = new Date(); // get the current date

    //Now i will calculate the 7 days from the current date so i use FOR loop.

    for(let i = 0 ; i < 7 ; i++)
    {

      //now i will set the date using index of the loop

      let currentDate = new Date(today); // create copy of today
      
      currentDate.setDate(today.getDate() + i); // in every iteration the current date increase by using setDate its get the today date and increate using index in every iteration

      //Setting endTime for the date using index

      let endTime = new Date(); // get the current date

      endTime.setDate(today.getDate() + i);

      endTime.setHours(21,0,0,0); // set the time to 9:00 PM

      //Setting Hourse

      if(today.getDate() === currentDate.getDate())
      {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);

        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
        
      }
      else
      {
        currentDate.setHours(10);

        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      
      while(currentDate < endTime)
      {

        let formattedTime = currentDate.toLocaleTimeString([] , {hour: '2-digit' , minute: '2-digit'});

        timeSlots.push({

          datetime: new Date(currentDate),

          time: formattedTime

        });

        //Adding 30 minutes to the current date

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
     
      setDocSlots(prev => ([...prev , timeSlots]));

    }

  }

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

            <p className='text-sm text-gray-500 max-w-[700px] mt-1.5'>{docInfo.about}</p>

          </div>

          <p className='text-gray-500 font-medium mt-3'>Appointment Fees: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>

        </div>

      </div>

      {/* ================================================ Booking SLOTS ================================================= */}

      <div className='sm:ml-72 sm:pl-4 mt-8 text-gray-700'>

        <p className='text-center md:text-start'>Book Your Appointment Here</p>

        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4 justify-between'>

          {

            docSlot.length && docSlot.map((item , index) => (

              <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-300'}`} key={index}>

                <p>{item[0] && dayOfWeek[item[0].datetime.getDay()]}</p>

                <p>{item[0] && item[0].datetime.getDate()}</p>

              </div>

            ))

          }

        </div>

        <div>
          
          {docSlot.length && docSlot[slotIndex].map((item , index) => (

            <p key={index}>

              {item.time.toLowerCase()}

            </p>

          ))}

        </div>

      </div>

    </div>

  )

}

export default Appointment