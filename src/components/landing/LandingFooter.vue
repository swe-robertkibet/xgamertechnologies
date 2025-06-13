<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-brand">
            <div class="logo-gradient"></div>
            <span class="brand-text">{{ brandName }}</span>
          </div>
          <p>{{ brandDescription }}</p>
          <div class="social-links">
            <q-btn v-for="social in socialLinks" :key="social.name" round flat :icon="social.icon" class="social-btn"
              @click="handleSocialClick(social)" />
          </div>
        </div>

        <div class="footer-section">
          <h4>Products</h4>
          <ul>
            <li v-for="link in productLinks" :key="link.name">
              <a :href="link.url">{{ link.name }}</a>
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Services</h4>
          <ul>
            <li v-for="link in serviceLinks" :key="link.name">
              <a :href="link.url">{{ link.name }}</a>
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Support</h4>
          <ul>
            <li v-for="link in supportLinks" :key="link.name">
              <a :href="link.url">{{ link.name }}</a>
            </li>
          </ul>
        </div>

        <div class="footer-section contact-info">
          <h4>Contact Info</h4>
          <div class="contact-item" v-for="contact in contactInfo" :key="contact.type">
            <q-icon :name="contact.icon" />
            <span>{{ contact.value }}</span>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>{{ copyrightText }}</p>
        <div class="footer-links">
          <a v-for="link in legalLinks" :key="link.name" :href="link.url">
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
export interface FooterLink {
  name: string
  url: string
}

export interface SocialLink {
  name: string
  icon: string
  url: string
}

export interface ContactInfo {
  type: string
  icon: string
  value: string
}

interface Props {
  brandName?: string
  brandDescription?: string
  copyrightText?: string
  socialLinks?: SocialLink[]
  productLinks?: FooterLink[]
  serviceLinks?: FooterLink[]
  supportLinks?: FooterLink[]
  legalLinks?: FooterLink[]
  contactInfo?: ContactInfo[]
}

interface Emits {
  (e: 'social-click', social: SocialLink): void
}

withDefaults(defineProps<Props>(), {
  brandName: 'TECH FUSION',
  brandDescription: 'Building dream gaming rigs since 2015. Premium hardware, expert assembly, nationwide delivery.',
  copyrightText: '© 2025 Tech Fusion. All rights reserved.',
  socialLinks: () => [
    { name: 'Facebook', icon: 'fab fa-facebook', url: 'https://facebook.com/techfusion' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/techfusion' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/techfusion' },
    { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://youtube.com/techfusion' },
    { name: 'Discord', icon: 'fab fa-discord', url: 'https://discord.gg/techfusion' }
  ],
  productLinks: () => [
    { name: 'Gaming PCs', url: '/gaming-pcs' },
    { name: 'Components', url: '/components' },
    { name: 'Accessories', url: '/accessories' },
    { name: 'Special Deals', url: '/deals' }
  ],
  serviceLinks: () => [
    { name: 'PC Builder', url: '/pc-builder' },
    { name: 'Assembly Service', url: '/assembly' },
    { name: 'Repairs', url: '/repairs' },
    { name: 'Warranty', url: '/warranty' }
  ],
  supportLinks: () => [
    { name: 'Contact Us', url: '/contact' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Shipping Info', url: '/shipping' },
    { name: 'Returns', url: '/returns' }
  ],
  legalLinks: () => [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' }
  ],
  contactInfo: () => [
    { type: 'address', icon: 'place', value: '123 Tech Street, Gaming City, GC 12345' },
    { type: 'phone', icon: 'phone', value: '+1 (555) 123-GAME' },
    { type: 'email', icon: 'email', value: 'info@techfusion.com' },
    { type: 'hours', icon: 'schedule', value: 'Mon-Fri: 9AM-8PM, Sat-Sun: 10AM-6PM' }
  ]
})

const emit = defineEmits<Emits>()

const handleSocialClick = (social: SocialLink) => {
  emit('social-click', social)
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

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
    color: #fff;
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
  color: #fff;
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
