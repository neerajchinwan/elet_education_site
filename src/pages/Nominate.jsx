import { ArrowUpRight, ClipboardCheck } from 'lucide-react'
import { PageIntro, Container } from '../components/common'

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd0QP3urlsLJyh_8PkoB2I62NpqSpRS6GRnJ8rzoinSWXEs_Q/viewform'

export default function Nominate() {
  return <>
    <PageIntro eyebrow="World Education Awards · 2026" title={<>Nominate an education leader<span className="serif-italic text-champagne">.</span></>} description="Recognise principals and education leaders creating meaningful change in their schools and communities." image="/images/award-stage.jpeg" />
    <section className="bg-ivory py-12 sm:py-16">
      <Container className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
        <div className="min-w-0">
          <span className="eyebrow">Nominations are open</span>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl">Help recognise outstanding leadership.</h2>
          <p className="mt-4 text-sm leading-7 text-slatecopy">Use the official nomination form to submit a principal or education leader for consideration. Please review all information before submitting.</p>
          <a href={FORM_URL} target="_blank" rel="noreferrer" className="nomination-highlight mt-6 inline-flex min-h-12 items-center justify-center gap-2 px-5 py-3 text-sm font-bold">Open nomination form <ArrowUpRight size={16}/></a>
          <div className="mt-6 flex gap-3 border-l-2 border-champagne bg-white p-4 text-sm leading-6 text-slatecopy"><ClipboardCheck className="mt-1 shrink-0 text-champagne" size={19}/><p>The form is hosted by Google Forms. Submissions are handled by the form owner, not stored by this website.</p></div>
        </div>
        <div className="overflow-hidden border border-[#E8D8DD] bg-white shadow-soft">
          <iframe title="Official 2026 principal nomination form" src={`${FORM_URL}?embedded=true`} className="h-[850px] w-full" loading="lazy">Loading nomination form…</iframe>
        </div>
      </Container>
    </section>
  </>
}
