import { getProducts } from '../../models/Product';
import Link from 'next/link'


export default async function Home() {
  const products = await getProducts();
  
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Tienda Online</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded-lg shadow-lg">
            <img src={product.image} alt={product.name} className="size-80 object-cover mb-4" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <Link href={`/product/${product._id}`}>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Ver Detalles
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
