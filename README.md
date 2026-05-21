# Ilyas Hassan — Portfolio

A fast, modern, dark-themed frontend developer portfolio built with **Vite + React + Tailwind CSS**.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Sticky nav with mobile menu
│   ├── Hero.jsx          # Typewriter hero section
│   ├── About.jsx         # About me with code card
│   ├── Skills.jsx        # Skill bars + scrolling badge strip
│   ├── Projects.jsx      # Filterable project grid
│   ├── Experience.jsx    # Timeline-based work history
│   ├── Contact.jsx       # Contact form + social links
│   ├── Footer.jsx        # Footer
│   └── CursorGlow.jsx    # Subtle cursor follow glow
├── App.jsx               # Root component + scroll reveal setup
├── main.jsx              # Entry point
└── index.css             # Tailwind + custom CSS
```

## ✨ Features

- **Dark theme** with cyan accent (`#00E5FF`) and gold highlights
- **Typewriter** role animation in hero
- **Scroll reveal** animations via IntersectionObserver
- **Cursor glow** effect that follows mouse
- **Filterable** project grid
- **Animated skill bars** with scrolling tech badge strip
- **Contact form** with simulated submission
- **Mobile responsive** with hamburger menu
- **Smooth scroll** & custom scrollbar styling

## 🎨 Customization

Edit the data arrays in each component:
- `Hero.jsx` → `roles[]` for typewriter text
- `About.jsx` → personal info
- `Skills.jsx` → `categories[]` and `techBadges[]`
- `Projects.jsx` → `projects[]`
- `Experience.jsx` → `experiences[]`
- `Contact.jsx` → `socials[]` and email

## 📦 Tech Stack

- **Vite** — lightning fast build tool
- **React 18** — UI library
- **Tailwind CSS 3** — utility-first styling
- **Google Fonts** — Syne (display) + DM Sans (body) + JetBrains Mono
