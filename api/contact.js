import {
  transporter,
  sender,
  organiserInbox,
  escapeHtml,
  multiline,
  detailsTable,
  renderEmail,
} from './_lib/mail.js'

const optional = value =>
  typeof value === 'string' && value.trim() ? value.trim() : ''

function buildHtml({ name, email, phone, company, inquiry, subject, message }) {
  return renderEmail({
    eyebrow: inquiry,
    title: subject,
    content: `
      <div class="block">
        ${detailsTable([
          ['Name', escapeHtml(name)],
          ['Email', `<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>`],
          ['Phone', phone && `<a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a>`],
          ['Company', company && escapeHtml(company)],
        ])}
      </div>
      <div class="block">
        <p class="block-title">Message</p>
        <div class="message-body">${multiline(message)}</div>
      </div>`,
    footer: `Sent from the website contact form. Reply to this email to respond to ${escapeHtml(name)} directly.`,
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({
      message: 'Method not allowed',
    })
  }

  const { name, email, phone, company, inquiry, subject, message, website } =
    req.body || {}

  // Honeypot: real visitors should leave this field empty.
  if (website) {
    return res.status(200).json({
      message: 'Your message has been received.',
    })
  }

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof subject !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !email.trim() ||
    !subject.trim() ||
    !message.trim()
  ) {
    return res.status(400).json({
      message: 'Please fill in all required fields.',
    })
  }

  if (
    name.length > 100 ||
    email.length > 254 ||
    subject.length > 150 ||
    message.length > 5000 ||
    [phone, company, inquiry].some(
      value => value != null && (typeof value !== 'string' || value.length > 100)
    )
  ) {
    return res.status(400).json({
      message: 'One or more fields are too long.',
    })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return res.status(400).json({
      message: 'Please enter a valid email address.',
    })
  }

  const details = {
    name: name.trim(),
    email: email.trim(),
    phone: optional(phone),
    company: optional(company),
    inquiry: optional(inquiry) || 'General inquiry',
    subject: subject.trim(),
    message: message.trim(),
  }

  try {
    await transporter.sendMail({
      from: sender('Website Contact Form'),
      to: organiserInbox(),
      replyTo: { name: details.name, address: details.email },
      subject: `${details.inquiry}: ${details.subject} — from ${details.name}`,
      text: [
        `New ${details.inquiry.toLowerCase()} from the website`,
        '',
        `Name:     ${details.name}`,
        `Email:    ${details.email}`,
        `Phone:    ${details.phone || 'Not provided'}`,
        `Company:  ${details.company || 'Not provided'}`,
        `Subject:  ${details.subject}`,
        '',
        'Message:',
        details.message,
      ].join('\n'),
      html: buildHtml(details),
    })

    return res.status(200).json({
      message: 'Thank you! Your message has been sent.',
    })
  } catch (error) {
    console.error('Contact email failed:', error.message)

    return res.status(500).json({
      message: 'Unable to send your message. Please try again later.',
    })
  }
}
