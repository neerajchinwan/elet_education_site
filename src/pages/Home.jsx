import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Brain,
  Award,
} from 'lucide-react'

import { Link } from 'react-router-dom'
import { siteConfig } from '../data/siteConfig'
import {
  Container,
  PrimaryLink,
  Reveal,
  SectionHeading,
  TextLink,
} from '../components/common'

const focus = [
  {
    icon: Award,
    title: 'Recognising Excellence',
    text: 'Honouring outstanding education, principals and schools.',
  },
  {
    icon: Brain,
    title: 'Building Confidence',
    text: 'Championing emotional intelligence and essential life skills.',
  },
  {
    icon: ShieldCheck,
    title: 'Creating Safer Schools',
    text: 'Strengthening child safety, personal boundaries and safeguarding.',
  },
  {
    icon: Sparkles,
    title: 'Embracing Innovation',
    text: 'Exploring AI and technology with a human-centred approach.',
  },
]

const awards = [
  'Excellence in Educational Leadership',
  'Outstanding Community Engagement & CSR in Education',
  'Best Integration of AI in Education',
  'Best School in Life Skills & Safety Education',
  'Principal of the Year – Confidence & Well-Being Leadership',
]

const speakers = [
  {
    name: 'Mahima Chandra',
    role: 'CSR & Diversity, Equity and Inclusion Leader',
    image: '/images/mahima.png',
    linkedin: 'https://in.linkedin.com/in/mahima-chandra-37037b25',
    bio: 'With around 15 years of commitment to corporate social responsibility and diversity and inclusion, Mahima has led impactful CSR programmes across more than 20 countries. Her work spans education, health, well-being and global CSR strategy.',
  },
  {
    name: 'Smita Sharma Dabas',
    role: 'Education & Academic Operations Professional',
    image: '/images/smita.png',
    linkedin: '',
    bio: 'An experienced education professional with expertise in English, employee training, strategic planning, Microsoft Office and team management. She holds a Master’s in English, an M.Ed. and a NET qualification in Education, with a focus on teaching English as a second or foreign language.',
  },
  {
    name: 'Dr. Alka Kapur',
    role: 'Principal, Modern Public School, Shalimar Bagh',
    image: '/images/alka-kapur.png',
    linkedin: 'https://www.linkedin.com/in/alka-kapur-off/',
    bio: 'With 33 years of leadership at Modern Public School, Dr. Alka Kapur has championed academic excellence, innovation, sustainability and technology-integrated education. Her achievements include more than 100 awards and recognitions for educational leadership.',
  },
  {
    name: 'Sheba Thapar',
    role: 'Education Professional & School Leader',
    image: '/images/sheba-thapar.png',
    linkedin: 'https://www.linkedin.com/in/sheba-thapar-75562339/',
    bio: 'A dedicated education professional with 21 years of experience in school leadership, safe learning environments, teacher development, lesson planning and student-centred education. She focuses on continuous improvement and effective communication with students, parents and colleagues.',
  },
  {
    name: 'Monieka Khanna',
    role: 'Education Strategist & Business Development Professional',
    image: '/images/monieka-khanna.png',
    linkedin: 'https://www.linkedin.com/in/monieka-khanna-789678aa/',
    bio: 'An experienced strategist in education management, with expertise in school start-ups, educational technology, budgeting, planning, public speaking, market analysis and marketing. Her professional interests also extend to healthcare, hospitality and infrastructure.',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex min-h-[620px] flex-col justify-center overflow-hidden bg-ink pb-8 pt-28 text-white sm:min-h-[700px] sm:pb-24 sm:pt-32 lg:min-h-[790px]">
        <div className="absolute inset-0">
          <img
            src="/images/award-stage.jpeg"
            alt="Education leaders at an awards and panel event"
            className="h-full w-full object-cover opacity-35"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-transparent to-ink/20" />
        </div>

        <Container className="relative z-10 grid w-full items-center gap-10 py-8 lg:grid-cols-[1.15fr_.85fr]">
          <div className="max-w-3xl">
            <span className="eyebrow !text-champagne">
              Education · Well-being · Future-ready learners
            </span>

            <h1 className="section-title mt-5 text-4xl leading-tight sm:mt-7 sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[1.04]">
              Celebrating Education:
              <br />
              <span className="serif-italic text-champagne">
                Embracing the Future.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/75 sm:mt-7 sm:text-base sm:leading-7 lg:text-lg">
              Recognising the educators, schools and changemakers building
              confident, safe, emotionally resilient and future-ready learners.
            </p>

            <p className="mt-4 text-sm font-semibold leading-6 text-champagne">
              2026 — Date to be announced
              <span className="mx-2 text-white/35">·</span>
              Venue to be announced
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink to="/events/celebrating-education-embracing-the-future-2026">
                Explore the 2026 edition
              </PrimaryLink>
              <PrimaryLink to="/about" dark>
                Our purpose
              </PrimaryLink>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="ml-auto max-w-[300px] border-l border-champagne pl-6">
              <p className="font-editorial text-3xl italic leading-snug">
                Education is evolving. What we teach children must evolve with it.
              </p>
              <p className="mt-5 text-[10px] font-bold uppercase tracking-[.18em] text-champagne">
                The 2026 edition
              </p>
            </div>
          </div>
        </Container>

        <div className="relative z-10 mt-5 border-t border-white/15 sm:absolute sm:bottom-0 sm:left-0 sm:right-0 sm:mt-0">
          <Container className="grid grid-cols-2 gap-y-4 py-5 sm:grid-cols-4">
            {siteConfig.metrics.map((m) => (
              <div key={m.label} className="min-w-0 border-r border-white/15 px-3 first:pl-0 last:border-0">
                <p className="break-words font-display text-xl font-semibold text-white sm:text-2xl">
                  {m.value}
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-[.1em] text-white/50 sm:text-[10px] sm:tracking-[.13em]">
                  {m.label}
                </p>
              </div>
            ))}
          </Container>
        </div>
      </section>
      {/* About the Summit */}
      <section className="relative overflow-hidden border-t-[3px] border-[#650B2B] bg-[#FCF7F1] px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
        {/* Decorative top-right accent */}
        <div className="pointer-events-none absolute -right-16 -top-20 h-40 w-80 rotate-[-25deg] rounded-full border-[5px] border-[#D9A36C]/50" />

        <Container>
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="inline-flex rounded-full border border-[#E8AAB5] bg-[#F8E5E9] px-5 py-3 text-xs font-bold uppercase tracking-[0.24em] text-[#C51F43] sm:text-sm">
              About the Summit
            </span>

            <h2 className="mt-7 text-3xl font-extrabold leading-tight tracking-tight text-[#201914] sm:text-4xl md:text-5xl lg:text-[54px]">
              Where India's Education Leaders
              <span className="mt-1 block text-[#C51F43]">
                Meet the World
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-4xl text-base leading-8 text-[#44352F] sm:text-lg sm:leading-10 md:text-xl">
              The <strong className="font-bold text-black">2nd Edition</strong> of{" "}
              <strong className="font-bold text-black">
                Celebrating Education: Embracing the Future
              </strong>{" "}
              is a closed-door, invite-only B2B conclave taking place on{" "}
              <strong className="font-bold text-black">11th December 2026</strong>.
              India's leading education leaders will convene in one curated room
              for peer-level conversations across Higher Education and School Education.
            </p>
            <p className="mt-6 text-base font-bold leading-7 text-[#970D32] sm:text-lg md:text-xl">
              No trade show. No open registration. Every seat at the table is earned.
            </p>

            <div className="mt-9 flex justify-center">
              <Link
                to="/contact"
                className="group inline-flex w-full max-w-[420px] items-center justify-center gap-4 rounded-xl bg-[#C51F43] px-6 py-5 text-center text-base font-bold text-white shadow-[0_12px_30px_rgba(165,29,61,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A51D3D] hover:shadow-[0_16px_35px_rgba(165,29,61,0.28)] sm:w-auto sm:px-10"
              >
                nominate educator leader WES India Brochure
                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>
      {/* THE 2026 EDITION */}
      <section className="bg-ivory py-14 sm:py-20 lg:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <SectionHeading
              eyebrow="The 2026 edition"
              title={
                <>
                  Education beyond{' '}
                  <span className="serif-italic text-[#A51D3D]">
                    academics.
                  </span>
                </>
              }
            />

            <p className="text-sm leading-7 text-slatecopy sm:text-[15px]">
              The future of education is shaped by a child's ability to think
              critically, manage emotions, build meaningful relationships, stay
              safe and face life's challenges with confidence. The initiative
              brings together visionary school leaders, educators, policymakers,
              CSR leaders and changemakers to recognise excellence and explore
              the future of holistic education in India.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2">
            {focus.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.06}
                className="flex gap-4 border border-[#E9D0D7] bg-white p-5 sm:gap-5 sm:p-7"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F8E5E9] text-[#A51D3D]">
                  <item.icon size={21} strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slatecopy">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <Container>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="What to expect in 2026"
              title={
                <>
                  A shared commitment to{' '}
                  <span className="serif-italic text-[#A51D3D]">
                    every learner.
                  </span>
                </>
              }
              description="Awards, thought-provoking conversations and meaningful collaboration for a more inclusive, empathetic, innovative and future-ready education system."
            />
            <TextLink to="/events">View event details</TextLink>
          </div>

          <div className="mt-8 grid gap-8 sm:mt-10 md:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden bg-ivory">
                <img
                  src="/images/panel-discussion.jpeg"
                  alt="Panel discussion at an education event"
                  loading="lazy"
                  className="aspect-[1.35] w-full object-cover sm:aspect-[1.45]"
                />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">
                Leadership Panel Discussion
              </h3>
              <p className="mt-2 text-sm leading-6 text-slatecopy">
                A conversation on AI in education, emotional health,
                confidence-building and the changing responsibilities of schools.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="overflow-hidden bg-ivory">
                <img
                  src="/images/award-founders.jpeg"
                  alt="Education event award presentation"
                  loading="lazy"
                  className="aspect-[1.35] w-full object-cover sm:aspect-[1.45]"
                />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">
                Education Leadership Awards
              </h3>
              <p className="mt-2 text-sm leading-6 text-slatecopy">
                Recognising schools, principals and educators who are creating
                meaningful change in education.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* AWARD CATEGORIES */}
      <section className="bg-ink py-14 text-white sm:py-20 lg:py-24">
        <Container className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-10">
          <div>
            <span className="eyebrow !text-champagne">
              Proposed award categories
            </span>
            <h2 className="section-title mt-5 text-3xl sm:text-5xl">
              Celebrating those who{' '}
              <span className="serif-italic text-champagne">lead change.</span>
            </h2>
            <p className="mt-5 text-sm leading-6 text-white/60">
              Proposed award categories for 2026, subject to confirmation by
              the organisers.
            </p>
            <div className="mt-7">
              <TextLink
                to="/events/celebrating-education-embracing-the-future-2026"
                light
              >
                Explore the 2026 programme
              </TextLink>
            </div>
          </div>

          <div>
            {awards.map((award, i) => (
              <div
                key={award}
                className="flex gap-5 border-b border-white/15 py-5 first:pt-0"
              >
                <span className="font-editorial text-xl italic text-champagne">
                  0{i + 1}
                </span>
                <p className="text-sm leading-6 text-white/85">{award}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 2025 EDITION */}
      <section className="bg-[#F8E5E9] py-14 sm:py-20 lg:py-24">
        <Container className="grid items-center gap-8 lg:grid-cols-[1fr_.9fr]">
          <div>
            <span className="eyebrow">Looking back</span>
            <h2 className="section-title mt-5 text-3xl sm:text-5xl">
              Celebrating Education{' '}
              <span className="serif-italic text-[#A51D3D]">2025.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slatecopy">
              The inaugural edition brought together distinguished educators,
              school leaders, CSR professionals and changemakers to recognise
              contributions to educational leadership, life skills, emotional
              well-being, community engagement and innovation.
            </p>
            <div className="mt-7">
              <PrimaryLink to="/events/celebrating-education-2025">
                Explore the 2025 edition
              </PrimaryLink>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <img
              src="/images/award-educators.jpeg"
              alt="Educators receiving an award"
              loading="lazy"
              className="aspect-[.85] w-full object-cover"
            />
            <img
              src="/images/award-partners.jpeg"
              alt="Education partners at the awards"
              loading="lazy"
              className="mt-8 aspect-[.85] w-full object-cover"
            />
          </div>
        </Container>
      </section>

      {/* PARTNERS */}
      <section className="bg-ivory py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <span className="eyebrow">Our partners</span>
              <h2 className="section-title mt-4 text-3xl">
                Working together for learners.
              </h2>
            </div>

            <div className="border-t border-[#C51F45] pt-5">
              <h3 className="font-display text-lg font-semibold">
                Life Skills Journal
              </h3>
              <p className="mt-3 text-sm leading-6 text-slatecopy">
                Leading the initiative to promote confidence, emotional
                intelligence, life skills and safety awareness among children.
              </p>
            </div>

            <div className="border-t border-[#C51F45] pt-5">
              <h3 className="font-display text-lg font-semibold">
                Study Base &amp; Lamp Post Trust
              </h3>
              <p className="mt-3 text-sm leading-6 text-slatecopy">
                Study Base is an education technology partner offering school
                management solutions. Lamp Post Trust supports meaningful
                educational and social initiatives.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SPONSOR */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <Container className="grid items-center gap-8 lg:grid-cols-[.65fr_1.35fr]">
          <div className="flex min-h-[180px] items-center justify-center border border-[#E9D0D7] bg-[#F8E5E9] p-8">
            <div className="text-center">
              <p className="font-display text-4xl font-extrabold text-[#A51D3D]">
                ABC
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[.15em] text-charcoal">
                AI Business Challenge
              </p>
              <p className="mt-2 text-xs text-slatecopy">Event sponsor</p>
            </div>
          </div>

          <div>
            <span className="eyebrow">Our sponsor</span>
            <h2 className="section-title mt-4 text-3xl sm:text-4xl">
              Ai Business Challenge (ABC)
            </h2>
            <p className="mt-5 text-sm leading-7 text-slatecopy sm:text-[15px]">
              Viplav Panghal and Gaurav Rawat are the founders of Ai Business
              Challenge (ABC), an AI community built for students and freelancers
              who want to start their own AI business and enter the world of
              digital marketing. It has 30,000 members from 102 countries.
              ABC is our sponsor.
            </p>
          </div>
        </Container>
      </section>

      {/* FIVE SPEAKER CARDS */}
      <section className="bg-[#FAF5EF] py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Distinguished Voices"
            title={
              <>
                Meet the people{' '}
                <span className="serif-italic text-[#A51D3D]">
                  shaping change.
                </span>
              </>
            }
            description="Education leaders and changemakers bringing practical experience to the conversation."
          />

          <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {speakers.map((speaker, index) => (
              <Reveal
                key={speaker.name}
                delay={index * 0.05}
                className="speaker-card overflow-hidden rounded-2xl border border-[#E9D0D7] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full bg-[#F1E9E5] object-cover object-top"
                />

                <div className="p-5 sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#A51D3D]">
                    Featured Speaker
                  </p>

                  <h3 className="mt-2 font-display text-xl font-bold text-[#24171D]">
                    {speaker.name}
                  </h3>

                  <p className="mt-2 text-sm font-semibold leading-6 text-charcoal">
                    {speaker.role}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slatecopy">
                    {speaker.bio}
                  </p>

                  {speaker.linkedin && (
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#A51D3D] hover:text-[#74142B]"
                    >
                      View Profile <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-5 border border-[#E9D0D7] bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <span className="eyebrow">Nominations 2026</span>
              <h3 className="mt-2 font-display text-2xl font-bold">
                Know an inspiring principal?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slatecopy">
                Help recognise school leaders making a difference to learners
                and communities.
              </p>
            </div>

            <Link
              to="/nominate"
              className="nomination-highlight inline-flex w-fit shrink-0 items-center gap-2 px-5 py-3 text-sm font-bold"
            >
              Nominate now <ArrowRight size={16} />
            </Link>
          </div>
        </Container>
      </section>

      {/* NOMINATED PRINCIPAL */}
      <section className="bg-white py-12 sm:py-16">
        <Container>
          <div className="grid items-center gap-6 rounded-2xl border border-[#E9D0D7] bg-[#FAF5EF] p-6 sm:grid-cols-[180px_1fr] sm:gap-8 sm:p-8">

            {/* Principal Image */}
            <div className="aspect-square w-full max-w-[180px] overflow-hidden rounded-xl bg-[#F8E5E9]">
              <img
                src="/images/vikrant.png"
                alt="Vikrant Sharma"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <span className="eyebrow">Nominated Principal · 2026</span>

              <h2 className="section-title mt-3 text-3xl sm:text-4xl">
                Vikrant Sharma
              </h2>

              <p className="mt-4 text-sm leading-7 text-slatecopy">
                Recognising educational professionals who contribute to teaching,
                technology, design and organisational development.
              </p>

              <h3 className="mt-5 font-display text-base font-bold text-[#24171D]">
                Specialties
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  'Audio',
                  'Basic',
                  'CorelDRAW',
                  'Corel Photo-Paint',
                  'Design',
                  'Dreamweaver',
                  'Editing',
                  'English',
                  'Lotus Notes',
                  'Microsoft Excel',
                  'Microsoft Office',
                  'Microsoft PowerPoint',
                  'Microsoft Word',
                  'Newsletters',
                  'Organisational Skills',
                  'Programming',
                  'Progress',
                  'Tables',
                  'Teaching',
                  'Website Production',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#E9D0D7] bg-white px-3 py-1.5 text-xs font-medium text-[#7A263D]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <Link
                to="/nominate"
                className="nomination-highlight mt-6 inline-flex items-center gap-2 px-5 py-3 text-sm font-bold"
              >
                Explore nominations <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* TESTIMONIAL */}
      <section className="brand-gradient py-16 text-white sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[.45fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow !text-[#F2A1B2]">
              Voices from the summit
            </span>
            <h2 className="section-title mt-4 text-3xl sm:text-4xl">
              Experiences that stay with us.
            </h2>
          </div>

          <figure className="border-l-2 border-[#E34A68] pl-5 sm:pl-8">
            <blockquote className="font-editorial text-xl italic leading-relaxed sm:text-2xl">
              “I am incredibly grateful for the opportunity to participate,
              speak, and receive an award at the 35th World Education Summit
              in Dubai…”
            </blockquote>
            <figcaption className="mt-6">
              <p className="font-display text-lg font-bold">
                Dr. Tadios Belay
              </p>
              <p className="mt-1 text-sm text-white/65">
                Founder · U.S. Africa Institute, United States
              </p>
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* MEDIA AND AWARDS VOTING */}
      <section className="bg-[#FAF5EF] py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Media &amp; Publications</span>
              <h2 className="section-title mt-4 text-3xl sm:text-4xl">
                The conversation continues beyond the event.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slatecopy">
                Read the media coverage of Celebrating Education: Embracing
                the Future and its education leadership awards.
              </p>
              <a
                href="https://foxstoryindia.com/2025/11/20/celebrating-education-embracing-the-future/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#A51D3D]"
              >
                Read the Fox Story India feature <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="border border-[#E9DDE0] bg-white p-6 sm:p-8">
              <span className="eyebrow">Awards &amp; Recognition</span>
              <h3 className="mt-4 font-display text-2xl font-bold">
                Support a cause that matters.
              </h3>
              <p className="mt-3 text-sm leading-7 text-slatecopy">
                Explore the external voting page for the Creator With a Cause
                category.
              </p>
              <a
                href="https://exhibit.social/voting2026/polls?category=creator-with-a-cause"
                target="_blank"
                rel="noopener noreferrer"
                className="nomination-highlight mt-5 inline-flex items-center gap-2 px-5 py-3 text-sm font-bold"
              >
                View awards voting <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="bg-ink py-16 text-white sm:py-20">
        <Container className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="eyebrow !text-champagne">
              Be part of the 2026 conversation
            </span>
            <h2 className="section-title mt-4 text-3xl sm:text-4xl">
              Help shape the future of education.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">
              For schools, educators, award nominations, panel speakers, CSR
              partners and sponsors.
            </p>
          </div>

          <PrimaryLink to="/contact">Contact the team</PrimaryLink>
        </Container>
      </section>
    </>
  )
}
