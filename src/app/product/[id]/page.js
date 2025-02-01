"use client"
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';

// Datos de ejemplo (puedes reemplazar esto con una API o base de datos)
const products = [
  { id: 1, name: 'Producto 1', price: 20, image: '/product1.jpg', description: 'Descripción del Producto 1' },
  { id: 2, name: 'Producto 2', price: 30, image: '/product2.jpg', description: 'Descripción del Producto 2' },
  { id: 3, name: 'Producto 3', price: 40, image: '/product3.jpg', description: 'Descripción del Producto 3' },
];

export default function ProductDetail() {
  const params = useParams(); // Obtiene los parámetros de la ruta
  const { id } = params;

  // Busca el producto en la lista
  const product = products.find((p) => p.id === parseInt(id));

  // Si no encuentra el producto, muestra un 404
  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-6" />
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold">${product.price}</p>
        <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
}