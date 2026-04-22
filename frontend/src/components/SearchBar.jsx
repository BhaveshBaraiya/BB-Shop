import React, { useEffect } from 'react'
import { useShop } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function SearchBar() {
    const { search, setSearch, showSearch, setShowSearch } = useShop();
    const location = useLocation();
    // const [visible, setVisible] = useState(false);

    useEffect(() => {
        if(showSearch) {
            setShowSearch(false);
        }
    }, [location]);
  
    return showSearch ? (
    <div className='border-t bg-gray-50 text-center'>
        <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
            <input type="text" placeholder='Search' className='flex-1 outline-none bg-inherit text-sm' onChange={(e) => setSearch(e.target.value)} value={search} />
            <img src={assets.search_icon} alt="Search Icon" className='w-4 ' />
        </div>

        <img src={assets.cross_icon} alt="Cross Icon" className='w-3 inline cursor-pointer' onClick={() => setShowSearch(false)} />
    </div>
  ): null
}

export default SearchBar
