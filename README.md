# NodeNexus Portfolio — React Source Code

## Folder Structure

```
nodenexus/
├── public/
│   └── index.html
├── src/
│   ├── index.js          ← entry point
│   ├── index.css         ← global tokens, resets, shared styles
│   ├── App.js            ← root component, assembles all sections
│   └── components/
│       ├── Cursor.js / .css        ← custom dot + ring cursor
│       ├── LogoSVG.js              ← reusable brand ring logo
│       ├── Navbar.js / .css        ← fixed nav with scroll-aware bg
│       ├── Hero.js / .css          ← full-height hero + photo + parallax
│       ├── About.js / .css         ← workspace photo + skills section
│       ├── Services.js / .css      ← 6-service grid (React card featured)
│       ├── Projects.js / .css      ← 3 project cards with mockups
│       ├── Pricing.js / .css       ← 3-tier pricing (₹8999 / ₹24999 / ₹49999+)
│       ├── Testimonials.js / .css  ← 3 client review cards
│       ├── Process.js / .css       ← 4-step process timeline
│       ├── CTA.js / .css           ← call-to-action section
│       └── Footer.js / .css        ← footer with nav links
└── package.json
```

## Quick Start

```bash
# 1. Open the nodenexus folder in VS Code

# 2. Install dependencies
npm install

# 3. Start dev server
npm start

# 4. Build for production
npm run build
```

## Customise Before Going Live

| Location              | What to update                              |
|-----------------------|---------------------------------------------|
| `CTA.js`              | Replace `hello@nodenexus.in` with your email |
| `CTA.js`              | Replace `9100000000` with your WhatsApp number |
| `Hero.js`             | `FOUNDER_IMG` — swap base64 or use `import` |
| `About.js`            | `WORKSPACE_IMG` — swap base64 or use `import` |
| `Pricing.js`          | Adjust price points if needed               |
| `Projects.js`         | Add real project links / screenshots        |
| `Testimonials.js`     | Add/edit real client quotes                 |

## Swapping Base64 Images with Files (Optional)

The images are currently embedded as base64 strings in `Hero.js` and `About.js`.
To use actual image files instead:

1. Copy your images into `src/assets/` (e.g. `founder.jpg`, `workspace.jpg`)
2. In `Hero.js`, replace:
   ```js
   const FOUNDER_IMG = "data:image/jpeg;base64,...";
   ```
   with:
   ```js
   import FOUNDER_IMG from '../assets/founder.jpg';
   ```
3. Do the same in `About.js` for `WORKSPACE_IMG`

## Tech Stack

- React 18
- Plain CSS (no Tailwind / styled-components needed)
- Google Fonts — DM Sans
- No external UI library dependencies
