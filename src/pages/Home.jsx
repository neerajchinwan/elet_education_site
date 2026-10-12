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

/* Two jury members for the 2026 edition */

const juryMembers = [
  {
    name: 'Mahima Chandra',
    role: 'CSR, DEI & Global Impact Leader',
    image: '/images/mahima.png',
    linkedin: 'https://in.linkedin.com/in/mahima-chandra-37037b25',
    bio: 'With around 15 years of experience in CSR and diversity, equity and inclusion, Mahima has led impactful initiatives across 20+ countries. Her work spans education, health, well-being and global CSR strategy.',
    expertise: [
      'CSR Strategy',
      'Diversity, Equity & Inclusion',
      'Education',
      'Health & Well-being',
      'Global Impact',
    ],
  },
  {
    name: 'Saurabh Vyas',
    role: 'Technology & Engineering Professional',
    image: '/images/saurabh.png',
    linkedin: 'https://www.linkedin.com/in/vyas-saurabh/',
    bio: 'With 16+ years of experience across UNIX/Solaris, cloud and application software, Saurabh brings strong expertise in debugging, analytical problem-solving and technical leadership. He is passionate about purposeful technology and helping students and entrepreneurs learn beyond the curriculum.',
    expertise: [
      'UNIX / Solaris',
      'AWS & OpenStack',
      'Debugging & Troubleshooting',
      'Cloud & Serverless',
      'Automation: Ansible & Puppet',
      'Project & Team Leadership',
      'RabbitMQ & Blockchain',
      'Python & Web Development',
    ],
  },
];

const principalSkills = [
  'Teaching & Education',
  'Graphic Design',
  'CorelDRAW',
  'Photo Editing',
  'Web Design & Development',
  'Adobe Dreamweaver',
  'Content Editing',
  'English',
  'Microsoft Office',
  'Microsoft Excel',
  'Microsoft PowerPoint',
  'Microsoft Word',
  'Newsletter Production',
  'Organisational Skills',
  'Programming',
  'Website Production',
  'Lotus Notes',
  'Audio',
];


