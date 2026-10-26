
// Event information is taken from the supplied Celebrating Education 2026 document.
// Items marked proposed / to be announced remain subject to organiser confirmation.
export const events = [
  {
    id: 'ce-2026', slug: 'celebrating-education-embracing-the-future-2026',
    title: 'Celebrating Education: Embracing the Future',
    category: 'Education Leadership Awards',
    description: 'Recognising the educators, schools and changemakers building confident, safe, emotionally resilient and future-ready learners.',
    date: '2026-12-01', endDate: '2026-12-01', dateLabel: '2026 — Date to be announced',
    location: 'New Delhi, India', venue: 'Venue to be announced',
    image: '/images/award-stage.jpeg', featured: true,
    time: 'To be announced', format: 'To be announced',
    overview: 'Education is evolving. What we teach children must evolve with it. The future of education is not defined by academic achievement alone. It is shaped by a child’s ability to think critically, manage emotions, build meaningful relationships, stay safe and face life’s challenges with confidence. Celebrating Education: Embracing the Future 2026 brings together visionary school leaders, educators, policymakers, CSR leaders and changemakers to recognise excellence and explore the future of holistic education in India. Through awards, thought-provoking conversations and meaningful collaboration, the initiative celebrates those making education more inclusive, empathetic, innovative and future-ready.',
    agenda: [
      { time: 'To be announced', title: 'Education Leadership Awards', detail: 'Recognising schools, principals and educators who are creating meaningful change in education.' },
      { time: 'To be announced', title: 'Leadership Panel Discussion', detail: 'A conversation on AI in education, emotional health, confidence-building and the changing responsibilities of schools.' },
      { time: 'To be announced', title: 'Confidence, Life Skills & Child Safety', detail: 'Exploring how educators can teach children personal boundaries, recognise unsafe touch, seek help and respond to challenging situations.' }
    ],
    speakers: [], registrationUrl: ''
  },
  {
    id: 'ce-2025', slug: 'celebrating-education-2025',
    title: 'Celebrating Education 2025',
    category: 'Education Leadership Awards',
    description: 'The inaugural edition celebrating the people shaping the future of education.',
    date: '2025-11-07', endDate: '2025-11-07', dateLabel: 'November 7, 2025',
    location: 'New Delhi, India', venue: 'Kumsum, GK-II, New Delhi',
    image: '/images/panel-discussion.jpeg', featured: false,
    time: 'Historical event', format: 'In person',
    overview: 'The inaugural edition of Celebrating Education: Embracing the Future brought together distinguished educators, school leaders, CSR professionals and changemakers to recognise contributions to educational leadership, life skills, emotional well-being, community engagement and innovation. Organised in association with Life Skills Journal, Study Base and Lamp Post Trust, the event celebrated a vision of education that extends beyond academic results to nurture confident, resilient and future-ready learners.',
    agenda: [
      { time: '2025', title: 'Awards ceremony', detail: 'Recognition of individuals and institutions working to transform the educational experience.' },
      { time: '2025', title: 'Panel discussion', detail: 'AI in Education, Emotional Health & Confidence Building.' }
    ],
    speakers: [], registrationUrl: ''
  }
]
export const formatEventDate = (date, options = { day: 'numeric', month: 'short', year: 'numeric' }) =>
  new Intl.DateTimeFormat('en-IN', options).format(new Date(`${date}T12:00:00`))
export const categories = [...new Set(events.map(event => event.category))]
export const cities = [...new Set(events.map(event => event.location.split(',')[0]))]
