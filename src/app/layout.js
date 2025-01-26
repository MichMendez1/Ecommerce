
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
        <ProductProvider>{children}</ProductProvider>
      </body>
    </html>
  );
}
