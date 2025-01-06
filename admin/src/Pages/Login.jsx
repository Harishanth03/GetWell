import React, { useState } from 'react'

const Login = () => {

  const [state , setState ] = useState('Admin');

  return (

    <form className='min-h-[80vh] flex items-center justify-center'>

      <div className='flex flex-col gap-3 m-auto md:items-start p-8 m-w-[320px] sm:min-w-96 border rounded-xl text-[#5E5E5E]text-sm shadow-lg'>

        <p className='text-2xl text-center m-auto font-semibold'><span className='text-primary'>{state}</span> Login</p>

        <div className='w-full'>

          <p>Email</p>

          <input className='border border-[#DADADA] rounded w-full p-1 mt-1 outline-primary' type="email"  required/>

        </div>

        <div className='w-full'>

          <p>Password</p>
          
          <input className='border border-[#DADADA] rounded w-full p-1 mt-1 outline-primary' type="email"  required/>

        </div>

        <button className='bg-primary text-white w-full py-2 rounded-md mt-1 text-md'>Login</button>

        {
          state === "Admin" ? <p>Doctor Login</p> : <p>Admin logIn</p>
        }

      </div>
      
    </form>
    
  )

}

export default Login