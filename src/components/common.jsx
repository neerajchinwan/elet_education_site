import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Container({ children, className = '' }) {
  return <div className={`container-wide ${className}`}>{children}</div>
}

export function SectionHeading({ eyebrow, title, description, light = false, centered = false }) {
  return <div className={`${centered ? 'text-center mx-auto' : ''} max-w-3xl`}>
    {eyebrow && <span className={`eyebrow ${light ? '!text-champagne' : ''}`}>{eyebrow}</span>}
    <h2 className={`section-title mt-5 text-4xl sm:text-5xl lg:text-[58px] ${light ? 'text-white' : 'text-charcoal'}`}>{title}</h2>
    {description && <p className={`mt-5 max-w-2xl text-[15px] leading-7 ${centered ? 'mx-auto' : ''} ${light ? 'text-white/65' : 'text-slatecopy'}`}>{description}</p>}
  </div>
}

export function Reveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: reduceMotion ? 0 : .55, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>
}

export function PrimaryLink({ to, children, dark = false, className = '' }) {
  return <Link to={to} className={`${dark ? 'btn-outline' : 'btn-primary'} ${className}`}>{children}<ArrowRight size={15} /></Link>
}

export function TextLink({ to, children, light = false }) {
  return <Link to={to} className={`group inline-flex items-center gap-2 text-sm font-semibold ${light ? 'text-white' : 'text-charcoal'}`}>{children}<ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
}

export function PageIntro({ eyebrow, title, description, image }) {
  return <section className="relative overflow-hidden bg-ink pb-14 pt-36 text-white sm:pb-20 sm:pt-44">
    {image && <div className="absolute inset-0"><img src={image} alt="" className="h-full w-full object-cover opacity-25" /><div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/35" /></div>}
    <div className="container-wide relative z-10">
      {eyebrow && <span className="eyebrow !text-champagne">{eyebrow}</span>}
      <h1 className="section-title mt-5 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">{title}</h1>
      {description && <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">{description}</p>}
    </div>
  </section>
}

export function SectionRule() { return <div className="h-px w-12 bg-champagne" /> }
