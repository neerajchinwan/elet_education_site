import {
  ShieldCheck,
  MessageCircle,
  HeartHandshake,
  Compass,
  Users,
  Brain,
  HandHeart,
  BookOpen,
  Gamepad2,
  Lightbulb,
  School,
  CheckCircle2,
} from "lucide-react";
import {
  Container,
  PrimaryLink,
  Reveal,
  SectionHeading,
} from "../components/common";

const focusAreas = [
  {
    number: "01",
    title: "Confidence & communication",
    description:
      "Build self-belief, speak up, express ideas clearly and learn how to ask for help.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Personal safety & boundaries",
    description:
      "Understand body autonomy, recognise uncomfortable situations, identify trusted adults and practise help-seeking.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Anti-bullying & empathy",
    description:
      "Encourage respect, inclusion and healthy peer relationships, while learning how to respond safely to bullying.",
    icon: HeartHandshake,
  },
  {
    number: "04",
    title: "Emotional awareness",
    description:
      "Recognise feelings, manage frustration, pause before reacting and resolve disagreements constructively.",
    icon: Brain,
  },
  {
    number: "05",
    title: "Growing up & menstrual awareness",
    description:
      "Create age-appropriate conversations about body changes, menstruation, hygiene and respectful support.",
    icon: HandHeart,
  },
  {
    number: "06",
    title: "Leadership & life readiness",
    description:
      "Practise teamwork, decision-making, resilience, responsibility and ethical choices.",
    icon: Compass,
  },
];

const learningMethods = [
  { title: "Stories & discussion", icon: BookOpen },
  { title: "Board & card games", icon: Gamepad2 },
  { title: "Role-play & real-life practice", icon: Users },
  { title: "Journaling & reflection", icon: Lightbulb },
];

