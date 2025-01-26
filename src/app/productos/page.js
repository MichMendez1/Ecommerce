"use client"
import { useState } from "react"
import { useProducts } from "../context/ProductContext"
import Link from 'next/link'

export default function Productos() {
    const {productos} = useProducts();

    return (
        <div>
            <div style={{ marginTop: '20px' }} >
                <Link style={{ fontSize: '20px', color: 'blue', textDecoration: 'underline' }} href={"/admin"} >
                Administrar
                </Link>
            </div>
            <h1 style={{ textAlign: "center" }} >Lista de Productos</h1>
            <div
                style={{
                    display: 'grid',
                    gap: '20px',
                    gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
                    padding: '20px'
                }}
            >
                {productos.map((producto) => (
                    <div
                        key={producto.id}
                        style={{
                            border: '1pc solid #ccc',
                            padding: '10px',
                            textAlign: "center"
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: "center", marginBottom: '10px' }} >
                            <img
                                src={producto.imagen}
                                alt={producto.nombre}
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: '10px'
                                }}
                            />
                        </div>
                        <h2>{producto.nombre}</h2>
                        <p>{producto.descripcion}</p>
                        <p><strong>${producto.precio}</strong></p>
                    </div>
                ))}
            </div>
        </div>
    )
}