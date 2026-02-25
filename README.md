# Preflight Landing Page

Marketing landing page for Payment Preflight - a pre-execution risk and compliance engine for payments.

## Features

- Modern, responsive design
- SEO-optimized with Next.js 14
- Fast static generation
- All key sections: Hero, Problem, Solution, Product Loop, Integration, Who it's for, CTA

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or [http://localhost:3001](http://localhost:3001) if 3000 is in use) to view the landing page.

### If the dev server hangs on "Starting..."

- Clear the build cache and restart: `Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue` then `npm run dev`.
- The project uses Turbopack (`next dev --turbo`) for faster startup. To use the classic bundler: `npm run dev:webpack`.

### EPERM on `.next\trace` (Windows)

The error is usually Windows file-lock/permission interference (AV, indexing, OneDrive sync, or a stuck Node process). The page can still load. To reduce or avoid it:

- **Close** any running Next dev servers and Node processes before building.
- **Delete `.next/` manually** (File Explorer) if the clean script can’t remove it.
- **Avoid OneDrive-synced directories** for the repo; use a local folder (e.g. `C:\dev\Preflight-landing`).
- **Add exclusions** for the repo folder in Windows Defender / AV and any file-indexing tool.
- **If it persists**, run `npm run build` from WSL; that often eliminates the issue.

You can also: run only one dev server at a time; add the project folder to Windows Defender exclusions (**Windows Security → Virus & threat protection → Manage settings → Exclusions**); or enable **Windows Developer Mode** (Settings → Privacy & security → For developers).

### "Cannot find module './vendor-chunks/next.js'" or clean fails with EPERM

1. **Stop the dev server** (Ctrl+C in the terminal).
2. **Close all other terminals** that might be using this project.
3. **Delete the `.next` folder manually**: open File Explorer, go to the project folder (`Preflight-landing`), delete the `.next` folder. If Windows says a file is in use, close Cursor/VS Code and any Node processes, then try again.
4. In a new terminal run: `npm run dev`.

Use **only** `npm run dev` (Turbopack). Avoid `npm run dev:webpack` unless you run `npm run clean` and delete `.next` before switching back to `npm run dev`.

## Deployment

This project is ready to deploy on Vercel or Cloudflare Pages.

### Vercel

```bash
vercel
```

### Cloudflare Pages

Connect your repository to Cloudflare Pages and it will automatically build and deploy.

### Cloudflare (if using Cloudflare in front of the site)

- **Email Address Obfuscation:** Turn this **off** for preflightpayments.com. The landing page uses clear `mailto:` links (demo, simulator, early-access); obfuscation fills the HTML with `/_cdn-cgi/l/email-protection#...` and can make the source look noisy. Deliverability and clarity are preferred here; you can add a contact form later if needed.
- In Cloudflare Dashboard: **Scrape Shield** → **Email Address Obfuscation** → **Off** for this zone.

## SEO & measurement

- **Sitemap:** `/sitemap.xml` is generated automatically; all reference pages are included.
- **robots.txt:** Allows all crawlers and references the sitemap (see `app/robots.ts`).
- **Google Search Console (GSC):** Over 2–3 weeks, expect “Discovered – currently not indexed” to trend down as pages get indexed. Early queries may include: r01, r02, pacs.002, acsp, acsc, swift nack. If pages are indexed but get zero impressions, consider tightening titles/descriptions to match query language.

**Local SEO checks (before deploy):** After `npm run build && npm run start`, run `npm run seo-check` in another terminal. Use `BASE_URL=https://preflightpayments.com npm run seo-check` to check production. Validates sitemap, robots.txt, canonicals, meta, JSON-LD, and that all sitemap URLs return 200.

## Customization

Update the following to customize:
- Email addresses in `components/FinalCTA.tsx`
- Swagger UI URL in `components/Hero.tsx`
- Colors in `tailwind.config.ts`
- Content in individual component files
