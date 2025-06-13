<!-- src/components/landing-page/WhyChooseUs.vue -->
<template>
  <section class="why-choose-us">
    <div class="container">
      <div class="section-header">
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
      </div>
      <div class="features-grid">
        <div class="feature-card" v-for="feature in (features || defaultFeatures)" :key="feature.title">
          <div class="feature-icon">
            <q-icon :name="feature.icon" size="2rem" />
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { WhyChooseUsFeature } from './landing-types'

interface Props {
  title?: string
  subtitle?: string
  features?: WhyChooseUsFeature[]
}

const {
  title = 'Why Choose Tech Fusion?',
  subtitle = 'Industry-leading expertise and unmatched customer service',
  features
} = defineProps<Props>()

const defaultFeatures = ref<WhyChooseUsFeature[]>([
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
</script>

<style lang="scss" scoped>
.why-choose-us {
  padding: $section-padding;
  background: $bg-secondary;
}

.container {
  max-width: $breakpoint-xl;
  margin: 0 auto;
  padding: $container-padding;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: $font-size-section-title;
    font-weight: $font-weight-bold;
    margin-bottom: 1rem;
    background: $gradient-section-title;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: $font-size-body;
    color: $text-secondary;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  text-align: center;
  padding: $card-padding;
  border-radius: $border-radius-card;
  background: $bg-card-hover;
  border: 1px solid $border-primary;
  transition: $transition-transform, border-color $transition-default;

  &:hover {
    transform: translateY(-4px);
    border-color: $border-hover;
  }

  h3 {
    font-size: $font-size-card-title;
    font-weight: $font-weight-semibold;
    margin: 1rem 0 0.5rem;
    color: $text-primary;
  }

  p {
    color: $text-secondary;
    line-height: $line-height-normal;
  }
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: $border-radius-full;
  background: $gradient-primary;
  color: $text-primary;
  margin-bottom: 1rem;
}
</style>
