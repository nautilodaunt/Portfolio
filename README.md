# Nautilodaunt — Personal Portfolio

A warm, minimal, editorial personal portfolio website built with semantic HTML5, modern CSS, and vanilla JavaScript. Crafted to be hosted statically on **GitHub Pages** with zero backend, zero build steps, and zero external runtime dependencies.

---

## Visual Palette & Aesthetic

The design is inspired by modern editorial print layouts, architectural monographs, and minimalist digital craftsmanship:

* **Main Background:** `#EDE8D7` (Warm cream)
* **Surface / Cards:** `#FCF6E5` (Light cream)
* **Borders / Hairlines:** `#DCD6C3` (Muted sand border)
* **Primary Text:** `#242420` (Dark charcoal)
* **Secondary Text:** `#6F6A5E` (Muted gray/brown)
* **Accent Warm:** `#8C6D4F` (Earthy bronze)

---

## File Structure

```text
nautilodaunt/
├── index.html              # Semantic HTML5 entry point
├── css/
│   └── style.css           # Design tokens, responsive grid, animations
├── js/
│   └── script.js           # Project data array, modal logic, navigation
├── assets/
│   ├── profile/
│   │   └── avatar.svg      # Minimalist editorial portrait
│   └── projects/           # High-resolution vector project mockups
│       ├── aetheria.svg
│       ├── nautilus.svg
│       ├── vespera.svg
│       ├── chroma.svg
│       ├── monolith.svg
│       └── komorebi.svg
└── README.md
```

---

## Hosting on GitHub Pages

This portfolio is built to work out of the box with GitHub Pages without any build tool or CI step:

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select the `main` branch and `/ (root)` folder, then click **Save**.
3. In 1–2 minutes, your website will be live at:
   ```text
   https://<your-username>.github.io/<your-repo-name>/
   ```
*(All paths use strict relative URLs (`./`), ensuring full compatibility whether hosted at the root or a project sub-path).*

---

## Customization Guide

### 1. Adding or Editing Projects
All projects are dynamically loaded from the clean `projects` array in `js/script.js`:

```javascript
{
  id: "my-project",
  index: "07",
  title: "My Project Name",
  tagline: "Short one-line subtitle",
  shortDescription: "Concise summary visible on the main page.",
  description: "Comprehensive description revealed inside the detail modal.",
  features: [
    "Key architectural highlight 1",
    "Key architectural highlight 2"
  ],
  technologies: ["JavaScript", "Python", "APIs"],
  image: "./assets/projects/my-project.svg", // or .png, .webp, etc.
  github: "https://github.com/username/project",
  demo: "https://demo-url.com"
}
```

### 2. Updating Contact Information & Socials
Update your email, GitHub, and LinkedIn links in `index.html`:
- Search for `mailto:hello@nautilodaunt.dev`
- Search for `https://github.com/nautilodaunt`
- Search for `https://linkedin.com/in/nautilodaunt`

### 3. Replacing the Avatar
Replace `./assets/profile/avatar.svg` with your own photo or portrait image (SVG, PNG, or WebP) and update the `src` attribute in `index.html`.

---

## Accessibility & Performance Features

- **WCAG AAA Contrast**: Dark charcoal (`#242420`) on cream (`#EDE8D7`) delivers a contrast ratio > 11:1.
- **Keyboard Navigation & Focus Trapping**: Fully navigable via Tab, Enter, Space, and Escape.
- **Reduced Motion Support**: Honored automatically via `@media (prefers-reduced-motion: reduce)`.
- **Zero Heavy Bundles**: No third-party frameworks, cookies, trackers, or render-blocking scripts.

