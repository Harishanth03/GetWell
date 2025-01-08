import React, { useContext } from 'react'
import Login from './Pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './Context/AdminContext';
import Navbar from './Components/Navbar';

const App = () => {

  const {atoken} = useContext(AdminContext);

  return atoken ? (

    <div className='bg-[#F8F9FD]'>

      <ToastContainer/>
      <Navbar/>
      
    </div>

  ) : (

    <>

      <Login/>

      <ToastContainer/>
    
    </>
  )

}

export default App