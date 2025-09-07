import Link from 'next/link'

export default function Blog() {
  const articulos = [
    { 
      slug: 'introduccion-nextjs', 
      titulo: 'Introducción a Next.js', 
      extracto: 'Aprende los fundamentos de Next.js y sus ventajas sobre React tradicional',
      fecha: '15 Mar 2023'
    },
    { 
      slug: 'react-server-components', 
      titulo: 'Componentes de Servidor en React', 
      extracto: 'Descubre cómo los Server Components revolucionan el desarrollo web',
      fecha: '22 Abr 2023'
    },
    { 
      slug: 'app-router-guia', 
      titulo: 'Guía del App Router', 
      extracto: 'Domina el nuevo sistema de enrutamiento de Next.js 13+',
      fecha: '5 May 2023'
    }
  ]

  return (
    <div className="section-container">
      <h1>Blog</h1>
      
      <h2>Últimos artículos</h2>
      
      <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1.5rem' }}>
        {articulos.map(articulo => (
          <article key={articulo.slug} className="product-card">
            <h3>
              <Link href={`/blog/${articulo.slug}`}>
                {articulo.titulo}
              </Link>
            </h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>{articulo.fecha}</p>
            <p>{articulo.extracto}</p>
            <Link href={`/blog/${articulo.slug}`} style={{ display: 'inline-block', marginTop: '0.5rem' }}>
              Leer más →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}