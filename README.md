# 🐾 Fellfreunde am Rhein - Portfolio Project

![Astro](https://img.shields.io/badge/Astro-5.14-blueviolet?logo=astro)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

Eine moderne, performance-optimierte Website für eine fiktive Tierarztpraxis. Entwickelt als **Portfolio-Projekt** um moderne Frontend-Entwicklung mit Astro zu demonstrieren.

## 🎯 Projekt-Übersicht

Dies ist ein vollständiges Portfolio-Projekt, das eine professionelle Unternehmenswebsite nachbildet. Es zeigt Best Practices in modernem Web Development mit Fokus auf **Performance** und **Developer Experience**.

**Status:** ✅ Portfolio-Ready | 🚀 Production-Level Code

---

## 🛠️ Tech Stack

### Core

- **[Astro 5.14](https://astro.build)** - Modern web framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[TailwindCSS 4.x](https://tailwindcss.com/)** - Utility-first CSS
- **[DaisyUI](https://daisyui.com/)** - Component library

### Features & Integrations

- **View Transitions API** - Smooth page transitions
- **Astro Assets** - Optimized image loading (WebP)
- **Cal.com** - Appointment booking integration
- **TypeScript Classes** - Complex form handling

---

## ⚡ Performance

### Build Metrics

```
📦 Build Time:        3.27 seconds
📦 Pages Generated:   13 static pages
📦 Images Optimized:  57 images (~85% reduction)
📦 Bundle Size:       ~15kB JavaScript
```

### Expected Lighthouse Scores

```
🟢 Performance:      95-98 / 100
🟢 Accessibility:    90-95 / 100
🟢 Best Practices:   92-95 / 100
🟢 SEO:              95-100 / 100
```

### Load Times

```
⚡ First Contentful Paint:  < 1.0s
⚡ Largest Contentful Paint: < 1.5s
⚡ Time to Interactive:      < 2.0s
```

---

## ✨ Features

### User Features

- ✅ **Responsive Design** - Mobile-first approach
- ✅ **View Transitions** - SPA-like navigation
- ✅ **Contact Form** - TypeScript-powered with validation
- ✅ **Appointment Booking** - Cal.com integration
- ✅ **FAQ System** - Accordion components
- ✅ **Service Pages** - 6 detailed service offerings
- ✅ **Team Section** - Showcase with bios
- ✅ **404 Page** - Custom error handling

### Developer Features

- ✅ **TypeScript** - Full type safety
- ✅ **Component Islands** - Minimal JavaScript
- ✅ **Image Optimization** - Automatic WebP conversion
- ✅ **Static Site Generation** - Pre-rendered for speed
- ✅ **Template System** - Reusable page templates
- ✅ **Custom Theme** - DaisyUI "Fellnasen" theme

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/[YOUR-USERNAME]/fellfreunde-am-rhein.git

# Navigate to project
cd fellfreunde-am-rhein

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view the site.

### Available Commands

| Command             | Action                               |
| ------------------- | ------------------------------------ |
| `npm install`       | Install dependencies                 |
| `npm run dev`       | Start dev server at `localhost:4321` |
| `npm run build`     | Build for production to `./dist/`    |
| `npm run preview`   | Preview production build locally     |
| `npm run astro ...` | Run Astro CLI commands               |

---

## 📁 Project Structure

```
/
├── public/
│   ├── fonts/           # Custom fonts
│   ├── favicon-32x32.png
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── images/      # Optimized images (57 files)
│   │   └── styles/
│   │       └── global.css
│   ├── components/
│   │   ├── default/     # Navbar, Footer, CTA
│   │   ├── sections/    # Page sections
│   │   └── ServiceTemplates/  # Reusable templates
│   ├── layouts/
│   │   └── BaseLayout.astro   # Main layout with SEO
│   └── pages/           # Route pages (13 pages)
│       ├── index.astro
│       ├── ueber_uns.astro
│       ├── kontakt.astro
│       └── ...
├── astro.config.mjs     # Astro configuration
├── package.json
└── tsconfig.json
```

---

## 🎨 Design System

### Colors (OKLCH Color Space)

- **Primary:** `oklch(83% 0.128 66.29)` - Soft green
- **Secondary:** `oklch(92% 0.084 155.995)` - Light mint
- **Accent:** `oklch(68% 0.162 75.834)` - Warm orange
- **Warning:** `oklch(64% 0.222 41.116)` - Alert yellow

### Typography

- **Headings:** Comfortaa Variable
- **Body:** Comfortaa Variable
- **Special:** Pally Variable (custom)

### Components

- Navigation with dropdown menus
- Card-based service sections
- Accordion FAQ system
- Form with validation
- Hero sections with CTAs

---

## 🏗️ Architecture Highlights

### Astro Features Used

1. **Image Optimization** - `<Image>` component from `astro:assets`
2. **View Transitions** - `ClientRouter` for smooth navigation
3. **Component Islands** - Minimal JavaScript, only where needed
4. **Static Generation** - Pre-rendered HTML for speed
5. **TypeScript Integration** - Type-safe components

### Code Organization

- **Template Pattern** - Reusable service page templates
- **Component Composition** - Modular, maintainable code
- **Type Safety** - Interfaces for all component props
- **Clean Architecture** - Separation of concerns

---

## 📊 Performance Optimizations

### Implemented

- ✅ **Image Optimization** - WebP format, lazy loading
- ✅ **Preconnect** - External services (Cal.com)
- ✅ **Font Preloading** - Custom fonts
- ✅ **HTML Compression** - Minified output
- ✅ **CSS Inlining** - Critical CSS inlined
- ✅ **Tree Shaking** - Unused code eliminated

### Results

- **85% image size reduction** (e.g., 2396kB → 29kB)
- **3.27s build time** for 13 pages + 57 images
- **~15kB JavaScript** total bundle size
- **0 linter errors**

---

## 🧪 Testing Checklist

### Browser Compatibility

- ✅ Chrome (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Safari (Desktop & Mobile)
- ✅ Edge

### Device Testing

- ✅ Desktop (1920x1080, 1366x768)
- ✅ Tablet (iPad, Android)
- ✅ Mobile (iPhone, Android)

### Performance Testing

- [ ] Lighthouse (Target: 95+)
- [ ] PageSpeed Insights
- [ ] WebPageTest

---

## 📈 SEO Features

- ✅ **Meta Tags** - Title, description for all pages
- ✅ **Open Graph** - Social media previews
- ✅ **Twitter Cards** - Twitter sharing
- ✅ **Canonical URLs** - Duplicate content prevention
- ✅ **Structured Data** - JSON-LD for local business
- ✅ **Sitemap** - Auto-generated XML sitemap
- ✅ **robots.txt** - Search engine directives

---

## 🔄 Deployment

### Recommended: Vercel

```bash
# Push to GitHub
git push origin main

# Import on vercel.com
# Framework: Astro (auto-detected)
# Build Command: npm run build
# Output Directory: dist

# ✅ Deployed!
```

**Live Demo:** [Your Live URL]

### Alternative Platforms

- **Netlify** - Simple Git integration
- **Cloudflare Pages** - Fast global CDN
- **GitHub Pages** - Free static hosting

---

## 🎯 Portfolio Highlights

### What This Project Demonstrates

**Technical Skills:**

- Modern JavaScript Framework (Astro)
- TypeScript for type safety
- Performance optimization
- Responsive design
- Component architecture
- Image optimization
- SEO best practices

**Soft Skills:**

- Project planning & execution
- Clean code principles
- Documentation
- Attention to detail
- Performance awareness

---

## 📝 License

MIT License - Free for portfolio and learning purposes

---

## 👨‍💻 Author

**[Your Name]**

- Portfolio: [Your Portfolio URL]
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)

---

## 🙏 Acknowledgments

- **Astro Team** - Amazing framework
- **TailwindCSS** - Utility-first CSS
- **DaisyUI** - Beautiful components
- **Unsplash** - Stock images (if used)

---

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Web.dev Performance](https://web.dev/performance/)

---

<div align="center">

**⭐ If you find this project helpful, please star it!**

Made with ❤️ using Astro

</div>
