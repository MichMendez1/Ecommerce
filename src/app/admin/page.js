"use client"

import { useState } from "react"
import { useProducts } from "../context/ProductContext"
import Link from "next/link";

export default function Admin() {

    const {productos, addProduct,updateProduct,deleteProduct} = useProducts();
    const [nombre,setNombre] = useState('')
    const [precio,setPrecio] = useState('')
    const [imagen,setImagen] = useState('')
    const [idEditando,setIdEditando] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(idEditando){
            updateProduct(idEditando,{nombre,precio:parseFloat(precio),imagen})
            setIdEditando(null);
        }else{
            addProduct({nombre,precio:parseFloat(precio),imagen})
        }
        setNombre('')
        setPrecio('')
        setImagen('')
    }

    const handleEdit = (producto) => {
        setIdEditando(producto.id)
        setNombre(producto.nombre)
        setPrecio(producto.precio)
        setImagen(producto.imagen)
    }

    return (
        <div className="p-6">
            <div>
                <Link className='inline-block mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-blue-600 transition' href={"/productos"} >
                Ver productos
                </Link>
            </div>
            <h1 className="text-2xl font-bold mb-4" >Panel de Administracion</h1>
            <form className="bg-white p-4 rounded-lg shadow-mb mb-6" onSubmit={handleSubmit} >
                <h2 className="text-xl font-bold mb-4" >
                    {idEditando? 'Editar Producto' : 'Agregar Producto'}
                </h2>
                <div className="mb-4" >
                    <label className="block text-gray-700 font-bold mb-2" >Nombre del Producto</label>
                    <input
                        className="w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 " 
                        value={nombre}
                        onChange={(e)=>setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-4" >
                    <label className="block text-gray-700 font-bold mb-2" >Precio</label>
                    <input
                        className="w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 " 
                        value={precio}
                        onChange={(e)=>setPrecio(e.target.value)}
                    />
                </div>
                <div className="mb-4" >
                    <label className="block text-gray-700 font-bold mb-2" >URL de la imagen</label>
                    <input
                        className="w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 " 
                        value={imagen}
                        onChange={(e)=>setImagen(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className={`${
                        idEditando? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'
                    } text-white py-2 px-4 rounded
                    `}
                >
                    {idEditando? 'Guardar Cambios':'Agregar Producto'}
                </button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 " >
                {productos.map((producto)=>(
                    <div key={producto.id} className="bg-white border rounded-lg shadow-mb p-4 relative" >
                        <img 
                            src={producto.imagen}
                            alt={producto.nombre}
                            className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-lg font-bold"> {producto.nombre} </h2>
                        <p className="text-gray-600" >${producto.precio}</p>
                        <div className="mt-4 flex justify-between" >
                            <button
                                onClick={()=>handleEdit(producto)}
                                className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
                            >
                                Editar
                            </button>
                            <button
                                onClick={()=>deleteProduct(producto.id)}
                                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
