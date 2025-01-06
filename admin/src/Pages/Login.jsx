import React, { useContext,  useState } from 'react'

import { AdminContext } from '../Context/AdminContext';

import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {

  const [state , setState ] = useState('Admin');

  const {setAdminToken , backendURL} = useContext(AdminContext);

  const [email , setEmail] = useState('');

  const [password , setPassword] = useState('');


  const onSubmitHandler = async(event) => {

    event.preventDefault();

    if(state === 'Admin')
    {
      
      const {data} = await axios.post(backendURL + '/api/admin/login' , {email , password})

      if(data.success)
      {

        localStorage.setItem('aToken' , data.token)

        setAdminToken(data.token);

      }
      else
      {
        toast.error(data.message);
      }

    }
    else
    {



    }

  }


  return (

    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center justify-center'>

      <div className='flex flex-col gap-3 m-auto md:items-start p-8 m-w-[340px] md:min-w-96 border rounded-xl text-[#5E5E5E]text-sm shadow-lg'>

        <p className='text-2xl text-center m-auto font-semibold'><span className='text-primary'>{state}</span> Login</p>

        <div className='w-full'>

          <p>Email</p>

          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1 outline-primary' type="email"  required/>

        </div>

        <div className='w-full'>

          <p>Password</p>
          
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1 outline-primary' type="password"  required/>

        </div>

        <button className='bg-primary text-white w-full py-2 rounded-md mt-1 text-md'>Login</button>

        {
          state === "Admin" ? 
          <p>Doctor Login? <span className='text-primary underline cursor-pointer text-sm' onClick={() => setState("Doctor")}>Click Here</span></p> 
          : 
          <p>Admin logIn? <span className='text-primary underline cursor-pointer text-sm' onClick={() => setState("Admin")}>Click Here</span> </p>
        }

      </div>
      
    </form>
    
  )

}

export default Login