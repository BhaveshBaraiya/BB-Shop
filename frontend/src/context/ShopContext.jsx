import { Children, createContext, useContext } from "react";
import { products } from "../assets/assets";

const ShopContext = createContext();

export function ShopProvider ({children}) {
    const currency = "$";
    const delivery_fee = 10;
    

    const value = {
        products, currency, delivery_fee
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