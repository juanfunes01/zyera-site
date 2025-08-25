# Zyera AI — Static Website (Free Hosting Ready)

This folder contains a **static site** you can deploy **for free** on GitHub Pages, Cloudflare Pages, Vercel or Netlify.

## Files
- `index.html` — the page
- `styles.css` — styles (gold + cyan theme, wavy background)
- `script.js` — language switcher (EN / ES / DE)
- `assets/` — SVG logo arc, hero portal, background waves, icons

## Run locally
Just open `index.html` in your browser. No build step needed.

## Deploy (GitHub Pages — totally free)
1. Create a GitHub account (if you don't have one).
2. New repository → name it: `zyera-site` (or anything).
3. Upload all files in this folder (drag & drop).
4. Go to **Settings → Pages** → Build and deployment: **Deploy from a branch** → Branch: **main** `/ (root)` → Save.
5. Your site goes live at: `https://<your-username>.github.io/<repo>/`.

### Custom domain
- Buy `zyera.ai` (Namecheap/Cloudflare/GoDaddy).
- In GitHub Pages, set your custom domain under **Settings → Pages**.
- Add DNS **CNAME** to `<your-username>.github.io` (and `A` records only if needed).
- HTTPS will be issued automatically.

## Deploy (Cloudflare Pages — also free, global CDN)
1. Create a Cloudflare account → **Pages** → **Create a project**.
2. Connect your GitHub repo and deploy (no build step).
3. Add your custom domain → Cloudflare suggests DNS records automatically.
4. Optional: Email routing to forward `hello@zyera.ai` to Gmail (free).

## Forms & Email
- Currently the **contact form** uses a `mailto:` action (simple). 
- For production, plug in **Formspree** (free tier) or **Netlify Forms** (if using Netlify).

## Editing copy / languages
- All strings live in `script.js` under the `i18n` object (EN/ES/DE).
- The language switch stores preference in `localStorage`.

Enjoy 🚀
