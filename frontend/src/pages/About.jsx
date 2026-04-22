import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="About Image" className='w-full max-w-[450px]' />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident quod sed temporibus libero delectus sit sapiente molestias fugit ducimus nihil. Inventore, in nihil ad autem repudiandae eum voluptate ullam amet!</p>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quas sunt voluptate nemo ratione rerum tenetur. Odio fugit voluptatem dignissimos dicta inventore tempora perspiciatis ipsa, alias pariatur ipsum cumque repellendus!</p>
         <b className='text-gray-800'>Our Vision</b>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum explicabo ducimus magnam sit itaque voluptates aperiam. Incidunt facere tenetur, eaque ratione fuga enim ad omnis sint repellendus amet. Quos, inventore?</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptates dolores! Natus cum dolor eius et tempora! Dolore facere ipsum excepturi laboriosam mollitia. Quis reprehenderit doloribus labore dolores commodi iusto.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptates dolores! Natus cum dolor eius et tempora! Dolore facere ipsum excepturi laboriosam mollitia. Quis reprehenderit doloribus labore dolores commodi iusto.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptates dolores! Natus cum dolor eius et tempora! Dolore facere ipsum excepturi laboriosam mollitia. Quis reprehenderit doloribus labore dolores commodi iusto.</p>
        </div>        
      </div>

      <NewsLetter/>
    </div>
  )
}

export default About
