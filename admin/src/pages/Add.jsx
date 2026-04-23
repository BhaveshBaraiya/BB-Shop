import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

function Add({ token }) {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    category: 'men',
    subCategory: 'topwear',
    bestSeller: false,
    sizes: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Size toggle
  const toggleSize = (size) => {
    setForm(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter(item => item !== size)
        : [...prev.sizes, size]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // Append form fields
      Object.entries(form).forEach(([key, value]) => {
        if (key === 'sizes') {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value);
        }
      });

      // Append images
      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      image4 && formData.append('image4', image4);

      const response = await axios.post(
        backendUrl + '/api/product/add',
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);

        // Reset form
        setForm({
          name: '',
          description: '',
          price: '',
          category: 'men',
          subCategory: 'topwear',
          bestSeller: false,
          sizes: []
        });

        // Reset images
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);

      } else {
        toast.error(response.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form className='flex flex-col w-full items-start gap-3' onSubmit={handleSubmit}>      
      <div>
        <p className='mb-2'>Upload Image</p>
        <div className="flex gap-2">
          {[image1, image2, image3, image4].map((img, index) => {
            const setters = [setImage1, setImage2, setImage3, setImage4];
            return (
              <label key={index} htmlFor={`image${index + 1}`}>
                <img
                  className='w-20'
                  src={!img ? assets.upload_area : URL.createObjectURL(img)}
                  alt="Upload"
                />
                <input
                  type="file"
                  id={`image${index + 1}`}
                  hidden
                  onChange={(e) => setters[index](e.target.files[0])}
                />
              </label>
            );
          })}
        </div>
      </div>

      <div className="w-full">
        <p className='mb-2'>Product Name</p>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder='Type here'
          required
          className='w-full max-w-[500px] px-3 py-2'
        />
      </div>

      <div className="w-full">
        <p className='mb-2'>Product Description</p>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder='Type description here'
          required
          className='w-full max-w-[500px] px-3 py-2'
        />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className='mb-2'>Product Category</p>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className='w-full px-3 py-2'
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Subcategory</p>
          <select
            name="subCategory"
            value={form.subCategory}
            onChange={handleChange}
            className='w-full px-3 py-2'
          >
            <option value="topwear">Topwear</option>
            <option value="bottomwear">Bottomwear</option>
            <option value="winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Price</p>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder='Type price here'
            className='w-full px-3 py-2 sm:w-[120px]'
          />
        </div>
      </div>

      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className="flex gap-3">
          {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
            <div key={size} onClick={() => toggleSize(size)}>
              <p className={`${form.sizes.includes(size) ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>
                {size}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input
          type="checkbox"
          name="bestSeller"
          checked={form.bestSeller}
          onChange={handleChange}
          id="bestseller"
        />
        <label htmlFor="bestseller" className='cursor-pointer'>
          Add To Best Seller
        </label>
      </div>

      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>
        ADD
      </button>
    </form>
  )
}

export default Add