import { useEffect } from "react";
import Layout from "./components/Layout"
import ProductList from "./components/ProductList"
import useStore from "./store/store";
import Cart from "./components/Cart";


function App() {
  const {addProduct}=useStore();

  const initializeProducts = () => {
    addProduct({ id: 1, name: 'Product 1', price: 2500.00 });
    addProduct({ id: 2, name: 'Product 2', price: 4000.00 });
    addProduct({ id: 3, name: 'Product 3', price: 600.00 });
  };

  useEffect(() => {
    initializeProducts();
  }, [addProduct]); 

  return (
   <Layout>
    <ProductList />
    <Cart/>
   </Layout>
  )
}

export default App
