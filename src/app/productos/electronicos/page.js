export default function Electronicos() {
  const productos = [
    { id: 1, nombre: 'Laptop' },
    { id: 2, nombre: 'Smartphone' },
    { id: 3, nombre: 'Tablet' }
  ]

  return (
    <div>
      <h2>Productos &gt; Electrónicos</h2>
      <p>{productos.length} productos encontrados</p>
      
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
    </div>
  )
}