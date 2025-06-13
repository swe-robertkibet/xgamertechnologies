<!-- src/components/landing-page/LandingFooter.vue -->
<template>
  <footer class="landing-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-brand">
            <div class="logo-gradient"></div>
            <span class="brand-text">TECH FUSION</span>
          </div>
          <p>{{ props.brandDescription }}</p>
          <div class="social-links">
            <q-btn v-for="social in (props.socialLinks || defaultSocialLinks)" :key="social.name" round flat
              :icon="social.icon" class="social-btn" @click="$emit('openSocial', social.url)" />
          </div>
        </div>

        <div class="footer-section" v-for="section in footerSections" :key="section.title">
          <h4>{{ section.title }}</h4>
          <ul>
            <li v-for="link in section.links" :key="link.href">
              <a :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div class="footer-section contact-info">
          <h4>Contact Info</h4>
          <div class="contact-item" v-for="contact in contactInfo" :key="contact.text">
            <q-icon :name="contact.icon" />
            <span>{{ contact.text }}</span>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>{{ copyrightText }}</p>
        <div class="footer-links">
          <a v-for="link in bottomLinks" :key="link.href" :href="link.href">
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { SocialLink, FooterSection, ContactInfo, FooterLink } from './landing-types'

interface Props {
  brandDescription?: string
  copyrightText?: string
  socialLinks?: SocialLink[]
}

const props = withDefaults(defineProps<Props>(), {
  brandDescription: 'Building dream gaming rigs since 2015. Premium hardware, expert assembly, nationwide delivery.',
  copyrightText: '© 2025 Tech Fusion. All rights reserved.'
})

defineEmits<{
  openSocial: [url: string]
}>()

const defaultSocialLinks = ref<SocialLink[]>([
  { name: 'Facebook', icon: 'fab fa-facebook', url: 'https://facebook.com/techfusion' },
  { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/techfusion' },
  { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/techfusion' },
  { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://youtube.com/techfusion' },
  { name: 'Discord', icon: 'fab fa-discord', url: 'https://discord.gg/techfusion' }
])

const footerSections = ref<FooterSection[]>([
  {
    title: 'Products',
    links: [
      { label: 'Gaming PCs', href: '/gaming-pcs' },
      { label: 'Components', href: '/components' },
      { label: 'Accessories', href: '/accessories' },
      { label: 'Special Deals', href: '/deals' }
    ]
  },
  {
    title: 'Services',
    links: [
      { label: 'PC Builder', href: '/pc-builder' },
      { label: 'Assembly Service', href: '/assembly' },
      { label: 'Repairs', href: '/repairs' },
      { label: 'Warranty', href: '/warranty' }
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Shipping Info', href: '/shipping' },
      { label: 'Returns', href: '/returns' }
    ]
  }
])

const contactInfo = ref<ContactInfo[]>([
  { icon: 'place', text: '123 Tech Street, Gaming City, GC 12345' },
  { icon: 'phone', text: '+1 (555) 123-GAME' },
  { icon: 'email', text: 'info@techfusion.com' },
  { icon: 'schedule', text: 'Mon-Fri: 9AM-8PM, Sat-Sun: 10AM-6PM' }
])

const bottomLinks = ref<FooterLink[]>([
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' }
])
</script>

<style lang="scss" scoped>
.landing-footer {
  background: $bg-secondary;
  border-top: 1px solid $border-primary;
  padding: 3rem 0 1rem;
}

.container {
  max-width: $breakpoint-xl;
  margin: 0 auto;
  padding: $container-padding;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section {
  h4 {
    font-weight: $font-weight-semibold;
    margin-bottom: 1rem;
    color: $text-primary;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: $text-secondary;
        text-decoration: none;
        transition: color $transition-default;

        &:hover {
          color: $text-primary;
        }
      }
    }
  }

  p {
    color: $text-secondary;
    line-height: $line-height-normal;
    margin-bottom: 1rem;
  }
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.logo-gradient {
  position: relative;
  height: 2rem;
  width: 2rem;
  overflow: hidden;
  border-radius: $border-radius-full;
  background: linear-gradient(135deg, $brand-gradient-start, $brand-gradient-middle, $brand-gradient-end);
}

.brand-text {
  font-weight: $font-weight-bold;
  letter-spacing: 0.05em;
  color: $text-primary;
}

.social-links {
  display: flex;
  gap: 0.5rem;
}

.social-btn {
  color: $text-secondary;

  &:hover {
    color: $icon-primary;
  }
}

.contact-info {
  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 1rem;
    color: $text-secondary;

    .q-icon {
      margin-top: 0.125rem;
      color: $icon-primary;
    }
  }
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid $border-primary;
  flex-wrap: wrap;
  gap: 1rem;

  p {
    color: $text-secondary;
    margin: 0;
  }
}

.footer-links {
  display: flex;
  gap: 2rem;

  a {
    color: $text-secondary;
    text-decoration: none;
    font-size: $font-size-small;

    &:hover {
      color: $text-primary;
    }
  }

  @media (max-width: $breakpoint-sm) {
    gap: 1rem;
  }
}
</style>
