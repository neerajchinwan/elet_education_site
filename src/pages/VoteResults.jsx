import { useEffect, useState } from 'react'
import { Download, Lock, RefreshCw, Trophy } from 'lucide-react'
import { Container } from '../components/common'

const PASSWORD_KEY = 'ce-2026-results-password'

const csvCell = value => `"${String(value ?? '').replace(/"/g, '""')}"`

function downloadCsv(rows) {
  const header = ['Category', 'Nominee', 'Voter name', 'Voter email', 'Voted at']
  const lines = [header, ...rows.map(row => [row.category, row.nominee, row.voterName, row.voterEmail, row.votedAt])]
  const blob = new Blob([`\uFEFF${lines.map(line => line.map(csvCell).join(',')).join('\r\n')}`], { type: 'text/csv;charset=utf-8' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = `celebrating-education-2026-votes-${new Date().toISOString().slice(0, 10)}.csv`
  link.click()
  URL.revokeObjectURL(link.href)
}

function Stat({ label, value }) {
  return <div className="rounded-xl border border-[#EADCE0] bg-white p-5">
    <p className="text-[11px] font-bold uppercase tracking-[.14em] text-slatecopy">{label}</p>
    <p className="mt-2 font-display text-3xl font-semibold text-charcoal">{value}</p>
  </div>
}

export default function VoteResults() {
  const [password, setPassword] = useState(() => sessionStorage.getItem(PASSWORD_KEY) || '')
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const load = async (pw = password) => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('/api/vote-results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pw }),
      })
      const body = await response.json().catch(() => ({}))
      if (!response.ok) {
        if (response.status === 401) sessionStorage.removeItem(PASSWORD_KEY)
        throw new Error(body.message || 'Unable to load results.')
      }
      sessionStorage.setItem(PASSWORD_KEY, pw)
      setData(body)
    } catch (err) {
      setError(err.message)
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (password) load(password)
  }, [])

  const signOut = () => {
    sessionStorage.removeItem(PASSWORD_KEY)
    setPassword('')
    setData(null)
  }

  return <section className="min-h-screen bg-ivory pb-16 pt-32 sm:pt-36">
    <Container>
      <span className="eyebrow">Organisers only</span>
      <h1 className="section-title mt-4 text-4xl text-charcoal sm:text-5xl">Voting results<span className="serif-italic text-champagne">.</span></h1>

      {!data && <form onSubmit={event => { event.preventDefault(); load() }} className="mt-8 max-w-md rounded-2xl border border-[#E9D0D7] bg-white p-6 sm:p-8">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FBEFF2] text-champagne"><Lock size={19}/></span>
        <label htmlFor="results-password" className="mt-5 block text-xs font-bold text-charcoal">Results password</label>
        <input id="results-password" type="password" autoComplete="current-password" className="form-field mt-2" value={password} onChange={event => setPassword(event.target.value)} required/>
        {error && <p role="alert" className="mt-3 text-sm text-red-600">{error}</p>}
        <button type="submit" disabled={loading || !password} className="nomination-highlight mt-5 inline-flex min-h-11 items-center justify-center px-5 py-2.5 text-sm font-bold disabled:opacity-50">{loading ? 'Checking…' : 'View results'}</button>
      </form>}

      {data && <div className="mt-8 space-y-8">
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" onClick={() => load()} disabled={loading} className="inline-flex items-center gap-2 rounded-lg border border-[#D8DCE2] bg-white px-4 py-2 text-sm font-semibold text-charcoal hover:border-champagne disabled:opacity-50"><RefreshCw size={15} className={loading ? 'animate-spin' : ''}/> Refresh</button>
          <button type="button" onClick={() => downloadCsv(data.rows)} disabled={!data.rows.length} className="inline-flex items-center gap-2 rounded-lg border border-[#D8DCE2] bg-white px-4 py-2 text-sm font-semibold text-charcoal hover:border-champagne disabled:opacity-50"><Download size={15}/> Download CSV</button>
          <button type="button" onClick={signOut} className="text-sm font-semibold text-[#A51D3D] underline underline-offset-4">Lock</button>
          <p className="text-xs text-slatecopy sm:ml-auto">Updated {new Date(data.generatedAt).toLocaleString()}</p>
        </div>
        {error && <p role="alert" className="text-sm text-red-600">{error}</p>}

        <div className="grid gap-4 sm:grid-cols-3">
          <Stat label="Total votes" value={data.totalVotes}/>
          <Stat label="Unique voters" value={data.uniqueVoters}/>
          <Stat label="Categories" value={data.categories.length}/>
        </div>

        {!data.categories.length && <p className="text-sm text-slatecopy">No voting categories have nominees yet. Add nominees in <code className="font-mono text-xs">src/data/voting2026.js</code>.</p>}

        <div className="grid gap-6 lg:grid-cols-2">
          {data.categories.map(category => <article key={category.id} className="rounded-2xl border border-[#EADCE0] bg-white p-5 sm:p-6">
            <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#A51D3D]">{category.section}</p>
            <div className="mt-1 flex items-baseline justify-between gap-3">
              <h2 className="font-display text-lg font-semibold text-charcoal">{category.title}</h2>
              <span className="shrink-0 text-xs font-semibold text-slatecopy">{category.totalVotes} votes</span>
            </div>
            <ol className="mt-4 space-y-3">
              {category.nominees.map((nominee, index) => {
                const share = category.totalVotes ? Math.round((nominee.votes / category.totalVotes) * 100) : 0
                const leading = index === 0 && nominee.votes > 0
                return <li key={nominee.id}>
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="flex min-w-0 items-center gap-2 font-semibold text-charcoal">{leading && <Trophy size={15} className="shrink-0 text-amber-500"/>}<span className="truncate">{nominee.name}</span></span>
                    <span className="shrink-0 tabular-nums text-slatecopy">{nominee.votes} · {share}%</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[#F3E9EC]"><div className={`h-full rounded-full ${leading ? 'bg-champagne' : 'bg-[#D9A5B3]'}`} style={{ width: `${share}%` }}/></div>
                </li>
              })}
            </ol>
          </article>)}
        </div>
      </div>}
    </Container>
  </section>
}
