import { awardCategories } from './awards2026.js'

const sampleNominees = {
  A1: [
    { id: 'modern-public-school', name: 'Modern Public School', detail: 'Shalimar Bagh, New Delhi' },
    { id: 'sample-global-school', name: 'Sample Global School', detail: 'Gurugram, Haryana' },
    { id: 'sample-vidya-niketan', name: 'Sample Vidya Niketan', detail: 'Jaipur, Rajasthan' },
  ],
  B1: [
    { id: 'alka-kapur', name: 'Dr. Alka Kapur', detail: 'Principal, Modern Public School', photo: '/images/alka-kapur.png' },
    { id: 'sheba-thapar', name: 'Sheba Thapar', detail: 'School Leader', photo: '/images/sheba-thapar.png' },
    { id: 'smita-sharma-dabas', name: 'Smita Sharma Dabas', detail: 'Education & Academic Operations', photo: '/images/smita.png' },
  ],
  B5: [
    { id: 'monieka-khanna', name: 'Monieka Khanna', detail: 'Education Strategist', photo: '/images/monieka-khanna.png' },
    { id: 'sample-leader', name: 'Dr. Sample Leader', detail: 'Director, Sample Foundation' },
  ],
  C1: [
    { id: 'mahima-chandra', name: 'Mahima Chandra', detail: 'CSR, DEI & Global Impact Leader', photo: '/images/mahima.png' },
    { id: 'saurabh-vyas', name: 'Saurabh Vyas', detail: 'Technology & Engineering', photo: '/images/saurabh.png' },
  ],
}

export const previewCategories = awardCategories
  .filter(category => sampleNominees[category.id])
  .map(category => ({ ...category, nominees: sampleNominees[category.id] }))

const previewVotes = {}

export async function previewVote({ action, categoryId, nomineeId }) {
  await new Promise(resolve => setTimeout(resolve, 300))
  if (action === 'status') return { status: 200, body: { votes: { ...previewVotes } } }
  if (previewVotes[categoryId]) {
    return { status: 409, body: { message: 'You have already voted in this category.', nomineeId: previewVotes[categoryId] } }
  }
  previewVotes[categoryId] = nomineeId
  return { status: 200, body: { nomineeId } }
}
