import React, { useEffect, useState } from 'react'
import { useShop } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

function Cart() {
  const {products, currency, cartItems, updateQuantity, navigate } = useShop();
  const [cardData,setCartData] = useState([]);

  useEffect(() => {
    if(products.length > 0) {
      const tempData = [];
    
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item]
            });
          }
        }
      }
    
      setCartData(tempData);
    }
  
}, [cartItems, products]);

  return (
    <div className='border-t pt-14 mt-40' data-aos="fade-down" data-aos-duration="800">
      <div className="text-2xl mb-3">
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>
      <div className="">
        {cardData.map((item, index) => {
          const product = products.find((product) => product._id === item._id);
          return (
            <div className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr, 2fr,0.5fr] items-center gap-4" key={index}>
              <div className="flex items-start gap-6">
                <img src={product.image[0]} alt="Product Image" className='w-16 sm:w-20'/>
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{product.name}</p>
                  <div className="flex items-center gap-5 mt-2 ">
                    <p>{currency}{product.price}</p>
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                  </div>
                </div>
              </div>
              <input onChange={(e) => e.target.value === '' || e.target.value ==='0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} type="number" min={1} defaultValue={item.quantity} className='border max-w-10 sm:max-w-20 sm:px-2 py-1' />
              <img src={assets.bin_icon} alt="Bin Icon" className='w-4 mr-4 cursor-pointer' onClick={()=> updateQuantity(item._id, item.size, 0)} />
            </div>
          )
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal/>
          <div className="w-full text-end">
            <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
