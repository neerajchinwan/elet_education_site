import { CalendarDays, Lock, MapPin, Sparkles } from 'lucide-react'
import { Container, PageIntro } from '../components/common'
import GoogleSignIn, { useGoogleUser } from '../components/auth/GoogleSignIn'
import AwardsNominationForm from '../components/forms/AwardsNominationForm'
import { awardsEvent, awardSections, juryPanel } from '../data/awards2026'

const initials = name => name.split(' ').map(part => part[0]).join('').slice(0, 2).toUpperCase()

function SignInGate({ onCredential }) {
  return <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-[#E9D0D7] bg-white shadow-[0_20px_60px_rgba(61,25,36,0.07)]">
    <div className="border-b border-[#F0E5E5] bg-[#FFFCF9] px-6 py-7 sm:px-9">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FBEFF2] text-champagne"><Lock size={19}/></span>
      <h2 className="mt-5 font-display text-2xl font-semibold leading-tight text-[#24171D] sm:text-3xl">Sign in to submit a nomination</h2>
      <p className="mt-3 text-sm leading-7 text-slatecopy">To keep every nomination genuine, nominators must sign in with their Google account. Your verified email address will be recorded with your nomination. We never see your password.</p>
    </div>
    <div className="px-6 py-7 sm:px-9">
      <GoogleSignIn onCredential={onCredential}/>
      <ul className="mt-7 space-y-2 border-t border-[#F0E5E5] pt-6 text-sm leading-6 text-slatecopy">
        {awardSections.map(section => <li key={section.id}><strong className="text-charcoal">Section {section.id}:</strong> {section.title} · {section.categories.length} categories</li>)}
        <li>Self-Nomination & Peer Nomination are allowed. You may nominate for multiple categories.</li>
      </ul>
    </div>
  </div>
}

export default function Awards2026() {
  const { user, signIn, signOut } = useGoogleUser()

  return <>
    <PageIntro
      eyebrow={awardsEvent.name}
      title={<>National Awards <span className="serif-italic text-champagne">&amp; Summit 2026.</span></>}
      description={`School Leader & Education Leader of the Year Awards & Summit 2026. After the grand success of Celebrating Education 2025, The Life Skills Journal proudly presents the 2026 Edition on ${awardsEvent.date} in ${awardsEvent.city}.`}
      image="/images/award-stage.jpeg"
    />

    <section className="border-b border-[#EADCE0] bg-white py-8">
      <Container className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-2xl text-sm leading-7 text-slatecopy">An initiative powered by <strong className="text-charcoal">{awardsEvent.presenter}</strong>, celebrating schools, principals, education leaders and CSR changemakers who are transforming education across India.</p>
        <div className="flex flex-wrap gap-3 text-sm font-semibold text-charcoal">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FBEFF2] px-4 py-2"><CalendarDays size={16} className="text-champagne"/>{awardsEvent.date}</span>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FBEFF2] px-4 py-2"><MapPin size={16} className="text-champagne"/>{awardsEvent.city}</span>
        </div>
      </Container>
    </section>

    <section id="nominate" className="bg-ivory py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="mb-10 max-w-3xl">
          <span className="eyebrow">Award Categories</span>
          <h2 className="section-title mt-4 text-3xl text-charcoal sm:text-5xl">Nominate the changemakers<span className="serif-italic text-champagne">.</span></h2>
          <p className="mt-4 text-sm leading-7 text-slatecopy">Recognise schools, school leaders, education leaders and CSR heads across three sections and fifteen award categories. Fill in only the categories you wish to nominate for.</p>
        </div>
        {user
          ? <AwardsNominationForm key={user.email} user={user} onCredential={signIn} onSignOut={signOut}/>
          : <SignInGate onCredential={signIn}/>}
      </Container>
    </section>

    <section className="bg-ink py-14 text-white sm:py-20">
      <Container>
        <span className="eyebrow !text-champagne">Jury Panel 2025-26</span>
        <h2 className="section-title mt-4 text-3xl sm:text-5xl">Meet the minds behind <span className="serif-italic text-champagne">excellence.</span></h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {juryPanel.map(member => <article key={member.name} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            {member.image
              ? <img src={member.image} alt={member.name} className="speaker-photo !aspect-[4/3.4]" loading="lazy"/>
              : <div className="flex aspect-[4/3.4] items-center justify-center bg-gradient-to-br from-[#2B1A21] to-[#571B2B] font-display text-5xl font-bold text-champagne">{initials(member.name)}</div>}
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold">{member.name}</h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-[.14em] text-champagne">{member.role}</p>
              <p className="mt-3 text-sm leading-6 text-white/65">{member.bio}</p>
            </div>
          </article>)}
          <article className="flex flex-col justify-center rounded-2xl border border-dashed border-white/20 p-8">
            <Sparkles className="text-champagne" size={28}/>
            <p className="mt-5 font-display text-xl font-semibold leading-snug">And many more eminent leaders joining for the 2026 Edition…</p>
          </article>
        </div>
      </Container>
    </section>
  </>
}
