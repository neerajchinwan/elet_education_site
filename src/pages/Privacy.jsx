import { Container, PageIntro } from '../components/common'

const CONTACT_EMAIL = 'programs@lifeskillsjournal.in'
const UPDATED = '21 October 2026'

const sections = [
  {
    title: 'Who we are',
    body: [
      'This website is operated by The Life Skills Journal for the Celebrating Education initiative, including the Celebrating Education 2026 National Awards & Summit. In this policy, "we", "us" and "our" refer to The Life Skills Journal.',
    ],
  },
  {
    title: 'Information we collect',
    list: [
      'Contact form: your name, email address, phone number, company, enquiry type, subject and message.',
      'Award nominations: your name, phone number, designation, organisation, and the details of the schools, leaders or organisations you nominate.',
      'Google sign-in (nominations and voting): when you choose "Continue with Google", Google shares your name, email address and profile picture with us, and confirms that your email address is verified. We never see or receive your Google password.',
      'Voting: the category you voted in, the nominee you chose, your Google account name and email address, and the time of your vote.',
    ],
  },
  {
    title: 'How we use your information',
    list: [
      'To respond to your enquiries.',
      'To receive, review and follow up on award nominations.',
      'To make sure each nomination and vote comes from a genuine, verified person, and that each Google account votes only once per category.',
      'To count votes and announce results.',
      'To send you a copy of your nomination when you ask for one.',
      'To contact you about the Celebrating Education initiative and events you have taken part in.',
    ],
  },
  {
    title: 'Sharing your information',
    body: [
      'We do not sell your personal information. We share it only with the services that run this website, and only as needed to provide them:',
    ],
    list: [
      'Google, for "Continue with Google" sign-in.',
      'GoDaddy, which provides our email service.',
      'Vercel, which hosts this website.',
      'Upstash, which securely stores voting records.',
      'Members of the Awards Committee and jury, who review nominations.',
    ],
    after: [
      'We may also disclose information where required by law. Award results, nominee names, organisations and categories may be published on this website, on social media and at the event.',
    ],
  },
  {
    title: 'How long we keep it',
    body: [
      'We keep enquiries, nominations and voting records for as long as needed to run the Celebrating Education 2026 edition and its follow-up, and for our records afterwards. You can ask us to delete your information at any time (see below).',
    ],
  },
  {
    title: 'Your choices and rights',
    body: [
      `You can ask us to show you, correct or delete the personal information we hold about you, or to stop contacting you, by emailing ${CONTACT_EMAIL}. You can also remove this website's access to your Google account at any time from your Google Account settings under "Security" → "Your connections to third-party apps & services".`,
    ],
  },
  {
    title: 'Security',
    body: [
      'Google sign-in is verified on our server, and data is sent over encrypted connections (HTTPS). No method of transmission or storage is completely secure, but we take reasonable steps to protect your information.',
    ],
  },
  {
    title: 'Changes to this policy',
    body: [
      'We may update this policy from time to time. The latest version will always be on this page, with the date it was last updated.',
    ],
  },
  {
    title: 'Contact us',
    body: [
      `For any questions about this policy or your information, email ${CONTACT_EMAIL}.`,
    ],
  },
]

export default function Privacy() {
  return <>
    <PageIntro eyebrow="Privacy Policy" title={<>Your privacy<span className="serif-italic text-champagne">.</span></>} description={`How The Life Skills Journal collects and uses information on this website. Last updated ${UPDATED}.`} />
    <section className="bg-ivory py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-3xl space-y-9 rounded-2xl border border-[#EADCE0] bg-white p-6 sm:p-10">
          {sections.map(section => <div key={section.title}>
            <h2 className="font-display text-xl font-semibold text-charcoal">{section.title}</h2>
            {section.body?.map(text => <p key={text} className="mt-3 text-sm leading-7 text-slatecopy">{text}</p>)}
            {section.list && <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slatecopy">{section.list.map(item => <li key={item}>{item}</li>)}</ul>}
            {section.after?.map(text => <p key={text} className="mt-3 text-sm leading-7 text-slatecopy">{text}</p>)}
          </div>)}
        </div>
      </Container>
    </section>
  </>
}
