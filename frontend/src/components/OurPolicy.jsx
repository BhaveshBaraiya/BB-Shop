import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title';

function OurPolicy() {
  return (
    <div className='py-20 px-4 sm:px-10'>

      {/* SECTION HEADER */}
      <div
        className='text-center text-3xl mb-14'
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <Title text1={'WHY'} text2={'SHOP WITH US'} />

        <p
          className='text-gray-500 mt-3 text-sm sm:text-base max-w-2xl mx-auto'
          data-aos="fade-up"
          data-aos-delay="150"
        >
          We focus on making your shopping experience smooth, secure, and stress-free — from purchase to delivery and beyond.
        </p>
      </div>

      {/* CARDS */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 text-center'>

        {/* CARD 1 */}
        <div
          className='bg-white border border-gray-100 rounded-2xl p-8 shadow-sm
          transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
          hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.02]
          transform-gpu will-change-transform policy-card'
          data-aos="zoom-in"
          data-aos-delay="0"
        >
          <img src={assets.exchange_icon} className='w-12 mx-auto mb-5' alt="Exchange Icon" />
          <h3 className='font-semibold text-lg'>Hassle-Free Exchange</h3>
          <p className='text-gray-500 mt-2 text-sm'>
            Swap your products easily with our smooth and quick exchange process.
          </p>
        </div>

        {/* CARD 2 */}
        <div
          className='bg-white border policy-card border-gray-100 rounded-2xl p-8 shadow-sm
          transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
          hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.02]
          transform-gpu will-change-transform '
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <img src={assets.quality_icon} className='w-12 mx-auto mb-5' alt="Return Icon" />
          <h3 className='font-semibold text-lg'>7-Day Easy Returns</h3>
          <p className='text-gray-500 mt-2 text-sm'>
            Didn’t like it? No worries — return within 7 days, no questions asked.
          </p>
        </div>

        {/* CARD 3 */}
        <div
          className='bg-white border border-gray-100 rounded-2xl p-8 shadow-sm
          transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
          hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.02]
          transform-gpu will-change-transform policy-card'
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img src={assets.support_img} className='w-12 mx-auto mb-5' alt="Support Icon" />
          <h3 className='font-semibold text-lg'>24/7 Customer Support</h3>
          <p className='text-gray-500 mt-2 text-sm'>
            Our team is always here to help you, anytime you need assistance.
          </p>
        </div>

      </div>
    </div>
  )
}

export default OurPolicy