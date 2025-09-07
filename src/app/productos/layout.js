export default function ProductosLayout({ children }) {
  return (
    <div className="section-container">
      <h1>Sección de Productos</h1>
      
      <nav className="category-nav">
        <a href="/productos/electronicos">Electrónicos</a>
        <a href="/productos/ropa">Ropa</a>
      </nav>
      
      {children}
    </div>
  )
}