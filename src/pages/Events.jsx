
import { useMemo, useState } from 'react'
import { SearchX, CalendarDays } from 'lucide-react'
import { events } from '../data/events'
import EventCard from '../components/events/EventCard'
import EventFilters from '../components/events/EventFilters'
import { Container, PageIntro } from '../components/common'
const initial={search:'',category:'',city:'',month:''}
export default function Events() {
 const [filters,setFilters]=useState(initial),reset=()=>setFilters(initial)
 const filtered=useMemo(()=>events.filter(e=>{
  const q=filters.search.trim().toLowerCase()
  return (!q||[e.title,e.category,e.description,e.location,e.venue].some(v=>v.toLowerCase().includes(q)))&&(!filters.category||e.category===filters.category)&&(!filters.city||e.location.startsWith(filters.city))&&(!filters.month||e.date.slice(5,7)===filters.month)
 }),[filters])
 return <><PageIntro eyebrow="Awards & programme" title={<>Discover the <span className="serif-italic text-champagne">editions.</span></>} description="Explore the 2026 programme and look back at the inaugural Celebrating Education event in 2025." image="/images/panel-discussion.jpeg"/><EventFilters filters={filters} setFilters={setFilters} reset={reset} count={filtered.length}/><section className="bg-ivory py-12 sm:py-16"><Container><p className="mb-7 text-xs leading-5 text-slatecopy">2026 event date, venue, speakers, nominations and award categories will be updated once officially confirmed. 2025 is a past edition.</p>{filtered.length?<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map((e,i)=><EventCard key={e.id} event={e} index={i}/>)}</div>:<div className="border border-dashed border-[#E9D0D7] bg-white px-6 py-16 text-center"><SearchX size={32} className="mx-auto text-[#A51D3D]"/><h3 className="mt-4 font-display text-xl font-semibold">No editions match those filters</h3><button onClick={reset} className="btn-primary mt-6">Reset filters</button></div>}<p className="mt-8 flex items-center gap-2 text-xs text-slatecopy"><CalendarDays size={14}/>The 2026 programme is subject to confirmation by the organisers.</p></Container></section></>
}
