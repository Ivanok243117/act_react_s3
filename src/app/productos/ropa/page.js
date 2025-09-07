export default function Ropa() {
  const productos = [
    { id: 4, nombre: 'Camiseta' },
    { id: 5, nombre: 'Pantalón' },
    { id: 6, nombre: 'Zapatos' }
  ]

  return (
    <div>
      <h2>Productos &gt; Ropa</h2>
      <p>{productos.length} productos encontrados</p>
      
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
    </div>
  )
}