import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../Context/AdminContext'

const Navbar = () => {

    const {atoken} = useContext(AdminContext);

  return (

    <div className=''>

        <div>

            <img src={assets.logo}/>

            <p>{atoken ? "Admin" : "Doctor"}</p>

        </div>

        <button>Logout</button>

    </div>
  )
}

export default Navbar