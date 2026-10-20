import nodemailer from 'nodemailer'

// SMTP_* (e.g. GoDaddy) takes over once SMTP_PASS is set; until then the Gmail account is used.
const useSmtp = Boolean(process.env.SMTP_PASS)
const mailUser = useSmtp ? process.env.SMTP_USER : process.env.GMAIL_USER
const mailPort = useSmtp ? Number(process.env.SMTP_PORT) || 465 : 465

export const transporter = nodemailer.createTransport({
  host: useSmtp ? process.env.SMTP_HOST || 'smtpout.secureserver.net' : 'smtp.gmail.com',
  port: mailPort,
  secure: mailPort === 465,
  auth: {
    user: mailUser,
    pass: useSmtp ? process.env.SMTP_PASS : process.env.GMAIL_APP_PASSWORD,
  },
})

export const sender = name => ({ name, address: mailUser })

export const organiserInbox = () => process.env.CONTACT_RECEIVER || mailUser

export const escapeHtml = value =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

export const multiline = value => escapeHtml(value).replace(/\r?\n/g, '<br>')

const emailCss = `
  body { margin: 0; padding: 0; background: #FAF5EF; font-family: Arial, Helvetica, sans-serif; color: #202735; }
  .wrapper { padding: 32px 16px; background: #FAF5EF; }
  .card { max-width: 640px; margin: 0 auto; background: #ffffff; border: 1px solid #E5E7EB; }
  .header { background: #202735; padding: 24px 32px; border-top: 4px solid #C51F45; }
  .eyebrow { margin: 0; color: #C51F45; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; }
  .title { margin: 8px 0 0; color: #ffffff; font-size: 22px; line-height: 1.3; }
  .content { padding: 0 32px 32px; }
  .block { margin-top: 24px; }
  .block-title { margin: 0 0 8px; color: #A51D3D; font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
  .intro { margin: 24px 0 0; font-size: 14px; line-height: 1.6; }
  .details-table { width: 100%; border-collapse: collapse; }
  .details-table td { padding: 10px 0; border-bottom: 1px solid #E5E7EB; vertical-align: top; }
  .label { width: 160px; color: #667085; font-size: 13px; }
  .value { color: #202735; font-size: 14px; font-weight: 600; }
  .value a { color: #C51F45; text-decoration: none; }
  .muted { color: #98A0AE; font-weight: 400; }
  .verified { margin-left: 6px; color: #067647; font-size: 12px; font-weight: 700; }
  .category { margin-top: 12px; padding: 4px 16px 8px; border: 1px solid #E5E7EB; border-left: 3px solid #C51F45; }
  .category-title { margin: 12px 0 4px; font-size: 15px; font-weight: 700; }
  .message-body { background: #FAF5EF; border-left: 3px solid #C51F45; padding: 16px; font-size: 14px; line-height: 1.6; }
  .footer { padding: 16px 32px; background: #FAF5EF; color: #667085; font-size: 12px; line-height: 1.5; text-align: center; }
  @media (max-width: 480px) {
    .header, .content, .footer { padding-left: 20px; padding-right: 20px; }
    .label { width: 110px; }
  }
`

export const detailsTable = rows => `
  <table role="presentation" class="details-table">
    ${rows
      .map(([label, value]) => `<tr><td class="label">${escapeHtml(label)}</td><td class="value">${value || '<span class="muted">Not provided</span>'}</td></tr>`)
      .join('')}
  </table>`

export const renderEmail = ({ eyebrow, title, content, footer }) => `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>${emailCss}</style>
</head>
<body>
  <div class="wrapper">
    <div class="card">
      <div class="header">
        <p class="eyebrow">${escapeHtml(eyebrow)}</p>
        <h1 class="title">${escapeHtml(title)}</h1>
      </div>
      <div class="content">${content}</div>
      <div class="footer">${footer}</div>
    </div>
  </div>
</body>
</html>`
