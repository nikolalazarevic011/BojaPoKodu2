# AutoSpray Serbia - MVP Single Page Website PRD

## 1. Project Overview

### Business Description
AutoSpray Serbia provides exact color-matched automotive paint sprays based on vehicle color codes, plus all necessary preparation materials for DIY car repairs.

### MVP Goals
- Single page website with smooth scroll navigation
- Generate leads through contact form
- Showcase products and pricing
- Establish credibility and trust
- Mobile-responsive design

## 2. MVP Features (Single Page Sections)

### 2.1 Page Structure
**One scrollable page with header navigation jumping to sections:**

1. **Header** - Sticky navigation with section links
2. **Hero** - Main value proposition and CTA
3. **Products** - Product showcase with prices
4. **Process** - Simple 3-step process
5. **Pricing** - Clear pricing vs service comparison
6. **Contact** - Quote request form
7. **Footer** - Basic info and developer credit

### 2.2 Language Support
- **Serbian only** for MVP (English later)
- Simple language toggle for future expansion

### 2.3 Navigation
- Sticky header with smooth scroll to sections
- Mobile hamburger menu
- Scroll-to-top button

## 3. Technical Stack (Simplified)

### 3.1 Technology
- **React** (no TypeScript)
- **CSS Library**: Tailwind CSS (best for rapid development)
- **Animations**: CSS transitions + simple Framer Motion
- **Build**: Vite
- **Routing**: No routing needed (single page)

### 3.2 Required Packages
```bash
npm install react react-dom framer-motion
npm install -D vite @vitejs/plugin-react tailwindcss postcss autoprefixer
```

## 4. Content Sections

### 4.1 Hero Section
- **Headline**: "Popravi auto sam - uštedi 10x više para!"
- **Subheadline**: "1.990 RSD umesto 15.000 RSD u servisu"
- **CTA Button**: "Zatraži ponudu" (jumps to contact form)
- **Hero Image**: Car being painted/repaired

### 4.2 Products Section
- **Grid of products** with images and prices
- Categories: Spray paints, primers, clear coats, tools
- **No shopping cart** - display only with prices
- Simple hover effects

### 4.3 Process Section
**3 Simple Steps:**
1. **Pošalji kod boje** - Send us your color code
2. **Dobij komplet** - Receive complete kit in 24-48h
3. **Popravi auto** - Fix your car like a pro

### 4.4 Pricing Section
- **Comparison table**: DIY vs Service
- **Highlight savings**: 1.990 vs 15.000 RSD
- **What's included** in the kit

### 4.5 Contact Section
- **Quote request form**:
  - Name, Phone, Email
  - Car make/model
  - Color code (if known)
  - Damage description
  - Submit button

## 5. Design Requirements

### 5.1 Tailwind Design System
```javascript
// Custom Tailwind colors
colors: {
  'auto': {
    blue: '#1e40af',    // Primary
    orange: '#ea580c',  // CTA buttons
    gray: '#64748b',    // Text
    light: '#f8fafc'    // Background
  }
}
```

### 5.2 Component Structure
```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Products.jsx
│   ├── Process.jsx
│   ├── Pricing.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
└── index.css (Tailwind imports)
```

### 5.3 Key Animations
- **Smooth scroll** between sections
- **Fade in** animations on scroll
- **Hover effects** on product cards
- **Button hover** transformations
- **Mobile menu** slide animations

## 6. MVP Content (Serbian)

### 6.1 Key Messages
- **Value Prop**: "Uštedi 10x više - popravi auto sam!"
- **Trust**: "Originalna formula - identična fabričkoj"
- **Speed**: "Dostava za 24-48h širom Srbije"
- **Support**: "Sve što ti treba u jednom paketu"

### 6.2 Product Categories
1. **Spray boje** po kodu (BMW, Audi, VW, Opel, Fiat...)
2. **Predmaterijali** (primer, baza)
3. **Lakovi** (clear coat, protection)
4. **Alati** (gito, šmirgle, krpe)

## 7. Development Phases

### Phase 1: Setup (1 day)
- Vite + React + Tailwind setup
- Basic component structure
- Responsive layout

### Phase 2: Core Sections (3-4 days)
- Header with smooth scroll navigation
- Hero section with main CTA
- Products grid
- Process steps

### Phase 3: Contact & Polish (2-3 days)
- Contact form with validation
- Pricing comparison
- Animations and polish
- Mobile optimization

### Phase 4: Content & Testing (1-2 days)
- Real content integration
- Cross-browser testing
- Performance optimization

## 8. Success Metrics

### 8.1 Key Metrics
- Contact form submissions > 5%
- Average time on page > 3 minutes
- Mobile traffic > 70%
- Page load speed < 2 seconds

### 8.2 User Actions
- Scroll through all sections
- Click "Zatraži ponudu" button
- Submit contact form
- View product details

## 9. Technical Requirements

### 9.1 Performance
- Mobile-first responsive design
- Fast loading with optimized images
- Smooth scroll performance
- SEO-friendly structure

### 9.2 Browser Support
- Chrome, Firefox, Safari, Edge
- iOS Safari, Android Chrome
- Responsive breakpoints: 320px, 768px, 1024px, 1440px

## 10. Launch Checklist

### 10.1 Pre-Launch
- [ ] All sections working and responsive
- [ ] Contact form functional
- [ ] Images optimized
- [ ] Content proofread
- [ ] Cross-browser tested

### 10.2 Post-Launch
- [ ] Google Analytics setup
- [ ] Monitor contact form submissions
- [ ] Gather user feedback
- [ ] Plan v2 features (English, VIN lookup, etc.)

---

**MVP Timeline: 1-2 weeks**
**Focus: Generate leads with minimal complexity**
**Next Version: Add VIN lookup, English language, separate pages**