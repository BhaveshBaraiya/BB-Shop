import React from 'react'
import {assets} from "../assets/assets.js"

function Navbar({setToken}) {
  return (
    <div className='flex items-center justify-between py-2 px-[4%]'>
      <img src={assets.logo} className='w-40' alt="Logo" />
      <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer' onClick={() => setToken('')}>Logout</button>
    </div>
  )
}

export default Navbar
