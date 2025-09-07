import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mi App Next.js',
  description: 'Aplicación de ejemplo con App Router',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <nav>
          <Link href="/">Inicio</Link>
          <Link href="/productos">Productos</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contacto">Contacto</Link>
          <Link href="/docs">Documentación</Link>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
