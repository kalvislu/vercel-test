<template>
  <div class="login-page">
    <header class="header">
      <div class="header-main">
        <div class="logo" aria-label="Company logo"></div>
      </div>
      <div class="language-selector">
        <e-select v-model="lang" :items="languages" prepend-inner-icon="icon-globe" />
      </div>
    </header>
    <main class="main-content">
      <div class="content-wrapper">
        <div class="image-column d-lg-block d-none">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/38d9faf7b7f8476181d3bfe72d56aca7/5d88eb79e6d01a1554f35bfbc5bef5978cbe03758b3312924dbea5a10de77c4d?apiKey=38d9faf7b7f8476181d3bfe72d56aca7&"
            alt="Decorative login image"
            class="login-image" />
        </div>
        <div class="form-column">
          <div class="form-container">
            <form class="login-form" @submit.prevent="handleSubmit">
              <h1 class="form-title headline-1 text-graybase">Login with password</h1>
              <div class="form-fields">
                <div class="passkey-info">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/38d9faf7b7f8476181d3bfe72d56aca7/050e057674976a1a981c0f930982057c2b9f23fb74381cc228a682fa7d23f479?apiKey=38d9faf7b7f8476181d3bfe72d56aca7&"
                    alt=""
                    class="info-icon" />
                  <p class="info-text">
                    Want to log in with one click?
                    <a href="#" class="info-link">Learn more about Passkey</a>
                  </p>
                </div>
                <div class="form-field">
                  <e-text-field v-model="email" label="Email" size="large"></e-text-field>
                </div>
                <div class="form-field">
                  <e-text-field
                    v-model="password"
                    label="Password"
                    size="large"
                    append-inner-icon="icon-eye"></e-text-field>
                </div>
                <div class="d-flex">
                  <e-btn size="small" variant="link" :block="false">Forgot password?</e-btn>
                </div>
                <e-btn size="large" variant="primary">Continue with password</e-btn>
              </div>
              <div class="back-link">
                <e-btn size="small" variant="link" :block="false">Back to Login</e-btn>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="footer-content">
        <p class="copyright">© eKool. All rights reserved.</p>
        <nav class="footer-nav">
          <a href="#" class="footer-link">About eKool</a>
          <a href="#" class="footer-link">FAQ</a>
          <a href="#" class="footer-link">Security</a>
          <a href="#" class="footer-link">Privacy</a>
          <a href="#" class="footer-link">Terms</a>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
import { ETextField } from '@k12tech/ekool-vue-framework/src/components/ETextField'
import { EBtn } from '@k12tech/ekool-vue-framework/src/components/EBtn'
import { ESelect } from '@k12tech/ekool-vue-framework/src/components/ESelect'
export default {
  name: 'LoginForm',
  components: {
    ETextField,
    EBtn,
    ESelect,
  },
  data() {
    return {
      email: '',
      password: '',
      lang: 'EN',
      languages: ['EN', 'ET', 'RU'],
    }
  },
  methods: {
    handleSubmit() {
      // Handle form submission
    },
    togglePasswordVisibility() {
      // Toggle password visibility
    },
  },
}
</script>

<style scoped>
.login-page {
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: var(--Base-Whitebase, #fff);
}

.header-main {
  display: flex;
  align-items: center;
}

.logo {
  width: 108px;
  height: 34px;
}

.language-selector {
  display: flex;
  align-items: center;
  gap: 12px;
  font:
    400 16px Inter,
    sans-serif;
  color: var(--Base-Graybase, #161718);
}

.language-dropdown {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 8px 0 10px;
  border: 1px solid var(--Grayscale-300, #d1d5db);
  border-radius: 6px;
  background-color: var(--Base-Whitebase, #fff);
  height: 36px;
}

.language-icon {
  width: 24px;
  height: 24px;
}

.dropdown-arrow {
  width: 24px;
  height: 24px;
}

.main-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
}

.content-wrapper {
  display: flex;
  max-width: 1280px;
  width: 100%;
  gap: 20px;
}

.image-column,
.form-column {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-image {
  width: 100%;
  height: auto;
}

.form-container {
  display: flex;
  justify-content: center;
  padding: 0 20px;
}

.login-form {
  width: 100%;
  max-width: 344px;
}

.form-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 24px;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.passkey-info {
  display: flex;
  align-items: start;
  gap: 12px;
  padding: 12px;
  border: 1px solid var(--Grayscale-100, #f3f4f6);
  border-radius: 6px;
  background-color: var(--Grayscale-50, #f9fafb);
  font-size: 14px;
  color: #1a2027;
}

.info-icon {
  width: 20px;
  height: 21px;
}

.info-link {
  color: var(--Primary-300, #489ffe);
  text-decoration: underline;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--Base-Graybase, #161718);
}

.text-input {
  height: 44px;
  padding: 0 10px;
  border: 1px solid var(--Grayscale-200, #e5e7eb);
  border-radius: 6px;
  font-size: 16px;
}

.password-input {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.forgot-password {
  font-size: 14px;
  color: var(--Primary-300, #489ffe);
  text-decoration: underline;
}

.submit-button {
  height: 44px;
  background-color: var(--Primary-300, #489ffe);
  color: var(--Base-Whitebase, #fff);
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.back-link {
  margin-top: 24px;
  padding-top: 32px;
  text-align: center;
}

.footer {
  background-color: var(--Base-Whitebase, #fff);
  padding: 20px 0;
  font:
    500 14px/1.4 Inter,
    sans-serif;
  color: var(--Base-Graybase, #161718);
  width: 100%;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 1280px;
  margin: 0 auto;
}

.footer-nav {
  display: flex;
  gap: 34px;
}

.footer-link {
  color: inherit;
  text-decoration: none;
}

@media (max-width: 991px) {
  .header {
    padding: 20px;
  }

  .content-wrapper {
    flex-direction: column;
  }

  .form-container {
    padding: 40px 20px 0;
  }

  .footer-content {
    flex-direction: column;
    gap: 20px;
  }

  .footer-nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
