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
              p.id === product.id ? { ...p, quantity: p.quantity + 1, price: p.price + product.price } : p
            ),
          };
        }
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }),
    removeFromCart:(productId)=>set((state)=>{
      return{
        cart: state.cart.filter((product) => product.id !== productId),
      }
    }),
    clearCart: () => set({ cart: [] }),

}));

export default useStore;