export default function Home() {

  return (

    <>

      {/* 1. HERO SECTION */}

      <section className="relative flex min-h-[620px] flex-col justify-center overflow-hidden bg-[#343B55] pb-8 pt-28 text-white sm:min-h-[700px] sm:pb-24 sm:pt-32 lg:min-h-[790px]">

        <div className="absolute inset-0">

          <img

            src="/images/award-stage.jpeg"

            alt="Education leaders at an awards and panel event"

            className="h-full w-full object-cover opacity-55 saturate-[0.82]"

            fetchPriority="high"

          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#293149]/80 via-[#293149]/60 to-[#6D4357]/25" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#293149]/75 via-transparent to-[#293149]/10" />

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

             Nominate inspiring principals and education leaders who are empowering students, strengthening schools, and creating lasting impact in their communities.

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

        <div className="relative z-10 mt-5 border-t border-white/25 bg-white/[0.04] backdrop-blur-sm sm:absolute sm:bottom-0 sm:left-0 sm:right-0 sm:mt-0">

          <Container className="grid grid-cols-2 gap-y-4 py-5 sm:grid-cols-4">

            {siteConfig.metrics.map((m) => (

              <div

                key={m.label}

                className="min-w-0 border-r border-white/20 px-3 first:pl-0 last:border-0"

              >

                <p className="break-words font-display text-xl font-semibold text-white sm:text-2xl">

                  {m.value}

                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[.1em] text-white/75 sm:text-[10px] sm:tracking-[.13em]">

                  {m.label}

                </p>

              </div>

            ))}

          </Container>

        </div>

      </section>

      {/* 2. ABOUT THE SUMMIT */}

      <section className="relative overflow-hidden border-t-[3px] border-[#650B2B] bg-gradient-to-b from-[#FFFBF7] to-[#F8F0E8] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">

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

              The <strong className="font-bold text-black">2nd Edition</strong>{' '}

              of{' '}

              <strong className="font-bold text-black">

                Celebrating Education: Embracing the Future

              </strong>{' '}

              is a closed-door, invite-only B2B conclave taking place on{' '}

              <strong className="font-bold text-black">

                11th December 2026

              </strong>

              . India's leading education leaders will convene in one curated

              room for peer-level conversations across Higher Education and

              School Education.

            </p>

            <div className="mt-9 flex justify-center">

              <Link

                to="/contact"

                className="group inline-flex w-full max-w-[420px] items-center justify-center gap-4 rounded-xl bg-[#C51F43] px-6 py-5 text-center text-base font-bold text-white shadow-[0_12px_30px_rgba(165,29,61,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A51D3D] hover:shadow-[0_16px_35px_rgba(165,29,61,0.28)] sm:w-auto sm:px-10"

              >

                Nominate Educator

                <ArrowRight

                  size={22}

                  className="transition-transform duration-300 group-hover:translate-x-1"

                />

              </Link>

            </div>

          </div>

        </Container>

      </section>

      {/* 3. JURY MEMBERS — TWO PROFILE LAYOUT */}

      <section className="relative overflow-hidden border-t-[3px] border-[#650B2B] bg-gradient-to-b from-[#FFFBF7] to-[#F8F0E8] py-14 sm:py-16 lg:py-20">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#D9A36C]/30" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full border border-[#D9A36C]/20" />

        <Container>
          {/* Heading */}
          <div className="relative mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E8AAB5] bg-[#F8E5E9] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A51D3D] sm:text-xs">
              <Award size={15} />
              The Jury · 2026
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#201914] sm:text-4xl lg:text-5xl">
              Meet the minds behind
              <span className="mt-1 block font-editorial font-normal italic text-[#A51D3D]">
                excellence and recognition.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#66534D] sm:text-base">
              Meet the distinguished jury bringing expertise, experience and
              independent perspectives to education.
            </p>

            <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#C7A66A]" />
          </div>

          {/* Compact jury cards */}
          <div className="relative mx-auto mt-9 grid max-w-4xl grid-cols-1 items-stretch gap-6 sm:mt-11 md:grid-cols-2 md:gap-7">
            {juryMembers.map((member, index) => (
              <Reveal
                key={member.name}
                delay={index * 0.08}
                className="group h-full"
              >
                <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#E9D0D7] bg-white shadow-[0_5px_20px_rgba(45,25,32,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(45,25,32,0.10)]">
                  {/* Shorter portrait */}
                  <div className="relative overflow-hidden bg-[#F1E9E5]">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="h-48 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] sm:h-52"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#201914]/45 via-transparent to-transparent" />

                    <span className="absolute bottom-3 left-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/25 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                      <Award size={13} />
                      Jury Member 0{index + 1}
                    </span>
                  </div>

                  {/* Compact details */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="font-display text-xl font-bold leading-snug text-[#24171D] sm:text-2xl">
                      {member.name}
                    </h3>

                    <p className="mt-2 text-sm font-semibold leading-5 text-[#A51D3D]">
                      {member.role}
                    </p>

                    <div className="my-4 h-px w-full bg-[#EEE2DE]" />

                    <p className="text-sm leading-6 text-[#66534D]">
                      {member.bio}
                    </p>

                    {member.expertise && (
                      <div className="mt-5">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7A263D]">
                          Areas of Expertise
                        </h4>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {member.expertise.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-md border border-[#E9D0D7] bg-[#FAF5EF] px-2.5 py-1 text-[10px] font-medium leading-4 text-[#7A263D] sm:text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${member.name}'s LinkedIn profile`}
                        className="mt-5 inline-flex w-fit items-center gap-2 border-b border-[#A51D3D]/30 pb-1 text-xs font-bold text-[#A51D3D] transition-colors hover:border-[#A51D3D] hover:text-[#74142B]"
                      >
                        View Professional Profile
                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Closing statement */}
          <div className="relative mx-auto mt-9 max-w-3xl text-center">
            <p className="font-editorial text-lg italic leading-relaxed text-[#7A263D] sm:text-xl">
              Celebrating the people who inspire progress in education.
            </p>
            <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#8A756B] sm:text-[10px]">
              Celebrating Education · Embracing the Future
            </p>
          </div>
        </Container>
      </section>

      {/* 4. THE 2026 EDITION */}

      <section className="bg-gradient-to-b from-[#FFFCF8] to-[#F7F2EC] py-16 sm:py-20 lg:py-28">

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

                className="flex gap-4 rounded-2xl border border-[#E9D0D7] bg-white/90 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:gap-5 sm:p-7"

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

      {/* 5. WHAT TO EXPECT */}

      <section className="bg-white py-16 sm:py-20 lg:py-28">

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

                  className="aspect-[1.35] w-full object-cover transition duration-700 hover:scale-[1.03] sm:aspect-[1.45]"

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

                  className="aspect-[1.35] w-full object-cover transition duration-700 hover:scale-[1.03] sm:aspect-[1.45]"

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

      {/* 6. AWARD CATEGORIES */}

      <section className="bg-gradient-to-br from-[#242C45] via-[#30364F] to-[#5C3045] py-16 text-white sm:py-20 lg:py-24">

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

      {/* 7. 2025 EDITION */}


      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFFAF7] via-[#F9ECEC] to-[#F3E4D9] py-16 sm:py-20 lg:py-24">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#C7A66A]/25" />
        <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#C7A66A]/20" />

        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

            {/* Content */}
            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center gap-3">
                <span className="h-px w-10 bg-[#C7A66A]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A51D3D] sm:text-xs">
                  Looking Back · Our Journey
                </span>
              </div>

              <h2 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-[#292027] sm:text-5xl lg:text-6xl">
                Celebrating
                <span className="mt-1 block">
                  Education
                  <span className="font-editorial font-normal italic text-[#A51D3D]">
                    {" "}2025.
                  </span>
                </span>
              </h2>

              <div className="mt-6 h-1 w-16 rounded-full bg-[#C7A66A]" />

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#6E5C60] sm:text-base sm:leading-8">
                The inaugural edition brought together distinguished educators,
                school leaders, CSR professionals and changemakers to recognise
                contributions to educational leadership, life skills, emotional
                well-being, community engagement and innovation.
              </p>

              {/* Highlights */}
              <div className="mt-7 grid grid-cols-2 gap-4 border-y border-[#DCC8C5] py-5">
                <div>
                  <p className="font-editorial text-2xl italic text-[#A51D3D] sm:text-3xl">
                    Leadership
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#79676A] sm:text-xs">
                    Celebrating educators
                  </p>
                </div>

                <div>
                  <p className="font-editorial text-2xl italic text-[#A51D3D] sm:text-3xl">
                    Innovation
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#79676A] sm:text-xs">
                    Inspiring change
                  </p>
                </div>
              </div>

              {/* Button with explicitly white text */}
              <div className="mt-8">
                <PrimaryLink
                  to="/events/celebrating-education-2025"
                  className="!text-white inline-flex items-center gap-3 rounded-lg bg-[#A51D3D] px-6 py-4 text-sm font-bold shadow-[0_10px_25px_rgba(165,29,61,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#81152F] hover:shadow-[0_14px_30px_rgba(165,29,61,0.28)]"
                >
                  Explore the 2025 Edition
                  <ArrowRight
                    size={17}
                    className="text-white transition-transform duration-300 group-hover:translate-x-1"
                  />
                </PrimaryLink>
              </div>
            </div>

            {/* Image gallery */}
            <div className="relative mx-auto w-full max-w-xl">
              <div className="grid grid-cols-2 items-start gap-3 sm:gap-5">

                <div className="relative mt-8 overflow-hidden rounded-2xl shadow-[0_18px_40px_rgba(45,25,32,0.15)] sm:mt-12">
                  <img
                    src="/images/award-educators.jpeg"
                    alt="Educators receiving an award"
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24171D]/35 to-transparent" />
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-[0_18px_40px_rgba(45,25,32,0.15)]">
                  <img
                    src="/images/award-partners.jpeg"
                    alt="Education partners celebrating their achievements"
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24171D]/35 to-transparent" />
                </div>

              </div>

              {/* Gallery caption */}
              <div className="relative mx-auto -mt-5 w-[85%] rounded-xl border border-[#E9D8CC] bg-white/95 p-4 text-center shadow-lg backdrop-blur-sm sm:p-5">
                <p className="font-editorial text-lg italic text-[#A51D3D] sm:text-xl">
                  A celebration of impact.
                </p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#78676B] sm:text-[10px]">
                  Celebrating Education · 2025
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>


      {/* 8. PARTNERS */}
      <section className="relative overflow-hidden bg-[#FCF8F5] py-16 sm:py-20 lg:py-24">
        <Container>
          {/* Section heading */}
          <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-14 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="eyebrow">Our Partners</span>
              <h2 className="section-title mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Better together.
                <span className="block text-[#A51D3D]">
                  Stronger for learners.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slatecopy sm:text-base">
              Collaborating with organisations that help create meaningful
              educational opportunities and support the development of every learner.
            </p>
          </div>

          {/* Partner cards */}
          <div className="grid gap-5 md:grid-cols-2">
            {/* Partner 1 */}
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E9DAD5] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C7A66A] hover:shadow-[0_18px_45px_rgba(71,38,40,0.08)] sm:p-8 lg:p-9">
              <div className="mb-8 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8E9EC] text-xl font-semibold text-[#A51D3D]">
                  01
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A51D3D]">
                  Education &amp; Well-being
                </span>
              </div>

              <h3 className="font-display text-2xl font-semibold text-[#302329] sm:text-3xl">
                Life Skills Journal
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slatecopy sm:text-base">
                Leading the initiative to promote confidence, emotional intelligence,
                life skills and safety awareness among children.
              </p>

              <div className="mt-8 border-t border-[#EFE5E0] pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C6A61]">
                  Building skills beyond the classroom
                </p>
              </div>
            </article>

            {/* Partner 2 */}
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E9DAD5] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C7A66A] hover:shadow-[0_18px_45px_rgba(71,38,40,0.08)] sm:p-8 lg:p-9">
              <div className="mb-8 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8E9EC] text-xl font-semibold text-[#A51D3D]">
                  02
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A51D3D]">
                  Technology &amp; Social Impact
                </span>
              </div>

              <h3 className="font-display text-2xl font-semibold text-[#302329] sm:text-3xl">
                Study Base &amp; Lamp Post Trust
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slatecopy sm:text-base">
                Study Base is an education technology partner offering school
                management solutions, while Lamp Post Trust supports meaningful
                educational and social initiatives.
              </p>

              <div className="mt-8 border-t border-[#EFE5E0] pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C6A61]">
                  Supporting education and communities
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* 9. SPONSOR */}

