# Welcome to America Services — Website

A modern, accessible Next.js 14 website for Welcome to America Services, replacing the previous Wix site.

---

## Tech Stack

- **Next.js 14** — App Router, TypeScript
- **Tailwind CSS** — utility-first styling with custom brand palette
- **Google Fonts** — Playfair Display (headings) + Source Sans 3 (body)
- **Vercel** — zero-config deployment

---

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production build locally
npm start
```

Requires **Node.js 18+**.

---

## Deploying to Vercel

### Option A — GitHub (recommended)
1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Every push to `main` auto-deploys

### Option B — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Custom Domain
In Vercel dashboard → your project → **Settings → Domains** → add `welcometoamericaservices.com`

---

## How the Client Updates Content

All page content lives directly in the TypeScript files under `/app/`. Here's what to edit:

### Page Content
Each page is a file in `/app/<page-name>/page.tsx`.

For example, to update the **About Us** text:
1. Open `app/about/page.tsx`
2. Find the text you want to change
3. Edit and save — Vercel auto-deploys on push

### Phone Numbers
Search the codebase for `8449826374` to find all instances. They're `tel:` links.

### Adding a New Location
Edit `app/locations/page.tsx` — add a new entry to the locations list.

### Adding/Updating Services (Home page)
Edit the `services` array at the top of `app/page.tsx`.

---

## Site Structure

```
/                   → Home
/about              → About Us (bilingual)
/immigration        → U.S. Citizenship & Immigration Services
  /green-card       → Green Card
  /fee-waiver       → Fee Waiver
  /citizenship-classes     → Citizenship Classes (English)
  /clases-de-ciudadania    → Clases de Ciudadanía (Spanish)
/community-health   → Community Health Worker
/medi-cal           → Medi-Cal Overview
  /medicare         → Medicare
  /covered-ca       → Covered California
/locations          → Locations & Contact
/quick-links        → Resource Links
/disclaimer         → Disclaimer
/privacy-policy     → Privacy Policy
```

---

## Future Improvements

- **CMS integration** — Add [Sanity](https://sanity.io) or [Contentlayer](https://contentlayer.dev) so the client can edit content in a dashboard without touching code
- **Staff photos** — Replace emoji placeholders with actual team photos in `/public/team/`
- **Logo** — Add logo SVG/PNG to `/public/logo.png` and update Navbar
- **Locations map** — Integrate Google Maps when addresses are confirmed
- **Appointment booking** — Update the `APPOINTMENTS` button href in `components/PageCTAButtons.tsx` with the real Calendly or scheduling URL
- **Payment link** — Update the `MAKE A PAYMENT` button href in `components/PageCTAButtons.tsx` with the real payment processor URL
- **Analytics** — Add Vercel Analytics or Plausible for privacy-friendly tracking

---

## Brand Colors

| Name | Hex | Use |
|------|-----|-----|
| Navy | `#1B3A6B` | Primary — headers, nav, trust |
| Terracotta | `#D4622A` | Accent — CTAs, warmth |
| Sage | `#4A7C59` | Secondary — health, community |
| Cream | `#FAF8F4` | Background |
| Ink | `#1A1A1A` | Body text |

---

*Built with ❤️ for the community.*
