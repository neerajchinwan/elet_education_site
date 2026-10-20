import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CalendarClock, CheckCircle2, Lock, Vote } from 'lucide-react'
import { Container, PageIntro } from '../components/common'
import GoogleSignIn, { SignedInAs, useGoogleUser } from '../components/auth/GoogleSignIn'
import { awardsEvent, awardSections } from '../data/awards2026'
import { votingOpen, votingClosesOn, votingCategories } from '../data/voting2026'
import { previewCategories, previewVote } from '../data/votingPreview'

const previewUser = { credential: 'preview', email: 'preview.voter@example.com', name: 'Preview Voter', picture: '' }

const initials = name => name.replace(/^(Dr|Prof|Mr|Mrs|Ms)\.?\s+/i, '').split(/\s+/).map(part => part[0]).join('').slice(0, 2).toUpperCase()

async function postVote(payload) {
  try {
    const response = await fetch('/api/vote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    return { status: response.status, body: await response.json().catch(() => ({})) }
  } catch {
    return { status: 0, body: { message: 'Network error. Please check your connection and try again.' } }
  }
}

function NoticeCard({ icon: Icon, title, children }) {
  return <div className="mx-auto max-w-2xl rounded-2xl border border-[#E9D0D7] bg-white p-7 text-center shadow-[0_20px_60px_rgba(61,25,36,0.07)] sm:p-10">
    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FBEFF2] text-champagne"><Icon size={21}/></span>
    <h2 className="mt-5 font-display text-2xl font-semibold text-[#24171D] sm:text-3xl">{title}</h2>
    <div className="mt-3 text-sm leading-7 text-slatecopy">{children}</div>
  </div>
}

