---
description: How to design and implement a beautiful, modern frontend web application
---

When instructed to run `/frontend-design` or to overhaul/create a frontend, follow these strict aesthetic and technical guidelines to produce a premium, modern, and highly visually appealing interface.

# Aesthetic Principles
1. **Ditch the Defaults**: Never use default browser typography. Always import Google Fonts (e.g., *Inter*, *Outfit*, or *Roboto*) and set realistic line heights and letter spacing.
2. **Modern Color Theory**: Avoid generic named colors (like 'red', 'blue', or 'green'). Synthesize sophisticated, harmonious color palettes using HSL colors. Use sleek dark modes or subtle, low-saturation light modes with rich accents.
3. **Glassmorphism & Depth**: Apply modern techniques like frosted glass effects (`backdrop-filter`), subtle borders, and multi-layered shadows to give elements physical presence.
4. **Micro-interactivity**: Every interactive element (buttons, links, form inputs) must have a smooth hover and active state using CSS transitions (e.g., `transition: all 0.2s ease`).
5. **Generous Whitespace**: Rely heavily on padding, margin, and gaps. Dense UIs feel outdated. Give elements room to breathe.

# Implementation Steps

## Step 1: Initialize the Project 
If creating a new project, prioritize using Vite or Next.js unless standard HTML/JS is specifically requested. Use non-interactive CLI commands (e.g., `npx -y create-vite@latest ./ --template react-ts --yes`).
// turbo-all

## Step 2: Set Up Core Styling
Define a comprehensive CSS custom property system in `index.css` or `globals.css`:
- Define semantic color variables (background, foreground, primary, muted, borders).
- Define border radii.
- Base typography styles.
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
:root {
  --background: #0f172a;
  --foreground: #f8fafc;
  --primary: #3b82f6;
  --primary-hover: #2563eb;
  --radius: 0.5rem;
  --border: rgba(255, 255, 255, 0.1);
}
body { background: var(--background); color: var(--foreground); font-family: 'Inter', sans-serif; }
```

## Step 3: Build Components
Construct reusable components such as Navbars, Cards, and Buttons using vanilla CSS or the preferred styling library (avoid Tailwind unless the user requests it).

## Step 4: Assemble & Polish
Ensure responsive design using Flexbox and Grid. Validate visual polish: gradients should be smooth, animations fluid, and layout logical. Do not deliver a bare minimum viable product. Aim to "WOW" the user.

## SEO Fundamentals
If applicable, automatically implement standard SEO best practices: descriptive `<title>`, descriptive meta tags, proper `<h1>` to `<h6>` hierarchy, and semantic HTML elements (`<header>`, `<main>`, `<article>`, `<footer>`).
