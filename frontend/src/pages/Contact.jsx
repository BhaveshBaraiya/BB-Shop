import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

function Contact() {
  return (
    <div>
        <div className="text-center text-2xl pt-10 border-t">
          <Title text1={'CONTACT'} text2={'US'}/>
        </div>
        <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
          <img src={assets.contact_img} alt="Contact Image" className='w-full max-w-[480px]' />
          <div className="flex flex-col justify-center items-start gap-6">
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>5455 William Station <br /> Cincinnati, Ohio.</p>
            <p className='text-gray-500'>Tel: (425) 548-4568 <br />Email:bbshop@gmail.com</p>
            <p className='font-semibold text-xl text-gray-600'>Careers @ BB</p>
            <p className='text-gray-500'> Learn more about team and job openings</p>
            <button className='btn'>Explore Jobs</button>
          </div>
        </div>
        <NewsLetter/>
    </div>
  )
}

export default Contact
