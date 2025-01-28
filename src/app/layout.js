
import "./globals.css";
import { ProductProvider } from "./context/ProductContext";


export const metadata = {
  title: "Mi E-commerce",
  description: "E-commerce dinamico con next.js 15",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ProductProvider>
          <div className="bg-white text-gray-900 min-h-screen flex flex-col" >
            {children}
          </div>
        </ProductProvider>
      </body>
    </html>
  );
}
