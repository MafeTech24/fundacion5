import Link from 'next/link'

export default function NotFound() {
  return <main className="not-found"><p className="eyebrow">404 · Página no encontrada</p><h1>Este camino todavía no existe.</h1><p>Volvé al inicio o escribinos si necesitás orientación.</p><Link className="button primary" href="/">Volver al inicio ↗</Link></main>
}
