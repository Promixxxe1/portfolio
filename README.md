# Atrium Portfolio

A completely original portfolio website — editorial, gallery-inspired design built with React and Vite.

**Not a clone.** This project uses the same *content purpose* as a reference portfolio (hero, about, work, services, timeline, contact) but with an entirely new visual identity, layout system, and component architecture.

## Design Identity

| Element | Choice |
|---------|--------|
| Aesthetic | Editorial / architectural gallery |
| Palette | Warm parchment, terracotta accent, sage green |
| Typography | Cormorant Garamond (display) + Outfit (body) |
| Navigation | Vertical side rail (desktop) + bottom dots (mobile) |
| Projects | Horizontal scroll gallery, not a grid |
| Motion | Scroll reveals, marquee ribbon, subtle hovers |

## Quick Start

```bash
cd atrium-portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Contact Form (EmailJS)

1. Copy `.env.example` to `.env`
2. Add your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Build for Production

```bash
npm run build
npm run preview
```

Deploy the `dist` folder to Vercel, Netlify, or GitHub Pages.

## Project Structure

```
src/
├── components/
│   ├── layout/     # Prelude, SideNav, Footer
│   ├── sections/   # Hero, About, Work, Craft, Journey, Voices, Connect
│   └── ui/         # Reveal, Toast
├── data/           # All content in one place — edit here
├── styles/         # Global design tokens
└── App.jsx
```

## Customize Content

Edit `src/data/content.js` to update your name, projects, skills, timeline, and contact info.

## License

MIT
