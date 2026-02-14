# Medicaid Pathways — Ready-to-run template

This is a Next.js (App Router) + TypeScript + Tailwind template for the Medicaid Pathways marketing site.

## Quick start

1) Install dependencies

```bash
npm install
```

2) Create your env file

```bash
cp .env.example .env.local
```

3) Run locally

```bash
npm run dev
```

Open http://localhost:3000

## What’s included

- Homepage: `/`
- Pathway pages (6): `/pathways/<slug>/`
- Deeper pages (6, noindex): `/pathways/<slug>/deeper/`
- CTA destination page + contact form: `/talk/`
- Legal pages: `/disclaimer/`, `/privacy/`, `/terms/`
- Sitemap: `/sitemap/`
- Contact form endpoint: `POST /api/contact`

## Replace placeholder YouTube video IDs

Edit:

`app/(site)/pathways/[slug]/page.tsx`

Replace each entry in `VIDEO_IDS` with the real YouTube video ID for that pathway.

## Contact form setup (recommended)

### Cloudflare Turnstile
Create a Turnstile widget and add keys to `.env.local`:

- `TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`

The client widget is integrated as an invisible Turnstile and will provide a token automatically.

### Resend
Create a Resend account, verify your sending domain, and set:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL` (example: `no-reply@medicaidpathways.com`)

Emails send to:

- `CONTACT_TO_EMAIL` (defaults to `relations@thehalelawfirm.com`)

## Deploy to Vercel

- Push this repo to GitHub
- Import it in Vercel
- Add the env vars in Vercel project settings
- Add the domain `medicaidpathways.com`

### GoDaddy DNS
When Vercel prompts for DNS changes, apply the provided records in GoDaddy DNS for the domain.

## Notes

- Rate limiting is best-effort in-memory (per serverless instance). If you want stronger guarantees, swap to a managed store (Upstash Redis, etc.).
- Layer 2 pages are set to `noindex,follow` by default.
