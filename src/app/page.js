import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <p>Bienvenido a nuestra aplicación de ejemplo con Next.js 13+ y App Router.</p>
      
      <h2>Navegación rápida</h2>
      <ul>
        <li><Link href="/productos">Ver productos</Link></li>
        <li><Link href="/blog">Leer blog</Link></li>
        <li><Link href="/contacto">Contactarnos</Link></li>
        <li><Link href="/docs/guia/introduccion">Documentación</Link></li>
      </ul>
    </div>
  )
}
