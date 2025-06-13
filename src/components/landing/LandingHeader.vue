<!-- src/components/landing-page/LandingHeader.vue -->
<template>
  <header class="landing-header">
    <div class="header-container">
      <div class="header-brand">
        <router-link to="/" class="brand-link">
          <div class="logo-gradient"></div>
          <span class="brand-text">TECH FUSION</span>
        </router-link>
      </div>

      <nav class="main-nav">
        <router-link v-for="link in navigationLinks" :key="link.href" :to="link.href" class="nav-link">
          {{ link.label }}
        </router-link>
      </nav>

      <div class="header-actions">
        <q-btn flat round icon="search" class="header-btn" />
        <q-btn flat round icon="person" class="header-btn" />
        <q-btn flat round icon="shopping_cart" class="header-btn">
          <q-badge floating color="purple" rounded>{{ cartItemCount }}</q-badge>
        </q-btn>
        <q-btn flat round icon="menu" class="header-btn mobile-only" @click="toggleMobileMenu" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { NavigationLink } from './landing-types'

interface Props {
  cartItemCount?: number
}

withDefaults(defineProps<Props>(), {
  cartItemCount: 3
})

const emit = defineEmits<{
  toggleMobileMenu: []
}>()

const navigationLinks = ref<NavigationLink[]>([
  { label: 'PC Builder', href: '/builder' },
  { label: 'Gaming PCs', href: '/gaming' },
  { label: 'Components', href: '/components' },
  { label: 'Deals', href: '/deals' },
  { label: 'Support', href: '/support' }
])

const toggleMobileMenu = () => {
  emit('toggleMobileMenu')
}
</script>

<style lang="scss" scoped>
.landing-header {
  position: sticky;
  top: 0;
  z-index: $z-header;
  width: 100%;
  border-bottom: 1px solid $border-primary;
  background: $bg-primary;
  backdrop-filter: blur(10px);
}

.header-container {
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  padding: $container-padding;
  max-width: $breakpoint-xl;
  margin: 0 auto;
}

.header-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
  border-radius: $border-radius-full;
  background: linear-gradient(135deg, $brand-gradient-start, $brand-gradient-middle, $brand-gradient-end);
}

.brand-text {
  font-weight: $font-weight-bold;
  letter-spacing: 0.05em;
  display: none;

  @media (min-width: $breakpoint-sm) {
    display: inline-block;
  }
}

.main-nav {
  display: none;
  align-items: center;
  gap: 2rem;

  @media (min-width: $breakpoint-md) {
    display: flex;
  }
}

.nav-link {
  color: $text-secondary;
  text-decoration: none;
  font-weight: $font-weight-medium;
  transition: color $transition-default;

  &:hover {
    color: $text-primary;
  }

  &.router-link-active {
    color: $text-primary;
  }
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.header-btn {
  color: $text-primary;

  &:hover {
    background: $bg-card;
  }
}

.mobile-only {
  @media (min-width: $breakpoint-md) {
    display: none;
  }
}
</style>
