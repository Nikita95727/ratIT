<template>
  <div>
    <!-- Header -->
    <AppHeader />
    
    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <HeroSection />
      
      <!-- About Section -->
      <AboutSection />
      
      <!-- Team Section -->
      <TeamSection />
      
      <!-- Portfolio Section -->
      <PortfolioSection />
      
      <!-- Contact Section -->
      <ContactSection />
    </main>
    
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import TeamSection from '../components/TeamSection.vue'
import PortfolioSection from '../components/PortfolioSection.vue'
import ContactSection from '../components/ContactSection.vue'
import AppFooter from '../components/AppFooter.vue'
</script>
