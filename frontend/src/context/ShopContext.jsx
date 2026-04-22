import { Children, createContext, useContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ShopContext = createContext();

export function ShopProvider ({children}) {
    const currency = "$";
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async(ItemId, size) => {
        if(!size) {
            toast.error('Please select product size')
            return;
        }

        let cartData = structuredClone(cartItems);
        if(cartData[ItemId]) {
            if(cartData[ItemId][size]) {
                cartData[ItemId][size] += 1;
            } else {
                cartData[ItemId][size] = 1
            }
        } else {
            cartData[ItemId] = {};
            cartData[ItemId][size] = 1;
        }

        setCartItems(cartData);
    }

   const getCartCount = () => {
    let totalCount = 0;

    for (const itemId in cartItems) {
        for (const size in cartItems[itemId]) {
            if (cartItems[itemId][size] > 0) {
                totalCount += cartItems[itemId][size];
            }
        }
    }

        return totalCount;
    }

    const updateQuantity = async(itemId, size, quantity) =>{
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for(const item in cartItems[items]) {
                try {
                    if(cartItems[items][item] > 0) {
                        totalAmount+=itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                }
            }
        }

        return totalAmount;
    }

    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, cartItems, addToCart, getCartCount, updateQuantity, getCartAmount, navigate
    }
    
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export function useShop() {
    return useContext(ShopContext);
}