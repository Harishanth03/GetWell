import React from 'react'
import {assets} from '../../assets/assets.js'

const AddDoctor = () => {
  return (
    
    <form action="">

      <p>Add Doctors</p>

      <div>

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

          </div>
          
        </div>

      </div>

    </form>
  )
}

export default AddDoctor