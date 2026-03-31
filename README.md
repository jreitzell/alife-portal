# Alife Knowledge Portal — Deployment Guide

## What This Is
A fully searchable staff knowledge base for Alife Hospitality Group. Contains 22 preloaded documents across SOPs, Training, Recipes, HR, Operations, and Quick Reference.

**Admin password:** `AlifeHG2026` (change this in `src/App.jsx` — search for `ADMIN_PASSWORD`)

---

## Deploy to Vercel (Free — Recommended)

### Option A: Drag & Drop (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign up with your Google or GitHub account.
2. From the Vercel dashboard, click **"Add New..." → "Project"**.
3. Select **"Import from Git Repository"** or use the **CLI method** below.
4. Alternatively, use the **Vercel CLI**:
   ```bash
   npm install -g vercel
   cd alife-portal
   npm install
   vercel
   ```
5. Follow the prompts. Vercel will give you a live URL like `alife-portal.vercel.app`.

### Option B: GitHub → Vercel (Auto-deploys on changes)

1. Create a GitHub account if you don't have one.
2. Create a new repository and upload this entire `alife-portal` folder.
3. Go to [vercel.com](https://vercel.com), click **"Add New Project"**.
4. Connect your GitHub account and select the `alife-portal` repository.
5. Vercel auto-detects Vite and deploys. Done.
6. Every time you push changes to GitHub, Vercel auto-redeploys.

### Custom Domain (Optional)
1. In Vercel, go to your project → **Settings → Domains**.
2. Add your custom domain (e.g., `portal.alifehg.com`).
3. Update your DNS records as Vercel instructs.

---

## Run Locally (For Testing)

```bash
cd alife-portal
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Important Notes

### Storage
- All 22 documents are **baked into the code** — every visitor sees the full library automatically.
- Admin edits (add/edit/delete) are saved to the browser's localStorage.
- This means admin changes are **per-device** — they won't sync across different browsers/computers.

### To Make Admin Edits Sync Across Devices
You would need to add a backend database. Options:
- **Firebase** (free tier) — easiest to add
- **Supabase** (free tier) — PostgreSQL-based
- **Google Sheets as a backend** — simple but limited

For now, the recommended workflow is: **edit the seed documents directly in `src/App.jsx`** and redeploy. This ensures all staff see the same content everywhere.

### Changing the Admin Password
Open `src/App.jsx` and change this line near the top:
```javascript
const ADMIN_PASSWORD = "AlifeHG2026";
```

### Adding New Documents Permanently
To add documents that are visible to everyone (not just localStorage):
1. Open `src/App.jsx`
2. Find the `SEED_DOCS` array
3. Add a new document object following the same format
4. Redeploy to Vercel

---

## Tech Stack
- **React 18** + **Vite 5**
- **Lucide React** for icons
- **Google Fonts** (Bebas Neue + Barlow)
- No backend required for base functionality
