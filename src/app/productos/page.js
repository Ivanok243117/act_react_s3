import Link from 'next/link'

export default function Productos() {
  const productos = [
    { id: 1, nombre: 'Laptop', categoria: 'electronicos', precio: '$1200', descripcion: 'Potente laptop para trabajo y gaming' },
    { id: 2, nombre: 'Smartphone', categoria: 'electronicos', precio: '$800', descripcion: 'Teléfono inteligente de última generación' },
    { id: 3, nombre: 'Tablet', categoria: 'electronicos', precio: '$500', descripcion: 'Tablet perfecta para lectura y multimedia' }
  ]

  return (
    <div className="section-container">
      <h1>Productos</h1>
      
      <div className="category-nav">
        <Link href="/productos/electronicos">Electrónicos</Link>
        <Link href="/productos/ropa">Ropa</Link>
      </div>
      
      <h2>Nuestros productos destacados</h2>
      
      <div style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
        {productos.map(producto => (
          <div key={producto.id} className="product-card">
            <h3>
              <Link href={`/productos/${producto.id}`}>
                {producto.nombre}
              </Link>
            </h3>
            <p><strong>Precio:</strong> {producto.precio}</p>
            <p>{producto.descripcion}</p>
            <p><small>Categoría: {producto.categoria}</small></p>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '1.5rem' }}>
        <h3>Categorías</h3>
        <ul>
          <li><Link href="/productos/electronicos">Electrónicos</Link></li>
          <li><Link href="/productos/ropa">Ropa</Link></li>
        </ul>
      </div>
    </div>
  )
}