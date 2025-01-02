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
      Line2 : "Trincomalee , Sri lanka"
    },
    gender :'Male',
    dob : '03/07/2000'

  }); // first create the state variable to switch between login and signup

  const [isEdit , setIsEdit] = useState(true);

  return (

    <div>

      <img src={userData.image} alt="" />

      {
        isEdit ? 

        <input value={userData.name} onChange={e => setUserData(prev => ({...prev , name:e.target.value}))} type="text" name="" id="" /> : <p>{userData.name}</p>
      }
        
    </div>

  )

}

export default Myprofile