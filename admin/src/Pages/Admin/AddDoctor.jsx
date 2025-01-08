import React from 'react'
import {assets} from '../../assets/assets.js'

const AddDoctor = () => {
  return (
    
    <form className='m-5 w-full'>

      <p className='mb-3 text-lg font-medium'>Add Doctors</p>

      <div className='bg-white border px-8 py-8 rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>

        <div>

          <label htmlFor="upload-area">

            <img src={assets.upload_area} />

          </label>

          <input type="file" hidden id="upload-area" />

          <p>Upload doctor<br/>picture</p>

        </div>

        <div>

          <div>

            <div>

              <p>Your Name</p>

              <input type="text" id="" placeholder='Your Name' required/>

            </div>

            <div>

              <p>Doctor Email</p>

              <input type="email" id="" placeholder='Doctor Email' required/>

            </div>

            <div>

              <p>Doctor Password</p>

              <input type="password" id="" placeholder='Doctor Password' required/>

            </div>

            <div>

              <p>Doctor Experience</p>

              <select id="experience">

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

            <div>

              <p>Doctor Fee</p>

              <input type="number" id="" placeholder='Doctor Fee' required/>

            </div>

          </div>

          <div>

            <div>

              <p htmlFor="speciality" >Speciality</p>

              <select  id="speciality">

                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>

              </select>

            </div>

            <div>

              <p>Education</p>

              <input type="text" id="" placeholder='Education' required/>

            </div>

            <div>

              <p>Address</p>

              <input type="text" id="" placeholder='Address ' required/>

              <input type="text" placeholder='Address 2'/>

            </div>

          </div>

        </div>

        <div>

          <p>About Doctor</p>

          <textarea  id="" placeholder='About Doctor' required/>

        </div>

        <button>Add Doctor</button>

      </div>

    </form>
  )
}

export default AddDoctor