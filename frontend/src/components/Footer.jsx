import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 my-10 text-sm">
        <div>
            <img src={assets.logo} alt="Logo" className='mb-5 w-32' />
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deleniti in, odio eligendi, incidunt sint deserunt cumque porro iste non commodi blanditiis cupiditate excepturi doloremque eos quia, voluptates dolore necessitatibus?</p>
        </div>
        <div className="">
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col text-gray-600 gap-1'>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="">
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col text-gray-600 gap-1'>
                <li>+1-2145658-784</li>
                <li>contact@bbshop.com</li>
            </ul>
        </div>
      </div>
      <div className="">
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2026@ bb.com - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
