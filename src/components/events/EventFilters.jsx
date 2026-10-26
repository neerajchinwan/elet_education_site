import { Search, SlidersHorizontal, X } from 'lucide-react'
import { categories, cities } from '../../data/events'

export default function EventFilters({ filters, setFilters, reset, count }) {
  const update = (key, value) => setFilters(prev => ({ ...prev, [key]: value }))
  const active = Object.values(filters).some(Boolean)
  return <section className="border-y border-line bg-white py-5">
    <div className="container-wide">
      <div className="mb-4 flex items-center justify-between"><span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-charcoal"><SlidersHorizontal size={15}/> Refine events</span><span className="text-xs text-slatecopy">{count} {count === 1 ? 'event' : 'events'} found</span></div>
      <div className="grid gap-3 md:grid-cols-[1.5fr_1fr_1fr_1fr_auto]">
        <label className="relative"><span className="sr-only">Search events</span><Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slatecopy"/><input value={filters.search} onChange={e=>update('search',e.target.value)} placeholder="Search events or keywords" className="form-field pl-9 text-sm"/></label>
        <label><span className="sr-only">Category</span><select value={filters.category} onChange={e=>update('category',e.target.value)} className="form-field text-sm"><option value="">All categories</option>{categories.map(c=><option key={c}>{c}</option>)}</select></label>
        <label><span className="sr-only">City</span><select value={filters.city} onChange={e=>update('city',e.target.value)} className="form-field text-sm"><option value="">All cities</option>{cities.map(c=><option key={c}>{c}</option>)}</select></label>
        <label><span className="sr-only">Month</span><select value={filters.month} onChange={e=>update('month',e.target.value)} className="form-field text-sm"><option value="">Any month</option>{Array.from({length:12},(_,i)=>({v:String(i+1).padStart(2,'0'),label:new Date(2026,i,1).toLocaleDateString('en-IN',{month:'long'})})).map(m=><option key={m.v} value={m.v}>{m.label}</option>)}</select></label>
        <button onClick={reset} disabled={!active} className="inline-flex items-center justify-center gap-2 border border-line px-4 py-3 text-xs font-semibold text-charcoal transition hover:border-charcoal disabled:cursor-not-allowed disabled:opacity-40"> <X size={14}/> Reset</button>
      </div>
    </div>
  </section>
}
