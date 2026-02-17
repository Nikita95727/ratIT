<template>
  <section id="team" class="section-padding bg-gray-50" role="region" aria-labelledby="team-heading">
    <div class="container-custom">
      <header class="text-center mb-16">
        <h2 id="team-heading" class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Meet the professionals who create innovative solutions for your business
        </p>
      </header>

      <section class="grid md:grid-cols-2 lg:grid-cols-4 gap-8" aria-labelledby="team-members-heading">
        <h3 id="team-members-heading" class="sr-only">Team Members</h3>
        
        <!-- Team Member 1 -->
        <article class="text-center group">
          <div class="relative mb-6">
            <div class="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/images/team/mykytatretynko.jpeg" 
                alt="Mykyta Tretynko - CEO & Founder at RatIT" 
                width="192"
                height="192"
                class="w-full h-full object-cover rounded-full"
                loading="lazy"
                style="opacity: 1;"
              />
            </div>
          </div>
          <h4 class="text-xl font-semibold text-gray-900 mb-2">Mykyta Tretynko</h4>
          <p class="text-blue-600 font-medium mb-3">CEO & Founder</p>
          <p class="text-gray-600 text-sm">
            Full-Stack developer with expertise in React, Laravel, MySQL, VueJS
          </p>
        </article>

        <!-- Team Member 2 -->
        <article class="text-center group">
          <div class="relative mb-6">
            <div class="w-48 h-48 mx-auto bg-gradient-to-br from-green-100 to-emerald-200 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/images/team/maximhaidash.jpg" 
                alt="Maxim Haidash - Co-founder at RatIT" 
                width="192"
                height="192"
                class="w-full h-full object-cover rounded-full"
                loading="lazy"
                style="opacity: 1;"
              />
            </div>
          </div>
          <h4 class="text-xl font-semibold text-gray-900 mb-2">Maxim Haidash</h4>
          <p class="text-blue-600 font-medium mb-3">Co-founder</p>
          <p class="text-gray-600 text-sm">
            Full-Stack developer with expertise in React, Laravel, MySQL, VueJS
          </p>
        </article>

        <!-- Team Member 3 -->
        <article class="text-center group">
          <div class="relative mb-6">
            <div class="w-48 h-48 mx-auto bg-gradient-to-br from-orange-100 to-amber-200 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/images/team/victoriashepel.jpg" 
                alt="Victoria Shepel - Full-Stack developer at RatIT" 
                width="192"
                height="192"
                class="w-full h-full object-cover rounded-full"
                loading="lazy"
                style="opacity: 1;"
              />
            </div>
          </div>
          <h4 class="text-xl font-semibold text-gray-900 mb-2">Victoria Shepel</h4>
          <p class="text-blue-600 font-medium mb-3">Full-Stack developer</p>
          <p class="text-gray-600 text-sm">
            Front-End expert with expertise in React, VueJS, HTML, CSS, JavaScript, TailwindCSS
          </p>
        </article>

        <!-- Team Member 4 -->
        <article class="text-center group">
          <div class="relative mb-6">
            <div class="w-48 h-48 mx-auto bg-gradient-to-br from-purple-100 to-violet-200 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/images/team/project-manager.png" 
                alt="Sofia Titarenko - Project Manager at RatIT" 
                width="192"
                height="192"
                class="w-full h-full object-cover rounded-full"
                loading="lazy"
                style="opacity: 1;"
              />
            </div>
          </div>
          <h4 class="text-xl font-semibold text-gray-900 mb-2">Sofia Titarenko</h4>
          <p class="text-blue-600 font-medium mb-3">Project Manager</p>
          <p class="text-gray-600 text-sm">
            Project management and coordination of development processes
          </p>
        </article>
      </section>

      <!-- Additional Team Info -->
      <section class="mt-16 text-center" aria-labelledby="join-team-heading">
        <h3 id="join-team-heading" class="sr-only">Join Our Team</h3>
        <div class="bg-white rounded-2xl p-8 shadow-sm">
          <h4 class="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h4>
          <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
            We are always looking for talented professionals who share our values and strive to create quality products
          </p>
          <a href="#contact" class="btn-primary" aria-label="Send your resume to join our team">
            Send Resume
          </a>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
// Structured data for the team section
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "RatIT",
        "employee": [
          {
            "@type": "Person",
            "name": "Mykyta Tretynko",
            "jobTitle": "CEO & Founder",
            "description": "Full-Stack developer with expertise in React, Laravel, MySQL, VueJS",
            "knowsAbout": ["React", "Laravel", "MySQL", "VueJS", "Full-Stack Development"]
          },
          {
            "@type": "Person",
            "name": "Maxim Haidash",
            "jobTitle": "Co-founder",
            "description": "Full-Stack developer with expertise in React, Laravel, MySQL, VueJS",
            "knowsAbout": ["React", "Laravel", "MySQL", "VueJS", "Full-Stack Development"]
          },
          {
            "@type": "Person",
            "name": "Victoria Shepel",
            "jobTitle": "Full-Stack developer",
            "description": "Front-End expert with expertise in React, VueJS, HTML, CSS, JavaScript, TailwindCSS",
            "knowsAbout": ["React", "VueJS", "HTML", "CSS", "JavaScript", "TailwindCSS", "Front-End Development"]
          },
          {
            "@type": "Person",
            "name": "Sofia Titarenko",
            "jobTitle": "Project Manager",
            "description": "Project management and coordination of development processes",
            "knowsAbout": ["Project Management", "Agile", "Team Coordination"]
          }
        ]
      })
    }
  ]
})
</script>
