import React, { useEffect, useState } from 'react'
import { useShop } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

function LatestCollection() {
    const { products } = useShop();
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            setLatestProducts(products.slice(0, 10));
        }
    }, [products]);

    return (
        <div className='my-10'>

            {/* HEADER */}
            <div
                className="text-center py-8 text-3xl"
                data-aos="fade-up"
                data-aos-duration="800"
            >
                <Title text1={'LATEST'} text2={"COLLECTIONS"} />

                <p
                    className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 mt-3'
                    data-aos="fade-up"
                    data-aos-delay="150"
                    data-aos-duration="800"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perferendis soluta ex quo assumenda expedita alias architecto saepe cupiditate rerum, eveniet doloribus voluptatem facilis a, nam sunt unde, qui ab?
                </p>
            </div>

            {/* PRODUCTS GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {latestProducts.map((product, index) => (
                    <div
                        key={product._id}
                        data-aos="zoom-in"
                        data-aos-duration="600"
                        data-aos-delay={index * 80}
                    >
                        <ProductItem
                            id={product._id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default LatestCollection;