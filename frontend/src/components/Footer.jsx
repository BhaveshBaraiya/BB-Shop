import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='mt-40 border-t bg-white'>

      <div className="py-16 grid grid-cols-1 sm:grid-cols-3 gap-14 text-sm">

        {/* BRAND */}
        <div data-aos="fade-up">
          <img src={assets.logo} alt="Logo" className='mb-5 w-40 md:w-50' />
          <p className='text-gray-600 leading-relaxed'>
            We bring you a smooth, reliable and modern shopping experience.
          </p>
        </div>

        {/* COMPANY */}
        <div data-aos="fade-up" data-aos-delay="100">
          <p className='text-lg font-semibold mb-5'>COMPANY</p>

          <ul className='flex flex-col gap-3 text-gray-600'>

            <li>
              <Link to="/" className='hover:text-black hover:translate-x-1 transition-all duration-300'>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className='hover:text-black hover:translate-x-1 transition-all duration-300'>
                About
              </Link>
            </li>

            <li>
              <Link to="/collection" className='hover:text-black hover:translate-x-1 transition-all duration-300'>
                Collection
              </Link>
            </li>

            <li>
              <Link to="/contact" className='hover:text-black hover:translate-x-1 transition-all duration-300'>
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* CONTACT */}
        <div data-aos="fade-up" data-aos-delay="200">
          <p className='text-lg font-semibold mb-5'>GET IN TOUCH</p>

          <ul className='flex flex-col gap-3 text-gray-600'>
            <li className='hover:text-black transition-all duration-300 cursor-pointer'>
              +1-2145658-784
            </li>
            <li className='hover:text-black transition-all duration-300 cursor-pointer'>
              contact@bbshop.com
            </li>
          </ul>
        </div>

      </div>

      <div className='border-t py-6 text-sm text-center text-gray-500'>
        © 2026 bb-shop.com — All Rights Reserved
      </div>

    </footer>
  )
}

export default Footer