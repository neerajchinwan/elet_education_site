import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle2, Upload, X } from 'lucide-react'

export default function CareerApplicationForm({ job, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { position: job.title } })
  const submit = () => setSubmitted(true) // Demo only; connect to a secure application API before launch.
  const err = key => errors[key] && <p className="mt-1 text-xs text-red-600">{errors[key].message || 'This field is required.'}</p>
  return <div className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-ink/75 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="application-title">
    <div className="my-6 max-h-[92vh] w-full max-w-2xl overflow-y-auto bg-ivory p-6 sm:p-9">
      <div className="flex items-start justify-between gap-4"><div><span className="eyebrow">Career opportunity</span><h2 id="application-title" className="mt-3 font-display text-2xl font-semibold">{submitted?'Application demo complete':job.title}</h2></div><button onClick={onClose} aria-label="Close application form" className="p-2 text-charcoal hover:bg-white"><X size={20}/></button></div>
      {submitted ? <div role="status" className="mt-8 border border-emerald-200 bg-emerald-50 p-6"><CheckCircle2 size={28} className="text-emerald-700"/><p className="mt-3 font-semibold">Your form passed frontend validation.</p><p className="mt-2 text-sm leading-6 text-slatecopy">This is a demo only. No application or resume has been transmitted to a hiring team.</p><button onClick={onClose} className="btn-primary mt-5">Close</button></div> :
      <form onSubmit={handleSubmit(submit)} className="mt-7 space-y-4" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <div><label htmlFor="app-name" className="mb-1.5 block text-xs font-bold">Full name *</label><input id="app-name" className="form-field" {...register('name',{required:'Please enter your name.'})}/>{err('name')}</div>
          <div><label htmlFor="app-email" className="mb-1.5 block text-xs font-bold">Email *</label><input id="app-email" type="email" className="form-field" {...register('email',{required:'Please enter your email.',pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:'Enter a valid email.'}})}/>{err('email')}</div>
          <div><label htmlFor="app-phone" className="mb-1.5 block text-xs font-bold">Phone *</label><input id="app-phone" className="form-field" {...register('phone',{required:'Please enter your phone number.'})}/>{err('phone')}</div>
          <div><label htmlFor="app-position" className="mb-1.5 block text-xs font-bold">Position *</label><input id="app-position" className="form-field" readOnly {...register('position',{required:true})}/></div>
        </div>
        <div><label htmlFor="app-resume" className="mb-1.5 block text-xs font-bold">Resume (PDF, DOC or DOCX; max 5 MB) *</label><label className="flex cursor-pointer items-center gap-3 border border-dashed border-slate-300 bg-white p-4 text-sm text-slatecopy"><Upload size={17}/> Choose a resume file<input id="app-resume" type="file" accept=".pdf,.doc,.docx" className="sr-only" {...register('resume',{required:'Please attach a resume.',validate:{size:f=>!f?.[0]||f[0].size<=5*1024*1024||'File must be 5 MB or smaller.',type:f=>!f?.[0]||['application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(f[0].type)||'Use PDF, DOC or DOCX format.'}})}/></label>{err('resume')}</div>
        <div><label htmlFor="app-linkedin" className="mb-1.5 block text-xs font-bold">LinkedIn profile (optional)</label><input id="app-linkedin" type="url" placeholder="https://linkedin.com/in/..." className="form-field" {...register('linkedin',{pattern:{value:/^https?:\/\/.+/i,message:'Enter a complete URL.'}})}/>{err('linkedin')}</div>
        <div><label htmlFor="app-message" className="mb-1.5 block text-xs font-bold">Short cover message</label><textarea id="app-message" rows="3" className="form-field" placeholder="What interests you about this role?" {...register('message')}/></div>
        <p className="text-xs leading-5 text-slatecopy">Demo only: your details and resume are not uploaded or stored. Connect a secure backend before accepting real applications.</p>
        <button className="btn-primary" type="submit">Validate application <CheckCircle2 size={15}/></button>
      </form>}
    </div>
  </div>
}
