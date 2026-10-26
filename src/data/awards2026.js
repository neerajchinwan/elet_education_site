export const awardsEvent = {
  name: 'Celebrating Education 2026',
  title: 'National Awards - School Leader & Education Leader of the Year Awards & Summit 2026',
  date: '11th Dec 2026',
  city: 'New Delhi',
  presenter: 'The Life Skills Journal - Be The Change',
}

export const NOMINATION_FIELDS = ['name', 'detail', 'suggestion']

export const awardSections = [
  {
    id: 'A',
    title: 'School Awards',
    tagline: 'Recognizing institutions that are redefining education.',
    note: 'Nominate a school under each category. You can also suggest another school for any category.',
    labels: { name: 'Nominated School Name', detail: 'Principal Name', suggestion: 'Suggest Another Category' },
    categories: [
      { title: 'School of the Year 2026' },
      { title: 'Innovative Curriculum Award' },
      { title: 'Inclusive Education Award' },
      { title: 'Green School / Sustainability Award' },
      { title: 'Digital Transformation in Education Award' },
    ],
  },
  {
    id: 'B',
    title: 'Leadership Awards',
    tagline: 'Honouring the leaders shaping the future of learning.',
    labels: { name: 'Nominee Name', detail: 'Organization', suggestion: 'Your Suggestion' },
    categories: [
      { title: 'School Leader of the Year 2026' },
      { title: 'Education Leader of the Year 2026' },
      { title: 'Lifetime Achievement in Education' },
      { title: 'Emerging Education Leader' },
      { title: 'Woman Education Leader of the Year' },
    ],
  },
  {
    id: 'C',
    title: 'CSR Heads / Corporate Leaders',
    tagline: 'Celebrating the changemakers behind education.',
    labels: { name: 'CSR Head Name', detail: 'Company', suggestion: 'Suggest Another' },
    categories: [
      { title: 'CSR Leader of the Year 2026' },
      { title: 'DEI Champion Award (Diversity, Equity & Inclusion)' },
      { title: 'Global Impact Leader Award (Work across 20+ countries)' },
      { title: 'Technology for Good Award (AI, Cloud, STEM for Students)' },
      { title: 'Best CSR-Education Collaboration Award', labels: { detail: 'Company / School Partner' } },
    ],
  },
]

export const awardCategories = awardSections.flatMap(section =>
  section.categories.map((category, index) => ({
    id: `${section.id}${index + 1}`,
    number: index + 1,
    section,
    title: category.title,
    labels: { ...section.labels, ...category.labels },
  }))
)

export const juryPanel = [
  {
    name: 'Mahima Chandra',
    role: 'CSR, DEI & Global Impact Leader',
    bio: 'A seasoned professional with 25+ years of cross-functional expertise across 20+ countries.',
    image: '/images/mahima.png',
  },
  {
    name: 'Saurabh Vyas',
    role: 'Technology & Engineering Professional',
    bio: 'Cloud services innovator, empowering students with technology education.',
    image: '/images/saurabh.png',
  },
]
