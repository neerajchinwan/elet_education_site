# Going live on Vercel

This guide sets up everything the live website needs:

| Feature | Page | Needs |
|---|---|---|
| Contact form emails | `/contact` | GoDaddy email settings |
| Verified nominations | `/awards-2026` | GoDaddy email settings + Google Client ID |
| Public voting | `/vote` | Google Client ID + Upstash Redis |
| Voting results (organisers only) | `/vote/results` | Upstash Redis + results password |

All emails are **sent from and received at `programs@lifeskillsjournal.in`** (GoDaddy Professional Email).
Replying to a form email replies directly to the person who filled in the form.

> **Never put passwords in this file or anywhere else in the code.** They live only in
> `.env.local` on your computer (ignored by git) and in Vercel's Environment Variables.

---

## Step 1 — Find your live website address

1. Open <https://vercel.com/dashboard> and click the project.
2. **Settings** tab → **Domains** (left menu).
3. Note every address, e.g. `your-project.vercel.app` and `lifeskillsjournal.in` / `www.lifeskillsjournal.in`.

---

## Step 2 — Create the Google Client ID (for nomination + voting sign-in)

### 2a. Project
1. Open <https://console.cloud.google.com/> and sign in.
2. Top bar → **project dropdown** → **New Project** → name `Celebrating Education` → **Create**.
3. Select the new project in the project dropdown.

### 2b. Consent screen
1. **☰ menu** → **APIs & Services** → **OAuth consent screen** → **Get started**.
2. App name `Celebrating Education`, user support email = your email → **Next**.
3. Audience **External** → **Next** → contact email → **Next** → tick **I agree** → **Create**.
4. Left menu **Audience** → under *Publishing status* click **Publish app** → **Confirm**.
   (If it stays on *Testing*, only manually added test users can sign in.)
5. Do **not** upload a logo under *Branding* — that triggers a Google review.

### 2c. Client ID
1. Left menu **Clients** → **+ Create client** → type **Web application** → name `Website`.
2. **Authorized JavaScript origins** → **+ Add URI** for each:
   - `http://localhost`
   - `http://localhost:5173`
   - `https://your-project.vercel.app`
   - `https://lifeskillsjournal.in` and `https://www.lifeskillsjournal.in` (if used)

   No trailing `/`, no path.
3. Leave *Authorized redirect URIs* empty → **Create**.
4. Copy the **Client ID** (ends with `.apps.googleusercontent.com`). The client secret is not needed.

New origins can take 5 minutes to a few hours to start working.

---

## Step 3 — Create the vote storage (Upstash Redis)

1. Vercel project → **Storage** tab → **Create Database**.
2. Choose **Upstash** → **Upstash for Redis** → **Continue**.
3. Plan **Free**, region **Mumbai (ap-south-1)**, name `ce-votes` → **Create**.
4. In **Connect Project**: select this project, tick **Production**, **Preview**, **Development**, leave the prefix as it is → **Connect**.
5. Check **Settings → Environment Variables**: `KV_REST_API_URL` and `KV_REST_API_TOKEN` should now exist
   (`UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` also work).

---

## Step 4 — Add the environment variables

Vercel project → **Settings** → **Environment Variables**. For each row: enter **Key** and **Value**,
tick **Production** and **Preview**, then **Save**. Copy the values from `.env.local` on your computer.

| Key | Value | Notes |
|---|---|---|
| `CONTACT_RECEIVER` | `programs@lifeskillsjournal.in` | Inbox that receives all form emails |
| `SMTP_HOST` | `smtpout.secureserver.net` | GoDaddy outgoing mail server |
| `SMTP_PORT` | `465` | |
| `SMTP_USER` | `programs@lifeskillsjournal.in` | |
| `SMTP_PASS` | *the mailbox password, from `.env.local`* | Tick **Sensitive**. Paste without quotes. |
| `VITE_GOOGLE_CLIENT_ID` | *Client ID from Step 2c* | |
| `VOTING_ADMIN_PASSWORD` | *a strong password you choose* | Needed to open `/vote/results` |

`GMAIL_USER` / `GMAIL_APP_PASSWORD` are **not needed** on Vercel — once `SMTP_PASS` is set, the GoDaddy
mailbox is used. If you added them earlier you can delete them.

