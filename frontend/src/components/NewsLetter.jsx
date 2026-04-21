import React from 'react'

function NewsLetter() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quasi voluptate eaque facere nihil. Fugiat recusandae est, accusamus vitae laudantium consectetur earum error voluptatem, voluptas ab quod veritatis delectus minus!
        </p>
        <form onSubmit={handleSubmit} className='w-full flex items-center sm:w-1/2 gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required />
            <button className='bg-black border text-white text-xs px-10 py-4 hover:bg-white hover:border-black  hover:text-black' type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetter
