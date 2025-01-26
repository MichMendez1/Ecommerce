import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }} >
      <h1>Bienvenido a Nuestra Tienda</h1>
      <p>Encuentra los mejores productos al mejor precio</p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }} >
        <img
          src="https://media.istockphoto.com/id/467224344/es/foto/destornillador.jpg?s=1024x1024&w=is&k=20&c=ekadoCu3dEIaC77tS2fUqyignDwNRgY-bWsTxg1HXws="
          alt="Producto destacado"
          style={{ width: '300px', borderRadius: '10px' }}
        />
      </div>
      <div style={{ marginTop: '20px' }} >
        <Link style={{ fontSize: '20px', color: 'blue', textDecoration: 'underline' }} href={"/productos"} >
          Ver productos
        </Link>
      </div>
    </div>
  );
}
