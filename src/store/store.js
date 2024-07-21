import { create } from "zustand";

const useStore = create((set) => ({
    products: [],
    cart: [],
    addProduct: (product) => set((state) => ({
        products: [...state.products, product]
    })),
    addToCart: (product) => set((state) => {
        const existingProduct = state.cart.find((p) => p.id === product.id);
        if (existingProduct) {
          return {
            cart: state.cart.map((p) =>
              p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
            ),
          };
        }
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }),

}));

export default useStore;