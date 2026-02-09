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

The page can still load. To reduce or avoid the error:

- Run only one dev server for this project at a time.
- Add the project folder to Windows Defender exclusions: **Windows Security → Virus & threat protection → Manage settings → Exclusions**.
- Or enable **Windows Developer Mode** (Settings → Privacy & security → For developers).

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

## Customization

Update the following to customize:
- Email addresses in `components/FinalCTA.tsx`
- Swagger UI URL in `components/Hero.tsx`
- Colors in `tailwind.config.ts`
- Content in individual component files
