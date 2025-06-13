<!-- src/components/landing-page/LandingFooter.vue -->
<template>
  <footer class="landing-footer">
    <!-- Newsletter CTA Section - Better integration -->
    <div class="newsletter-cta">
      <div class="newsletter-bg-pattern"></div>
      <div class="container">
        <div class="newsletter-wrapper">
          <div class="newsletter-content">
            <div class="newsletter-badge">
              <q-icon name="notifications_active" />
              <span>Stay in the Game</span>
            </div>
            <h2>Level Up Your Gaming Knowledge</h2>
            <p>Get exclusive deals, latest hardware releases, pro gaming tips, and early access to new builds delivered
              to your inbox.</p>

            <div class="newsletter-form">
              <div class="input-wrapper">
                <q-input v-model="email" placeholder="Enter your email address" outlined dense class="email-input" dark
                  @keyup.enter="handleSubscribe">
                  <template v-slot:prepend>
                    <q-icon name="email" />
                  </template>
                </q-input>
              </div>
              <q-btn unelevated size="lg" class="subscribe-btn" @click="handleSubscribe" :loading="isSubscribing"
                :disable="!email">
                <q-icon name="rocket_launch" class="q-mr-sm" />
                Subscribe
              </q-btn>
            </div>

            <div class="newsletter-benefits">
              <div class="benefit-item">
                <q-icon name="flash_on" />
                <span>Instant Notifications</span>
              </div>
              <div class="benefit-item">
                <q-icon name="local_offer" />
                <span>Exclusive Deals</span>
              </div>
              <div class="benefit-item">
                <q-icon name="trending_up" />
                <span>Market Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Footer Content -->
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand Column -->
          <div class="footer-brand">
            <div class="brand-section">
              <div class="footer-logo">
                <div class="logo-gradient"></div>
                <div class="brand-info">
                  <span class="brand-text">TECH FUSION</span>
                  <span class="brand-tagline">Gaming Excellence Since 2015</span>
                </div>
              </div>

              <p class="brand-description">{{ props.brandDescription }}</p>

              <div class="brand-stats">
                <div class="stat-item">
                  <span class="stat-number">10K+</span>
                  <span class="stat-label">PCs Built</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">99%</span>
                  <span class="stat-label">Satisfaction</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">24/7</span>
                  <span class="stat-label">Support</span>
                </div>
              </div>
            </div>

            <!-- Social & Contact -->
            <div class="contact-social-section">
              <div class="social-section">
                <h4>Connect With Us</h4>
                <div class="social-links">
                  <q-btn v-for="social in (props.socialLinks || defaultSocialLinks)" :key="social.name" round unelevated
                    :icon="social.icon" class="social-btn" @click="$emit('openSocial', social.url)"
                    :aria-label="social.name" />
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Links Grid -->
          <div class="footer-links-section">
            <div class="links-grid">
              <div class="footer-column" v-for="section in footerSections" :key="section.title">
                <h4>
                  <q-icon :name="section.icon" class="section-icon" />
                  {{ section.title }}
                </h4>
                <ul>
                  <li v-for="link in section.links" :key="link.href">
                    <a :href="link.href" @click="handleLinkClick(link.href, $event)">
                      <q-icon name="chevron_right" class="link-icon" />
                      {{ link.label }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="footer-contact">
            <h4>
              <q-icon name="support_agent" class="section-icon" />
              Get In Touch
            </h4>

            <div class="contact-methods">
              <div class="contact-item" v-for="contact in contactInfo" :key="contact.text">
                <div class="contact-icon">
                  <q-icon :name="contact.icon" />
                </div>
                <div class="contact-details">
                  <span class="contact-text">{{ contact.text }}</span>
                  <span v-if="contact.subtext" class="contact-subtext">{{ contact.subtext }}</span>
                </div>
              </div>
            </div>

            <div class="support-hours">
              <div class="hours-badge">
                <q-icon name="schedule" />
                <div>
                  <span class="hours-title">Support Hours</span>
                  <span class="hours-text">24/7 Online • Call: 9AM-8PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="container">
        <div class="bottom-content">
          <div class="copyright-section">
            <p class="copyright">{{ copyrightText }}</p>
            <div class="certifications">
              <span class="cert-item">
                <q-icon name="verified" />
                SSL Secured
              </span>
              <span class="cert-item">
                <q-icon name="security" />
                Privacy Protected
              </span>
            </div>
          </div>

          <div class="footer-bottom-links">
            <a v-for="link in bottomLinks" :key="link.href" :href="link.href">
              {{ link.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { SocialLink, FooterSection, ContactInfo, FooterLink } from './landing-types'

interface ContactInfoExtended extends ContactInfo {
  subtext?: string
}

interface FooterSectionExtended extends FooterSection {
  icon: string
}

interface Props {
  brandDescription?: string
  copyrightText?: string
  socialLinks?: SocialLink[]
}

const props = withDefaults(defineProps<Props>(), {
  brandDescription: 'Building dream gaming rigs since 2015. Premium hardware, expert assembly, nationwide delivery.',
  copyrightText: '© 2025 Tech Fusion. All rights reserved.'
})

const emit = defineEmits<{
  openSocial: [url: string]
  subscribe: [email: string]
}>()

// Newsletter functionality
const email = ref('')
const isSubscribing = ref(false)

const handleSubscribe = () => {
  if (!email.value) return

  isSubscribing.value = true
  try {
    emit('subscribe', email.value)
    email.value = ''
  } catch (error) {
    console.error('Subscription failed:', error)
  } finally {
    isSubscribing.value = false
  }
}

const handleLinkClick = (href: string, event: Event) => {
  if (href.startsWith('/')) {
    event.preventDefault()
    console.log('Navigate to:', href)
  }
}

const defaultSocialLinks = ref<SocialLink[]>([
  { name: 'Discord', icon: 'fab fa-discord', url: 'https://discord.gg/techfusion' },
  { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://youtube.com/techfusion' },
  { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/techfusion' },
  { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/techfusion' },
  { name: 'TikTok', icon: 'fab fa-tiktok', url: 'https://tiktok.com/@techfusion' }
])

const footerSections = ref<FooterSectionExtended[]>([
  {
    title: 'Products',
    icon: 'inventory_2',
    links: [
      { label: 'Gaming PCs', href: '/gaming-pcs' },
      { label: 'Custom Builds', href: '/custom-builds' },
      { label: 'Components', href: '/components' },
      { label: 'Accessories', href: '/accessories' },
      { label: 'Special Deals', href: '/deals' }
    ]
  },
  {
    title: 'Services',
    icon: 'build',
    links: [
      { label: 'PC Builder Tool', href: '/pc-builder' },
      { label: 'Assembly Service', href: '/assembly' },
      { label: 'Repair & Upgrade', href: '/repairs' },
      { label: 'Warranty Support', href: '/warranty' },
      { label: 'Tech Consultation', href: '/consultation' }
    ]
  },
  {
    title: 'Support',
    icon: 'help_center',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Live Chat', href: '/chat' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Shipping Info', href: '/shipping' },
      { label: 'Returns & Refunds', href: '/returns' }
    ]
  }
])

const contactInfo = ref<ContactInfoExtended[]>([
  {
    icon: 'phone',
    text: '+1 (555) 123-GAME',
    subtext: 'Sales & Support'
  },
  {
    icon: 'email',
    text: 'hello@techfusion.com',
    subtext: 'General Inquiries'
  },
  {
    icon: 'place',
    text: '123 Tech Street, Gaming City, GC 12345',
    subtext: 'Visit Our Showroom'
  }
])

const bottomLinks = ref<FooterLink[]>([
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
  { label: 'Accessibility', href: '/accessibility' }
])
</script>

<style lang="scss" scoped>
.landing-footer {
  background: $bg-secondary;
  position: relative;
  overflow: hidden;
}

.container {
  max-width: $breakpoint-xl;
  margin: 0 auto;
  padding: $container-padding;
}

/* Newsletter Section */
.newsletter-cta {
  position: relative;
  background: linear-gradient(135deg,
      rgba(147, 51, 234, 0.1) 0%,
      rgba(59, 130, 246, 0.1) 50%,
      rgba(239, 68, 68, 0.1) 100%);
  border-bottom: 1px solid $border-primary;
  padding: 4rem 0;
  margin-bottom: 0;
}

.newsletter-bg-pattern {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 40%),
    radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 40%),
    radial-gradient(circle at 40% 80%, rgba(239, 68, 68, 0.1) 0%, transparent 40%);
  animation: patternPulse 6s ease-in-out infinite;
}

@keyframes patternPulse {

  0%,
  100% {
    opacity: 0.5;
  }

  50% {
    opacity: 0.8;
  }
}

.newsletter-wrapper {
  position: relative;
  z-index: 2;
}

.newsletter-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.newsletter-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(147, 51, 234, 0.2);
  color: $text-primary;
  padding: 0.5rem 1rem;
  border-radius: $border-radius-full;
  font-size: $font-size-small;
  font-weight: $font-weight-medium;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(147, 51, 234, 0.3);

  .q-icon {
    color: $icon-primary;
  }
}

.newsletter-content h2 {
  font-size: 2.5rem;
  font-weight: $font-weight-bold;
  margin-bottom: 1rem;
  background: $gradient-text;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;

  @media (max-width: $breakpoint-md) {
    font-size: 2rem;
  }
}

.newsletter-content p {
  font-size: $font-size-body;
  color: $text-secondary;
  line-height: $line-height-normal;
  margin-bottom: 2rem;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: $breakpoint-sm) {
    flex-direction: column;
  }
}

