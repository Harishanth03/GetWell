import React, { useState } from 'react'

const Login = () => {

  const [state , setState] = useState('Sign Up'); // first create the state variable to switch between login and signup

  const [email , setEmail] = useState(''); // create the email state variable

  const [name , setname] = useState(''); // create the password state variable

  // ================================================== ONSUBMIT FUNCTION ====================================================

  const onSubmit = async(e) => {

    event.prevenDefault(); // prevent the default action of the form

  }


  return (

    <form action="" className='min-h-[80vh] flex items-center'>

      <div className='flex flex-col gap-4 items-start m-auto p-6 min-w-[300px] sm:min-w-96 rounded-xl border border-gray-100 text-zinc-600 text-sm shadow-lg '>

        <p className=''>{state === 'Sign Up' ? 'Create Account' : 'LogIn'}</p>

        <p>Please {state === 'Sign Up' ? 'Sign Up' : 'LogIn'} To Book</p>

        <div>

          <p htmlFor="fullName">Full Name</p>
          <input id='fullName' value={name} onChange={() => setname(e.target.name)} type="text" required/>

        </div>

        <div>

          <p htmlFor="Email">Email</p>
          <input id='Email' value={email} onChange={() => setname(e.target.name)} type="email" required/>
          
        </div>

        <div>

          <p htmlFor="Password">Password</p>
          <input id='Password' value={name} onChange={() => setname(e.target.name)} type="password" required/>
          
        </div>

        <button>{state === 'Sign Up' ? "Sign Up" : "Sign In"}</button>

      </div>

    </form>
  )
}

export default Login