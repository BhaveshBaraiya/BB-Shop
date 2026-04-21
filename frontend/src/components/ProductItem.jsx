import React from 'react'
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';

function ProductItem({id, image, name, price}) {
    const {currency} = useShop();

    return (
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
            <div className="overflow-hidden">
                <img src={image[0]} alt={name} className='hover:scale-110 transition ease-in-out'  />
                <p className='text-sm pt-3 pb-3'>{name}</p>
                <p className='text-sm font-medium'>{currency}{price}</p>
            </div>
        </Link>
  )
}

export default ProductItem
