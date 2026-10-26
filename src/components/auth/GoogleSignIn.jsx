import { useCallback, useEffect, useRef, useState } from 'react'
import { ShieldCheck } from 'lucide-react'

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
const SESSION_KEY = 'ce-2026-google'
const SCRIPT_URL = 'https://accounts.google.com/gsi/client'

let scriptPromise
let initialized = false
let activeCallback = () => {}

function loadGoogleIdentity() {
  if (window.google?.accounts?.id) return Promise.resolve()
  scriptPromise ||= new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = SCRIPT_URL
    script.async = true
    script.onload = resolve
    script.onerror = () => {
      scriptPromise = null
      reject(new Error('Google sign-in could not be loaded. Check your connection and refresh the page.'))
    }
    document.head.appendChild(script)
  })
  return scriptPromise
}

export function decodeCredential(credential) {
  try {
    const payload = credential.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')
    return JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(payload), c => c.charCodeAt(0))))
  } catch {
    return null
  }
}

function toUser(credential) {
  const payload = credential && decodeCredential(credential)
  if (!payload?.email || payload.exp * 1000 < Date.now() + 60_000) return null
  return { credential, email: payload.email, name: payload.name || '', picture: payload.picture || '' }
}

export function useGoogleUser(storageKey = SESSION_KEY) {
  const [user, setUser] = useState(() => toUser(sessionStorage.getItem(storageKey)))

  const signIn = useCallback(credential => {
    const next = toUser(credential)
    if (!next) return
    sessionStorage.setItem(storageKey, credential)
    setUser(next)
  }, [storageKey])

  const signOut = useCallback(() => {
    sessionStorage.removeItem(storageKey)
    window.google?.accounts?.id?.disableAutoSelect()
    setUser(null)
  }, [storageKey])

  return { user, signIn, signOut }
}

export function SignedInAs({ user, note, onSignOut }) {
  return <div className="flex flex-col gap-4 rounded-2xl border border-[#E9D0D7] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
    <div className="flex min-w-0 items-center gap-4">
      {user.picture
        ? <img src={user.picture} alt="" referrerPolicy="no-referrer" className="h-11 w-11 shrink-0 rounded-full"/>
        : <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FBEFF2] font-bold text-champagne">{(user.name || user.email)[0].toUpperCase()}</span>}
      <div className="min-w-0">
        <p className="flex items-center gap-1.5 text-xs font-bold text-emerald-700"><ShieldCheck size={14}/> Verified with Google</p>
        <p className="truncate text-sm font-semibold text-charcoal">{user.email}</p>
        {note && <p className="text-xs text-slatecopy">{note}</p>}
      </div>
    </div>
    <button type="button" onClick={onSignOut} className="shrink-0 self-start text-xs font-bold text-[#A51D3D] underline underline-offset-4 sm:self-center">Switch account</button>
  </div>
}

export default function GoogleSignIn({ onCredential, width = 300 }) {
  const buttonRef = useRef(null)
  const callbackRef = useRef(onCredential)
  const [error, setError] = useState('')
  callbackRef.current = onCredential

  useEffect(() => {
    if (!CLIENT_ID) return
    let cancelled = false
    loadGoogleIdentity()
      .then(() => {
        if (cancelled || !buttonRef.current) return
        activeCallback = credential => callbackRef.current(credential)
        if (!initialized) {
          window.google.accounts.id.initialize({
            client_id: CLIENT_ID,
            callback: response => activeCallback(response.credential),
            auto_select: false,
            cancel_on_tap_outside: true,
          })
          initialized = true
        }
        window.google.accounts.id.renderButton(buttonRef.current, {
          theme: 'outline',
          size: 'large',
          text: 'continue_with',
          shape: 'rectangular',
          logo_alignment: 'left',
          width,
        })
      })
      .catch(err => !cancelled && setError(err.message))
    return () => { cancelled = true }
  }, [width])

  if (!CLIENT_ID) {
    return <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">Google sign-in is not configured yet. Add <code className="font-mono text-xs">VITE_GOOGLE_CLIENT_ID</code> to the environment variables and restart the site.</p>
  }

  return <div>
    <div ref={buttonRef} className="min-h-[44px]"/>
    {error && <p role="alert" className="mt-3 text-sm text-red-600">{error}</p>}
  </div>
}