.input-wrapper {
  flex: 1;
}

.email-input {
  :deep(.q-field__control) {
    background: rgba(0, 0, 0, 0.4);
    border-color: $border-primary;
    backdrop-filter: blur(10px);
  }

  :deep(.q-field__native) {
    color: $text-primary;
  }

  :deep(.q-field__prepend) {
    color: $text-secondary;
  }
}

.subscribe-btn {
  background: $gradient-primary;
  color: $text-primary;
  font-weight: $font-weight-medium;
  padding: 0.75rem 2rem;
  min-width: 140px;
  border-radius: $border-radius-button;

  &:hover {
    background: $gradient-primary-hover;
    transform: translateY(-2px);
  }
}

.newsletter-benefits {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: $breakpoint-sm) {
    gap: 1rem;
  }
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: $text-secondary;
  font-size: $font-size-small;

  .q-icon {
    color: $icon-primary;
  }
}

/* Main Footer */
.footer-main {
  padding: 4rem 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 1.5fr 1fr;
  gap: 4rem;

  @media (max-width: $breakpoint-lg) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

/* Brand Section */
.footer-brand {
  .footer-logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .logo-gradient {
    height: 3rem;
    width: 3rem;
    border-radius: $border-radius-full;
    background: linear-gradient(135deg, $brand-gradient-start, $brand-gradient-middle, $brand-gradient-end);
  }

  .brand-info {
    display: flex;
    flex-direction: column;
  }

  .brand-text {
    font-weight: $font-weight-bold;
    font-size: 1.5rem;
    letter-spacing: 0.05em;
    color: $text-primary;
  }

  .brand-tagline {
    color: $text-secondary;
    font-size: $font-size-small;
  }

  .brand-description {
    color: $text-secondary;
    line-height: $line-height-normal;
    margin-bottom: 2rem;
  }
}

.brand-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(147, 51, 234, 0.05);
  border-radius: $border-radius-card;
  border: 1px solid rgba(147, 51, 234, 0.1);

  @media (max-width: $breakpoint-sm) {
    flex-direction: column;
    gap: 1rem;
  }
}

