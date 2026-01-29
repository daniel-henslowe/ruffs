# Ruffs 🐕

Premium dog boarding & daycare website built with Next.js.

**Live Site:** https://daniel-henslowe.github.io/ruffs/

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwindcss)

## Overview

Ruffs is a modern, responsive website for a fictional premium dog boarding company. The site showcases services, builds trust through testimonials, and allows customers to book stays for their pets.

## Features

- **Hero Section** - Animated introduction with trust badges and call-to-action
- **Services** - 6 service offerings with pricing (boarding, daycare, grooming, etc.)
- **About** - Company story with team statistics
- **Testimonials** - Customer reviews with star ratings
- **Booking Form** - Complete booking system with form validation
- **Contact** - Location, hours, and contact form
- **Responsive Design** - Mobile-first, works on all devices
- **Smooth Animations** - Framer Motion powered transitions

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

## Getting Started

```bash
# Clone the repo
git clone https://github.com/daniel-henslowe/ruffs.git
cd ruffs

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open http://localhost:3000/ruffs to view the site locally.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── header.tsx      # Navigation with mobile menu
│   ├── hero.tsx        # Hero section
│   ├── services.tsx    # Services grid
│   ├── about.tsx       # About section
│   ├── testimonials.tsx # Customer reviews
│   ├── booking.tsx     # Booking form
│   ├── contact.tsx     # Contact info & form
│   └── footer.tsx      # Footer with links
└── lib/
    └── utils.ts        # Utility functions
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to `main`. The deployment workflow:

1. Builds the Next.js app with static export
2. Uploads the `out` directory as an artifact
3. Deploys to GitHub Pages

## License

MIT
