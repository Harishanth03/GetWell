import React, { useContext } from 'react'
import Login from './Pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './Context/AdminContext';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

const App = () => {

  const {atoken} = useContext(AdminContext);

  return atoken ? (

    <div className='bg-[#F8F9FD]'>

      <ToastContainer/>

      <Navbar/>
      
      <div className='flex items-start'>

        <Sidebar/>

      </div>
      
    </div>

  ) : (

    <>

      <Login/>

      <ToastContainer/>
    
    </>
  )

}

export default App