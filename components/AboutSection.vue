<template>
  <section id="about" class="section-padding bg-white" role="region" aria-labelledby="about-heading">
    <div class="container-custom">
      <header class="text-center mb-16">
        <h2 id="about-heading" class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          We are a team of professionals specializing in creating innovative IT solutions
        </p>
      </header>

      <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <!-- Mission -->
        <article>
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
          <p class="text-lg text-gray-600 mb-6 leading-relaxed">
            To help businesses grow and develop through the implementation of modern technologies. 
            We create solutions that not only solve current challenges but also lay the foundation 
            for future company development.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            Our team brings together experienced developers, designers, and project managers 
            who work as a single mechanism to achieve your goals.
          </p>
        </article>

        <!-- Image with background -->
        <div class="relative">
          <!-- Background gradient -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl" aria-hidden="true"></div>
          
          <!-- Image container with fixed dimensions -->
          <figure class="relative w-full h-80 rounded-2xl overflow-hidden bg-gray-100">
            <img 
              src="/images/about/about.png" 
              alt="About RatIT - Our team working on innovative IT solutions" 
              width="600"
              height="320"
              class="w-full h-full object-cover transition-opacity duration-300"
              loading="lazy"
              style="opacity: 1;"
            />
            <figcaption class="sr-only">RatIT team working on innovative IT solutions</figcaption>
          </figure>
        </div>
      </div>

      <!-- Advantages -->
      <section class="grid md:grid-cols-3 gap-8" aria-labelledby="advantages-heading">
        <h3 id="advantages-heading" class="sr-only">Our Advantages</h3>
        
        <article class="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h4 class="text-xl font-semibold text-gray-900 mb-3">Fast Development</h4>
          <p class="text-gray-600">
            We use modern technologies and methodologies to quickly create high-quality solutions
          </p>
        </article>

        <article class="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h4 class="text-xl font-semibold text-gray-900 mb-3">Security</h4>
          <p class="text-gray-600">
            Security is a priority in all our solutions. We protect your data and business processes
          </p>
        </article>

        <article class="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </div>
          <h4 class="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h4>
          <p class="text-gray-600">
            We provide round-the-clock support and maintenance for all our projects
          </p>
        </article>
      </section>
    </div>
  </section>
</template>

<script setup>
// Structured data for the about section
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About RatIT",
        "description": "We are a team of professionals specializing in creating innovative IT solutions",
        "mainEntity": {
          "@type": "Organization",
          "name": "RatIT",
          "description": "Professional IT solutions for your business",
          "foundingDate": "2025",
          "numberOfEmployees": "4+",
          "knowsAbout": [
            "Web Development",
            "Web Design",
            "Digital Transformation",
            "React",
            "Vue.js",
            "Laravel",
            "MySQL"
          ]
        }
      })
    }
  ]
})
</script>
