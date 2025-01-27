"use client"
import { useState } from "react"
import { useProducts } from "../context/ProductContext"
import Link from 'next/link'

export default function Productos() {
    const {productos} = useProducts();

    return (
        <div className="p-6">
            <div >
                <Link className='inline-block mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-blue-600 transition' href={"/admin"} >
                Administrar
                </Link>
            </div>
            <h1 className="text-2xl font-bold mb-4" >Lista de Productos</h1>
            <div className="gird grid-cols-1 md:cols-2 lg:cols-3 gap-6">
                {productos.map((producto) => (
                    <div key={producto.id} className="bg-white border rounded-lg shadow-mb p-4" >
                        <img
                            src={producto.imagen}
                            alt={producto.nombre}
                            className="w-full h-48 object-cover rounded-md"
                        />
                        <h2 className="text-lg font-bold mt-4" >{producto.nombre}</h2>
                        <p className="text-gray-600 mt-2" >{producto.descripcion}</p>
                        <p className="text-gray-600 mt-2">${producto.precio}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}