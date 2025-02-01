'use client'; // Este componente es del lado del cliente

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Cart() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="fixed bottom-4 right-4">
      <button
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg"
        onClick={() => router.push('/cart')} // Navega a la página del carrito
      >
        🛒 ({cartItems.length})
      </button>
    </div>
  );
}