<section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
  <Container>
    <div className="overflow-hidden rounded-3xl bg-[#24151D] shadow-xl">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

        {/* Sponsor image panel */}
        <div className="relative flex min-h-[300px] flex-col items-center justify-center overflow-hidden bg-[#A51D3D] p-6 sm:min-h-[380px] sm:p-10 lg:p-12">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/15" />
          <div className="pointer-events-none absolute -right-8 -top-12 h-48 w-48 rounded-full border border-white/15" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-black/10" />

          <div className="relative z-10 w-full max-w-md text-center">
            <span className="inline-flex rounded-full border border-white/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90 sm:text-xs">
              Official Event Sponsor
            </span>

            {/* Actual sponsor image */}
            <div className="mt-7 flex min-h-[190px] items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white p-5 shadow-lg sm:min-h-[240px] sm:p-8">
              <img
                src="/images/viplav.png"
                alt="AI Business Challenge (ABC) sponsor logo"
                className="max-h-56 w-full object-contain sm:max-h-64"
                loading="lazy"
              />
            </div>

            <p className="mt-5 text-sm leading-6 text-white/85">
              Empowering the next generation of AI entrepreneurs
            </p>
          </div>
        </div>

        {/* Sponsor details */}
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14 xl:p-16">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D5B77A]">
            Our Sponsor
          </span>

          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Ai Business Challenge
            <span className="mt-1 block text-[#D5B77A]">(ABC)</span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
            Viplav Panghal and Gaurav Rawat are the founders of Ai Business
            Challenge (ABC), an AI community built for students and freelancers
            who want to start their own AI business and enter the world of
            digital marketing.
          </p>

          {/* Community statistics */}
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/15 pt-7 sm:gap-8">
            <div>
              <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                30,000
              </p>
              <p className="mt-2 text-xs leading-5 text-white/60 sm:text-sm">
                Community members
              </p>
            </div>

            <div>
              <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                102
              </p>
              <p className="mt-2 text-xs leading-5 text-white/60 sm:text-sm">
                Countries represented
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[#D5B77A]" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D5B77A]">
              Innovation · Entrepreneurship · AI
            </p>
          </div>
        </div>

      </div>
    </div>
  </Container>
</section>
      {/* 10. DISTINGUISHED SPEAKERS */}


      <section className="relative overflow-hidden bg-[#FBF8F4] py-20 sm:py-24 lg:py-28">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full border border-[#C7A66A]/20" />
        <div className="pointer-events-none absolute -right-20 top-32 h-56 w-56 rounded-full border border-[#C7A66A]/20" />
        <div className="pointer-events-none absolute -left-24 bottom-40 h-64 w-64 rounded-full bg-[#F0E4E2]/40 blur-3xl" />

        <Container>
          {/* Section heading */}
          <div className="relative mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-3">
                <span className="h-px w-10 bg-[#C7A66A]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A51D3D] sm:text-xs">
                  Distinguished Voices · 2026
                </span>
              </div>

              <h2 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-[#282027] sm:text-5xl lg:text-6xl">
                Meet the people
                <span className="mt-2 block font-editorial font-normal italic text-[#A51D3D]">
                  shaping change.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#76676B] sm:text-base sm:leading-8">
                Education leaders and changemakers bringing practical experience,
                fresh perspectives and a shared vision for the future of education.
              </p>
            </div>

            <div className="hidden shrink-0 pb-2 text-right md:block">
              <p className="font-editorial text-5xl italic text-[#D7C3A5]">
                {String(speakers.length).padStart(2, "0")}
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#76676B]">
                Featured voices
              </p>
            </div>
          </div>

          {/* Speaker cards */}
          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {speakers.map((speaker, index) => (
              <Reveal
                key={speaker.name}
                delay={index * 0.08}
                className="group h-full"
              >
                <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#E9DFDA] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#C7A66A]/70 hover:shadow-[0_22px_55px_rgba(48,29,36,0.12)]">
                  {/* Image */}
                  <div className="relative overflow-hidden bg-[#F0E8E3]">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      loading="lazy"
                      className="aspect-[4/4.4] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#21151B]/65 via-transparent to-transparent opacity-80" />

                    <div className="absolute left-4 top-4">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-[#25191F]/35 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D9BD83]" />
                        Speaker {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-0 bg-[#C7A66A] transition-transform duration-500 group-hover:scale-x-100" />
                  </div>

                  {/* Details */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#A51D3D]">
                      Distinguished Voice
                    </p>

                    <h3 className="mt-3 font-display text-xl font-bold leading-snug text-[#282027] transition-colors duration-300 group-hover:text-[#A51D3D]">
                      {speaker.name}
                    </h3>

                    <p className="mt-2 text-xs font-medium leading-6 text-[#78676D] sm:text-sm">
                      {speaker.role}
                    </p>

                    <div className="my-5 flex items-center gap-2">
                      <span className="h-px w-8 bg-[#C7A66A]" />
                      <span className="h-1.5 w-1.5 rotate-45 bg-[#C7A66A]" />
                    </div>

                    <p className="mb-6 flex-1 text-sm leading-7 text-[#6E6266]">
                      {speaker.bio}
                    </p>

                    {speaker.linkedin ? (
                      <a
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${speaker.name}'s LinkedIn profile`}
                        className="mt-auto inline-flex w-fit items-center gap-2 border-b border-[#A51D3D]/30 pb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#A51D3D] transition-all duration-300 hover:border-[#A51D3D] hover:text-[#74142B]"
                      >
                        View Professional Profile
                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </a>
                    ) : (
                      <span className="mt-auto text-xs text-[#A99A9D]">
                        Profile coming soon
                      </span>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Nominations callout */}
          <div className="relative mt-14 overflow-hidden rounded-2xl bg-gradient-to-br from-[#29212A] via-[#432A36] to-[#6D3046] p-6 text-white shadow-[0_18px_45px_rgba(45,25,32,0.12)] sm:mt-20 sm:p-9 lg:p-11">
            <div className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-4 -top-8 h-40 w-40 rounded-full border border-[#C7A66A]/20" />

            <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <Award size={17} className="text-[#D9BD83]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#E3CFA7]">
                    Nominations · 2026
                  </span>
                </div>

                <h3 className="font-display text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
                  Know an inspiring principal?
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                  Help us recognise the school leaders who are transforming
                  education and making a lasting difference to learners and
                  communities.
                </p>
              </div>

              <Link
                to="/nominate"
                className="group inline-flex w-fit shrink-0 items-center justify-center gap-3 rounded-lg bg-[#D9BD83] px-6 py-4 text-sm font-bold text-[#29212A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E8D4A8] hover:shadow-lg"
              >
                Nominate a Leader
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>


      {/* 11. NOMINATED PRINCIPAL */}

      <section className="bg-[#FCF8F5] py-14 sm:py-18 lg:py-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            {/* Section label */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-9 bg-[#C7A66A]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A51D3D]">
                Featured Nominee · 2026
              </span>
            </div>

            {/* Profile card */}
            <div className="grid overflow-hidden rounded-xl border border-[#E9DCD7] bg-white md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr]">
              {/* Portrait */}
              <div className="relative min-h-[280px] overflow-hidden bg-[#F1E8E3] sm:min-h-[340px]">
                <img
                  src="/images/vikrant.png"
                  alt="Vikrant Sharma"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </div>

              {/* Information */}
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A51D3D]">
                  Nominated Principal
                </p>

                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#292027] sm:text-4xl">
                  Vikrant Sharma
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6E5C60] sm:text-base">
                  Recognising educational professionals who contribute to teaching,
                  technology, design and organisational development.
                </p>

                <div className="mt-7">
                  <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#7A263D]">
                    Specialties
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {principalSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-[#E9DCD7] bg-[#FCF8F5] px-3 py-1.5 text-xs font-medium text-[#66534D]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-[#EEE5E0] pt-6">
                  <Link
                    to="/nominate"
                    className="inline-flex items-center gap-3 rounded-md bg-[#A51D3D] px-5 py-3 text-sm font-semibold !text-white transition-colors duration-300 hover:bg-[#81152F]"
                  >
                    Explore Nominations
                    <ArrowRight size={16} className="text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 12. TESTIMONIAL */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#30364F] via-[#513047] to-[#7A354C] py-16 text-white sm:py-20">

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

              speak, and receive an award at the 1st World Education Summit

              in Delhi”

            </blockquote>

            <figcaption className="mt-6">

              <p className="font-display text-lg font-bold">

                Mahima Chandra

              </p>

              <p className="mt-1 text-sm text-white/65">

                CSR, DEI & Global Impact Leader

              </p>

            </figcaption>

          </figure>

        </Container>

      </section>

      {/* 13. MEDIA AND AWARDS VOTING */}

      <section className="bg-gradient-to-b from-[#FCF8F3] to-[#F6EEE6] py-16 sm:py-20">

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

      {/* 14. FINAL CALL TO ACTION */}

{/* 10. CONTACT CTA */}
<section className="bg-[#FCF8F5] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
  <Container>
    <div className="relative overflow-hidden rounded-3xl bg-[#A51D3D]">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-8 -top-16 h-56 w-56 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-32 left-[35%] h-72 w-72 rounded-full bg-black/10 blur-2xl" />

      <div className="relative z-10 grid gap-10 p-7 sm:p-10 md:grid-cols-[1fr_auto] md:items-center md:gap-8 lg:p-14 xl:p-16">
        {/* CTA content */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#D5B77A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8D4A8]">
              Be part of the 2026 conversation
            </span>
          </div>

          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Help shape the
            <span className="block text-[#E8D4A8]">
              future of education.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
            Connect with us to explore opportunities for schools, educators,
            award nominations, panel speakers, CSR partners and sponsors.
          </p>

          {/* Audience labels */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              'Schools & Educators',
              'Award Nominations',
              'Panel Speakers',
              'CSR Partners',
              'Sponsors',
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/5 px-3 py-2 text-xs font-medium text-white/90"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* CTA button */}
        <div className="flex flex-col items-start gap-4 md:items-center">
          <PrimaryLink
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full !bg-white px-7 py-3.5 !text-[#A51D3D] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:!bg-[#F5E8D1] hover:shadow-xl"
          >
            Contact the team
           
          </PrimaryLink>

          <p className="text-xs text-white/65">
            Let’s create meaningful impact together.
          </p>
        </div>
      </div>

      {/* Gold bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#D5B77A] to-transparent" />
    </div>
  </Container>
</section>

    </>

  )

}
