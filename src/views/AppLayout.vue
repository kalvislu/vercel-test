<template>
  <div class="login-page">
    <header class="header">
      <div class="header-main">
        <div class="logo" aria-label="Company logo"></div>
      </div>
      <div class="language-selector">
        <div class="language-dropdown">
          <div class="language-icon"></div>
          <div>EN</div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/38d9faf7b7f8476181d3bfe72d56aca7/bda291ced527ad4b4ce5dc4d56c52b8591567688bca71b4975d83ccaca72df3f?apiKey=38d9faf7b7f8476181d3bfe72d56aca7&"
          alt=""
          class="dropdown-arrow"
        />
      </div>
    </header>
    <main class="main-content">
      <div class="content-wrapper">
        <div class="image-column">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/38d9faf7b7f8476181d3bfe72d56aca7/5d88eb79e6d01a1554f35bfbc5bef5978cbe03758b3312924dbea5a10de77c4d?apiKey=38d9faf7b7f8476181d3bfe72d56aca7&"
            alt="Decorative login image"
            class="login-image"
          />
        </div>
        <div class="form-column">
          <div class="form-container">
            <form class="login-form" @submit.prevent="handleSubmit">
              <h1 class="form-title">Login with password</h1>
              <div class="form-fields">
                <div class="passkey-info">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/38d9faf7b7f8476181d3bfe72d56aca7/050e057674976a1a981c0f930982057c2b9f23fb74381cc228a682fa7d23f479?apiKey=38d9faf7b7f8476181d3bfe72d56aca7&"
                    alt=""
                    class="info-icon"
                  />
                  <p class="info-text">
                    Want to log in with one click?
                    <a href="#" class="info-link">Learn more about Passkey</a>
                  </p>
                </div>
                <div class="form-field">
                  <label for="email" class="field-label">Email</label>
                  <input type="email" id="email" class="text-input" value="john@example.com" required />
                </div>
                <div class="form-field">
                  <label for="password" class="field-label">Password</label>
                  <div class="password-input">
                    <input type="password" id="password" class="text-input" value="••••••••••••••••••••••••••••" required />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/38d9faf7b7f8476181d3bfe72d56aca7/6e3b47e6b662b6963235f8dd84c584d1462cda2bc2c0d688973d7a46b13be680?apiKey=38d9faf7b7f8476181d3bfe72d56aca7&"
                      alt="Toggle password visibility"
                      class="password-toggle"
                      @click="togglePasswordVisibility"
                    />
                  </div>
                </div>
                <a href="#" class="forgot-password">Forgot password?</a>
                <button type="submit" class="submit-button">Continue with password</button>
              </div>
              <a href="#" class="back-link">Back to Login</a>
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
export default {
  name: 'LoginForm',
  methods: {
    handleSubmit() {
      // Handle form submission
    },
    togglePasswordVisibility() {
      // Toggle password visibility
    }
  }
}
</script>

<style scoped>
.login-page {
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
  font: 400 16px Inter, sans-serif;
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
  color: var(--Base-Graybase, #161718);
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
  display: block;
  margin-top: 24px;
  padding-top: 32px;
  font-size: 14px;
  color: var(--Primary-300, #489ffe);
  font-weight: 500;
  text-align: center;
}

.footer {
  background-color: var(--Base-Whitebase, #fff);
  padding: 20px 0;
  font: 500 14px/1.4 Inter, sans-serif;
  color: var(--Base-Graybase, #161718);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
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