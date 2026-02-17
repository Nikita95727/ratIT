# RatIT - Corporate Website

Modern single-page corporate website for IT company RatIT, built with Nuxt.js and TailwindCSS.

## Features

- 🎨 Modern and minimalist design
- 📱 Fully responsive layout (mobile-first)
- ⚡ Fast loading and optimization
- 🔧 Easily extensible architecture
- 🎯 SEO-optimized structure
- 🌍 International market ready

## Website Structure

1. **Hero Section** - Company name and tagline
2. **About Us** - Mission and advantages
3. **Team** - Team members with photos and positions
4. **Portfolio** - Project portfolio (3 cards)
5. **Contact** - Contact form and information
6. **Footer** - Additional information and links

## Technologies

- **Nuxt.js 3** - Vue.js framework
- **TailwindCSS** - CSS framework for styling
- **Vue 3** - Composition API
- **TypeScript** - Type safety

## Installation and Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The website will be available at: [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
RatIT/
├── app/
│   └── app.vue              # Main application component
├── components/              # Vue components
│   ├── AppHeader.vue        # Navigation
│   ├── HeroSection.vue      # Hero section
│   ├── AboutSection.vue     # About us
│   ├── TeamSection.vue      # Team
│   ├── PortfolioSection.vue # Portfolio
│   ├── ContactForm.vue      # Contact form
│   ├── ContactSection.vue   # Contact
│   └── AppFooter.vue        # Footer
├── assets/
│   └── css/
│       └── tailwind.css     # Main styles
├── public/                  # Static files
├── nuxt.config.ts          # Nuxt.js configuration
├── tailwind.config.js      # TailwindCSS configuration
└── package.json
```

## Customization

### Content Changes

All texts and data are located in the corresponding components in the `components/` folder. To change content, edit the necessary files.

### Style Changes

Main styles are located in `assets/css/tailwind.css`. To change color scheme or other styles, edit this file or `tailwind.config.js`.

### Adding New Sections

To add new sections:
1. Create a new component in the `components/` folder
2. Import it in `app/app.vue`
3. Add it to the markup

## International Features

- English language content
- International contact information
- SEO optimized for global market
- Professional business terminology
- Mobile-first responsive design

## License

MIT License

## Contact

- Email: tretynko.nikita.95@gmail.com
- Phone: +1 (234) 567-890
- Address: 123 Business Street, Tech District, NY 10001
