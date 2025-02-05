'use client'; // Este es un Client Component

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Admin() {
  const [products, setProducts] = useState([]);

  // Obtener los productos al cargar la página
  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  // Eliminar un producto
  const handleDelete = async (id) => {
    await fetch('/api/products', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setProducts(products.filter((product) => product._id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Panel de Administración</h1>
      <Link href="/admin/new">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
          Agregar Nuevo Producto
        </button>
      </Link>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Precio</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="border">
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">${product.price}</td>
              <td className="border p-2">
                <Link href={`/admin/edit/${product._id}`}>
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
                    Editar
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}