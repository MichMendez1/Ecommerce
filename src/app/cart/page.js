'use client'; // Este es un Client Component

import { useEffect, useState } from 'react';
import {
  getCartFromLocalStorage,
  removeFromCart,
  updateCartItemQuantity,
  calculateCartTotal,
} from '../../../lib/cart';

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Obtener el carrito al cargar la página
  useEffect(() => {
    const cart = getCartFromLocalStorage();
    setCart(cart);
    setTotal(calculateCartTotal(cart));
  }, []);

  // Eliminar un producto del carrito
  const handleRemove = (productId) => {
    const updatedCart = removeFromCart(productId);
    setCart(updatedCart);
    setTotal(calculateCartTotal(updatedCart));
  };

  // Actualizar la cantidad de un producto
  const handleQuantityChange = (productId, quantity) => {
    const updatedCart = updateCartItemQuantity(productId, quantity);
    setCart(updatedCart);
    setTotal(calculateCartTotal(updatedCart));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item._id} className="border p-4 mb-4">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
                className="w-20 p-2 border rounded"
                min="1"
              />
              <button
                onClick={() => handleRemove(item._id)}
                className="bg-red-500 text-white px-4 py-2 rounded ml-4"
              >
                Eliminar
              </button>
            </div>
          ))}
          <div className="mt-8">
            <p className="text-2xl font-bold">Total: ${total}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
              Proceder al Pago
            </button>
          </div>
        </div>
      )}
    </div>
  );
}