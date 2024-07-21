import { create } from "zustand";

const useStore = create((set) => ({
    products: [],
    cart: [],
    addProduct: (product) => set((state) => ({
        products: [...state.products, product]
    })),
    addToCart: (product) => set((state) => ({ 
        cart: [...state.cart, product]
     })),

}));

export default useStore;