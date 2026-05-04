# Umair Yaseen — Portfolio (Minimal Edition)

A refined, Apple-inspired clean minimal portfolio built with React + Vite + TypeScript + Tailwind CSS.

Editorial typography (Fraunces serif + Geist sans), warm off-white palette with a single terracotta accent, and meticulous attention to spacing and typography.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (lightning-fast dev server & build)
- **Tailwind CSS** (utility-first styling)
- **CSS animations** (no JS animation libraries)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
portfolio-minimal/
├── src/
│   ├── components/        # All UI components
│   │   ├── Nav.tsx        # Top nav + mobile menu
│   │   ├── Hero.tsx       # Headline section
│   │   ├── Marquee.tsx    # Auto-scrolling skills strip
│   │   ├── Work.tsx       # Projects showcase
│   │   ├── ProjectCard.tsx
│   │   ├── About.tsx      # Bio + skill matrix
│   │   ├── Experience.tsx # Career timeline
│   │   └── Contact.tsx    # Dark contact section
│   ├── hooks/             # Custom React hooks
│   │   ├── useReveal.ts   # Scroll-triggered animations
│   │   └── useScrolled.ts # Scroll position tracking
│   ├── data/              # Content (easy to edit)
│   │   ├── portfolio.tsx  # Bio, skills, experience
│   │   └── projects.tsx   # Project showcase
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css          # Tailwind + custom utilities
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Design System

**Palette**

- `#FBFBFA` — warm off-white background
- `#F4F1EC` — paper accent
- `#0A0A0A` — ink black
- `#D14E2A` — terracotta accent (one and only)

**Typography**

- **Fraunces** — display serif with optical sizing, used for headlines and italic flourishes
- **Geist** — refined sans-serif for body copy
- **Geist Mono** — monospace for labels and section markers

## Responsive Design

- **Mobile-first** approach with progressive enhancement
- Fluid typography using `clamp()` (no overflow at any width)
- Hamburger menu under 768px with full-screen overlay
- Touch targets >= 44px on mobile
- Hover effects gated to `(hover: hover)` devices only
- `prefers-reduced-motion` fully respected
- No horizontal overflow at any viewport width (320px to 1920px+)

## Deployment

After `npm run build`, drop the `dist/` folder onto:
- **Vercel** — `vercel --prod` from project root
- **Netlify** — drag `dist/` to https://app.netlify.com/drop
- **GitHub Pages** — push `dist/` to `gh-pages` branch

## Customization

- **Colors / Theme** — edit `tailwind.config.js`
- **Content** — edit files in `src/data/`
- **Animations** — defined in `tailwind.config.js` keyframes section

---

Built with care · React · Vite · Tailwind CSS
