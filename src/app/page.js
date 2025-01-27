"use client"
import Link from 'next/link'
import { useProducts } from './context/ProductContext';

export default function Home() {
  const {productos} = useProducts();

  const productoDestacado = productos.length > 0 ? productos[0] : null

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white text-center' >
      <h1 className='text-5xl font-bold mb-b' >Bienvenido a Nuestra Tienda</h1>
      <p className='text-lg mb-8' >Encuentra los mejores productos al mejor precio</p>
      {productoDestacado ? (
        <div className='bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-width-md' >
          <img
            src={productoDestacado.imagen} 
            alt={productoDestacado.nombre}
            className='w-full h-48 object-cover rounded-lg mb-4'
          />
          <h2 className='text-2xl font-bold'>{productoDestacado.nombre} </h2>
          <p className='text-lg text-gray-600 mt-2' >${productoDestacado.precio}</p>
          <Link className='inline-block mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-blue-600 transition' href={"/productos"} >
            Ver productos
          </Link>
        </div>
      ) : (
        <p className='text-lg' >No hay productos disponibles en este momento.</p>
      ) }
    </div>
  );
}
