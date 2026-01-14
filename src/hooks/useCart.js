import { useState, useEffect } from "react";

export function useCart(){

    const [cart, setCart] = useState(() => {
        try {
           const savedCart =  localStorage.getItem('cart');
           return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error("Failed to load cart from localstorage", error);
            return [];
        }
    });

    //Persist cart to localstorage
    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(cart));
        } catch (error) {
            console.error("Failed to save cart from localstorage", error);
        }
    }, [cart])

    //Sync accross tabs
    useEffect(() => {
        const handleStorage = (e) => {
            if(e.key === 'cart'){
                try {
                    const newCart = JSON.parse(e.newValue || '[]');
                    setCart(newCart);
                } catch (error) {
                    console.error("Failed to parse card from localstorage");
                }
            }
        }
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, [])

}