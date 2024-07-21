import React from 'react'
import useStore from '../store/store'

const Cart = () => {
    const{cart,removeFromCart,clearCart}=useStore()
  return (
    <div className="mt-4">
    <h2 className="text-2xl font-bold">Cart</h2>
    {cart.length === 0 ? (
      <p>Your cart is empty</p>
    ) : (
      <div>
        <ul>
          {cart.map((product) => (
            <li key={product.id} className="flex justify-between items-center border-b py-2">
              <span>{product.name} (x{product.quantity})</span>
              <span>${(product.price * product.quantity).toFixed(2)}</span>
              <button
                className="bg-red-500 text-white p-1"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <button className="bg-red-500 text-white p-2 mt-4" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    )}
  </div>
  )
}

export default Cart