import React, { useState } from 'react'
import { assets } from '../assets/assets';

const Myprofile = () => {

  const [userData , setUserData] = useState({

    name : "Harishanth",
    image : assets.profile_pic,
    email : "Harishanth08@gmail.com",
    phone : "0764132578",
    address : {

      line1 : "233 , Anbuvalipuram",
      line2 : "Trincomalee , Sri lanka"
    },
    gender :'Male',
    dob : '2000-07-03'

  }); // first create the state variable to switch between login and signup

  const [isEdit , setIsEdit] = useState(true);

  return (

    <div className='max-w-lg flex flex-col gap-2 text-sm'>

      <img className='w-36 rounded m-auto md:m-0' src={userData.image} alt="" />

      {
        isEdit ? 

        <input className='w-full md:w-52 border sm:py-2 focus:border-primary focus:outline-none border-zinc-200 rounded-sm py-1 px-2 mt-2' value={userData.name} onChange={e => setUserData(prev => ({...prev , name:e.target.value}))} type="text" name="" id="" /> : <p className='text-primary font-semibold text-center'><span className='text-black'>Hello</span> {userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none' />

      <div className='flex flex-col gap-2 '>

        <p className='text-black font-semibold mt-3'>Contact Information</p>

        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 text-neutral-700'>

          <p className='font-medium'>Email: </p>

          <p className='text-primary'>{userData.email}</p>

          <p className='font-medium'>Phone: </p>
          {
            isEdit ? <input  className='max-2-52' value={userData.phone} onChange={e => setUserData(prev => ({...prev , phone:e.target.value}))} type="text" name="" id="" /> : <p className='text-primary'>{userData.phone}</p>
          }

          <p className='font-medium'>Address:</p>

          {
            isEdit ? 

            <p className=''>

              <input  onChange={(e) => setUserData(prev => ({...prev.address , line1 : e.target.value}))} value={userData.address.line1} type="text" />
              <br />
              <input  onChange={(e) => setUserData(prev => ({...prev.address , line2 : e.target.value}))} value={userData.address.line2} type="text" />

            </p> :

            <p className='text-primary'>
 
              {userData.address.line1}

              <br />

              {userData.address.line2}

            </p>

          }

        </div>

      </div>

      <div className='flex flex-col gap-2 '>

        <p className='text-black font-semibold mt-3'>Basic Information</p>

        <div  className='grid grid-cols-[1fr_3fr] gap-y-2.5 text-neutral-700'>

          <p className='font-medium'>Gender: </p>

          {

            isEdit ?

            <select onChange={e => setUserData(prev => ({...prev , gender:e.target.value}))} value={userData.gender}>
              
              <option value="Male">Male</option>
              <option value="Female">Female</option>

            </select>
            
            : <p className='text-primary'>{userData.gender}</p>
          }

          <p className='font-medium'>BirthDate: </p>

          {

            isEdit ? 

            <input onChange={e => setUserData((prev) => ({...prev , dob:e.target.value}))} value={userData.dob} type="date"/>

            : <p className='text-primary'>{userData.dob}</p>

          }

        </div>

      </div>

      <div className='flex flex-col mt-4'>

        {
          
          isEdit ?

          <button className='bg-primary text-white py-2 w-auto rounded' onClick={() => setIsEdit(false)}> Save Information </button>

          : 

          <button className='bg-primary text-white py-2 w-auto rounded' onClick={() => setIsEdit(true)}> Edit </button>

        }

      </div>
        
    </div>

  )

}

export default Myprofile