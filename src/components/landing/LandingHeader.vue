<template>
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
          <q-badge floating color="purple" rounded>{{ cartItemCount }}</q-badge>
        </q-btn>
        <q-btn flat round icon="menu" class="header-btn mobile-only" @click="toggleMobileMenu" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
interface Props {
  cartItemCount?: number
}

interface Emits {
  (e: 'toggle-mobile-menu'): void
}

withDefaults(defineProps<Props>(), {
  cartItemCount: 0
})

const emit = defineEmits<Emits>()

const toggleMobileMenu = () => {
  emit('toggle-mobile-menu')
}
</script>

<style lang="scss" scoped>
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
</style>
