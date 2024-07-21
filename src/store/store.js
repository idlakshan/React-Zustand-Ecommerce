import { create } from "zustand";

const useStore=create((set)=>({
    products:[],
    cart:[],
    

}));

export default useStore;