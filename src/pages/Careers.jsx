
import { Container, PageIntro, SectionHeading, Reveal, PrimaryLink } from '../components/common'
import { HeartHandshake, ShieldCheck, Lightbulb, Users } from 'lucide-react'
export default function Careers() {
 const pillars = [
  {icon:Users,title:'Educators & school leaders',text:'Join the conversation on what schools can do to support future-ready learners.'},
  {icon:HeartHandshake,title:'CSR & community partners',text:'Explore opportunities to support meaningful educational and social initiatives.'},
  {icon:Lightbulb,title:'Speakers & changemakers',text:'Contribute ideas and experience to conversations about education and innovation.'},
  {icon:ShieldCheck,title:'Life skills & child safety',text:'Help advance confidence-building, personal boundaries and safety awareness.'}
 ]
 return <>
  <PageIntro eyebrow="Participate in the initiative" title={<>Bring your perspective.<br/><span className="serif-italic text-champagne">Help shape what’s next.</span></>} description="Celebrating Education invites educators, schools, CSR leaders and changemakers to take part in the conversation." image="/images/award-partners.jpeg"/>
  <section className="bg-ivory py-20 sm:py-24"><Container><SectionHeading eyebrow="Who can take part" title={<>A shared effort for <span className="serif-italic">future-ready learners.</span></>} description="The 2026 programme is intended for people and organisations working to make education more inclusive, empathetic, innovative and future-ready."/><div className="mt-10 grid gap-5 sm:grid-cols-2">{pillars.map((p,i)=><Reveal key={p.title} delay={i*.05} className="border border-[#E9D0D7] bg-white p-6 sm:p-8"><p.icon size={24} className="text-[#A51D3D]"/><h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3><p className="mt-2 text-sm leading-6 text-slatecopy">{p.text}</p></Reveal>)}</div><p className="mt-8 text-xs leading-5 text-slatecopy">Event date, venue, speakers, nominations and award categories will be updated once officially confirmed. The 2025 awardees are not automatically confirmed participants for 2026.</p></Container></section>
  <section className="bg-[#F8E5E9] py-16"><Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><span className="eyebrow">Interested in participating?</span><h2 className="section-title mt-4 text-3xl sm:text-4xl">Tell us how you’d like to contribute.</h2></div><PrimaryLink to="/contact">Contact the team</PrimaryLink></Container></section>
 </>
}
