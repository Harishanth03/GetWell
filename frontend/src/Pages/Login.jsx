import React, { useState } from 'react'

const Login = () => {

  const [state , setState] = useState('SignUp'); // first create the state variable to switch between login and signup

  const [email , setEmail] = useState(''); // create the email state variable

  const [name , setname] = useState(''); // create the password state variable

  // ================================================== ONSUBMIT FUNCTION ====================================================

  const onSubmit = async(event) => {

    event.prevenDefault(); // prevent the default action of the form
    
  }


  return (

    <form action="">



    </form>
  )
}

export default Login