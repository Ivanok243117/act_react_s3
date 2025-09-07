export default function BlogLayout({ children }) {
  return (
    <div>
      <h1>Sección de Blog</h1>
      
      <nav style={{ marginBottom: '1rem', padding: '0.5rem', backgroundColor: '#f0f0f0' }}>
        <a href="/blog" style={{ marginRight: '1rem' }}>Todos los artículos</a>
      </nav>
      
      {children}
    </div>
  )
}