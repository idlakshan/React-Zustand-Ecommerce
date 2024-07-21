import React from 'react'

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="border p-4">
        <h3 className="font-bold">Name</h3>
        <button className="bg-green-600 text-white p-2 mt-2">Add to Cart</button>
        </div>
        
    </div>
  )
}

export default ProductList