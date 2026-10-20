import { votingOpen, votingCategories } from '../src/data/voting2026.js'
import { googleClientId, verifyGoogleUser } from './_lib/google.js'
import { votingStorageReady, castVote, getVote, getVoterChoices } from './_lib/votes.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: 'Method not allowed' })
  }

  if (!googleClientId() || !votingStorageReady()) {
    console.error('Voting unavailable: Google client ID or vote storage is not configured.')
    return res.status(503).json({ message: 'Voting is not available right now. Please try again later.' })
  }

  const body = req.body || {}
  const user = await verifyGoogleUser(body.credential)
  if (!user) {
    return res.status(401).json({ code: 'SIGN_IN_REQUIRED', message: 'Please sign in with Google again to vote.' })
  }

  try {
    if (body.action === 'status') {
      const votes = await getVoterChoices(user.email, votingCategories.map(category => category.id))
      return res.status(200).json({ votes })
    }

    if (!votingOpen) {
      return res.status(403).json({ message: 'Voting is closed.' })
    }

    const category = votingCategories.find(item => item.id === body.categoryId)
    const nominee = category?.nominees.find(item => item.id === body.nomineeId)
    if (!nominee) {
      return res.status(400).json({ message: 'Please choose a valid nominee.' })
    }

    const saved = await castVote(category.id, user.email, {
      nominee: nominee.id,
      name: user.name,
      at: new Date().toISOString(),
    })
    if (!saved) {
      const existing = await getVote(category.id, user.email)
      return res.status(409).json({
        message: 'You have already voted in this category.',
        nomineeId: existing?.nominee,
      })
    }

    return res.status(200).json({ message: `Your vote for ${nominee.name} has been recorded.`, nomineeId: nominee.id })
  } catch (error) {
    console.error('Vote failed:', error.message)
    return res.status(500).json({ message: 'Unable to record your vote. Please try again.' })
  }
}
