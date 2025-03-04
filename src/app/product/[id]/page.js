'use client'; // Este es un Client Component

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { addToCart } from '../../../../lib/cart';

export default function ProductDetail() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obtener el producto al cargar la página
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`/api/products?id=${params.id}`);
        if (!response.ok) {
          throw new Error('Error al obtener el producto');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Producto no encontrado</div>;
  }


  const handleAddToCart = (product) => {
    console.log(product);
    addToCart(product);
    alert('Producto agregado al carrito');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <img src={product.image} alt={product.name} className="size-80 object-cover mb-6" />
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold">${product.price}</p>
        <button onClick={()=>handleAddToCart(product) } className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}