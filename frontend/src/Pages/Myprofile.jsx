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

    <div>

      <img src={userData.image} alt="" />

      {
        isEdit ? 

        <input value={userData.name} onChange={e => setUserData(prev => ({...prev , name:e.target.value}))} type="text" name="" id="" /> : <p>{userData.name}</p>
      }

      <hr />

      <div>

        <p>Contact Information</p>

        <div>

          <p>Email: </p>
          <p>{userData.email}</p>
          <p>Phone: </p>
          {
            isEdit ? <input value={userData.phone} onChange={e => setUserData(prev => ({...prev , phone:e.target.value}))} type="text" name="" id="" /> : <p>{userData.phone}</p>
          }
          <p>Address:</p>
          {
            isEdit ? 
            <p>

              <input onChange={(e) => setUserData(prev => ({...prev.address , line1 : e.target.value}))} value={userData.address.line1} type="text" />
              <br />
              <input onChange={(e) => setUserData(prev => ({...prev.address , line2 : e.target.value}))} value={userData.address.line2} type="text" />

            </p> :

            <p>

              {userData.address.line1}

              <br />

              {userData.address.line2}

            </p>

          }

        </div>

      </div>

      <div>

        <p>Basic Information</p>

        <div>

          <p>Gender: </p>

          {

            isEdit ?

            <select onChange={e => setUserData(prev => ({...prev , gender:e.target.value}))} value={userData.gender}>
              
              <option value="Male">Male</option>
              <option value="Female">Female</option>

            </select>
            
            : <p>{userData.gender}</p>
          }

          <p>BirthDate: </p>

          {

            isEdit ? 

            <input onChange={e => setUserData((prev) => ({...prev , dob:e.target.value}))} value={userData.dob} type="date"/>

            : <p>{userData.dob}</p>

          }

        </div>

      </div>

      <div>

        {
          
          isEdit ?

          <button onClick={() => setIsEdit(false)}> Save Information </button>

          : 

          <button onClick={() => setIsEdit(true)}> Edit </button>

        }

      </div>
        
    </div>

  )

}

export default Myprofile