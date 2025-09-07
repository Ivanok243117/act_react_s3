import Link from 'next/link'

export default function DocsHome() {
  return (
    <div>
      <h1>Documentación</h1>
      
      <nav style={{ marginBottom: '1rem' }}>
        <span>Docs</span>
      </nav>
      
      <h2>Bienvenido a la documentación</h2>
      <p>Selecciona una sección para comenzar a explorar.</p>
      
      <h3>Secciones disponibles:</h3>
      <ul>
        <li><Link href="/docs/guia">Guía</Link></li>
        <li><Link href="/docs/api">API</Link></li>
        <li><Link href="/docs/tutoriales">Tutoriales</Link></li>
      </ul>
    </div>
  )
}