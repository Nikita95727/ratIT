<template>
  <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
    <h3 class="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
    
    <form @submit.prevent="submitForm" class="space-y-6">
      <!-- Name Field -->
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
          Name *
        </label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          :class="{ 'border-red-500': errors.name }"
          placeholder="Your name"
        />
        <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
      </div>

      <!-- Email Field -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          :class="{ 'border-red-500': errors.email }"
          placeholder="your@email.com"
        />
        <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
      </div>

      <!-- Message Field -->
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          v-model="form.message"
          required
          rows="5"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
          :class="{ 'border-red-500': errors.message }"
          placeholder="Tell us about your project..."
        ></textarea>
        <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span v-if="isSubmitting" class="flex items-center justify-center">
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        </span>
        <span v-else>Send Message</span>
      </button>

      <!-- Success Message -->
      <div v-if="isSuccess" class="p-4 bg-green-50 border border-green-200 rounded-lg">
        <div class="flex">
          <svg class="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <p class="ml-3 text-sm text-green-800">
            Message sent successfully! We'll get back to you soon.
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  message: ''
})

const errors = ref({})
const isSubmitting = ref(false)
const isSuccess = ref(false)

const validateForm = () => {
  errors.value = {}
  
  if (!form.value.name.trim()) {
    errors.value.name = 'Name is required'
  }
  
  if (!form.value.email.trim()) {
    errors.value.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = 'Please enter a valid email'
  }
  
  if (!form.value.message.trim()) {
    errors.value.message = 'Message is required'
  } else if (form.value.message.trim().length < 10) {
    errors.value.message = 'Message must contain at least 10 characters'
  }
  
  return Object.keys(errors.value).length === 0
}

const submitForm = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  
  try {
    // Here will be form submission logic
    // For example, sending to server or email service
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate sending
    
    isSuccess.value = true
    form.value = { name: '', email: '', message: '' }
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      isSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Form submission error:', error)
    alert('An error occurred while sending the form. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
