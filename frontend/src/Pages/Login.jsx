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

      <div>

        <p>{state === 'Sign Up' ? 'Create Account' : 'LogIn'}</p>

        <p>Please {state === 'Sign Up' ? 'Sign Up' : 'LogIn'} To Book Appointment</p>

        <div>

          <label htmlFor="fullName">Full Name</label>
          <input id='fullName' value={name} onChange={() => setname(e.target.name)} type="text" required/>

        </div>

        <div>

          <label htmlFor="Email">Email</label>
          <input id='Email' value={email} onChange={() => setname(e.target.name)} type="email" required/>
          
        </div>

        <div>

          <label htmlFor="Password">Full Name</label>
          <input id='Password' value={name} onChange={() => setname(e.target.name)} type="password" required/>
          
        </div>

      </div>

    </form>
  )
}

export default Login