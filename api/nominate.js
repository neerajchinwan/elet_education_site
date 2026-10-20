import {
  awardsEvent,
  awardSections,
  awardCategories,
  NOMINATION_FIELDS,
} from '../src/data/awards2026.js'
import {
  transporter,
  sender,
  organiserInbox,
  escapeHtml,
  detailsTable,
  renderEmail,
} from './_lib/mail.js'
import { googleClientId, verifyGoogleUser } from './_lib/google.js'

function parseSubmission(body) {
  let valid = true
  const field = (value, max) => {
    if (value == null) return ''
    if (typeof value !== 'string' || value.trim().length > max) {
      valid = false
      return ''
    }
    return value.trim()
  }

  const nominator = body.nominator || {}
  const details = {
    name: field(nominator.name, 100),
    phone: field(nominator.phone, 30),
    designation: field(nominator.designation, 100),
    organization: field(nominator.organization, 150),
  }

  const nominations = body.nominations || {}
  const entries = awardCategories
    .map(category => {
      const submitted = nominations[category.id] || {}
      const values = Object.fromEntries(NOMINATION_FIELDS.map(key => [key, field(submitted[key], 200)]))
      return { ...category, values }
    })
    .filter(entry => NOMINATION_FIELDS.some(key => entry.values[key]))

  return { valid, details, entries, sendCopy: body.sendCopy === true }
}

function nominationsHtml(entries) {
  return awardSections
    .map(section => {
      const items = entries.filter(entry => entry.section.id === section.id)
      if (!items.length) return ''
      return `
        <div class="block">
          <p class="block-title">Section ${section.id} · ${escapeHtml(section.title)}</p>
          ${items
            .map(entry => `
              <div class="category">
                <p class="category-title">${entry.number}. ${escapeHtml(entry.title)}</p>
                ${detailsTable(NOMINATION_FIELDS.map(key => [entry.labels[key], entry.values[key] && escapeHtml(entry.values[key])]))}
              </div>`)
            .join('')}
        </div>`
    })
    .join('')
}

function nominationsText(entries) {
  return awardSections
    .map(section => {
      const items = entries.filter(entry => entry.section.id === section.id)
      if (!items.length) return ''
      return [
        `SECTION ${section.id}: ${section.title.toUpperCase()}`,
        ...items.map(entry => [
          '',
          `${entry.number}. ${entry.title}`,
          ...NOMINATION_FIELDS.map(key => `   ${entry.labels[key]}: ${entry.values[key] || 'Not provided'}`),
        ].join('\n')),
      ].join('\n')
    })
    .filter(Boolean)
    .join('\n\n')
}

const categoryCount = count => `${count} ${count === 1 ? 'category' : 'categories'}`

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: 'Method not allowed' })
  }

  if (!googleClientId()) {
    console.error('Nomination failed: GOOGLE_CLIENT_ID / VITE_GOOGLE_CLIENT_ID is not set.')
    return res.status(500).json({ message: 'Nominations are not available right now. Please try again later.' })
  }

  const body = req.body || {}
  const user = await verifyGoogleUser(body.credential)
  if (!user) {
    return res.status(401).json({
      code: 'SIGN_IN_REQUIRED',
      message: 'Please sign in with Google again to submit your nomination.',
    })
  }

  const { valid, details, entries, sendCopy } = parseSubmission(body)

  if (!valid) {
    return res.status(400).json({ message: 'One or more fields are too long.' })
  }
  if (!details.name || !details.phone) {
    return res.status(400).json({ message: 'Please enter your full name and phone number.' })
  }
  if (!entries.length) {
    return res.status(400).json({ message: 'Please fill in at least one award category.' })
  }

  const nominatorRows = [
    ['Name', escapeHtml(details.name)],
    ['Email', `<a href="mailto:${escapeHtml(user.email)}">${escapeHtml(user.email)}</a><span class="verified">✓ Verified with Google</span>`],
    ['Phone', `<a href="tel:${escapeHtml(details.phone)}">${escapeHtml(details.phone)}</a>`],
    ['Designation', details.designation && escapeHtml(details.designation)],
    ['Organization', details.organization && escapeHtml(details.organization)],
  ]
  const nominatorText = [
    `Name:          ${details.name}`,
    `Email:         ${user.email} (verified with Google)`,
    `Phone:         ${details.phone}`,
    `Designation:   ${details.designation || 'Not provided'}`,
    `Organization:  ${details.organization || 'Not provided'}`,
  ].join('\n')

  try {
    await transporter.sendMail({
      from: sender(`${awardsEvent.name} Nominations`),
      to: organiserInbox(),
      replyTo: { name: details.name, address: user.email },
      subject: `New nomination: ${categoryCount(entries.length)} from ${details.name}`,
      text: [
        `New nomination for ${awardsEvent.name}`,
        '',
        'NOMINATED BY',
        nominatorText,
        '',
        nominationsText(entries),
      ].join('\n'),
      html: renderEmail({
        eyebrow: `${awardsEvent.name} · Nominations`,
        title: `${categoryCount(entries.length)} nominated by ${details.name}`,
        content: `
          <div class="block">
            <p class="block-title">Nominated by</p>
            ${detailsTable(nominatorRows)}
          </div>
          ${nominationsHtml(entries)}`,
        footer: `Submitted from the ${escapeHtml(awardsEvent.name)} nomination page. Reply to this email to respond to ${escapeHtml(details.name)} directly.`,
      }),
    })
  } catch (error) {
    console.error('Nomination email failed:', error.message)
    return res.status(500).json({ message: 'Unable to submit your nomination. Please try again later.' })
  }

  let copySent = false
  if (sendCopy) {
    try {
      await transporter.sendMail({
        from: sender(awardsEvent.name),
        to: { name: details.name, address: user.email },
        subject: `Your nomination for ${awardsEvent.name}`,
        text: [
          `Dear ${details.name},`,
          '',
          `Thank you for your nomination for ${awardsEvent.name} (${awardsEvent.date}, ${awardsEvent.city}).`,
          'Here is a copy of your responses. All nominations are subject to review by the Awards Committee.',
          '',
          nominationsText(entries),
        ].join('\n'),
        html: renderEmail({
          eyebrow: awardsEvent.name,
          title: 'Thank you for your nomination',
          content: `
            <p class="intro">Dear ${escapeHtml(details.name)},<br><br>Thank you for your nomination for ${escapeHtml(awardsEvent.name)} (${escapeHtml(awardsEvent.date)}, ${escapeHtml(awardsEvent.city)}). Here is a copy of your responses.</p>
            ${nominationsHtml(entries)}`,
          footer: `All nominations are subject to review by the Awards Committee.<br>${escapeHtml(awardsEvent.presenter)}`,
        }),
      })
      copySent = true
    } catch (error) {
      console.error('Nomination copy email failed:', error.message)
    }
  }

  return res.status(200).json({
    message: 'Thank you! Your nomination has been submitted.',
    copySent,
  })
}
