// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  
  // SEO and Performance optimizations
  nitro: {
    compressPublicAssets: true,
    minify: true,
  },
  
  app: {
    head: {
      title: 'RatIT - Innovative IT Solutions | Web Development & Digital Transformation',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'RatIT - Professional IT solutions for your business. We create innovative digital solutions that help companies grow and thrive in the digital age. Specializing in web development, mobile apps, and digital transformation.' },
        { name: 'keywords', content: 'IT solutions, web development, mobile apps, cloud solutions, digital transformation, software development, React, Vue.js, Laravel, MySQL, full-stack development, Ukraine IT company' },
        { name: 'author', content: 'RatIT' },
        { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'theme-color', content: '#2563eb' },
        { name: 'msapplication-TileColor', content: '#2563eb' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'RatIT' },
        
        // Open Graph
        { property: 'og:title', content: 'RatIT - Innovative IT Solutions | Web Development & Digital Transformation' },
        { property: 'og:description', content: 'Professional IT solutions for your business. We create innovative digital solutions that help companies grow and thrive in the digital age.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://ratit.com' },
        { property: 'og:site_name', content: 'RatIT' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:image', content: '/images/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'RatIT - Innovative IT Solutions' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@ratit' },
        { name: 'twitter:creator', content: '@ratit' },
        { name: 'twitter:title', content: 'RatIT - Innovative IT Solutions' },
        { name: 'twitter:description', content: 'Professional IT solutions for your business. We create innovative digital solutions that help companies grow and thrive in the digital age.' },
        { name: 'twitter:image', content: '/images/og-image.jpg' },
        { name: 'twitter:image:alt', content: 'RatIT - Innovative IT Solutions' },
        
        // Additional SEO
        { name: 'canonical', content: 'https://ratit.com' },
        { name: 'geo.region', content: 'UA' },
        { name: 'geo.placename', content: 'Kyiv' },
        { name: 'geo.position', content: '50.4501;30.5234' },
        { name: 'ICBM', content: '50.4501, 30.5234' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'canonical', href: 'https://ratit.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
        { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
      ],
      script: [
        // Structured Data - Organization
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "RatIT",
            "url": "https://ratit.com",
            "logo": "https://ratit.com/images/logo/logo.svg",
            "description": "Professional IT solutions for your business. We create innovative digital solutions that help companies grow and thrive in the digital age.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3 Tadeya Rilskogo str.",
              "addressLocality": "Kyiv",
              "addressCountry": "UA"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-234-567-890",
              "contactType": "customer service",
              "email": "tretynko.nikita.95@gmail.com"
            },
            "sameAs": [
              "https://linkedin.com/company/ratit",
              "https://twitter.com/ratit"
            ]
          })
        },
        // Structured Data - WebSite
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "RatIT",
            "url": "https://ratit.com",
            "description": "Innovative IT solutions for modern business",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://ratit.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }
      ]
    }
  }
})
