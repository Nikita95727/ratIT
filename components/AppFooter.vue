<template>
  <footer class="bg-gray-900 text-white" role="contentinfo">
    <div class="container-custom py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <section class="md:col-span-2" aria-labelledby="company-info-heading">
          <h3 id="company-info-heading" class="text-2xl font-bold text-blue-400 mb-4">RatIT</h3>
          <p class="text-gray-300 mb-6 max-w-md">
            Innovative IT solutions for modern business. We create quality products 
            that help companies grow and develop.
          </p>
        </section>

        <!-- Services -->
        <section aria-labelledby="services-heading">
          <h4 id="services-heading" class="text-lg font-semibold mb-4">Services</h4>
          <nav aria-label="Services navigation">
            <ul class="space-y-2" role="list">
              <li><a href="#portfolio" class="text-gray-300 hover:text-white transition-colors" aria-label="View our web development projects">Web Development</a></li>
              <li><a href="#portfolio" class="text-gray-300 hover:text-white transition-colors" aria-label="View our web development projects">Web Design</a></li>
              <li><a href="#contact" class="text-gray-300 hover:text-white transition-colors" aria-label="Contact us for support services">Support</a></li>
            </ul>
          </nav>
        </section>

        <!-- Contact -->
        <section aria-labelledby="footer-contact-heading">
          <h4 id="footer-contact-heading" class="text-lg font-semibold mb-4">Contact</h4>
          <address class="space-y-2 text-gray-300 not-italic">
            <p>Tadeya Rilskogo str., 3, Kyiv, Ukraine</p>
            <p>
              <a href="tel:+1234567890" class="hover:text-white transition-colors" aria-label="Call us at +1 (234) 567-890">
                +1 (234) 567-890
              </a>
            </p>
            <p>
              <a href="mailto:ratitcorporate@gmail.com" class="hover:text-white transition-colors" aria-label="Send us an email">
                ratitcorporate@gmail.com
              </a>
            </p>
          </address>
        </section>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm">
          © 2024 RatIT. All rights reserved.
        </p>
        <nav class="flex space-x-6 mt-4 md:mt-0" aria-label="Legal links">
          <a href="/privacy" class="text-gray-400 hover:text-white text-sm transition-colors" aria-label="Read our privacy policy">Privacy Policy</a>
          <a href="/terms" class="text-gray-400 hover:text-white text-sm transition-colors" aria-label="Read our terms of service">Terms of Service</a>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Structured data for the footer
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "RatIT",
        "url": "https://rat-it.vercel.app/",
        "logo": "https://rat-it.vercel.app/images/logo/logo.svg",
        "description": "Innovative IT solutions for modern business. We create quality products that help companies grow and develop.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3 Tadeya Rilskogo str.",
          "addressLocality": "Kyiv",
          "addressCountry": "UA"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-234-567-890",
            "contactType": "customer service",
            "email": "ratitcorporate@gmail.com",
            "availableLanguage": "English"
          }
        ],
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 50.4501,
            "longitude": 30.5234
          },
          "geoRadius": "10000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "IT Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Development",
                "description": "Custom web applications and websites"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Design",
                "description": "Custom web design and development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Support",
                "description": "24/7 technical support and maintenance"
              }
            }
          ]
        }
      })
    }
  ]
})
</script>
