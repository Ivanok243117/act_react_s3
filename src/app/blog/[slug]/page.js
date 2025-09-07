import Link from 'next/link'

export default function Articulo({ params }) {
  const articulos = {
    'introduccion-nextjs': {
      titulo: 'Introducción a Next.js',
      contenido: 'Next.js es un framework de React que permite funcionalidades como renderizado del lado del servidor y generación de sitios estáticos.'
    },
    'react-server-components': {
      titulo: 'Componentes de Servidor en React',
      contenido: 'Los Server Components permiten renderizar componentes directamente en el servidor, reduciendo el tamaño del bundle JavaScript.'
    },
    'app-router-guia': {
      titulo: 'Guía del App Router',
      contenido: 'El App Router en Next.js 13 introduce un nuevo paradigma de enrutamiento basado en el sistema de archivos con muchas mejoras.'
    }
  }

  const articulo = articulos[params.slug]

  if (!articulo) {
    return (
      <div>
        <h1>Artículo no encontrado</h1>
        <Link href="/blog">Volver al blog</Link>
      </div>
    )
  }

  return (
    <div>
      <h1>Artículo: {articulo.titulo}</h1>
      <p>{articulo.contenido}</p>
      
      <div style={{ marginTop: '1rem' }}>
        <Link href="/blog">← Volver a la lista de artículos</Link>
      </div>
    </div>
  )
}