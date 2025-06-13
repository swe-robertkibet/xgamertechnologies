<!-- src/components/landing-page/PopularBuilds.vue -->
<template>
  <section class="popular-builds">
    <div class="container">
      <div class="section-header">
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
      </div>
      <div class="builds-grid">
        <div class="build-card" v-for="build in builds" :key="build.name">
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
            <q-btn unelevated class="primary-btn full-width" @click="$emit('viewBuild', build.id)">
              View Build
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { PopularBuild } from './landing-types'

interface Props {
  title?: string
  subtitle?: string
  builds?: PopularBuild[]
}

withDefaults(defineProps<Props>(), {
  title: 'Popular Builds & Weekly Deals',
  subtitle: 'Hand-picked configurations from our experts'
})

defineEmits<{
  viewBuild: [buildId: number]
}>()

const builds = ref<PopularBuild[]>([
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
</script>

<style lang="scss" scoped>
.popular-builds {
  padding: $section-padding;
  background: $bg-primary;
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

.builds-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.build-card {
  background: $bg-card;
  border-radius: $border-radius-card;
  overflow: hidden;
  transition: $transition-transform;

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
  background: $sale-badge;
  color: $text-primary;
  padding: 0.25rem 0.75rem;
  border-radius: $border-radius-button;
  font-size: $font-size-small;
  font-weight: $font-weight-semibold;
}

.build-info {
  padding: $card-padding-small;

  h3 {
    font-size: $font-size-card-title;
    font-weight: $font-weight-semibold;
    margin-bottom: 0.5rem;
    color: $text-primary;
  }

  p {
    color: $text-secondary;
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
  background: $bg-secondary;
  color: $text-secondary;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: $font-size-xs;
}

.build-pricing {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.current-price {
  font-size: 1.5rem;
  font-weight: $font-weight-bold;
  color: $price-current;
}

.original-price {
  font-size: 1rem;
  color: $price-original;
  text-decoration: line-through;
}

.primary-btn {
  background: $gradient-primary;
  color: $text-primary;
  font-weight: $font-weight-medium;

  &:hover {
    background: $gradient-primary-hover;
  }

  &.full-width {
    width: 100%;
  }
}
</style>
