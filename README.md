# Riya George — AI Engineer Portfolio

A personal portfolio website built with **React**, **Vite**, and **CSS**, deployed to GitHub Pages.

The site showcases my work in AI engineering, including agentic systems, voice AI, production infrastructure, and related projects.

## 🏗️ Architecture

### Tech Stack
- **React 18** — UI components and routing
- **React Router v6** — Client-side routing
- **Vite** — Fast build tool and dev server
- **CSS** — Custom styling with CSS variables for theme support
- **GitHub Pages** — Static hosting

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation with theme toggle
│   ├── Footer.jsx      # Footer with links
│   ├── ScrollToTop.jsx # Scroll-to-top button
│   ├── PageHeader.jsx  # Page title sections
│   ├── ProjectCard.jsx # Project card display
│   ├── SkillCard.jsx   # Skill category cards
│   └── ...
├── pages/               # Page components
│   ├── Home.jsx        # Hero, featured work, CTA
│   ├── About.jsx       # About me
│   ├── Experience.jsx  # Work timeline
│   ├── Projects.jsx    # All projects
│   ├── ProjectDetail.jsx # Individual project
│   ├── Skills.jsx      # Skills by category
│   ├── Credentials.jsx # Certs & education
│   ├── Resume.jsx      # Resume download
│   ├── Contact.jsx     # Contact information
│   └── NotFound.jsx    # 404 page
├── data/                # Content data
│   ├── site.js         # Site config, nav links
│   ├── projects.js     # Project data
│   ├── experience.js   # Experience timeline
│   ├── skills.js       # Skills by category
│   └── credentials.js  # Certs, awards, education
├── hooks/               # React hooks
│   └── useReveal.js    # Scroll reveal animation
├── styles/              # CSS files
│   ├── style.css       # Core styles, typography, layout
│   ├── components.css  # Component-specific styles
│   └── responsive.css  # Responsive breakpoints
├── App.jsx             # Main app component with routing
└── main.jsx            # React DOM entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ (or 18+ recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/riyageorgek/riyageorgek.github.io.git
cd riyageorgek.github.io

# Install dependencies
npm install
```

### Development
```bash
# Start dev server (http://localhost:5173)
npm run dev
```

The dev server hot-reloads as you edit files.

### Production Build
```bash
# Build for production
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Preview Production Build
```bash
# Test the production build locally
npm run preview
```

## 📝 Content Management

### Update Your Information

**Site Config** (`src/data/site.js`):
- Name, title
- Social links (GitHub, LinkedIn, etc.)
- Navigation links

```javascript
export const SITE = {
  name: 'Riya George',
  title: 'AI Engineer',
  linkedin: 'https://www.linkedin.com/in/riyageorgek',
  github: 'https://github.com/riyageorgek',
  // ... more fields
};
```

### Update Projects

Edit `src/data/projects.js` to add/modify projects:

```javascript
{
  id: 'project-id',
  num: '01',
  category: 'AI',
  title: 'Project Title',
  shortDesc: 'Brief description...',
  technologies: ['Tech1', 'Tech2'],
  // ... more fields
}
```

Each project automatically gets:
- A card on `/projects`
- A detail page at `/projects/:id`
- Related projects links

### Update Experience

Edit `src/data/experience.js`:

```javascript
{
  id: 'role-id',
  role: 'AI Engineer',
  company: 'Company Name',
  period: 'Aug 2024 — Present',
  description: 'What I did...',
  highlights: ['Achievement 1', 'Achievement 2'],
  technologies: ['Tech1', 'Tech2'],
}
```

### Update Skills

Edit `src/data/skills.js` to add/modify skill categories:

```javascript
{
  num: '01',
  category: 'AI & Agentic Systems',
  items: [
    { label: 'Amazon Bedrock', variant: 'primary' },
    { label: 'Skill Name' },
  ]
}
```

### Update Credentials