If you change any variable later, you must **redeploy** (Step 5.3) for it to take effect.

---

## Step 5 — Push the code and deploy

1. In the project folder:

   ```
   git add .
   git commit -m "Go live: GoDaddy email, verified nominations and voting"
   git push
   ```

   Run `git status` first — `.env.local` must **not** be listed (it is ignored on purpose).
2. Vercel deploys automatically. **Deployments** tab → wait for the newest one to show **Ready**.
3. If you added environment variables after that deployment started: open the newest deployment →
   **⋯** (top right) → **Redeploy** → **Redeploy**.

---

## Step 6 — Test the live site

| Open | Expected |
|---|---|
| `/contact` | Submit an enquiry → "Thank you for your enquiry". Email arrives in the `programs@` inbox within ~1 minute. |
| `/awards-2026` | "Continue with Google" → form appears → submit → email arrives in `programs@`. |
| `/vote` | "Nominees will be announced soon" (until Step 7). |
| `/vote/results` | Enter `VOTING_ADMIN_PASSWORD` → dashboard opens. |

Check the GoDaddy inbox at <https://email.secureserver.net> (or **My Products → Email & Office → Sign In**).

---

## Step 7 — Add nominees for voting

1. Put photos in `public/images/nominees/` (square, about 400×400, e.g. `alka-kapur.jpg`).
2. Edit `src/data/voting2026.js` and fill the category lists:

   ```js
   B1: [
     { id: 'alka-kapur', name: 'Dr. Alka Kapur', detail: 'Principal, Modern Public School, Delhi', photo: '/images/nominees/alka-kapur.jpg' },
     { id: 'sheba-thapar', name: 'Sheba Thapar', detail: 'School Leader, Gurugram' },
   ],
   ```

   | Code | Category | Code | Category |
   |---|---|---|---|
   | A1 | School of the Year 2026 | B4 | Emerging Education Leader |
   | A2 | Innovative Curriculum Award | B5 | Woman Education Leader of the Year |
   | A3 | Inclusive Education Award | C1 | CSR Leader of the Year 2026 |
   | A4 | Green School / Sustainability Award | C2 | DEI Champion Award |
   | A5 | Digital Transformation in Education Award | C3 | Global Impact Leader Award |
   | B1 | School Leader of the Year 2026 | C4 | Technology for Good Award |
   | B2 | Education Leader of the Year 2026 | C5 | Best CSR-Education Collaboration Award |
   | B3 | Lifetime Achievement in Education | | |

   - `id`: short, lowercase, hyphens, unique within the category.
   - **Never change an `id` or remove a nominee after voting starts** — their votes would stop counting.
   - `photo` is optional (initials are shown instead). Empty categories (`[]`) are hidden.
3. Commit and push. Voting is live when the deployment shows **Ready**.

## Step 8 — Close voting

In `src/data/voting2026.js` set `export const votingOpen = false`, then commit and push.
Results and the CSV download on `/vote/results` keep working.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Form says "Unable to send your message" | Vercel → project → **Logs** → look for `Contact email failed`. Usually a wrong `SMTP_PASS`; re-enter it and redeploy. |
| No email arrives | Check the **Spam/Junk** folder of `programs@`. Check `CONTACT_RECEIVER` is correct. |
| "Google sign-in is not configured yet" | `VITE_GOOGLE_CLIENT_ID` missing, or not redeployed after adding it. |
| Google error `origin_mismatch` | Add the exact site address to *Authorized JavaScript origins* (Step 2c) and wait ~5 minutes. |
| "Voting is not available right now" | Upstash not connected (Step 3) or `VITE_GOOGLE_CLIENT_ID` missing. Redeploy after fixing. |
| "Results are not configured yet" | `VOTING_ADMIN_PASSWORD` missing. |
| GoDaddy password changed | Update `SMTP_PASS` in `.env.local` **and** in Vercel, then redeploy. |

## Running locally

```
npm install
npm run dev
```

Open <http://localhost:5173>. The `api/` functions run inside the dev server and read `.env.local`.
Leave `KV_REST_API_URL` / `KV_REST_API_TOKEN` empty locally — test votes are then kept in memory
instead of going into the live database.
