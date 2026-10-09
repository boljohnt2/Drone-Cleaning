# TDrone — tdrone.co.il

Next.js (App Router) rebuild of the TDrone marketing site, redesigned against the
Apple "white gallery" style reference in [`design/DESIGN.md`](design/DESIGN.md).

All copy is the original Hebrew from tdrone.co.il — only the presentation changed.
The document is `lang="he" dir="rtl"`.

## Stack

- **Next.js 15** (App Router, React 19, TypeScript)
- **Plain CSS** in `app/globals.css`, driven entirely by the design tokens from
  `design/variables.css` — colours, type scale, spacing, radii and the two
  hairline "shadow" outlines
- **Heebo**, self-hosted via `@fontsource-variable/heebo` (no Google Fonts call at
  build or runtime), with the SF Pro stack as the Latin fallback
- `next/image` for all photography, `public/hero.mp4` for the hero stage

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Structure

```
app/
  layout.tsx          # <html lang="he" dir="rtl">, metadata, font, scroll-reveal
  page.tsx            # section composition
  globals.css         # design tokens + every component style
  api/quote/route.ts  # contact form endpoint (validates + logs)
components/           # GlobalBar, LocalNav, Hero, Services, Why, Process,
                      # Checklist, Contact, Footer, Icons, RevealOnScroll
lib/content.ts        # all Hebrew copy, in one place
public/               # logo, hero video, service photography
design/               # DESIGN.md, tokens.json, theme.css, variables.css,
                      # and the original-site screenshot for reference
```

## Design rules being followed

Taken straight from `design/DESIGN.md`:

- `#ffffff` is the default canvas; `#f5f5f7` is reserved for full-width feature
  bands and the footer
- 28px radius on feature cards and contained media, and those cards are
  **shadowless** — separation comes from `0 0 0 1px` hairline outlines
- `#0071e3` only for compact filled conversion pills; `#0066cc` only for inline
  and section text links
- `#b64400` only as bare text for the small status label — never a coloured pill
- No gradients anywhere; the photography supplies the colour
- 90px between major storytelling sections, 20px between related elements

## Contact form

`POST /api/quote` currently validates the required fields and logs the payload.
Wire it to your CRM or an email provider (Resend, SendGrid, …) in
`app/api/quote/route.ts` — the client already handles the success state.

## Deployment

Zero-config on Vercel: it detects Next.js, runs `npm run build`, and serves it.
No environment variables are required.
