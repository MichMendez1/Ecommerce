"use client"
import { useState } from "react"

export default function Productos() {
    const [productos] = useState([
        {
            id:1,
            nombre:'Producto 1',
            precio: 2000,
            descripcion: 'descripcion 1',
            imagen: 'https://media.istockphoto.com/id/467224344/es/foto/destornillador.jpg?s=1024x1024&w=is&k=20&c=ekadoCu3dEIaC77tS2fUqyignDwNRgY-bWsTxg1HXws='
        },
        {
            id:2,
            nombre:'Producto 2',
            precio: 1000,
            descripcion: 'descripcion 2',
            imagen: 'https://www.jupix.cl/cdn/shop/products/D_684282-MLC48645296707_122021-B_1024x.jpg?v=1661228065'
        },

    ])

    return(
        <div>
            <h1 style={{textAlign:"center"}} >Lista de Productos</h1>
            <div
                style={{
                    display:'grid',
                    gap:'20px',
                    gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',
                    padding:'20px'
                }}
            >
                {productos.map((producto)=>(
                    <div
                        key={producto.id}
                        style={{
                            border: '1pc solid #ccc',
                            padding: '10px',
                            textAlign: "center"
                        }}
                    >
                        <div style={{display:'flex',justifyContent:"center",marginBottom:'10px'}} >
                            <img 
                                src={producto.imagen}
                                alt={producto.nombre}
                                style={{
                                    maxWidth:'100%',
                                    height:'auto',
                                    borderRadius:'10px'
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