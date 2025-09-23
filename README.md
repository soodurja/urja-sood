# Urja Sood - Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a dark theme with purple/pink accents and showcases my experience, projects, and skills as a Computer Science student at the University of Toronto.

## 🚀 Live Demo

Visit the live portfolio: [https://soodurja.github.io/urja-portfolio/](https://soodurja.github.io/urja-portfolio/)

## ✨ Features

- **Modern Design**: Dark theme with purple/pink gradient accents
- **Responsive**: Fully responsive design that works on all devices
- **Fast Loading**: Built with Vite for optimal performance
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Interactive**: Smooth animations and hover effects
- **Accessible**: WCAG compliant design with proper contrast ratios

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful SVG icons
- **React Router** - Client-side routing

## 📱 Sections

- **Home**: Hero section with contact information and quick skills
- **About**: Detailed bio and technical skills breakdown
- **Experience**: Professional experience timeline
- **Projects**: Portfolio of technical projects with GitHub links
- **Education**: Academic background and achievements
- **Volunteering**: Community service and leadership experience
- **Contact**: Contact form and social links
- **Resume**: Downloadable PDF resume

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Fork or clone this repository**
2. **Update the base path** in `vite.config.ts`:
   ```ts
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   });
   ```
3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Select "GitHub Actions" as the source
4. **Push to main branch** - The GitHub Action will automatically build and deploy

### Manual Deployment:

```bash
# Build the project
npm run build

# Deploy to gh-pages branch (if using gh-pages package)
npm run deploy
```

## 🧑‍💻 Local Development

### Prerequisites

- Node.js 18+ and npm installed
- [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Setup

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd urja-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

## 🎨 Customization

### Colors and Theme

The design system is defined in `src/index.css` with CSS custom properties:

```css
:root {
  --purple: 280 100% 70%;
  --pink: 310 100% 65%;
  --gradient-primary: linear-gradient(135deg, hsl(var(--purple)), hsl(var(--pink)));
  /* ... more variables */
}
```

### Content

All content is stored in JSON files in `src/data/`:
- `personal.json` - Personal information and bio
- `experience.json` - Work experience
- `projects.json` - Technical projects
- `education.json` - Educational background
- `volunteering.json` - Community service

## 📂 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── Layout.tsx       # Main layout wrapper
│   └── Navbar.tsx       # Navigation component
├── data/                # JSON data files
├── pages/               # Page components
├── assets/              # Images and static files
├── hooks/               # Custom React hooks
└── lib/                 # Utility functions
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Urja Sood**
- Email: urja.sood@mail.utoronto.ca
- LinkedIn: [linkedin.com/in/urja-sood](https://www.linkedin.com/in/urja-sood/)
- GitHub: [github.com/soodurja](https://github.com/soodurja)

---

⭐ If you found this portfolio helpful, please give it a star!
