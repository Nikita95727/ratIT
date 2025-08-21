<template>
  <section id="portfolio" class="section-padding bg-white" role="region" aria-labelledby="portfolio-heading">
    <div class="container-custom">
      <header class="text-center mb-16">
        <h2 id="portfolio-heading" class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Completed projects that demonstrate our experience and quality of work
        </p>
      </header>

      <section class="grid lg:grid-cols-3 gap-8" aria-labelledby="projects-heading">
        <h3 id="projects-heading" class="sr-only">Our Projects</h3>
        
        <!-- Project 1 -->
        <article class="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
          <figure class="h-48 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center overflow-hidden">
            <img 
              src="/images/portfolio/lawzilla.jpeg" 
              alt="Lawzilla - Legal case referral platform" 
              width="400"
              height="192"
              class="w-full h-full object-cover"
              loading="lazy"
              style="opacity: 1;"
            />
            <figcaption class="sr-only">Lawzilla legal platform interface</figcaption>
          </figure>
          <div class="p-6">
            <h4 class="text-xl font-semibold text-gray-900 mb-3">Lawzilla</h4>
            <p class="text-gray-600 mb-4">
              Lawzilla is a platform where lawyers can post cases for referral or browse cases they want to handle. Attorneys can connect directly to discuss details and referral fees.
            </p>
            <div class="flex flex-wrap gap-2 mb-4" role="list" aria-label="Technologies used">
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full" role="listitem">Vue.js</span>
              <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full" role="listitem">Laravel</span>
              <span class="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full" role="listitem">MySQL</span>
            </div>
          </div>
        </article>

        <!-- Project 2 -->
        <article class="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
          <figure class="h-48 bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center overflow-hidden">
            <img 
              src="/images/portfolio/Jobfair.png" 
              alt="Jobfair - Event management platform" 
              width="400"
              height="192"
              class="w-full h-full object-cover"
              loading="lazy"
              style="opacity: 1;"
            />
            <figcaption class="sr-only">Jobfair event management platform interface</figcaption>
          </figure>
          <div class="p-6">
            <h4 class="text-xl font-semibold text-gray-900 mb-3">Jobfair</h4>
            <p class="text-gray-600 mb-4">
              A platform for event management, communication, and engagement with an admin panel, interactive charts, and flexible tools for creating landing pages and forms. It supports multiple roles (Admin, Owner, Recruiter, Candidate, Exhibitor, Sponsor), each with dedicated panels.
            </p>
            <div class="flex flex-wrap gap-2 mb-4" role="list" aria-label="Technologies used">
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full" role="listitem">Laravel</span>
              <span class="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full" role="listitem">VueJS</span>
              <span class="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full" role="listitem">MySQL</span>
            </div>
          </div>
        </article>

        <!-- Project 3 -->
        <article class="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
          <figure class="h-48 bg-gradient-to-br from-purple-100 to-violet-200 flex items-center justify-center overflow-hidden">
            <img 
              src="/images/portfolio/myatrealty.png" 
              alt="@atrealty - Real estate CRM system" 
              width="400"
              height="192"
              class="w-full h-full object-cover"
              loading="lazy"
              style="opacity: 1;"
            />
            <figcaption class="sr-only">@atrealty CRM system interface</figcaption>
          </figure>
          <div class="p-6">
            <h4 class="text-xl font-semibold text-gray-900 mb-3">@atrealty</h4>
            <p class="text-gray-600 mb-4">
              CRM system for real estate agency. It has a lot of different features
            </p>
            <div class="flex flex-wrap gap-2 mb-4" role="list" aria-label="Technologies used">
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full" role="listitem">ReactJS</span>
              <span class="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full" role="listitem">Laravel</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full" role="listitem">Docker</span>
              <span class="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full" role="listitem">MySQL</span>
              <span class="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full" role="listitem">Redux</span>
            </div>
          </div>
        </article>
      </section>

      <!-- CTA Section -->
      <section class="mt-16 text-center" aria-labelledby="cta-heading">
        <h3 id="cta-heading" class="sr-only">Ready to Start Your Project</h3>
        <div class="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <h4 class="text-2xl font-bold mb-4">Ready to Start Your Project?</h4>
          <p class="text-blue-100 mb-6 max-w-2xl mx-auto">
            Tell us about your idea and we'll help bring it to life using modern technologies
          </p>
          <a href="#contact" class="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Contact us to discuss your project">
            Discuss Project
          </a>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
// Structured data for the portfolio section
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "RatIT Portfolio",
        "description": "Completed projects that demonstrate our experience and quality of work",
        "itemListElement": [
          {
            "@type": "CreativeWork",
            "position": 1,
            "name": "Lawzilla",
            "description": "Legal case referral platform where lawyers can post cases for referral or browse cases they want to handle",
            "creator": {
              "@type": "Organization",
              "name": "RatIT"
            },
            "technology": ["Vue.js", "Laravel", "MySQL"],
            "category": "Legal Technology"
          },
          {
            "@type": "CreativeWork",
            "position": 2,
            "name": "Jobfair",
            "description": "Event management platform with admin panel, interactive charts, and flexible tools for creating landing pages and forms",
            "creator": {
              "@type": "Organization",
              "name": "RatIT"
            },
            "technology": ["Laravel", "VueJS", "MySQL"],
            "category": "Event Management"
          },
          {
            "@type": "CreativeWork",
            "position": 3,
            "name": "@atrealty",
            "description": "CRM system for real estate agency with comprehensive features",
            "creator": {
              "@type": "Organization",
              "name": "RatIT"
            },
            "technology": ["ReactJS", "Laravel", "Docker", "MySQL", "Redux"],
            "category": "Real Estate CRM"
          }
        ]
      })
    }
  ]
})
</script>
