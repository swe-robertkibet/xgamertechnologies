<!-- src/components/landing-page/HeroSection.vue -->
<template>
  <section class="hero-section">
    <div class="hero-background">
      <div class="hero-overlay"></div>
      <img :src="props.backgroundImage" alt="Gaming PC Setup" class="hero-image" />
    </div>
    <div class="hero-content">
      <div class="hero-text">
        <div class="hero-badge">
          {{ props.badge }}
        </div>
        <h1 class="hero-title" v-html="props.title">
        </h1>
        <p class="hero-subtitle">
          {{ props.subtitle }}
        </p>
        <div class="hero-actions">
          <q-btn unelevated class="primary-btn" @click="$emit('startCustomBuild')">
            {{ props.primaryButtonText }}
            <q-icon name="chevron_right" class="q-ml-sm" />
          </q-btn>
          <q-btn outline class="secondary-btn" @click="$emit('browseDeals')">
            {{ props.secondaryButtonText }}
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
  title?: string
  subtitle?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  backgroundImage?: string
}

const props = withDefaults(defineProps<Props>(), {
  badge: 'Premium Gaming Hardware',
  title: 'Build Your Dream<br />Gaming Rig Today',
  subtitle: 'Premium Gaming Hardware • Expert Builds • Delivered Nationwide',
  primaryButtonText: 'Start Your Custom Build',
  secondaryButtonText: 'Browse Hot Deals',
  backgroundImage: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
})

defineEmits<{
  startCustomBuild: []
  browseDeals: []
}>()
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  height: calc(100vh - 4rem); // Subtract header height (4rem) to make header + hero = 100vh
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
  background: $hero-overlay;
  z-index: $z-overlay;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-content {
  position: relative;
  z-index: $z-hero-content;
  display: flex;
  height: 100%;
  align-items: center;
  max-width: $breakpoint-xl;
  margin: 0 auto;
  padding: $container-padding;
}

.hero-text {
  max-width: 48rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.hero-badge {
  background: $hero-badge-bg;
  color: $hero-badge-text;
  padding: 0.25rem 0.75rem;
  border-radius: $border-radius-full;
  font-size: $font-size-small;
  display: inline-block;
  width: fit-content;
}

.hero-title {
  font-size: $font-size-hero;
  font-weight: $font-weight-extrabold;
  line-height: $line-height-tight;
  letter-spacing: -0.025em;
  background: $gradient-text;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: $font-size-body;
  color: $text-secondary;
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
  background: linear-gradient(to top, $bg-primary, transparent);
}

.primary-btn {
  background: $gradient-primary;
  color: $text-primary;
  font-weight: $font-weight-medium;
  padding: 0.75rem 1.5rem;

  &:hover {
    background: $gradient-primary-hover;
  }
}

.secondary-btn {
  border: 1px solid $btn-secondary-border;
  background: $btn-secondary-bg;
  color: $text-primary;
  font-weight: $font-weight-medium;
  padding: 0.75rem 1.5rem;

  &:hover {
    background: $btn-secondary-hover;
  }
}

// Responsive adjustments
@media (max-width: $breakpoint-md) {
  .hero-section {
    height: calc(100vh - 4rem); // Keep same calculation on mobile
  }

  .hero-text {
    max-width: 100%;
  }

  .hero-actions {
    flex-direction: column;
    align-items: flex-start;

    .primary-btn,
    .secondary-btn {
      width: 100%;
      justify-content: center;
    }
  }
}

@media (max-width: $breakpoint-sm) {
  .hero-section {
    height: calc(100vh - 4rem); // Maintain full height minus header
  }
}
</style>
