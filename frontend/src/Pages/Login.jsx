import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const [state , setState] = useState('Sign Up'); // first create the state variable to switch between login and signup

  const [email , setEmail] = useState(''); // create the email state variable

  const [name , setname] = useState(''); // create the password state variable

  const [password , setPassword] = useState(''); // create the password state variable

  const {backendURL , setToken} = useContext(AppContext)

  // ================================================== ONSUBMIT FUNCTION ====================================================

  const onSubmitHandler = async(e) => {

    e.preventDefault();

    try 
    {

      if(state === 'Sign Up')
      {

        const {data} = await axios.post(backendURL + '/api/user/register', {name , password , email} )
        {

          if(data.success)
          {

            localStorage.setItem('token' , data.token);

            setToken(data.token);

            setEmail('')

            setPassword('');

          }
          else
          {

            console.log(data.message);

          }

        }

      }
      else
      {

        const {data} = await axios.post(backendURL + '/api/user/login', {password , email} )
        {

          if(data.success)
          {

            localStorage.setItem('token' , data.token);

            setToken(data.token);

          }
          else
          {

            toast.error(data.message);

          }

        }

      }
      
    } catch (error) 
    {

      toast.error(error.message);
      
    }

  }


  return (

    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>

      <div className='flex flex-col gap-4 m-auto p-6 min-w-[300px] sm:min-w-96 rounded-xl border border-gray-100 text-zinc-600 text-sm shadow-lg '>

        <p className='text-2xl font-semibold text-center'>{state === 'Sign Up' ? 'Create Account' : 'LogIn'}</p>

        <p className='text-center text-primary font-medium'>Please {state === 'Sign Up' ? 'Sign Up' : 'LogIn'} To Book</p>

        {
          state === 'Sign Up' ? 
          <div className='w-full'>

            <p htmlFor="fullName">Full Name</p>
            <input  className='w-full border sm:py-2 focus:border-primary focus:outline-none border-zinc-200 rounded-sm py-1 px-2 mt-1' id='fullName' onChange={(e) => setname(e.target.value)} value={name} type="text" required/>

          </div> : null

        }

        <div className='w-full'>

          <p htmlFor="Email">Email</p>
          <input  className='w-full border sm:py-2 focus:border-primary focus:outline-none border-zinc-200 rounded-sm py-1 px-2 mt-1'  id='Email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" required/>
          
        </div>

        <div className='w-full'>

          <p htmlFor="Password">Password</p>
          <input  className='w-full border sm:py-2 focus:border-primary focus:outline-none border-zinc-200 rounded-sm py-1 px-2 mt-1'   id='Password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" required/>
          
        </div>

        <button type='submit ' className='py-2 px-auto text-base bg-primary text-white rounded-sm'>{state === 'Sign Up' ? "Sign Up" : "Sign In"}</button>

        {
          state === 'Sign Up' ? <p className='text-center'>Already have an account? <span className='text-primary cursor-pointer' onClick={() => setState('Log In')}>Log In</span></p> : <p className='text-center'>Don't have an account? <span className='text-primary cursor-pointer' onClick={() => setState('Sign Up')}>Sign Up</span></p>
        }

      </div>

    </form>
  )
}

export default Login