.stat-item {
  text-align: center;

  .stat-number {
    display: block;
    font-size: 1.5rem;
    font-weight: $font-weight-bold;
    color: $icon-primary;
    line-height: 1;
  }

  .stat-label {
    font-size: $font-size-small;
    color: $text-secondary;
  }
}

.contact-social-section {
  .social-section h4 {
    font-weight: $font-weight-semibold;
    margin-bottom: 1rem;
    color: $text-primary;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .social-links {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .social-btn {
    background: rgba(147, 51, 234, 0.1);
    color: $text-secondary;
    transition: all $transition-default;

    &:hover {
      background: $gradient-primary;
      color: $text-primary;
      transform: translateY(-2px);
    }
  }
}

/* Links Section */
.links-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: $breakpoint-lg) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: $breakpoint-sm) {
    grid-template-columns: 1fr;
  }
}

.footer-column {
  h4 {
    font-weight: $font-weight-semibold;
    margin-bottom: 1rem;
    color: $text-primary;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;

    .section-icon {
      color: $icon-primary;
      font-size: 1.2rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.75rem;

    a {
      color: $text-secondary;
      text-decoration: none;
      font-size: $font-size-small;
      transition: all $transition-default;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .link-icon {
        font-size: 0.8rem;
        opacity: 0;
        transition: all $transition-default;
      }

      &:hover {
        color: $text-primary;
        transform: translateX(4px);

        .link-icon {
          opacity: 1;
        }
      }
    }
  }
}

/* Contact Section */
.footer-contact {
  h4 {
    font-weight: $font-weight-semibold;
    margin-bottom: 1.5rem;
    color: $text-primary;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;

    .section-icon {
      color: $icon-primary;
      font-size: 1.2rem;
    }
  }
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: $bg-card;
  border-radius: $border-radius-button;
  transition: all $transition-default;

  &:hover {
    background: $bg-card-hover;
    transform: translateY(-2px);
  }
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: $border-radius-button;
  background: rgba(147, 51, 234, 0.1);
  color: $icon-primary;
  flex-shrink: 0;
}

.contact-details {
  display: flex;
  flex-direction: column;

  .contact-text {
    color: $text-primary;
    font-weight: $font-weight-medium;
    font-size: $font-size-small;
  }

  .contact-subtext {
    color: $text-secondary;
    font-size: $font-size-xs;
  }
}

.support-hours {
  .hours-badge {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background: rgba(34, 197, 94, 0.1);
    border-radius: $border-radius-button;
    border: 1px solid rgba(34, 197, 94, 0.2);

    .q-icon {
      color: rgb(34, 197, 94);
      font-size: 1.5rem;
    }

    .hours-title {
      display: block;
      color: $text-primary;
      font-weight: $font-weight-medium;
      font-size: $font-size-small;
    }

    .hours-text {
      color: $text-secondary;
      font-size: $font-size-xs;
    }
  }
}

/* Footer Bottom */
.footer-bottom {
  padding: 1.5rem 0;
  border-top: 1px solid $border-primary;
  background: rgba(0, 0, 0, 0.3);
}

.bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    text-align: center;
  }
}

.copyright-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .copyright {
    color: $text-secondary;
    font-size: $font-size-small;
    margin: 0;
  }

  .certifications {
    display: flex;
    gap: 1rem;

    .cert-item {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      color: $text-secondary;
      font-size: $font-size-xs;

      .q-icon {
        color: rgb(34, 197, 94);
        font-size: 0.9rem;
      }
    }
  }
}

.footer-bottom-links {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  a {
    color: $text-secondary;
    text-decoration: none;
    font-size: $font-size-small;
    transition: color $transition-default;

    &:hover {
      color: $text-primary;
    }
  }

  @media (max-width: $breakpoint-sm) {
    gap: 1rem;
  }
}
</style>
