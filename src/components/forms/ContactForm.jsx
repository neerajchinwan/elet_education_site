import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
  const [state, setState] = useState('idle')
  const [sendError, setSendError] = useState('')
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()
  const submit = async data => {
    setSendError('')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          company: data.company,
          inquiry: data.inquiry,
          subject: data.subject,
          message: data.message,
          website: data.website,
        }),
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(result.message || 'Failed to send')
      setState('success')
      reset()
    } catch (error) {
      setSendError(error.message || 'Unable to send your message. Please try again later.')
    }
  }
  const fieldError = name => errors[name] && <p className="mt-1 text-xs text-red-600">{errors[name].message || 'This field is required.'}</p>
  if (state === 'success') return <div role="status" className="border border-emerald-200 bg-emerald-50 p-7"><CheckCircle2 className="text-emerald-700" size={28}/><h3 className="mt-4 font-display text-xl font-semibold text-charcoal">Thank you for your enquiry</h3><p className="mt-2 text-sm leading-6 text-slatecopy">Your message has been sent. Our team will get back to you shortly.</p><button onClick={()=>setState('idle')} className="mt-5 text-sm font-bold underline underline-offset-4">Send another enquiry</button></div>
  return <form onSubmit={handleSubmit(submit)} className="space-y-5" noValidate>
    <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register('website')}/>
    <div className="grid gap-5 sm:grid-cols-2">
      <div><label className="mb-2 block text-xs font-bold text-charcoal" htmlFor="fullName">Full name *</label><input id="fullName" className="form-field" placeholder="Your full name" maxLength={100} {...register('fullName',{required:'Please enter your name.'})}/>{fieldError('fullName')}</div>
      <div><label className="mb-2 block text-xs font-bold text-charcoal" htmlFor="email">Work email *</label><input id="email" type="email" className="form-field" placeholder="you@company.com" maxLength={254} {...register('email',{required:'Please enter your email.',pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:'Enter a valid email address.'}})}/>{fieldError('email')}</div>
      <div><label className="mb-2 block text-xs font-bold text-charcoal" htmlFor="phone">Phone number</label><input id="phone" className="form-field" placeholder="+91" maxLength={30} {...register('phone')}/></div>
      <div><label className="mb-2 block text-xs font-bold text-charcoal" htmlFor="company">Company</label><input id="company" className="form-field" placeholder="Company name" maxLength={100} {...register('company')}/></div>
    </div>
    <div><label className="mb-2 block text-xs font-bold text-charcoal" htmlFor="inquiry">Inquiry type *</label><select id="inquiry" className="form-field" defaultValue="" {...register('inquiry',{required:'Please select an inquiry type.'})}><option value="" disabled>Select a topic</option>{['Event inquiry','Partnership','Sponsorship','Speaking opportunity','General inquiry','Other'].map(x=><option key={x}>{x}</option>)}</select>{fieldError('inquiry')}</div>
    <div><label className="mb-2 block text-xs font-bold text-charcoal" htmlFor="subject">Subject *</label><input id="subject" className="form-field" placeholder="How can we help?" maxLength={150} {...register('subject',{required:'Please add a subject.'})}/>{fieldError('subject')}</div>
    <div><label className="mb-2 block text-xs font-bold text-charcoal" htmlFor="message">Message *</label><textarea id="message" rows="5" className="form-field resize-y" placeholder="Tell us a little about your plans..." maxLength={5000} {...register('message',{required:'Please add a message.',minLength:{value:10,message:'Please provide a little more detail (at least 10 characters).'}})}/>{fieldError('message')}</div>
    {sendError && <p role="alert" className="text-sm text-red-600">{sendError}</p>}
    <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-60">{isSubmitting?'Sending…':'Send enquiry'} <ArrowRight size={15}/></button>
  </form>
}
