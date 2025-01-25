"use client"

import { useState } from "react"

export default function Admin() {

    const [productos,setProductos] = useState([
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
    const [formulario,setFormulario] = useState({id:'',nombre:'',precio:'',descripcion:'',imagen:''})

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(formulario.id){
            setProductos((prev)=>
                prev.map((producto)=>(producto.id === formulario.id ? {...formulario, id:parseInt(formulario.id)}:producto))
            )
        }else{
            setProductos((prev)=>[
                ...prev,
                {...formulario,id:Date.now(),precio: parseFloat(formulario.precio)},
            ])
        }
        setFormulario({id:'',nombre:'',precio:'',descripcion:'',imagen:''})
    }

    const handleEdit= (producto) =>{
        setFormulario(producto)
    }

    const handleDelete = (id)=>{
        setProductos((prev)=> prev.filter((producto)=> producto.id !== id ) )
    }

    return(
        <div>
            <h1>Administrar Productos</h1>
            <form onSubmit={handleSubmit} style={{marginBottom:'20px'}} >
                <input 
                    type="text"
                    placeholder="nombre"
                    value={formulario.nombre}
                    onChange={(e)=> setFormulario({...formulario,nombre:e.target.value})}
                    required
                />
                <input 
                    type="number"
                    placeholder="Precio"
                    value={formulario.precio}
                    onChange={(e)=> setFormulario({...formulario,precio:e.target.value})}
                    required
                />
                <input 
                    type="text"
                    placeholder="Descripcion"
                    value={formulario.descripcion}
                    onChange={(e)=> setFormulario({...formulario,descripcion:e.target.value})}
                    required
                />
                <input 
                    type="url"
                    placeholder="Imagen (URL externa)"
                    value={formulario.imagen}
                    onChange={(e)=> setFormulario({...formulario,imagen:e.target.value})}
                    required
                />
                <button type="submit"> {formulario.id ? 'Editar' : 'Agregar'}</button>
            </form>


            <ul>
                {productos.map((producto)=>(
                    <li key={producto.id} style={{marginBottom:'10px',listStyle:'none'}} >
                        <div style={{display:'flex',alignItems:'center',gap:'10px'}} >
                            <img src={producto.imagen} alt={producto.nombre} style={{width:'50px',height:'50px',borderRadius:'5px'}} />
                            <strong>{producto.nombre} - ${producto.precio}</strong>
                            <button onClick={()=> handleEdit(producto)}>Editar</button>
                            <button onClick={()=> handleDelete(producto.id)}>Eliminar</button>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    )
}