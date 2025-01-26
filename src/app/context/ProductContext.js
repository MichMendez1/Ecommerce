"use client"
import { createContext,useContext,useState } from "react";

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export function ProductProvider({children}){
    const [productos,setProductos]= useState([
        {
            id: 1,
            nombre: 'Producto 1',
            precio: 2000,
            descripcion: 'descripcion 1',
            imagen: 'https://media.istockphoto.com/id/467224344/es/foto/destornillador.jpg?s=1024x1024&w=is&k=20&c=ekadoCu3dEIaC77tS2fUqyignDwNRgY-bWsTxg1HXws='
        },
        {
            id: 2,
            nombre: 'Producto 2',
            precio: 1000,
            descripcion: 'descripcion 2',
            imagen: 'https://www.jupix.cl/cdn/shop/products/D_684282-MLC48645296707_122021-B_1024x.jpg?v=1661228065'
        },
    ]);

    return(
        <ProductsContext.Provider value={{productos,setProductos}}>
            {children}
        </ProductsContext.Provider>
    )
}