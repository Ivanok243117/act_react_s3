import Link from 'next/link'

export default function Producto({ params }) {
  const productos = {
    1: { nombre: 'Laptop', descripcion: 'Potente laptop para trabajo y gaming', precio: '$1200' },
    2: { nombre: 'Smartphone', descripcion: 'Teléfono inteligente de última generación', precio: '$800' },
    3: { nombre: 'Tablet', descripcion: 'Tablet perfecta para lectura y multimedia', precio: '$500' }
  }

  const producto = productos[params.id]

  if (!producto) {
    return (
      <div>
        <h1>Producto no encontrado</h1>
        <Link href="/productos">Volver a productos</Link>
      </div>
    )
  }

  return (
    <div>
      <h1>Producto: {producto.nombre}</h1>
      <p><strong>Descripción:</strong> {producto.descripcion}</p>
      <p><strong>Precio:</strong> {producto.precio}</p>
      
      <div style={{ marginTop: '1rem' }}>
        <Link href="/productos">← Volver a la lista de productos</Link>
      </div>
    </div>
  )
}