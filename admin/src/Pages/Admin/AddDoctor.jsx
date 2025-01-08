import React, { useState } from 'react'
import {assets} from '../../assets/assets.js'

const AddDoctor = () => {

  const [docImg , setDocImg] = useState(false);

  const [name , setName] = useState('');

  const [email , setEmail] = useState('');

  const [password , setPassword] = useState('');

  const [experince , setExperince] = useState('1-Year');

  const [fees , setFees] = useState('');

  const [about , setAbout] = useState('');

  const [speciality , setSpeciality] = useState('General physician');

  const [degree , setDegree] = useState('');

  const [address1 , setAddress1] = useState('');

  const [address2 , setAddress2] = useState('');


  return (
    
    <form className='m-5 w-full'>

      <p className='mb-3 text-lg font-medium'>Add Doctors</p>

      <div className='bg-white border px-8 py-8 rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>

        <div className='flex items-center gap-4 mb-8 text-gray-500'>

          <label htmlFor="upload-area">

            <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={assets.upload_area} />

          </label>

          <input  type="file" hidden id="upload-area" />

          <p>Upload doctor<br/>picture</p>

        </div>

        <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>

          <div className='w-full lg:flex-1 flex flex-col gap-4'>

            <div className='flex-1 flex flex-col gap-1'>

              <p>Doctor Name</p>

              <input className='border rounded px-3 py-2' type="text" id="" placeholder='Your Name' required/>

            </div>

            <div className='flex-1 flex flex-col gap-1'>

              <p>Doctor Email</p>

              <input className='border rounded px-3 py-2' type="email" id="" placeholder='Doctor Email' required/>

            </div>

            <div className='flex-1 flex flex-col gap-1'>

              <p>Doctor Password</p>

              <input className='border rounded px-3 py-2' type="password" id="" placeholder='Doctor Password' required/>

            </div>

            <div className='flex-1 flex flex-col gap-1'>

              <p>Doctor Experience</p>

              <select className='border rounded px-3 py-2' id="experience">

                <option value="1-Year">1-Year</option>
                <option value="2-Years">2-Years</option>
                <option value="3-Years">3-Years</option>
                <option value="4-Years">4-Years</option>
                <option value="5-Years">5-Years</option>
                <option value="6-Years">6-Years</option>
                <option value="7-Years">7-Years</option>
                <option value="8-Years">8-Years</option>
                <option value="9-Years">9-Years</option>
                <option value="10-Years">10-Years</option>

              </select>

            </div>

            <div className='flex-1 flex flex-col gap-1'>

              <p>Doctor Fee</p>

              <input className='border rounded px-3 py-2' type="number" id="" placeholder='Doctor Fee' required/>

            </div>

          </div>

          <div className='w-full lg:flex-1 flex flex-1 flex-col gap-4'>

            <div className='flex-1 flex flex-col gap-1'>

              <p htmlFor="speciality" >Speciality</p>

              <select className='border rounded px-3 py-2'  id="speciality">

                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>

              </select>

            </div>

            <div className='flex-1 flex flex-col gap-1'>

              <p>Education</p>

              <input className='border rounded px-3 py-2' type="text" id="" placeholder='Education' required/>

            </div>

            <div  className='flex-1 flex flex-col gap-2'>

              <p>Address</p>

              <input className='border rounded px-3 py-2' type="text" id="" placeholder='Address 1' required/>

              <input className='border rounded px-3 py-2' type="text" placeholder='Address 2'/>

            </div>

          </div>

        </div>

        <div>

          <p className='mt-4 mb-2'>About Doctor</p>

          <textarea className='w-full px-4 pt-2 border rounded' id="" placeholder='About Doctor' required/>

        </div>

        <button className='bg-primary w-full px-10 py-3 mt-4 text-white rounded'>Add Doctor</button>

      </div>

    </form>
  )
}

export default AddDoctor