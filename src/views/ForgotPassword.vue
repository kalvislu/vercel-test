<template>
  <div class="d-flex flex-column fill-height">
    <!-- Header -->
    <header class="px-8 py-4 d-flex justify-space-between align-center">
      <div class="d-flex align-center">
        <span class="text-h6 font-weight-medium">eKool</span>
      </div>
      <EBtn variant="secondary" class="px-4 py-2 rounded-pill">
        EN
        <EIcon name="chevron-down" size="small" />
      </EBtn>
    </header>

    <!-- Main Content -->
    <main class="flex-grow-1 d-flex align-center justify-center px-8">
      <div class="d-flex align-center justify-space-between max-width-6xl width-100">
        <!-- Illustration -->
        <div class="flex-grow-1 d-none d-md-block">
        </div>

        <!-- Form -->
        <div class="width-100 max-width-sm pa-6 elevation-2 rounded">
          <h1 class="text-h4 font-weight-semibold mb-4"> Forgot password </h1>
          <p class="mb-8"> Enter your email address associated with your account. </p>

          <form @submit.prevent="handleSubmit" class="d-flex flex-column">
            <div class="mb-4">
              <label for="email" class="text-body-2 mb-2 d-block"> Username or Email </label>
              <ETextField
                id="email"
                v-model="email"
                type="email"
                placeholder="Enter your email"
                required
                class="width-100" />
            </div>

            <EBtn type="submit" variant="primary" class="py-3 mb-4"> Reset password </EBtn>

            <div class="text-center">
              <EBtn variant="link" href="/login" class="primary--text"> Back to login </EBtn>
            </div>
          </form>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="px-8 py-6 mt-auto border-top">
      <div class="d-flex flex-wrap justify-space-between align-center">
        <div class="text-body-2 grey--text text--darken-1"> © eKool. All rights reserved. </div>
        <div class="d-flex flex-wrap">
          <EBtn
            v-for="link in footerLinks"
            :key="link.href"
            :href="link.href"
            variant="link"
            class="text-body-2 grey--text text--darken-1 mx-2">
            {{ link.text }}
          </EBtn>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { EBtn } from '@k12tech/ekool-vue-framework/src/components/EBtn'
import { ETextField } from '@k12tech/ekool-vue-framework/src/components/ETextField'
import { EIcon } from '@k12tech/ekool-vue-framework/src/components/EIcon'

const email = ref('')

const footerLinks = [
  { text: 'About eKool', href: '/about' },
  { text: 'FAQ', href: '/faq' },
  { text: 'Security', href: '/security' },
  { text: 'Privacy', href: '/privacy' },
  { text: 'Terms', href: '/terms' },
]

const handleSubmit = async () => {
  try {
    // TODO: Implement password reset logic
    console.log('Reset password for:', email.value)
  } catch (error) {
    console.error('Error:', error)
  }
}
</script>

<style scoped>
/* Custom focus styles */
:deep(.e-text-field:focus) {
  box-shadow: 0 0 0 2px rgba(72, 159, 254, 0.2);
}

/* Smooth transitions */
.e-btn {
  transition: all 0.2s ease;
}
</style>