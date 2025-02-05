'use client'; // Este es un Client Component

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function EditProduct() {
  const router = useRouter();
  const params = useParams();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  });

  // Obtener el producto al cargar la página
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`/api/products?id=${params.id}`);
        if (!response.ok) {
          throw new Error('Error al obtener el producto');
        }
        const data = await response.json();

        // Asegúrate de que todos los campos tengan un valor válido
        setFormData({
          name: data.name || '',
          price: data.price || '',
          description: data.description || '',
          image: data.image || '',
        });
      } catch (error) {
        console.error('Error al cargar el producto:', error);
      }
    }

    fetchProduct();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/products', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: params.id, ...formData }),
    });
    router.push('/admin');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Editar Producto</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nombre"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Precio"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Descripción"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="URL de la imagen"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Guardar
        </button>
      </form>
    </div>
  );
}