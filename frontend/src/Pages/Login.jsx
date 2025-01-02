import React, { useState } from 'react'

const Login = () => {

  const [state , setState] = useState('Sign Up'); // first create the state variable to switch between login and signup

  const [email , setEmail] = useState(''); // create the email state variable

  const [name , setname] = useState(''); // create the password state variable

  const [password , setPassword] = useState(''); // create the password state variable

  // ================================================== ONSUBMIT FUNCTION ====================================================

  const onSubmit = async(e) => {

    event.prevenDefault(); // prevent the default action of the form

  }


  return (

    <form action="" className='min-h-[80vh] flex items-center'>

      <div className='flex flex-col gap-4 m-auto p-6 min-w-[300px] sm:min-w-96 rounded-xl border border-gray-100 text-zinc-600 text-sm shadow-lg '>

        <p className='text-2xl font-semibold text-center'>{state === 'Sign Up' ? 'Create Account' : 'LogIn'}</p>

        <p className='text-center text-primary font-medium'>Please {state === 'Sign Up' ? 'Sign Up' : 'LogIn'} To Book</p>

        <div className='w-full'>

          <p htmlFor="fullName">Full Name</p>
          <input className='w-full border border-zinc-200 rounded-sm py-1 px-2 mt-1' id='fullName' value={name} onChange={() => setname(e.target.name)} type="text" required/>

        </div>

        <div className='w-full'>

          <p htmlFor="Email">Email</p>
          <input className='w-full border border-zinc-200 rounded-sm py-1 px-2 mt-1'  id='Email' value={email} onChange={() => setEmail(e.target.name)} type="email" required/>
          
        </div>

        <div className='w-full'>

          <p htmlFor="Password">Password</p>
          <input className='w-full border border-zinc-200 rounded-sm py-1 px-2 mt-1'   id='Password' value={name} onChange={() => setPassword(e.target.name)} type="password" required/>
          
        </div>

        <button>{state === 'Sign Up' ? "Sign Up" : "Sign In"}</button>

      </div>

    </form>
  )
}

export default Login