
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { votingLive } from '../../data/voting2026'
const links = [
 {label:'Home',to:'/'},{label:'About the Initiative',to:'/about'},{label:'2026 Edition',to:'/events'},{label:'Participate',to:'/careers'},...(votingLive?[{label:'Vote 2026',to:'/vote'}]:[]),{label:'Contact',to:'/contact'}
]
export default function Navbar() {
 const [scrolled,setScrolled]=useState(false),[open,setOpen]=useState(false),location=useLocation()
 useEffect(()=>{const fn=()=>setScrolled(window.scrollY>28);fn();window.addEventListener('scroll',fn,{passive:true});return()=>window.removeEventListener('scroll',fn)},[])
 useEffect(()=>setOpen(false),[location.pathname])
 const solid=scrolled||location.pathname!=='/'
 return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid?'border-b border-white/10 bg-ink/95 shadow-lg shadow-black/10 backdrop-blur-md':'bg-transparent'}`}><div className="container-wide flex h-[78px] items-center justify-between gap-5">
  <Link to="/" className="flex shrink-0 items-center gap-3 text-white" aria-label="Celebrating Education home"><span className="flex h-9 w-9 items-center justify-center border border-champagne/80 font-display text-sm font-bold text-champagne">CE</span><span className="font-display text-[11px] font-extrabold tracking-[.12em] sm:text-[13px]">CELEBRATING <span className="font-medium text-champagne">EDUCATION</span></span></Link>
  <nav className="hidden items-center gap-6 xl:flex" aria-label="Main navigation">{links.map(l=><NavLink key={l.to} to={l.to} end={l.to==='/'} className={({isActive})=>`relative py-2 text-[11px] font-medium after:absolute after:bottom-0 after:left-0 after:h-px after:bg-champagne after:transition-all ${isActive?'text-white after:w-full':'text-white/65 after:w-0 hover:text-white hover:after:w-full'}`}>{l.label}</NavLink>)}</nav>
  <Link to="/awards-2026" className="nomination-highlight hidden items-center gap-2 px-4 py-3 text-[11px] font-bold transition lg:inline-flex">Nominate Now <ArrowUpRight size={14}/></Link>
  <button onClick={()=>setOpen(!open)} aria-label={open?'Close navigation menu':'Open navigation menu'} aria-expanded={open} className="flex h-10 w-10 items-center justify-center border border-white/20 text-white xl:hidden">{open?<X size={19}/>:<Menu size={19}/>}</button>
 </div><AnimatePresence>{open&&<motion.nav initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden border-t border-white/10 bg-ink xl:hidden" aria-label="Mobile navigation"><div className="container-wide flex flex-col py-4">{links.map(l=><NavLink key={l.to} to={l.to} end={l.to==='/'} className={({isActive})=>`border-b border-white/10 py-4 text-sm ${isActive?'text-champagne':'text-white/80'}`}>{l.label}</NavLink>)}<Link to="/awards-2026" className="nomination-highlight mt-4 flex items-center justify-center gap-2 py-3 text-sm font-bold">Nominate for 2026 Awards <ArrowUpRight size={15}/></Link></div></motion.nav>}</AnimatePresence></header>
}
