<template>
  <section id="contact" class="section-padding bg-gray-50" role="region" aria-labelledby="contact-heading">
    <div class="container-custom">
      <header class="text-center mb-16">
        <h2 id="contact-heading" class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Get in touch with us to discuss your project or get additional information
        </p>
      </header>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <section class="space-y-8" aria-labelledby="contact-info-heading">
          <header>
            <h3 id="contact-info-heading" class="text-2xl font-bold text-gray-900 mb-6">Our Contacts</h3>
            <p class="text-gray-600 mb-8">
              We are always ready to answer your questions and discuss collaboration opportunities
            </p>
          </header>

          <!-- Contact Details -->
          <address class="space-y-6 not-italic">
            <!-- Address -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Address</h4>
                <p class="text-gray-600">
                  3 Tadeya Rilskogo str.<br>
                  Kyiv, Ukraine
                </p>
              </div>
            </div>
           
            <!-- Email -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Email</h4>
                <a href="mailto:tretynko.nikita.95@gmail.com" class="text-blue-600 hover:text-blue-700 transition-colors" aria-label="Send us an email">
                  tretynko.nikita.95@gmail.com
                </a>
              </div>
            </div>

            <!-- Working Hours -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Working Hours</h4>
                <p class="text-gray-600">
                  Mon-Fri: 9:00 AM - 6:00 PM<br>
                  Sat-Sun: Closed
                </p>
              </div>
            </div>
          </address>
        </section>

        <!-- Contact Form -->
        <ContactForm />
      </div>
    </div>
  </section>
</template>

<script setup>
// Structured data for the contact section
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact RatIT",
        "description": "Get in touch with us to discuss your project or get additional information",
        "mainEntity": {
          "@type": "Organization",
          "name": "RatIT",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3 Tadeya Rilskogo str.",
            "addressLocality": "Kyiv",
            "addressCountry": "UA"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "tretynko.nikita.95@gmail.com",
              "availableLanguage": "English"
            }
          ],
          "openingHours": "Mo-Fr 09:00-18:00",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday", 
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          }
        }
      })
    }
  ]
})
</script>
