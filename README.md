
# Celebrating Education: Embracing the Future — Yellow Edition

A responsive React + Tailwind CSS website based on the supplied 2026 event document and event photographs.

## Run locally
Requirements: Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

For a production build:
```bash
npm run build
npm run preview
```

## Routes
- `/` — 2026 event landing page
- `/about` — About the initiative and Life Skills Journal
- `/events` — 2026 programme and 2025 edition discovery
- `/events/celebrating-education-embracing-the-future-2026` — 2026 event details
- `/events/celebrating-education-2025` — 2025 edition details
- `/careers` — Participation opportunities
- `/contact` — Event contact and enquiry form

## Important
- The 2026 event date, venue, speakers, nominations and award categories are not confirmed in the supplied source. The website preserves those caveats.
- The uploaded event photos are stored in `public/images`.
- Contact form is frontend demo only. It validates input but does not send email or store information until connected to a backend.
- Confirm photo permissions and event details before publishing.
