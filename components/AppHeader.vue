<template>
  <header class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50" role="banner">
    <nav class="container-custom px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="#home" class="flex items-center" aria-label="RatIT - Go to homepage">
            <img 
              src="/images/logo/logo.svg" 
              alt="RatIT Logo" 
              width="40"
              height="40"
              class="w-10 h-10"
              loading="eager"
              style="opacity: 1;"
            />
            <h1 class="text-2xl font-bold text-black-600 ml-2">RatIT</h1>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8" role="menubar">
          <a href="#home" class="text-gray-700 hover:text-blue-600 transition-colors" role="menuitem" aria-label="Go to home section">Home</a>
          <a href="#about" class="text-gray-700 hover:text-blue-600 transition-colors" role="menuitem" aria-label="Go to about section">About</a>
          <a href="#team" class="text-gray-700 hover:text-blue-600 transition-colors" role="menuitem" aria-label="Go to team section">Team</a>
          <a href="#portfolio" class="text-gray-700 hover:text-blue-600 transition-colors" role="menuitem" aria-label="Go to portfolio section">Portfolio</a>
          <a href="#contact" class="text-gray-700 hover:text-blue-600 transition-colors" role="menuitem" aria-label="Go to contact section">Contact</a>
        </div>

        <!-- Mobile menu button -->
        <button 
          @click="toggleMobileMenu" 
          class="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          aria-label="Toggle mobile menu"
          aria-expanded="false"
          aria-controls="mobile-menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div 
        v-if="mobileMenuOpen" 
        id="mobile-menu"
        class="md:hidden border-t border-gray-200"
        role="menu"
        aria-labelledby="mobile-menu-button"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a href="#home" @click="closeMobileMenu" class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md" role="menuitem">Home</a>
          <a href="#about" @click="closeMobileMenu" class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md" role="menuitem">About</a>
          <a href="#team" @click="closeMobileMenu" class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md" role="menuitem">Team</a>
          <a href="#portfolio" @click="closeMobileMenu" class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md" role="menuitem">Portfolio</a>
          <a href="#contact" @click="closeMobileMenu" class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md" role="menuitem">Contact</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Update aria-expanded attribute when mobile menu state changes
watch(mobileMenuOpen, (newValue) => {
  const button = document.querySelector('[aria-controls="mobile-menu"]')
  if (button) {
    button.setAttribute('aria-expanded', newValue.toString())
  }
})
</script>
