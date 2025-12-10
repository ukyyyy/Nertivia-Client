<template>
  <div id="app">
    <!-- Navigation -->
    <nav>
      <ul>
        <li><a href="#home">Overview</a></li>
        <li><a href="#cta">Get started</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><a @click.prevent="goToLogin" href="https://chat.radionet.app/login">Login</a></li>
      </ul>
    </nav>

    <!-- Hero -->
    <section class="hero" id="home">
      <h1>Radionet</h1>
      <p>Your radio. Everywhere.</p>
    </section>

    <!-- Chat CTA / Redirect Section -->
    <section class="download-section" id="cta">
      <div class="download-buttons">
        <button class="download-btn" @click="goToRegister">
          <i class="fas fa-user-plus"></i>
          <span>Sign up for Radionet Chat</span>
        </button>
        <button class="download-btn" @click="goToLogin">
          <i class="fas fa-right-to-bracket"></i>
          <span>Login to Radionet Chat</span>
        </button>
      </div>
    </section>

    <div class="divider"></div>

    <!-- Info Section -->
    <div class="container">
      <section id="about" class="info-section">
        <h2>Simple. Clear. Everywhere.</h2>
        <p>
          Radionet brings radio stations from all around the world to your devices –
          with clean design, instant playback and a focus on the music, not the UI.
        </p>
        <p>
          Use the web version, connect it with your Radionet Chat account and keep
          your favorite stations in sync across devices.
        </p>

        <div class="whats-new">
          <h3>What’s new</h3>
          <ul>
            <li>
              <i class="fas fa-circle"></i>
              <span>Account-based experience with Radionet Chat.</span>
            </li>
            <li>
              <i class="fas fa-circle"></i>
              <span>Improved station search and overall performance.</span>
            </li>
            <li>
              <i class="fas fa-circle"></i>
              <span>Optional Discord Rich Presence to show what you’re listening to.</span>
            </li>
          </ul>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Features Section -->
      <section id="features" class="info-section">
        <h2>Made for listeners</h2>
        <div class="features">
          <div class="feature">
            <i class="fas fa-broadcast-tower"></i>
            <h3>Verified stations</h3>
            <p>Discover stations from around the world – from charts to niche genres.</p>
          </div>
          <div class="feature">
            <i class="fas fa-heart"></i>
            <h3>Favorites</h3>
            <p>Save, pin and organize the stations you actually use.</p>
          </div>
          <div class="feature">
            <i class="fas fa-search"></i>
            <h3>Smart search</h3>
            <p>Find the right station by name, genre, or mood in seconds.</p>
          </div>
          <div class="feature">
            <i class="fas fa-mobile-alt"></i>
            <h3>Cross-device</h3>
            <p>Web, desktop and mobile – connected via your Radionet Chat account.</p>
          </div>
          <div class="feature">
            <i class="fas fa-volume-up"></i>
            <h3>High quality audio</h3>
            <p>Clear streams with fast reconnects and smooth volume control.</p>
          </div>
          <div class="feature">
            <i class="fas fa-gamepad"></i>
            <h3>Discord presence</h3>
            <p>Let your friends see what you’re listening to while you play or chat.</p>
          </div>
        </div>
      </section>
    </div>

    <!-- Footer -->
    <footer>
      <p>© 2025 Radionet. All rights reserved.</p>
      <div style="margin-top: 1rem;">
        <a href="#"><i class="fab fa-x-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-github"></i></a>
      </div>
    </footer>
  </div>
</template>

<script setup>
const goToRegister = () => {
  window.location.href = 'https://chat.radionet.app/register';
};

const goToLogin = () => {
  window.location.href = 'https://chat.radionet.app/login';
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  background: #000;
  color: #f5f5f7;
  line-height: 1.6;
}

/* Navbar */
nav {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
}

nav a {
  text-decoration: none;
  color: #f5f5f7;
  font-size: 0.875rem;
  font-weight: 400;
  transition: opacity 0.3s;
  opacity: 0.8;
  cursor: pointer;
}

nav a:hover {
  opacity: 1;
}

/* Container */
.container {
  max-width: 980px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 5rem 2rem 3rem;
}

h1 {
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.5rem;
  font-weight: 400;
  color: #a1a1a6;
  margin-bottom: 3rem;
}

/* CTA Section */
.download-section {
  padding: 2rem 0 3rem;
}

.download-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 980px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  transition: all 0.3s;
  background: rgba(255, 255, 255, 0.1);
  color: #f5f5f7;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
}

.download-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}

.download-btn i {
  font-size: 1.1rem;
}

/* Divider */
.divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  max-width: 980px;
  margin: 4rem auto;
}

/* Info Section */
.info-section {
  padding: 3rem 0;
}

.info-section h2 {
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-bottom: 2rem;
  text-align: center;
}

.info-section p {
  font-size: 1.125rem;
  color: #a1a1a6;
  text-align: center;
  max-width: 720px;
  margin: 0 auto 1.5rem;
}

/* What's New */
.whats-new {
  max-width: 720px;
  margin: 0 auto;
  font-size: 0.95rem;
  color: #a1a1a6;
}

.whats-new h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: left;
}

.whats-new ul {
  list-style: none;
  padding-left: 0;
}

.whats-new li {
  margin-bottom: 0.35rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.whats-new li i {
  margin-top: 0.25rem;
  font-size: 0.7rem;
  color: #34c759;
}

/* Features */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 3rem 0;
}

.feature {
  text-align: center;
  padding: 2rem 1rem;
}

.feature i {
  font-size: 2.5rem;
  color: #f5f5f7;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.feature h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.feature p {
  font-size: 1rem;
  color: #a1a1a6;
}

/* Footer */
footer {
  text-align: center;
  padding: 3rem 2rem;
  color: #a1a1a6;
  font-size: 0.875rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 5rem;
}

footer a {
  color: #a1a1a6;
  text-decoration: none;
  margin: 0 1rem;
  transition: color 0.3s;
}

footer a:hover {
  color: #f5f5f7;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .hero p {
    font-size: 1.25rem;
  }

  nav ul {
    gap: 1.5rem;
    font-size: 0.8rem;
  }

  .download-buttons {
    flex-direction: column;
    align-items: center;
  }

  .download-btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
}
</style>
