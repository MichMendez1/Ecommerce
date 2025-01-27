"use client"

import { useState } from "react"
import { useProducts } from "../context/ProductContext"
import Link from "next/link";

export default function Admin() {

    const {productos, setProductos} = useProducts();
    const [formulario, setFormulario] = useState({ id: '', nombre: '', precio: '', descripcion: '', imagen: '' })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formulario.id) {
            setProductos((prev) =>
                prev.map((producto) => (producto.id === formulario.id ? { ...formulario, id: parseInt(formulario.id) } : producto))
            )
        } else {
            setProductos((prev) => [
                ...prev,
                { ...formulario, id: Date.now(), precio: parseFloat(formulario.precio) },
            ])
        }
        setFormulario({ id: '', nombre: '', precio: '', descripcion: '', imagen: '' })
    }

    const handleEdit = (producto) => {
        setFormulario(producto)
    }

    const handleDelete = (id) => {
        setProductos((prev) => prev.filter((producto) => producto.id !== id))
    }

    return (
        <div>
            <div style={{ marginTop: '20px' }} >
                <Link className='inline-block mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-blue-600 transition' href={"/productos"} >
                Ver productos
                </Link>
            </div>
            <h1>Administrar Productos</h1>
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }} >
                <input
                    type="text"
                    placeholder="nombre"
                    value={formulario.nombre}
                    onChange={(e) => setFormulario({ ...formulario, nombre: e.target.value })}
                    required
                />
                <input
                    type="number"
                    placeholder="Precio"
                    value={formulario.precio}
                    onChange={(e) => setFormulario({ ...formulario, precio: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Descripcion"
                    value={formulario.descripcion}
                    onChange={(e) => setFormulario({ ...formulario, descripcion: e.target.value })}
                    required
                />
                <input
                    type="url"
                    placeholder="Imagen (URL externa)"
                    value={formulario.imagen}
                    onChange={(e) => setFormulario({ ...formulario, imagen: e.target.value })}
                    required
                />
                <button type="submit"> {formulario.id ? 'Editar' : 'Agregar'}</button>
            </form>


            <ul>
                {productos.map((producto) => (
                    <li key={producto.id} style={{ marginBottom: '10px', listStyle: 'none' }} >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} >
                            <img src={producto.imagen} alt={producto.nombre} style={{ width: '50px', height: '50px', borderRadius: '5px' }} />
                            <strong>{producto.nombre} - ${producto.precio}</strong>
                            <button onClick={() => handleEdit(producto)}>Editar</button>
                            <button onClick={() => handleDelete(producto.id)}>Eliminar</button>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    )
}