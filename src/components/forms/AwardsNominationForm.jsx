import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import GoogleSignIn, { SignedInAs } from '../auth/GoogleSignIn'
import { awardSections, awardCategories, NOMINATION_FIELDS } from '../../data/awards2026'

const hasValue = value => typeof value === 'string' && value.trim() !== ''

function CategoryCard({ category, register }) {
  return <fieldset className="min-w-0 rounded-xl border border-[#EADCE0] bg-white p-5 sm:p-6">
    <legend className="sr-only">{category.title}</legend>
    <div className="flex items-start gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FBEFF2] text-xs font-bold text-champagne">{category.number}</span>
      <h4 className="pt-1 font-display text-base font-semibold leading-snug text-charcoal">{category.title}</h4>
    </div>
    <div className="mt-5 space-y-4">
      {NOMINATION_FIELDS.map(key => <div key={key}>
        <label htmlFor={`${category.id}-${key}`} className="mb-1.5 block text-xs font-bold text-charcoal">{category.labels[key]}</label>
        <input id={`${category.id}-${key}`} className="form-field" maxLength={200} {...register(`nominations.${category.id}.${key}`)}/>
      </div>)}
    </div>
  </fieldset>
}

export default function AwardsNominationForm({ user, onCredential, onSignOut }) {
  const [result, setResult] = useState(null)
  const [sendError, setSendError] = useState('')
  const [needsSignIn, setNeedsSignIn] = useState(false)
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    defaultValues: { nominator: { name: user.name }, sendCopy: true },
  })

  useEffect(() => { setNeedsSignIn(false); setSendError('') }, [user.credential])

  const submit = async data => {
    setSendError('')
    const filled = awardCategories.filter(category => NOMINATION_FIELDS.some(key => hasValue(data.nominations?.[category.id]?.[key])))
    if (!filled.length) {
      setSendError('Please fill in at least one award category before submitting.')
      return
    }
    try {
      const response = await fetch('/api/nominate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          credential: user.credential,
          nominator: data.nominator,
          nominations: data.nominations,
          sendCopy: data.sendCopy,
        }),
      })
      const body = await response.json().catch(() => ({}))
      if (response.status === 401) {
        setNeedsSignIn(true)
        setSendError(body.message || 'Please sign in with Google again to submit.')
        return
      }
      if (!response.ok) throw new Error(body.message || 'Failed to submit')
      setResult({ count: filled.length, copySent: body.copySent })
      reset({ nominator: data.nominator, sendCopy: data.sendCopy })
      window.scrollTo({ top: document.getElementById('nominate')?.offsetTop - 100 || 0, behavior: 'smooth' })
    } catch (error) {
      setSendError(error.message || 'Unable to submit your nomination. Please try again later.')
    }
  }

  const fieldError = name => errors.nominator?.[name] && <p className="mt-1 text-xs text-red-600">{errors.nominator[name].message}</p>

  if (result) return <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-7 sm:p-9">
    <CheckCircle2 className="text-emerald-700" size={30}/>
    <h3 className="mt-4 font-display text-2xl font-semibold text-charcoal">Nomination submitted</h3>
    <p className="mt-2 text-sm leading-7 text-slatecopy">Thank you! Your nomination for {result.count} {result.count === 1 ? 'category' : 'categories'} has been received and will be reviewed by the Awards Committee.{result.copySent && <> A copy has been sent to <strong className="text-charcoal">{user.email}</strong>.</>}</p>
    <button onClick={() => setResult(null)} className="mt-6 text-sm font-bold underline underline-offset-4">Submit another nomination</button>
  </div>

  return <form onSubmit={handleSubmit(submit)} className="space-y-10" noValidate>
    <SignedInAs user={user} note="This email will be recorded with your nomination." onSignOut={onSignOut}/>

    <section>
      <span className="eyebrow">Your details</span>
      <h3 className="section-title mt-3 text-2xl text-charcoal sm:text-3xl">About the nominator</h3>
      <div className="mt-6 grid gap-5 rounded-2xl border border-[#EADCE0] bg-white p-5 sm:grid-cols-2 sm:p-6">
        <div><label className="mb-2 block text-xs font-bold text-charcoal" htmlFor="nominator-name">Full name *</label><input id="nominator-name" className="form-field" maxLength={100} {...register('nominator.name', { required: 'Please enter your full name.', validate: v => hasValue(v) || 'Please enter your full name.' })}/>{fieldError('name')}</div>
        <div><label className="mb-2 block text-xs font-bold text-charcoal" htmlFor="nominator-phone">Phone number *</label><input id="nominator-phone" type="tel" className="form-field" placeholder="+91" maxLength={30} {...register('nominator.phone', { required: 'Please enter your phone number.', pattern: { value: /^[+\d][\d\s()-]{6,}$/, message: 'Enter a valid phone number.' } })}/>{fieldError('phone')}</div>
        <div><label className="mb-2 block text-xs font-bold text-charcoal" htmlFor="nominator-designation">Designation</label><input id="nominator-designation" className="form-field" placeholder="e.g. Principal, CSR Head" maxLength={100} {...register('nominator.designation')}/></div>
        <div><label className="mb-2 block text-xs font-bold text-charcoal" htmlFor="nominator-organization">School / Organization</label><input id="nominator-organization" className="form-field" maxLength={150} {...register('nominator.organization')}/></div>
      </div>
    </section>

    {awardSections.map(section => <section key={section.id} aria-labelledby={`section-${section.id}`}>
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-ink font-display text-xl font-bold text-champagne">{section.id}</span>
        <div className="min-w-0">
          <span className="eyebrow">Section {section.id}</span>
          <h3 id={`section-${section.id}`} className="section-title mt-2 text-2xl text-charcoal sm:text-3xl">{section.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slatecopy">{section.tagline}</p>
          {section.note && <p className="mt-1 text-sm leading-6 text-slatecopy">{section.note}</p>}
        </div>
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {awardCategories.filter(category => category.section.id === section.id).map(category => <CategoryCard key={category.id} category={category} register={register}/>)}
      </div>
    </section>)}

    <div className="space-y-5 rounded-2xl border border-[#E9D0D7] bg-white p-5 sm:p-6">
      <p className="border-l-2 border-champagne bg-[#FFFCF9] p-4 text-sm leading-6 text-slatecopy"><strong className="text-charcoal">Note:</strong> Self-Nomination & Peer Nomination are allowed. You may nominate for multiple categories. All nominations are subject to review by the Awards Committee.</p>
      <label className="flex cursor-pointer items-start gap-3 text-sm text-charcoal">
        <input type="checkbox" className="mt-1 h-4 w-4 accent-[#C51F45]" {...register('sendCopy')}/>
        <span>Send me a copy of my responses at <strong>{user.email}</strong></span>
      </label>
      {sendError && <div role="alert" className="space-y-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
        <p>{sendError}</p>
        {needsSignIn && <GoogleSignIn onCredential={onCredential}/>}
      </div>}
      <button type="submit" disabled={isSubmitting} className="nomination-highlight inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 text-sm font-bold disabled:opacity-60">{isSubmitting ? 'Submitting…' : 'Submit nomination'} <ArrowRight size={16}/></button>
    </div>
  </form>
}
