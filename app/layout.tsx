import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fundación Por Un Mundo Mejor | Córdoba',
  description: 'Fundación para la atención y prevención de las adicciones. Orientación, prevención, formación y comunidad en Córdoba, Argentina.',
  generator: 'v0.app',
  icons: { icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoFundacion-aKUDByqRRAPDbMxcMJvZU6SKHJXHVB.png' },
}
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f5f4ef' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
