import React from 'react'
import useStore from '../store/store'

const ProductList = () => {
    const {products,addToCart}=useStore();
    console.log('Products in state:', products);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
         {products.map((product,index) => (
        <div key={index} className="border p-4">
          <h3 className="font-bold">{product.name}</h3>
          <p>Rs : {product.price.toFixed(2)}</p>
          <button
            className="bg-green-600 text-white p-2 mt-2"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
       
        
    </div>
  )
}

export default ProductList