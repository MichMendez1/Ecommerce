import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Cart/>
      </body>
    </html>
  );
}
