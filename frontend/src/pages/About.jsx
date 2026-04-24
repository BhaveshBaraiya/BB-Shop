import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

function About() {
  return (
    <div className='mt-40'>
      <div
        className="text-2xl text-center pt-8 border-t"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16 items-center">

        <img
          src={assets.about_img}
          alt="About Image"
          className='w-full max-w-[450px] rounded-xl shadow-md'
          data-aos="zoom-in"
          data-aos-duration="800"
        />

        <div
          className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident quod sed temporibus libero delectus sit sapiente molestias fugit ducimus nihil.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quas sunt voluptate nemo ratione rerum tenetur.
          </p>

          <b className='text-gray-800'>Our Vision</b>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum explicabo ducimus magnam sit itaque voluptates aperiam.
          </p>
        </div>
      </div>

      <div className="text-xl py-6 text-center" data-aos="fade-up">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="border rounded-2xl p-8 flex flex-col gap-5 hover:shadow-xl transition-all duration-300"
          data-aos="zoom-in"
          data-aos-delay="0"
        >
          <b>Quality Assurance</b>
          <p className='text-gray-600'>
            We ensure every product meets high standards before reaching you.
          </p>
        </div>

        <div
          className="border rounded-2xl p-8 flex flex-col gap-5 hover:shadow-xl transition-all duration-300"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <b>Convenience</b>
          <p className='text-gray-600'>
            Smooth shopping experience designed for your comfort and ease.
          </p>
        </div>

        <div
          className="border rounded-2xl p-8 flex flex-col gap-5 hover:shadow-xl transition-all duration-300"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>
            We’re always here to help you with quick and friendly support.
          </p>
        </div>

      </div>

      <div data-aos="fade-up">
        <NewsLetter />
      </div>

    </div>
  )
}

export default About