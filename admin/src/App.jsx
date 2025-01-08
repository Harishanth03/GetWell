import React, { useContext } from 'react'
import Login from './Pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './Context/AdminContext';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import {Route , Routes} from 'react-router-dom'
import AddDoctor from './Pages/Admin/AddDoctor';
import AllAppointments from './Pages/Admin/AllAppointments';
import Dashboard from './Pages/Admin/Dashboard';
import DocotorsList from './Pages/Admin/DocotorsList';

const App = () => {

  const {atoken} = useContext(AdminContext);

  return atoken ? (

    <div className='bg-[#F8F9FD]'>

      <ToastContainer/>

      <Navbar/>
      
      <div className='flex items-start'>

        <Sidebar/>

        <Routes>

          <Route path='/' element={<></>}/>

          <Route path='/add-doctor' element={<AddDoctor/>}/>

          <Route path='/all-appoinment' element={<AllAppointments/>}/>

          <Route path='/dashboard' element={<Dashboard/>}/>

          <Route path='/doctors-list' element={<DocotorsList/>}/>

        </Routes>

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