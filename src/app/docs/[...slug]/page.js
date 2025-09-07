import Link from 'next/link'
import { redirect } from 'next/navigation'

export default function Docs({ params }) {
  const segments = params.slug || []
  
  // Si no hay segmentos, redirigir a la página principal de docs
  if (segments.length === 0) {
    redirect('/docs')
  }
  
  // Resto del código permanece igual...
  const breadcrumbs = ['Docs', ...segments]
  
  // Contenido basado en la ruta
  const getContent = () => {
    if (segments[0] === 'guia') {
      if (segments[1] === 'instalacion') {
        return <p>Contenido sobre cómo instalar y configurar nuestro producto.</p>
      }
      return <p>Contenido de la guía de usuario para {segments.slice(1).join(' > ')}</p>
    }
    
    if (segments[0] === 'api') {
      return <p>Documentación de la API para {segments.slice(1).join(' > ')}</p>
    }
    
    if (segments[0] === 'tutoriales') {
      return <p>Tutoriales sobre {segments.slice(1).join(' > ')}</p>
    }
    
    return <p>Contenido de documentación para {segments.join(' > ')}</p>
  }

  return (
    <div>
      <h1>Documentación: {segments.join(' > ')}</h1>
      
      <nav style={{ marginBottom: '1rem' }}>
        <Link href="/docs">Docs</Link>
        {segments.map((segment, index) => (
          <span key={index}>
            {' > '}
            {segment}
          </span>
        ))}
      </nav>
      
      {getContent()}
      
      <div style={{ marginTop: '1rem' }}>
        <Link href="/docs">← Volver al inicio de documentación</Link>
      </div>
    </div>
  )
}