export default function AboutUs() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-16 pt-36 text-white sm:pb-24 sm:pt-44">
        <div className="absolute inset-0">
          <img
            src="/images/panel-discussion.jpeg"
            alt="Students taking part in a life-skills learning activity"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        </div>
        <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-36 right-[12%] h-96 w-96 rounded-full border border-champagne/25" />

        <Container className="relative z-10">
          <div className="max-w-4xl">
            <span className="eyebrow !text-champagne">About Life Skills Journal</span>
            <h1 className="section-title mt-5 text-4xl leading-[1.08] sm:text-6xl lg:text-7xl">
              Every child deserves the confidence to speak, the skills to cope and the courage to make{" "}
              <span className="serif-italic text-champagne">safe choices.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Life Skills Journal is an education and social-impact initiative helping children build the practical skills they need to navigate school, relationships and everyday life.
            </p>
            <div className="mt-8">
              <PrimaryLink to="/contact">Partner with us</PrimaryLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow">Our purpose</span>
            <h2 className="section-title mt-5 text-4xl text-charcoal sm:text-5xl">
              Learning beyond textbooks. Skills for{" "}
              <span className="serif-italic text-champagne">life.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-7 text-slatecopy">
              We believe that learning should go beyond academic knowledge. Children also need opportunities to understand themselves, communicate with confidence, manage emotions, respect boundaries and make thoughtful decisions.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-slatecopy">
              Our work creates space for practical, age-appropriate learning that helps children recognise situations, practise responses and seek support from trusted adults.
            </p>
            <div className="mt-8">
              <PrimaryLink to="/contact">Explore a school pilot</PrimaryLink>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="relative">
            <img
              src="/images/award-educators.jpeg"
              alt="Children learning and participating in a classroom activity"
              className="aspect-[5/4] w-full object-cover"
            />
            <div className="absolute -bottom-6 right-4 max-w-[250px] border-l-2 border-champagne bg-white px-5 py-4 shadow-soft sm:right-6">
              <p className="font-editorial text-xl italic leading-snug text-charcoal">
                Skills that stay for life.
              </p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-champagne">
                Confidence · Safety · Readiness
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why we exist"
            title={
              <>
                Every child deserves the opportunity to grow with{" "}
                <span className="serif-italic">confidence.</span>
              </>
            }
            description="A child may be capable and curious yet hesitate to speak in class, struggle to manage frustration, feel excluded by peers or be unsure whom to approach when something feels wrong. These experiences can affect participation, relationships and a child’s sense of belonging."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Reveal className="border-t border-champagne bg-ivory p-7 sm:p-9">
              <span className="text-[10px] font-bold tracking-[0.2em] text-champagne">
                01 / OUR VISION
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-charcoal">
                A world where every child can thrive.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slatecopy">
                A world where every child has the confidence, emotional awareness and practical life skills to make safe choices, build healthy relationships and contribute positively to their community.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="border-t border-champagne bg-ivory p-7 sm:p-9">
              <span className="text-[10px] font-bold tracking-[0.2em] text-champagne">
                02 / OUR MISSION
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-charcoal">
                Making life-skills learning part of every journey.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slatecopy">
                We work with schools, educators and families to make life-skills education engaging and accessible through interactive sessions, guided activities, board games, reflection and real-life practice.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="What we focus on"
              title={
                <>
                  Practical skills for{" "}
                  <span className="serif-italic text-champagne">everyday life.</span>
                </>
              }
            />
            <p className="max-w-md text-[15px] leading-7 text-slatecopy lg:pb-2">
              We focus on the interconnected skills children need to understand themselves, build relationships and navigate everyday situations with confidence.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map(({ number, title, description, icon: Icon }, i) => (
              <Reveal
                key={number}
                delay={i * 0.05}
                className="border border-[#E9D0D7] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-[0.16em] text-champagne">
                    {number}
                  </span>
                  <Icon size={22} strokeWidth={1.4} className="text-[#A51D3D]" />
                </div>
                <h3 className="mt-8 font-display text-xl font-semibold leading-snug text-charcoal">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slatecopy">{description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="grid bg-ink text-white lg:grid-cols-2">
        <div className="flex items-center py-20 sm:py-28">
          <div className="w-full px-5 sm:px-8 lg:py-4 lg:pl-[max(2rem,calc((100vw-1200px)/2+2rem))] lg:pr-16">
            <div className="max-w-xl lg:ml-auto">
              <span className="eyebrow !text-champagne">How we learn</span>
              <h2 className="section-title mt-5 text-4xl sm:text-5xl">
                From hearing about a skill to{" "}
                <span className="serif-italic text-champagne">living it.</span>
              </h2>
              <p className="mt-6 text-[15px] leading-7 text-white/65">
                We use stories, discussion, board and card games, role-play, journaling and guided group activities to help students move from hearing about a skill to practising it.
              </p>
              <p className="mt-4 text-[15px] leading-7 text-white/65">
                Activities are selected and adapted for the age group and the school’s priorities. We aim to create respectful spaces where children can ask questions, reflect and practise possible responses without being shamed or labelled.
              </p>
              <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {learningMethods.map(({ title, icon: Icon }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Icon size={18} className="mt-0.5 shrink-0 text-champagne" />
                    <span className="text-sm leading-5 text-white/80">{title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative min-h-[340px] lg:min-h-[620px]">
          <img
            src="/images/nominated-principals.jpeg"
            alt="Interactive life-skills activities with students"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 border border-white/20 bg-ink/80 p-6 backdrop-blur-sm sm:bottom-10 sm:left-10 sm:right-10">
            <p className="font-editorial text-2xl italic text-white">
              Learn. Practise. Reflect. Grow.
            </p>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
              Age-appropriate · Interactive · Respectful
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <img
              src="/images/award-partners.jpeg"
              alt="School educators and facilitators working together"
              className="aspect-[5/4] w-full object-cover"
            />
            <div className="absolute -bottom-5 -right-1 bg-champagne p-6 text-ink shadow-soft sm:-right-4 sm:p-7">
              <School size={24} strokeWidth={1.4} />
              <p className="mt-4 max-w-[180px] font-display text-lg font-semibold leading-snug">
                A learning partnership built around each school.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="order-1 lg:order-2">
            <span className="eyebrow">Partnering with schools</span>
            <h2 className="section-title mt-5 text-4xl text-charcoal sm:text-5xl">
              Better together. Stronger for{" "}
              <span className="serif-italic text-champagne">learners.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-7 text-slatecopy">
              Our Life Skills Classroom model is designed as a school partnership. We begin by understanding the school’s student cohort, existing support systems and areas of priority.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-slatecopy">
              Together, we agree the programme scope, learning themes, session plan and feedback process. A pilot may include facilitator resources, selected activity materials, student reflection and simple pre- and post-learning checks, followed by a review with the school.
            </p>
            <div className="mt-8">
              <PrimaryLink to="/contact">Request a school pilot</PrimaryLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[#F8E5E9] py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <SectionHeading
            eyebrow="Our approach to every child"
            title={
              <>
                Care before assumptions.{" "}
                <span className="serif-italic text-champagne">Always.</span>
              </>
            }
          />
          <Reveal delay={0.06}>
            <p className="text-[15px] leading-7 text-charcoal">
              We believe a child’s academic performance should never be the only measure of their potential. When a student is struggling, the right response is curiosity and care—not assumptions about intelligence, behaviour or family circumstances.
            </p>
            <p className="mt-5 text-[15px] leading-7 text-slatecopy">
              Life-skills education can complement academic learning, school counselling, safeguarding processes and health education; it does not replace professional support where that is needed.
            </p>
            <div className="mt-8 flex items-start gap-3 border-l-2 border-champagne bg-white/80 p-5">
              <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-champagne" />
              <p className="text-sm leading-7 text-charcoal">
                Every child deserves a respectful space to ask questions, reflect, practise and seek support.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-ivory px-5 py-16 sm:py-24">
        <Container>
          <div className="relative overflow-hidden bg-ink px-7 py-12 text-white sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-16 -top-32 h-80 w-80 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-40 right-[18%] h-80 w-80 rounded-full border border-champagne/30" />
            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <span className="eyebrow !text-champagne">An invitation to schools</span>
                <h2 className="section-title mt-5 text-3xl sm:text-5xl">
                  Let’s help children build the skills they need for{" "}
                  <span className="serif-italic text-champagne">life.</span>
                </h2>
                <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/70">
                  Let’s work together to help children become confident communicators, thoughtful decision-makers, empathetic classmates and safer, more self-aware young people.
                </p>
              </div>
              <PrimaryLink to="/contact" className="shrink-0">
                Connect with us
              </PrimaryLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
