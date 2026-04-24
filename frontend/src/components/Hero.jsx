import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex mt-40 flex-col-reverse sm:flex-row items-center border border-gray-200'>
      <div 
        data-aos="fade-right"
        data-aos-delay="200"
        className="w-full sm:w-1/2 px-6 md:px-12 py-12 flex flex-col gap-6"
      >        
        <div className="flex items-center gap-3" data-aos="fade-right" data-aos-delay="300">
          <span className='w-10 h-[2px] bg-[#D7BE69]'></span>
          <p className='text-sm tracking-widest text-gray-500'>
            PREMIUM COLLECTION
          </p>
        </div>
        
        <h1 
          className='text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-gray-800'
          data-aos="fade-right"
          data-aos-delay="400"
        >
          Discover Your <br />
          <span className='text-[#D7BE69]'>Perfect Style</span>
        </h1>

        <p 
          className='text-gray-500 text-sm md:text-base max-w-md'
          data-aos="fade-right"
          data-aos-delay="500"
        >
          Explore the latest trends, premium quality products, and unbeatable deals — all in one place.
        </p>

        <div 
          className="flex items-center gap-4 mt-2"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <Link to="/collection" className='bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all'>
            Shop Now →
          </Link>

          <Link to="/about" className='border border-gray-400 px-6 py-3 rounded-full hover:bg-gray-100 transition-all'>
            Explore
          </Link>
        </div>

        {/* Features */}
        <div 
          className="flex gap-6 mt-4 text-sm text-gray-500 flex-wrap"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <span>✔ Premium Quality</span>
          <span>✔ Fast Delivery</span>
          <span>✔ Secure Payment</span>
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div 
        data-aos="fade-left"
        data-aos-delay="300"
        className="w-full sm:w-1/2 relative"
      >
        <img 
          src={assets.hero_img} 
          alt="Hero" 
          className='w-full h-full object-cover'
        />

        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20"></div>
      </div>

    </div>
  )
}

export default Hero