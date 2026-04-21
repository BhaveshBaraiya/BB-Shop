import React, { useEffect, useState } from 'react'
import { useShop } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

function BestSeller() {
    const {products} = useShop();
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller));
        setBestSeller(bestProduct.slice(0, 5));
    }, []);

  return (
    <div className='my-10'>
        <div className="text-3xl text-center py-8">
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-md text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laboriosam quaerat, facere commodi corporis amet reiciendis accusamus expedita unde deleniti! Harum provident nam aut tenetur, quis amet nemo itaque tempore.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {bestSeller.map((item) => (
                <ProductItem key={item._id} name={item.name} price={item.price} image={item.image}/>
            ))}
        </div>
    </div>
  )
}

export default BestSeller
