import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Container } from '../components/common'

export default function NotFound() {
  return <section className="flex min-h-[70vh] items-center bg-ink py-32 text-white"><Container><p className="eyebrow !text-champagne">404 · Page not found</p><h1 className="section-title mt-5 text-5xl sm:text-7xl">This page took<br/><span className="serif-italic text-champagne">a different route.</span></h1><p className="mt-6 max-w-lg text-sm leading-7 text-white/60">The page you’re looking for may have moved or no longer exists.</p><Link to="/" className="btn-primary mt-8"><ArrowLeft size={15}/> Back to home</Link></Container></section>
}