function NomineeOption({ nominee, groupName, selected, chosen, locked, onSelect }) {
  const tone = chosen
    ? 'border-emerald-500 bg-emerald-50'
    : selected
      ? 'border-champagne bg-[#FFF7F9] ring-1 ring-champagne'
      : 'border-[#EADCE0] bg-white hover:border-[#D9A5B3]'
  return <label className={`flex items-center gap-4 rounded-xl border p-4 transition ${tone} ${locked ? (chosen ? '' : 'opacity-50') : 'cursor-pointer'}`}>
    <input type="radio" name={groupName} value={nominee.id} checked={chosen || selected} disabled={locked} onChange={() => onSelect(nominee.id)} className="sr-only"/>
    {nominee.photo
      ? <img src={nominee.photo} alt="" loading="lazy" className="h-14 w-14 shrink-0 rounded-full object-cover object-top"/>
      : <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2B1A21] to-[#571B2B] font-display text-lg font-bold text-champagne">{initials(nominee.name)}</span>}
    <span className="min-w-0 flex-1">
      <span className="block font-semibold leading-snug text-charcoal">{nominee.name}</span>
      {nominee.detail && <span className="mt-0.5 block text-xs leading-5 text-slatecopy">{nominee.detail}</span>}
    </span>
    {chosen
      ? <CheckCircle2 className="shrink-0 text-emerald-600" size={20}/>
      : !locked && <span className={`h-5 w-5 shrink-0 rounded-full border-2 ${selected ? 'border-[6px] border-champagne' : 'border-[#D8DCE2]'}`}/>}
  </label>
}

function CategoryBallot({ category, votedFor, onVote }) {
  const [selected, setSelected] = useState('')
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const locked = Boolean(votedFor)
  const chosenName = category.nominees.find(nominee => nominee.id === votedFor)?.name

  const submit = async () => {
    setSending(true)
    setError('')
    setError(await onVote(category.id, selected) || '')
    setSending(false)
  }

  return <article className={`rounded-2xl border bg-white p-5 sm:p-7 ${locked ? 'border-emerald-200' : 'border-[#EADCE0]'}`}>
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#A51D3D]">Section {category.section.id} · {category.section.title}</p>
        <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-charcoal">{category.title}</h3>
      </div>
      {locked && <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700"><CheckCircle2 size={14}/> Voted</span>}
    </div>
    <fieldset className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" disabled={locked || sending}>
      <legend className="sr-only">Nominees for {category.title}</legend>
      {category.nominees.map(nominee => <NomineeOption
        key={nominee.id}
        nominee={nominee}
        groupName={`vote-${category.id}`}
        selected={selected === nominee.id}
        chosen={votedFor === nominee.id}
        locked={locked}
        onSelect={setSelected}
      />)}
    </fieldset>
    {locked
      ? <p className="mt-5 text-sm text-emerald-700">You voted for <strong>{chosenName}</strong>. Thank you!</p>
      : <div className="mt-5 flex flex-wrap items-center gap-4">
        <button type="button" onClick={submit} disabled={!selected || sending} className="nomination-highlight inline-flex min-h-11 items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-50"><Vote size={16}/>{sending ? 'Submitting…' : 'Cast vote'}</button>
        <p className="text-xs text-slatecopy">{selected ? 'Votes are final and cannot be changed.' : 'Select a nominee to vote.'}</p>
      </div>}
    {error && <p role="alert" className="mt-4 text-sm text-red-600">{error}</p>}
  </article>
}

function Ballots({ user, categories, api, onSignOut, onExpired }) {
  const [votes, setVotes] = useState(null)
  const [loadError, setLoadError] = useState('')

  useEffect(() => {
    let cancelled = false
    api({ credential: user.credential, action: 'status' }).then(({ status, body }) => {
      if (cancelled) return
      if (status === 401) return onExpired()
      if (status !== 200) return setLoadError(body.message || 'Unable to load your votes. Please refresh the page.')
      setVotes(body.votes || {})
    })
    return () => { cancelled = true }
  }, [user.credential, api, onExpired])

  const vote = async (categoryId, nomineeId) => {
    const { status, body } = await api({ credential: user.credential, categoryId, nomineeId })
    if (status === 401) {
      onExpired()
      return null
    }
    if ((status === 200 || status === 409) && body.nomineeId) {
      setVotes(current => ({ ...current, [categoryId]: body.nomineeId }))
      return status === 409 ? body.message : null
    }
    return body.message || 'Unable to record your vote. Please try again.'
  }

  if (loadError) return <NoticeCard icon={Lock} title="Something went wrong">{loadError}</NoticeCard>
  if (!votes) return <p className="py-10 text-center text-sm text-slatecopy">Loading your ballot…</p>

  const votedCount = categories.filter(category => votes[category.id]).length
  const progress = Math.round((votedCount / categories.length) * 100)

  return <div className="space-y-10">
    <SignedInAs user={user} note="One vote per category for this Google account." onSignOut={onSignOut}/>
    <div className="rounded-2xl border border-[#EADCE0] bg-white p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-sm font-semibold text-charcoal">You have voted in {votedCount} of {categories.length} {categories.length === 1 ? 'category' : 'categories'}</p>
        <p className="text-xs text-slatecopy">Voting closes on {votingClosesOn}</p>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#F3E9EC]"><div className="h-full rounded-full bg-champagne transition-all" style={{ width: `${progress}%` }}/></div>
    </div>
    {awardSections.map(section => {
      const ballots = categories.filter(category => category.section.id === section.id)
      if (!ballots.length) return null
      return <section key={section.id} aria-labelledby={`vote-section-${section.id}`}>
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-ink font-display text-xl font-bold text-champagne">{section.id}</span>
          <div>
            <span className="eyebrow">Section {section.id}</span>
            <h2 id={`vote-section-${section.id}`} className="section-title mt-2 text-2xl text-charcoal sm:text-3xl">{section.title}</h2>
            <p className="mt-2 text-sm text-slatecopy">{section.tagline}</p>
          </div>
        </div>
        <div className="mt-6 space-y-6">
          {ballots.map(category => <CategoryBallot key={category.id} category={category} votedFor={votes[category.id]} onVote={vote}/>)}
        </div>
      </section>
    })}
  </div>
}

export default function Vote2026() {
  const { user, signIn, signOut } = useGoogleUser()
  const [expired, setExpired] = useState(false)
  const { search } = useLocation()
  const previewMode = import.meta.env.DEV && new URLSearchParams(search).has('preview')

  const handleSignIn = credential => {
    setExpired(false)
    signIn(credential)
  }
  const handleExpired = useCallback(() => {
    setExpired(true)
    signOut()
  }, [signOut])

  let content
  if (previewMode) {
    content = <div className="space-y-6">
      <p role="note" className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-900"><strong>Preview mode (only on your computer):</strong> sample nominees and a pretend voter, so you can see how voting works. Nothing is saved, and this mode is switched off on the live website. Refresh the page to start again.</p>
      <Ballots user={previewUser} categories={votingCategories.length ? votingCategories : previewCategories} api={previewVote} onSignOut={() => window.location.assign('/vote')} onExpired={() => {}}/>
    </div>
  } else if (!votingOpen) {
    content = <NoticeCard icon={Lock} title="Voting is closed">Thank you to everyone who voted. Winners will be announced at {awardsEvent.name} on {awardsEvent.date} in {awardsEvent.city}.</NoticeCard>
  } else if (!votingCategories.length) {
    content = <NoticeCard icon={CalendarClock} title="Nominees will be announced soon">Public voting opens once the Awards Committee announces the shortlisted nominees. Please check back shortly.</NoticeCard>
  } else if (!user) {
    content = <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-[#E9D0D7] bg-white shadow-[0_20px_60px_rgba(61,25,36,0.07)]">
      <div className="border-b border-[#F0E5E5] bg-[#FFFCF9] px-6 py-7 sm:px-9">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FBEFF2] text-champagne"><Vote size={19}/></span>
        <h2 className="mt-5 font-display text-2xl font-semibold leading-tight text-[#24171D] sm:text-3xl">Sign in to vote</h2>
        <p className="mt-3 text-sm leading-7 text-slatecopy">Sign in with your Google account to get started. This keeps voting fair: each Google account gets one vote per category. We never see your password.</p>
      </div>
      <div className="px-6 py-7 sm:px-9">
        {expired && <p role="alert" className="mb-5 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">Your sign-in expired. Please sign in again to continue voting.</p>}
        <GoogleSignIn onCredential={handleSignIn}/>
        <ul className="mt-7 space-y-2 border-t border-[#F0E5E5] pt-6 text-sm leading-6 text-slatecopy">
          <li>{votingCategories.length} {votingCategories.length === 1 ? 'category is' : 'categories are'} open for voting.</li>
          <li>One vote per category. Votes are final and cannot be changed.</li>
          <li>Voting closes on {votingClosesOn}.</li>
        </ul>
      </div>
    </div>
  } else {
    content = <Ballots key={user.email} user={user} categories={votingCategories} api={postVote} onSignOut={signOut} onExpired={handleExpired}/>
  }

  return <>
    <PageIntro
      eyebrow={`${awardsEvent.name} · Public Voting`}
      title={<>Cast your <span className="serif-italic text-champagne">vote.</span></>}
      description="Support the schools, education leaders and CSR changemakers you believe in. Sign in with Google and cast one vote in each award category."
      image="/images/award-stage.jpeg"
    />
    <section className="bg-ivory py-12 sm:py-16 lg:py-20">
      <Container>{content}</Container>
    </section>
  </>
}
