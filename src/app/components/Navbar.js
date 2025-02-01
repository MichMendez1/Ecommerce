import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo o nombre de la tienda */}
        <Link href="/">
          <div className="text-xl font-bold cursor-pointer">Mi Tienda Online</div>
        </Link>

        {/* Enlaces de navegación */}
        <div className="flex space-x-4">
          <Link href="/">
            <div className="hover:text-gray-200 cursor-pointer">Inicio</div>
          </Link>
          <Link href="/about">
            <div className="hover:text-gray-200 cursor-pointer">Nosotros</div>
          </Link>
          <Link href="/contact">
            <div className="hover:text-gray-200 cursor-pointer">Contacto</div>
          </Link>
        </div>

        {/* Ícono de carrito (opcional) */}
        <div className="relative">
          <Link href="/cart">
            <div className="hover:text-gray-200 cursor-pointer">
              🛒 Carrito
            </div>
          </Link>
          {/* Número de items en el carrito (opcional) */}
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </div>
      </div>
    </nav>
  );
}