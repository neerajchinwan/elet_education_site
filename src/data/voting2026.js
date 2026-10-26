import { awardCategories } from './awards2026.js'

export const votingOpen = true

export const votingClosesOn = '5th Dec 2026'

// Keys are award category ids from awards2026.js (A1–A5, B1–B5, C1–C5).
// Nominee ids must be unique within a category and must never change once voting
// has started, because saved votes point at them. Photos go in public/images/nominees/.
//
// Example:
//   A1: [
//     { id: 'modern-public-school', name: 'Modern Public School', detail: 'Shalimar Bagh, New Delhi', photo: '/images/nominees/modern-public-school.jpg' },
//     { id: 'dps-rk-puram', name: 'Delhi Public School', detail: 'R.K. Puram, New Delhi' },
//   ],
export const nomineesByCategory = {
  A1: [],
  A2: [],
  A3: [],
  A4: [],
  A5: [],
  B1: [],
  B2: [],
  B3: [],
  B4: [],
  B5: [],
  C1: [],
  C2: [],
  C3: [],
  C4: [],
  C5: [],
}

export const votingCategories = awardCategories
  .map(category => ({ ...category, nominees: nomineesByCategory[category.id] || [] }))
  .filter(category => category.nominees.length > 0)

export const votingLive = votingOpen && votingCategories.length > 0
