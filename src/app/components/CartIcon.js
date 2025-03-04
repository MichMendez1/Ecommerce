'use client'; // Este es un Client Component

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCartFromLocalStorage } from '../../../lib/cart';

export default function CartIcon() {
  const [cartCount, setCartCount] = useState(0);

  // Actualizar el contador del carrito
  useEffect(() => {
    const cart = getCartFromLocalStorage();
    setCartCount(cart.length);
  }, []);

  return (
    <Link href="/cart">
      <div className="relative">
        <span className="text-2xl absolute top-0 right-0">🛒</span>
        {cartCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            {cartCount}
          </span>
        )}
      </div>
    </Link>
  );
}