<template>
  <div class="landing-page">
    <!-- Sticky Header -->
    <header class="header">
      <div class="header-container">
        <div class="header-brand">
          <router-link to="/" class="brand-link">
            <div class="logo-gradient"></div>
            <span class="brand-text">TECH FUSION</span>
          </router-link>
        </div>

        <nav class="main-nav">
          <router-link to="/builder" class="nav-link">PC Builder</router-link>
          <router-link to="/gaming" class="nav-link">Gaming PCs</router-link>
          <router-link to="/components" class="nav-link">Components</router-link>
          <router-link to="/deals" class="nav-link">Deals</router-link>
          <router-link to="/support" class="nav-link">Support</router-link>
        </nav>

        <div class="header-actions">
          <q-btn flat round icon="search" class="header-btn" />
          <q-btn flat round icon="person" class="header-btn" />
          <q-btn flat round icon="shopping_cart" class="header-btn">
            <q-badge floating color="purple" rounded>3</q-badge>
          </q-btn>
          <q-btn flat round icon="menu" class="header-btn mobile-only" />
        </div>
      </div>
    </header>

    <main>
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-background">
          <div class="hero-overlay"></div>
          <img
            src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Gaming PC Setup" class="hero-image" />
        </div>
        <div class="hero-content">
          <div class="hero-text">
            <div class="hero-badge">
              Premium Gaming Hardware
            </div>
            <h1 class="hero-title">
              Build Your Dream<br />
              Gaming Rig Today
            </h1>
            <p class="hero-subtitle">
              Premium Gaming Hardware • Expert Builds • Delivered Nationwide
            </p>
            <div class="hero-actions">
              <q-btn unelevated class="primary-btn" @click="startCustomBuild">
                Start Your Custom Build
                <q-icon name="chevron_right" class="q-ml-sm" />
              </q-btn>
              <q-btn outline class="secondary-btn" @click="browseDeals">
                Browse Hot Deals
              </q-btn>
            </div>
          </div>
        </div>
        <div class="hero-gradient-bottom"></div>
      </section>

      <!-- Why Choose Us -->
      <section class="why-choose-us">
        <div class="container">
          <div class="section-header">
            <h2>Why Choose Tech Fusion?</h2>
            <p>Industry-leading expertise and unmatched customer service</p>
          </div>
          <div class="features-grid">
            <div class="feature-card" v-for="feature in whyChooseUsFeatures" :key="feature.title">
              <div class="feature-icon">
                <q-icon :name="feature.icon" size="2rem" />
              </div>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Categories -->
      <section class="featured-categories">
        <div class="container">
          <div class="section-header">
            <h2>Featured Categories</h2>
            <p>Explore our premium gaming hardware collection</p>
          </div>
          <div class="categories-grid">
            <div class="category-card" v-for="category in featuredCategories" :key="category.title"
              @click="navigateToCategory(category.slug)">
              <div class="category-image">
                <img :src="category.image" :alt="category.title" />
                <div class="category-overlay">
                  <q-btn round color="white" text-color="black" icon="arrow_forward" />
                </div>
              </div>
              <div class="category-info">
                <h3>{{ category.title }}</h3>
                <p>{{ category.description }}</p>
                <span class="category-price">From ${{ category.startingPrice }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Custom PC Builder CTA -->
      <section class="pc-builder-cta">
        <div class="container">
          <div class="cta-content">
            <div class="cta-text">
              <h2>Build Your Perfect Gaming PC</h2>
              <p>Use our advanced PC builder tool to create a custom gaming rig tailored to your needs and budget.
                Compatible parts guaranteed.</p>
              <div class="cta-features">
                <div class="cta-feature">
                  <q-icon name="check_circle" color="green" />
                  <span>Compatibility Guaranteed</span>
                </div>
                <div class="cta-feature">
                  <q-icon name="check_circle" color="green" />
                  <span>Expert Assembly Available</span>
                </div>
                <div class="cta-feature">
                  <q-icon name="check_circle" color="green" />
                  <span>3-Year Warranty</span>
                </div>
              </div>
              <q-btn unelevated size="lg" class="primary-btn" @click="startBuilder">
                Launch PC Builder
                <q-icon name="build" class="q-ml-sm" />
              </q-btn>
            </div>
            <div class="cta-visual">
              <div class="builder-preview">
                <img
                  src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="PC Builder Interface" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Popular Builds / Weekly Deals -->
      <section class="popular-builds">
        <div class="container">
          <div class="section-header">
            <h2>Popular Builds & Weekly Deals</h2>
            <p>Hand-picked configurations from our experts</p>
          </div>
          <div class="builds-grid">
            <div class="build-card" v-for="build in popularBuilds" :key="build.name">
              <div class="build-image">
                <img :src="build.image" :alt="build.name" />
                <div class="build-badge" v-if="build.isOnSale">
                  {{ build.discount }}% OFF
                </div>
              </div>
              <div class="build-info">
                <h3>{{ build.name }}</h3>
                <p>{{ build.description }}</p>
                <div class="build-specs">
                  <span v-for="spec in build.keySpecs" :key="spec" class="spec-tag">
                    {{ spec }}
                  </span>
                </div>
                <div class="build-pricing">
                  <span class="current-price">${{ build.currentPrice }}</span>
                  <span v-if="build.originalPrice" class="original-price">${{ build.originalPrice }}</span>
                </div>
                <q-btn unelevated class="primary-btn full-width" @click="viewBuild(build.id)">
                  View Build
                </q-btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Repair Services Preview -->
      <section class="repair-services">
        <div class="container">
          <div class="repair-content">
            <div class="repair-text">
              <h2>Professional Repair Services</h2>
              <p>Expert technicians ready to diagnose and fix your gaming rig. From hardware upgrades to virus removal,
                we've got you covered.</p>
              <div class="repair-features">
                <div class="repair-feature">
                  <q-icon name="speed" size="1.5rem" />
                  <div>
                    <h4>Fast Turnaround</h4>
                    <p>Most repairs completed within 24-48 hours</p>
                  </div>
                </div>
                <div class="repair-feature">
                  <q-icon name="verified" size="1.5rem" />
                  <div>
                    <h4>Certified Technicians</h4>
                    <p>Industry-certified professionals with 10+ years experience</p>
                  </div>
                </div>
                <div class="repair-feature">
                  <q-icon name="security" size="1.5rem" />
                  <div>
                    <h4>Warranty Protection</h4>
                    <p>90-day warranty on all repair work</p>
                  </div>
                </div>
              </div>
              <q-btn outline size="lg" class="secondary-btn" @click="bookRepair">
                Book Repair Service
              </q-btn>
            </div>
            <div class="repair-visual">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Repair Services" />
            </div>
          </div>
        </div>
      </section>

      <!-- Careers Preview -->
      <section class="careers-preview">
        <div class="container">
          <div class="careers-content">
            <div class="careers-text">
              <h2>Join Our Team</h2>
              <p>Passionate about gaming and technology? We're always looking for talented individuals to join our
                growing team.</p>
              <div class="open-positions">
                <h4>Current Openings:</h4>
                <ul>
                  <li>Senior PC Technician</li>
                  <li>Customer Support Specialist</li>
                  <li>Warehouse Operations Manager</li>
                  <li>Digital Marketing Coordinator</li>
                </ul>
              </div>
              <q-btn unelevated class="primary-btn" @click="viewCareers">
                View All Positions
                <q-icon name="work" class="q-ml-sm" />
              </q-btn>
            </div>
            <div class="careers-stats">
              <div class="stat-card">
                <h3>50+</h3>
                <p>Team Members</p>
              </div>
              <div class="stat-card">
                <h3>98%</h3>
                <p>Employee Satisfaction</p>
              </div>
              <div class="stat-card">
                <h3>5★</h3>
                <p>Glassdoor Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Newsletter Signup -->
      <section class="newsletter-signup">
        <div class="container">
          <div class="newsletter-content">
            <div class="newsletter-text">
              <h2>Stay Updated</h2>
              <p>Get the latest deals, new product announcements, and gaming tips delivered to your inbox.</p>
            </div>
            <div class="newsletter-form">
              <q-input v-model="email" placeholder="Enter your email address" outlined dense class="email-input" dark />
              <q-btn unelevated class="primary-btn" @click="subscribeNewsletter" :loading="isSubscribing">
                Subscribe
              </q-btn>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-brand">
              <div class="logo-gradient"></div>
              <span class="brand-text">TECH FUSION</span>
            </div>
            <p>Building dream gaming rigs since 2015. Premium hardware, expert assembly, nationwide delivery.</p>
            <div class="social-links">
              <q-btn v-for="social in socialLinks" :key="social.name" round flat :icon="social.icon" class="social-btn"
                @click="openSocial(social.url)" />
            </div>
          </div>

          <div class="footer-section">
            <h4>Products</h4>
            <ul>
              <li><a href="/gaming-pcs">Gaming PCs</a></li>
              <li><a href="/components">Components</a></li>
              <li><a href="/accessories">Accessories</a></li>
              <li><a href="/deals">Special Deals</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="/pc-builder">PC Builder</a></li>
              <li><a href="/assembly">Assembly Service</a></li>
              <li><a href="/repairs">Repairs</a></li>
              <li><a href="/warranty">Warranty</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/shipping">Shipping Info</a></li>
              <li><a href="/returns">Returns</a></li>
            </ul>
          </div>

          <div class="footer-section contact-info">
            <h4>Contact Info</h4>
            <div class="contact-item">
              <q-icon name="place" />
              <span>123 Tech Street, Gaming City, GC 12345</span>
            </div>
            <div class="contact-item">
              <q-icon name="phone" />
              <span>+1 (555) 123-GAME</span>
            </div>
            <div class="contact-item">
              <q-icon name="email" />
              <span>info@techfusion.com</span>
            </div>
            <div class="contact-item">
              <q-icon name="schedule" />
              <span>Mon-Fri: 9AM-8PM, Sat-Sun: 10AM-6PM</span>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 Tech Fusion. All rights reserved.</p>
          <div class="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Reactive data
const email = ref('')
const isSubscribing = ref(false)

// Why Choose Us features
const whyChooseUsFeatures = ref([
  {
    icon: 'verified',
    title: 'Expert Assembly',
    description: 'Professional technicians with 10+ years of experience build and test every system.'
  },
  {
    icon: 'local_shipping',
    title: 'Free Shipping',
    description: 'Complimentary nationwide shipping on all gaming PCs and bulk component orders.'
  },
  {
    icon: 'security',
    title: '3-Year Warranty',
    description: 'Comprehensive warranty coverage on all custom builds with lifetime tech support.'
  },
  {
    icon: 'support_agent',
    title: '24/7 Support',
    description: 'Round-the-clock customer support from gaming enthusiasts who understand your needs.'
  }
])

// Featured categories
const featuredCategories = ref([
  {
    title: 'Gaming PCs',
    description: 'High-performance pre-built systems',
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    startingPrice: 1299,
    slug: 'gaming-pcs'
  },
  {
    title: 'Graphics Cards',
    description: 'Latest RTX 40 Series & AMD RDNA3',
    image: 'https://images.unsplash.com/photo-1591238371406-0a39e2e7a61c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    startingPrice: 399,
    slug: 'graphics-cards'
  },
  {
    title: 'Processors',
    description: 'Intel 13th Gen & AMD Ryzen 7000',
    image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    startingPrice: 199,
    slug: 'processors'
  },
  {
    title: 'Gaming Monitors',
    description: '4K, 144Hz, OLED displays',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    startingPrice: 299,
    slug: 'monitors'
  }
])

// Popular builds
const popularBuilds = ref([
  {
    id: 1,
    name: 'Gaming Beast Pro',
    description: 'Ultimate 4K gaming performance',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    keySpecs: ['RTX 4080', 'i7-13700K', '32GB DDR5'],
    currentPrice: 2799,
    originalPrice: 3199,
    isOnSale: true,
    discount: 15
  },
  {
    id: 2,
    name: 'Esports Champion',
    description: 'High FPS competitive gaming',
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    keySpecs: ['RTX 4060 Ti', 'i5-13600K', '16GB DDR5'],
    currentPrice: 1599,
    originalPrice: null,
    isOnSale: false,
    discount: 0
  },
  {
    id: 3,
    name: 'Budget Warrior',
    description: '1080p gaming excellence',
    image: 'https://images.unsplash.com/photo-1591238371406-0a39e2e7a61c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    keySpecs: ['RTX 4060', 'i5-13400F', '16GB DDR4'],
    currentPrice: 1099,
    originalPrice: 1299,
    isOnSale: true,
    discount: 20
  }
])

// Social links
const socialLinks = ref([
  { name: 'Facebook', icon: 'fab fa-facebook', url: 'https://facebook.com/techfusion' },
  { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/techfusion' },
  { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/techfusion' },
  { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://youtube.com/techfusion' },
  { name: 'Discord', icon: 'fab fa-discord', url: 'https://discord.gg/techfusion' }
])

// Methods
const startCustomBuild = () => {
  void router.push('/pc-builder')
}

const browseDeals = () => {
  void router.push('/deals')
}

const navigateToCategory = (slug: string) => {
  void router.push(`/category/${slug}`)
}

const startBuilder = () => {
  void router.push('/pc-builder')
}

const viewBuild = (buildId: number) => {
  void router.push(`/build/${buildId}`)
}

const bookRepair = () => {
  void router.push('/repair-booking')
}

const viewCareers = () => {
  void router.push('/careers')
}

const subscribeNewsletter = async () => {
  if (!email.value) return

  isSubscribing.value = true
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    // Handle newsletter subscription
    console.log('Subscribing email:', email.value)
    email.value = ''
  } catch (error) {
    console.error('Subscription failed:', error)
  } finally {
    isSubscribing.value = false
  }
}

const openSocial = (url: string) => {
  window.open(url, '_blank')
}
</script>

<style lang="scss" scoped>
.landing-page {
  min-height: 100vh;
  background: #000;
  color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

// Header Styles
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  border-bottom: 1px solid rgb(39, 39, 42);
  background: #000;
  backdrop-filter: blur(10px);

  &-container {
    display: flex;
    height: 4rem;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  &-brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &-btn {
    color: #fff;

    &:hover {
      background: rgb(39, 39, 42);
    }
  }
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
}

.logo-gradient {
  position: relative;
  height: 2rem;
  width: 2rem;
  overflow: hidden;
  border-radius: 50%;
  background: linear-gradient(135deg, #ef4444, #a855f7, #3b82f6);
}

.brand-text {
  font-weight: bold;
  letter-spacing: 0.05em;
  display: none;

  @media (min-width: 640px) {
    display: inline-block;
  }
}

.main-nav {
  display: none;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    display: flex;
  }
}

.nav-link {
  color: rgb(161, 161, 170);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
}

.mobile-only {
  @media (min-width: 768px) {
    display: none;
  }
}

// Hero Section
.hero-section {
  position: relative;
  height: 85vh;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #000, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7));
  z-index: 10;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-content {
  position: relative;
  z-index: 20;
  display: flex;
  height: 100%;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-text {
  max-width: 48rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.hero-badge {
  background: rgba(147, 51, 234, 0.2);
  color: rgb(196, 181, 253);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  display: inline-block;
  width: fit-content;
}

.hero-title {
  font-size: clamp(2rem, 8vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.025em;
  background: linear-gradient(to right, #fff, rgb(196, 181, 253), rgb(147, 197, 253));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgb(161, 161, 170);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero-gradient-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 6rem;
  background: linear-gradient(to top, #000, transparent);
}

// Button Styles
.primary-btn {
  background: linear-gradient(to right, rgb(147, 51, 234), rgb(59, 130, 246));
  color: #fff;
  font-weight: 500;
  padding: 0.75rem 1.5rem;

  &:hover {
    background: linear-gradient(to right, rgb(126, 34, 206), rgb(37, 99, 235));
  }

  &.full-width {
    width: 100%;
  }
}

.secondary-btn {
  border: 1px solid rgb(113, 113, 122);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-weight: 500;
  padding: 0.75rem 1.5rem;

  &:hover {
    background: rgb(39, 39, 42);
  }
}

// Section Styles
.section-header {
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(to right, #fff, rgb(196, 181, 253));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.125rem;
    color: rgb(161, 161, 170);
  }
}

// Why Choose Us
.why-choose-us {
  padding: 5rem 0;
  background: rgb(9, 9, 11);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  text-align: center;
  padding: 2rem;
  border-radius: 1rem;
  background: rgba(39, 39, 42, 0.5);
  border: 1px solid rgb(39, 39, 42);
  transition: transform 0.2s, border-color 0.2s;

  &:hover {
    transform: translateY(-4px);
    border-color: rgb(147, 51, 234);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 1rem 0 0.5rem;
  }

  p {
    color: rgb(161, 161, 170);
    line-height: 1.6;
  }
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: linear-gradient(135deg, rgb(147, 51, 234), rgb(59, 130, 246));
  color: #fff;
  margin-bottom: 1rem;
}

// Featured Categories
.featured-categories {
  padding: 5rem 0;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.category-card {
  border-radius: 1rem;
  background: rgb(39, 39, 42);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);

    .category-overlay {
      opacity: 1;
    }
  }
}

.category-image {
  position: relative;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.category-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s;
}

.category-info {
  padding: 1.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgb(161, 161, 170);
    margin-bottom: 0.5rem;
  }
}

.category-price {
  color: rgb(34, 197, 94);
  font-weight: 600;
}

// PC Builder CTA
.pc-builder-cta {
  padding: 5rem 0;
  background: rgb(9, 9, 11);
}

.cta-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.cta-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
}

.cta-feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    color: rgb(161, 161, 170);
  }
}

.cta-visual {
  display: flex;
  justify-content: center;
}

.builder-preview {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: auto;
  }
}

// Popular Builds
.popular-builds {
  padding: 5rem 0;
}

.builds-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.build-card {
  background: rgb(39, 39, 42);
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
}

.build-image {
  position: relative;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.build-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgb(239, 68, 68);
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
}

.build-info {
  padding: 1.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgb(161, 161, 170);
    margin-bottom: 1rem;
  }
}

.build-specs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.spec-tag {
  background: rgb(9, 9, 11);
  color: rgb(161, 161, 170);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
}

.build-pricing {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.current-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(34, 197, 94);
}

.original-price {
  font-size: 1rem;
  color: rgb(161, 161, 170);
  text-decoration: line-through;
}

// Repair Services
.repair-services {
  padding: 5rem 0;
  background: rgb(9, 9, 11);
}

.repair-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.repair-features {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}

.repair-feature {
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  h4 {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  p {
    color: rgb(161, 161, 170);
    font-size: 0.875rem;
  }
}

.repair-visual {
  img {
    width: 100%;
    border-radius: 1rem;
  }
}

// Careers
.careers-preview {
  padding: 5rem 0;
}

.careers-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.open-positions {
  margin: 2rem 0;

  h4 {
    font-weight: 600;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      color: rgb(161, 161, 170);
      padding: 0.5rem 0;
      border-bottom: 1px solid rgb(39, 39, 42);

      &:before {
        content: "→";
        color: rgb(147, 51, 234);
        margin-right: 0.5rem;
      }
    }
  }
}

.careers-stats {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.stat-card {
  text-align: center;
  padding: 2rem;
  background: rgba(39, 39, 42, 0.5);
  border-radius: 1rem;

  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: rgb(147, 51, 234);
    margin-bottom: 0.5rem;
  }

  p {
    color: rgb(161, 161, 170);
    font-size: 0.875rem;
  }
}

// Newsletter
.newsletter-signup {
  padding: 5rem 0;
  background: rgb(9, 9, 11);
}

.newsletter-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
}

.newsletter-form {
  display: flex;
  gap: 1rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
}

.email-input {
  flex: 1;
}

// Footer
.footer {
  background: rgb(9, 9, 11);
  border-top: 1px solid rgb(39, 39, 42);
  padding: 3rem 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section {
  h4 {
    font-weight: 600;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: rgb(161, 161, 170);
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
          color: #fff;
        }
      }
    }
  }

  p {
    color: rgb(161, 161, 170);
    line-height: 1.6;
    margin-bottom: 1rem;
  }
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 0.5rem;
}

.social-btn {
  color: rgb(161, 161, 170);

  &:hover {
    color: rgb(147, 51, 234);
  }
}

.contact-info {
  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 1rem;
    color: rgb(161, 161, 170);

    .q-icon {
      margin-top: 0.125rem;
      color: rgb(147, 51, 234);
    }
  }
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgb(39, 39, 42);
  flex-wrap: wrap;
  gap: 1rem;

  p {
    color: rgb(161, 161, 170);
    margin: 0;
  }
}

.footer-links {
  display: flex;
  gap: 2rem;

  a {
    color: rgb(161, 161, 170);
    text-decoration: none;
    font-size: 0.875rem;

    &:hover {
      color: #fff;
    }
  }

  @media (max-width: 640px) {
    gap: 1rem;
  }
}
</style>
