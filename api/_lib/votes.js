import { Redis } from '@upstash/redis'

const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN

function memoryStore() {
  const hashes = new Map()
  const hash = key => {
    if (!hashes.has(key)) hashes.set(key, new Map())
    return hashes.get(key)
  }
  return {
    async hsetnx(key, field, value) {
      const h = hash(key)
      if (h.has(field)) return 0
      h.set(field, value)
      return 1
    },
    async hget(key, field) {
      return hash(key).get(field) ?? null
    },
    async hgetall(key) {
      const h = hash(key)
      return h.size ? Object.fromEntries(h) : null
    },
  }
}

// Without Redis credentials, local development keeps votes in memory; on Vercel voting is disabled instead.
const store = url && token
  ? new Redis({ url, token })
  : process.env.VERCEL ? null : (globalThis.__ceVotesMemory ||= memoryStore())

export const votingStorageReady = () => Boolean(store)

const votersKey = categoryId => `votes2026:voters:${categoryId}`

export async function castVote(categoryId, email, record) {
  return (await store.hsetnx(votersKey(categoryId), email, record)) === 1
}

export async function getVote(categoryId, email) {
  return store.hget(votersKey(categoryId), email)
}

export async function getVoterChoices(email, categoryIds) {
  const records = await Promise.all(categoryIds.map(id => getVote(id, email)))
  return Object.fromEntries(
    categoryIds.map((id, index) => [id, records[index]?.nominee]).filter(([, nominee]) => nominee)
  )
}

export async function getAllVotes(categoryIds) {
  const hashes = await Promise.all(categoryIds.map(id => store.hgetall(votersKey(id))))
  return Object.fromEntries(categoryIds.map((id, index) => [id, hashes[index] || {}]))
}
