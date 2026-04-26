import React, { useEffect, useState } from 'react'
import { useShop } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [currentState,setCurrentState] = useState('Login');
  const { token ,setToken, backendUrl } = useShop();
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return toast.error("Please enter a valid email address");
    }

    // 2. Password Length Validation
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { email, name, password });
        
        if (response.data.success) {
          toast.success("Account created! Please login now.");
          setCurrentState('Login');
        } else {
          toast.error(response.data.message);
        }

      } else {        
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  }

  useEffect(() => {
    if(token) {
      navigate('/');
    }
  }, [token])

  return (
    <div className="flex justify-center pt-15">
    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-[90%] sm:max-w-96 mt-14 gap-4 text-gray-800'>
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? '' : <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='w-full px-3 py-2 border border-gray-800' required placeholder='Name'/>} 
      <input type="email" className='w-full px-3 py-2 border border-gray-800' value={email} required placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' required placeholder='Password'/>

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className='cursor-pointer'>Forgot Password?</p>
        {currentState === 'Login' ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>: <p className='cursor-pointer' onClick={() => setCurrentState('Login')}>Login Here</p>}
      </div>
      <button className='btn font-light px-8 py-2 mt-4'>{currentState === "Login" ? "Sign In" : "Sign Up"}</button>
    </form>
    </div>
  )
}

export default Login
