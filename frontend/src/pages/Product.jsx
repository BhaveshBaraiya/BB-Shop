import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useShop } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useShop();
  const [product, setProduct] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProduct = async() => {
    products.map((item) => {
      if(item._id === productId) {
        setProduct(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProduct();
  }, [productId, products]);

  return product ?  (
    <div className='border-t pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className="flex gap sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex flex-col overflow-x-auto justify-between overflow-y-scroll sm:justify-normal w-full sm:w-[18.7%]">
            {product.image.map((image, index) => (
              <img src={image} key={index} onClick={()=> setImage(image)} alt="image" className='w-[24%] sm:mb-3 sm:w-full flex-shrink-0 cursor-pointer' />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className='w-full h-auto' alt="image" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className='font-medium text-2xl mt-2'>{product.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className='w-3.5' alt="rating icon" />
            <img src={assets.star_icon} className='w-3.5' alt="rating icon" />
            <img src={assets.star_icon} className='w-3.5' alt="rating icon" />
            <img src={assets.star_icon} className='w-3.5' alt="rating icon" />
            <img src={assets.star_dull_icon} className='w-3.5' alt="rating icon" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-2 text-3xl font-medium'>{currency}{product.price}</p>
          <p className='mt-3 text-gray-500 md:w-4/5'>{product.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {product.sizes.map((item, index) =>  (
                <button onClick={()=> setSize(item)} className={`py-2 px-4 bg-gray-100 cursor-pointer ${item === size ? 'border border-orange-500': '' }`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(product._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 hover:bg-transparent hover:border hover:text-black transition ease-in-out'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5 border-gray-300'/>
          <div className="text-sm text-gray mt-5 flex flex-col gap-1">
            <p>100% original product</p>
            <p>Cash on delivery is available</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex">
          <b className='border px-5 text-sm py-3'>Description</b>
          <p className='border px-5 text-sm py-3'>Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim eligendi placeat, impedit ducimus consequuntur reiciendis quo doloribus magnam qui aliquam aliquid asperiores tempore voluptates ratione odit sapiente ea ad.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quas pariatur eos. Unde consectetur autem, vel a nobis sit qui quod consequatur quidem ipsa repellat aliquid laboriosam ab, inventore obcaecati?</p>
        </div>
      </div>

      <RelatedProducts category={product.category} subCategory={product.subCategory}/>
    </div>
  ): <div className="opacity-0"></div>
}

export default Product
