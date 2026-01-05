# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Astro 5, React, and Tailwind CSS. The site showcases professional experience, projects, and technical skills with a responsive design and dark mode support.

## Tech Stack

- **Framework**: Astro 5.3.0 (SSG with file-based routing)
- **UI Libraries**: React 18.3.1, Tailwind CSS 3.4, Flowbite
- **Integrations**: Sentry (error monitoring), Spotlight.js (dev debugging)
- **Icons**: Iconify with multiple icon sets (@iconify/tailwind)
- **Language**: TypeScript (strict mode)

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro check    # Type checking
npm run astro ...      # Other Astro CLI commands
```

## Architecture

### Directory Structure

- `src/pages/` - File-based routing (each `.astro` file becomes a route)
  - `index.astro` - Home page with sections: introduction, technologies, projects, experience
  - `profile.astro` - Profile page
  - `project/[slug].astro` - Dynamic route for individual project pages (SSG)
- `src/components/` - Reusable components
  - `index/` - Home page sections (introduction, tecnologies, experience, projects)
  - `aside/` - Navigation menu components (Profile, AsideMenu, MenuItem)
  - `react/` - React components (Typing, HtmlDisplay, Quote, Menu)
- `src/layouts/` - Layout templates
  - `Layout.astro` - Main layout with responsive grid (aside/main/footer)
- `src/lib/` - Data and utilities
  - `projects.ts` - Project data with types
  - `experience.ts` - Work experience data
  - `tech.ts` - Technologies list
  - `menu.ts` - Menu items
  - `quotes.ts` - Quotes data
  - `link-tree.ts` - Link tree data
- `public/` - Static assets served as-is

### Key Patterns

**Path Aliases**: TypeScript path aliases are configured for cleaner imports:
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@lib/*` → `src/lib/*`

**Hybrid Architecture**: Astro components (`.astro`) for static content, React components (`.tsx`) for interactive UI (e.g., typing animations, dynamic HTML rendering).

**Responsive Layout**: The main layout uses CSS Grid with `grid-template-areas` for responsive design. Menu toggles between overlay (mobile) and sidebar (desktop ≥768px).

**Styling**: Tailwind CSS with custom plugins (Iconify, Flowbite, tailwindcss-animated). Dark mode supported via `dark:` variants.

**Dynamic Routes**: Projects use Astro's static paths generation (`getStaticPaths`) to create individual pages from data in `projects.ts`.

**View Transitions**: Astro's built-in view transitions enabled for smooth page navigation.

## Data Management

All content (projects, experience, technologies, quotes) is managed through TypeScript files in `src/lib/`. To add/edit content:

1. Modify the relevant file in `src/lib/`
2. Follow the TypeScript type definitions for data structure
3. For projects: add slug, name, image, description, and optional link/repository/technologies
4. Images are referenced from `public/images/` or external URLs

## Icon Usage

Icons use Iconify with Tailwind integration:
```html
<span class="icon-[collection--icon-name]" />
```

Available icon collections include: mdi, ph, solar, tabler, akar-icons, simple-icons, and more (see devDependencies in package.json).

## Configuration Files

- `astro.config.mjs` - Astro configuration with integrations (Tailwind, React, Sentry, Spotlight)
- `tailwind.config.mjs` - Tailwind with Flowbite and Iconify plugins
- `tsconfig.json` - TypeScript with strict mode and path aliases
- `.editorconfig` - Editor configuration for consistent formatting
