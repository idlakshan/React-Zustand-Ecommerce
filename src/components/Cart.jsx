import React from 'react'
import useStore from '../store/store'

const Cart = () => {
    const{cart}=useStore()
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id} className="flex justify-between items-center border-b py-2">
              <span>{product.name}</span>
              <span>Rs : {product.price.toFixed(2)}</span>
              <button className="bg-red-500 text-white p-1" >Remove </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart