import { OAuth2Client } from 'google-auth-library'

const googleClient = new OAuth2Client()

export const googleClientId = () => process.env.GOOGLE_CLIENT_ID || process.env.VITE_GOOGLE_CLIENT_ID

export async function verifyGoogleUser(credential) {
  if (typeof credential !== 'string' || !credential) return null
  try {
    const ticket = await googleClient.verifyIdToken({ idToken: credential, audience: googleClientId() })
    const payload = ticket.getPayload()
    if (!payload?.email || !payload.email_verified) return null
    return { email: payload.email.toLowerCase(), name: payload.name || '' }
  } catch {
    return null
  }
}
