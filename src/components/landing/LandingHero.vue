<template>
  <section class="hero-section">
    <div class="hero-background">
      <div class="hero-overlay"></div>
      <img :src="heroImage" :alt="heroImageAlt" class="hero-image" />
    </div>
    <div class="hero-content">
      <div class="hero-text">
        <div class="hero-badge">
          {{ badge }}
        </div>
        <h1 class="hero-title">
          <slot name="title">
            Build Your Dream<br />
            Gaming Rig Today
          </slot>
        </h1>
        <p class="hero-subtitle">
          {{ subtitle }}
        </p>
        <div class="hero-actions">
          <q-btn unelevated class="primary-btn" @click="handlePrimaryAction">
            {{ primaryButtonText }}
            <q-icon name="chevron_right" class="q-ml-sm" />
          </q-btn>
          <q-btn outline class="secondary-btn" @click="handleSecondaryAction">
            {{ secondaryButtonText }}
          </q-btn>
        </div>
      </div>
    </div>
    <div class="hero-gradient-bottom"></div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  badge?: string
  subtitle?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  heroImage?: string
  heroImageAlt?: string
}

interface Emits {
  (e: 'primary-action'): void
  (e: 'secondary-action'): void
}

withDefaults(defineProps<Props>(), {
  badge: 'Premium Gaming Hardware',
  subtitle: 'Premium Gaming Hardware • Expert Builds • Delivered Nationwide',
  primaryButtonText: 'Start Your Custom Build',
  secondaryButtonText: 'Browse Hot Deals',
  heroImage: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  heroImageAlt: 'Gaming PC Setup'
})

const emit = defineEmits<Emits>()

const handlePrimaryAction = () => {
  emit('primary-action')
}

const handleSecondaryAction = () => {
  emit('secondary-action')
}
</script>

<style lang="scss" scoped>
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

.primary-btn {
  background: linear-gradient(to right, rgb(147, 51, 234), rgb(59, 130, 246));
  color: #fff;
  font-weight: 500;
  padding: 0.75rem 1.5rem;

  &:hover {
    background: linear-gradient(to right, rgb(126, 34, 206), rgb(37, 99, 235));
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
</style>
