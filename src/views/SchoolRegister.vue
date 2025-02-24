<script setup>
import { ref } from 'vue'
import { ETextField } from '@k12tech/ekool-vue-framework/src/components/ETextField'
import { ESelect } from '@k12tech/ekool-vue-framework/src/components/ESelect'
import { EBtn } from '@k12tech/ekool-vue-framework/src/components/EBtn'

const schoolName = ref('')
const schoolType = ref('')
const street = ref('')
const city = ref('')
const country = ref('')

const countries = [
  { value: 'ee', label: 'Estonia' },
  { value: 'lv', label: 'Latvia' },
  { value: 'lt', label: 'Lithuania' },
]

const handleNext = () => {
  console.log('Form submitted:', {
    schoolName: schoolName.value,
    schoolType: schoolType.value,
    street: street.value,
    city: city.value,
    country: country.value,
  })
}

const handleCancel = () => {
  schoolName.value = ''
  schoolType.value = ''
  street.value = ''
  city.value = ''
  country.value = ''
}
</script>

<template>
  <div class="registration-container">
    <header class="header">
      <div class="logo"> </div>
      <div class="language-selector">
        <span>EN</span>
      </div>
    </header>

    <main class="main-content">
      <div class="form-section">
        <h1 class="title">School registration</h1>

        <div class="progress-steps">
          <span class="step active">1</span>
          <span class="step">2</span>
        </div>

        <h2 class="section-title">School's info</h2>

        <form class="registration-form" @submit.prevent="handleNext">
          <ETextField v-model="schoolName" label="School name" :required="true" />

          <ETextField v-model="schoolType" label="Type" :required="true" />

          <ETextField v-model="street" label="Street" :required="true" />

          <ETextField v-model="city" label="City" :required="true" />

          <ESelect v-model="country" label="Country" :options="countries" :required="true" />

          <div class="button-group">
            <EBtn variant="primary" type="submit" class="next-button"> Next </EBtn>
            <EBtn variant="text" type="button" class="cancel-button" @click="handleCancel"> Cancel </EBtn>
          </div>
        </form>
      </div>

      <div class="illustration">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Login__26_Register-zQlp0tSEyJuT2jiGwBxw9NXFRdyk4u.png"
          alt="Decorative illustration"
          class="registration-illustration" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.registration-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.language-selector {
  color: #4b87ff;
  font-weight: 500;
}

.main-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

.progress-steps {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.step {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e5e7eb;
  color: #6b7280;
  font-size: 0.875rem;
}

.step.active {
  background: #4b87ff;
  color: white;
}

.section-title {
  color: #4b87ff;
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.registration-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 480px;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.next-button {
  width: 100%;
}

.cancel-button {
  width: 100%;
  color: #6b7280;
}

.illustration {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 4rem;
}

.registration-illustration {
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .main-content {
    grid-template-columns: 1fr;
  }

  .illustration {
    display: none;
  }
}
</style>