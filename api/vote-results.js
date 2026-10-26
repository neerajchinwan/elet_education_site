import { createHash, timingSafeEqual } from 'node:crypto'
import { votingCategories } from '../src/data/voting2026.js'
import { votingStorageReady, getAllVotes } from './_lib/votes.js'

const digest = value => createHash('sha256').update(String(value)).digest()

function passwordMatches(input) {
  const expected = process.env.VOTING_ADMIN_PASSWORD
  return Boolean(expected) && typeof input === 'string' && timingSafeEqual(digest(input), digest(expected))
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: 'Method not allowed' })
  }

  if (!process.env.VOTING_ADMIN_PASSWORD || !votingStorageReady()) {
    return res.status(503).json({ message: 'Results are not configured yet. Set VOTING_ADMIN_PASSWORD and the vote storage variables.' })
  }

  if (!passwordMatches(req.body?.password)) {
    await new Promise(resolve => setTimeout(resolve, 800))
    return res.status(401).json({ message: 'Incorrect password.' })
  }

  try {
    const allVotes = await getAllVotes(votingCategories.map(category => category.id))
    const voters = new Set()
    const rows = []

    const categories = votingCategories.map(category => {
      const counts = Object.fromEntries(category.nominees.map(nominee => [nominee.id, 0]))
      for (const [email, record] of Object.entries(allVotes[category.id])) {
        if (!(record?.nominee in counts)) continue
        counts[record.nominee] += 1
        voters.add(email)
        rows.push({
          category: category.title,
          nominee: category.nominees.find(nominee => nominee.id === record.nominee).name,
          voterName: record.name || '',
          voterEmail: email,
          votedAt: record.at || '',
        })
      }
      const totalVotes = Object.values(counts).reduce((sum, count) => sum + count, 0)
      return {
        id: category.id,
        title: category.title,
        section: category.section.title,
        totalVotes,
        nominees: category.nominees
          .map(nominee => ({ id: nominee.id, name: nominee.name, detail: nominee.detail || '', votes: counts[nominee.id] }))
          .sort((a, b) => b.votes - a.votes),
      }
    })

    return res.status(200).json({
      categories,
      totalVotes: rows.length,
      uniqueVoters: voters.size,
      rows: rows.sort((a, b) => a.votedAt.localeCompare(b.votedAt)),
      generatedAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Vote results failed:', error.message)
    return res.status(500).json({ message: 'Unable to load results. Please try again.' })
  }
}