Edit `src/data/credentials.js` to update:
- Certifications by category
- Education entries
- Award/recognition

### Update Resume

Replace `public/Riya-George-Resume.pdf` with your resume PDF. The file is linked from `/resume` and the home page.

## 🎨 Styling & Customization

### CSS Variables

Core design tokens are defined in `src/styles/style.css`:

```css
:root {
  --bg-primary: #07111F;
  --text-primary: #EDF4FF;
  --accent-blue: #3B8BEB;
  --accent-violet: #7C6EF5;
  /* ... more variables */
}
```

Modify these to change the entire site's appearance.

### Responsive Design

Breakpoints in `src/styles/responsive.css`:
- **1200px** — Large desktop
- **1024px** — Laptop (nav collapses to mobile menu)
- **768px** — Tablet
- **480px** — Mobile

The site is mobile-first and fully responsive.

### Theme Toggle

Theme preference is stored in localStorage (`rg-theme`). Users can toggle between dark and light themes using the button in the navbar.

## 🔗 Routing

Client-side routes (no backend needed):

```
/                — Home
/about           — About page
/experience      — Experience timeline
/projects        — All projects
/projects/:id    — Project detail
/skills          — Skills by category
/credentials     — Credentials & education
/resume          — Resume download
/contact         — Contact information
```

Direct navigation and page reloads work because Vite handles routing through `index.html`.

## 🚢 Deployment to GitHub Pages

### Automatic Deployment (GitHub Actions)

The site includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
1. Triggers on push to `main`
2. Builds the React app with Vite
3. Deploys `dist/` to GitHub Pages

**Setup:**
1. Ensure `vite.config.js` has `base: '/'`
2. Push to `main` branch
3. GitHub Actions builds and deploys automatically
4. Site is live at `https://riyageorgek.github.io/`

### Manual Deployment

If not using GitHub Actions:

```bash
# Build the production bundle
npm run build

# The dist/ folder is ready to deploy
# Commit and push to main, or use a deploy script
```

### Troubleshooting GitHub Pages

- **CSS/JS not loading**: Check `vite.config.js` `base` setting
- **Routes not working**: GitHub Pages serves `index.html` for all routes (configured in Vite)
- **Assets not found**: Ensure image/resume paths are relative (`/assets/...`)

## 📱 Features

- ✅ **Fully Responsive** — Works on desktop, tablet, mobile
- ✅ **Dark/Light Theme** — Toggle with button in navbar
- ✅ **Scroll Reveal Animations** — Elements fade in on scroll
- ✅ **Mobile Navigation** — Hamburger menu on small screens
- ✅ **Active Nav Highlighting** — Shows current page
- ✅ **Smooth Scrolling** — Browser-native smooth scroll
- ✅ **Semantic HTML** — Accessible markup
- ✅ **SEO-Ready** — Per-page titles and descriptions
- ✅ **Fast Loading** — Optimized with Vite
- ✅ **No External Dependencies** — Just React and React Router

## 🔧 Development

### Key Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### Code Style

- Components use functional components and hooks
- Data is separated from presentation
- CSS is organized by component and responsive breakpoint
- JSX follows standard React conventions

## 🎯 Future Enhancements

Possible additions:
- Blog section (using data-driven approach)
- Search functionality
- Dynamic theme customization UI
- Animation library integration
- Newsletter signup
- Analytics integration

All can be added without breaking the existing architecture.

## 📄 License

This site is my personal portfolio. Feel free to use it as a template, but please:
- Replace my content with your own
- Update the site config in `src/data/site.js`
- Credit the original design if you fork publicly

## 👋 Contact

Have questions about the site or the architecture? Feel free to reach out:
- LinkedIn: [riyageorgek](https://www.linkedin.com/in/riyageorgek)
- GitHub: [@riyageorgek](https://github.com/riyageorgek)

---

Built with React + Vite. Designed for maintainability and ease of content updates.
