import React, { useEffect, useState } from 'react'
import { useShop } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

function BestSeller() {
    const { products } = useShop();
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestSeller);
        setBestSeller(bestProduct.slice(0, 5));
    }, [products]);

    return (
        <div className='my-10'>

            {/* HEADER */}
            <div
                className="text-3xl text-center py-8"
                data-aos="fade-up"
                data-aos-duration="800"
            >
                <Title text1={'BEST'} text2={'SELLERS'} />

                <p
                    className='w-3/4 m-auto text-xs sm:text-sm md:text-md text-gray-600 mt-3'
                    data-aos="fade-up"
                    data-aos-delay="150"
                    data-aos-duration="800"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laboriosam quaerat, facere commodi corporis amet reiciendis accusamus expedita unde deleniti! Harum provident nam aut tenetur, quis amet nemo itaque tempore.
                </p>
            </div>

            {/* PRODUCTS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {bestSeller.map((item, index) => (
                    <div
                        key={item._id}
                        data-aos="flip-left"
                        data-aos-duration="700"
                        data-aos-delay={index * 100}
                    >
                        <ProductItem
                            id={item._id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default BestSeller;