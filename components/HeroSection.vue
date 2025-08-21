<template>
  <section id="home" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-slate-100 pt-16 relative overflow-hidden" role="banner" aria-label="Hero section">
    <!-- Subtle background pattern -->
    <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent" aria-hidden="true"></div>
    
    <!-- Additional subtle gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/60 to-slate-100/80" aria-hidden="true"></div>
    
    <!-- Main content -->
    <div class="container-custom text-center px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-4xl mx-auto">
        <!-- Main Heading -->
        <header>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span class="text-blue-600">RatIT</span>
            <br>
            <span class="text-3xl sm:text-4xl lg:text-5xl">Innovative IT Solutions</span>
          </h1>
        </header>
        
        <!-- Subtitle -->
        <p class="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          We create modern digital solutions that help businesses grow and thrive in the digital age
        </p>
        
        <!-- CTA Buttons -->
        <nav class="flex flex-col sm:flex-row gap-4 justify-center items-center" aria-label="Main navigation">
          <a href="#portfolio" class="btn-primary" aria-label="View our portfolio projects">
            Our Projects
          </a>
          <a href="#contact" class="btn-secondary" aria-label="Contact us for more information">
            Get in Touch
          </a>
        </nav>
        
        <!-- Stats -->
        <section class="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8" aria-label="Company statistics">
          <article class="text-center">
            <div class="text-3xl font-bold text-blue-600 mb-2" aria-label="10 plus successful projects">10+</div>
            <div class="text-gray-600">Successful Projects</div>
          </article>
          <article class="text-center">
            <div class="text-3xl font-bold text-blue-600 mb-2" aria-label="7 plus years of experience">7+</div>
            <div class="text-gray-600">Years of Experience</div>
          </article>
          <article class="text-center">
            <div class="text-3xl font-bold text-blue-600 mb-2" aria-label="100 percent client satisfaction">100%</div>
            <div class="text-gray-600">Client Satisfaction</div>
          </article>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
// Structured data for the hero section
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "RatIT - Innovative IT Solutions",
        "description": "We create modern digital solutions that help businesses grow and thrive in the digital age",
        "provider": {
          "@type": "Organization",
          "name": "RatIT"
        },
        "areaServed": "Worldwide",
        "serviceType": "IT Solutions",
        "offers": {
          "@type": "Offer",
          "description": "Professional IT solutions including web development, mobile apps, and digital transformation"
        }
      })
    }
  ]
})
</script>
