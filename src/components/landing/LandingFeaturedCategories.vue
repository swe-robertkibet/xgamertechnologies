<!-- src/components/landing-page/FeaturedCategories.vue -->
<template>
  <section class="featured-categories">
    <div class="container">
      <div class="section-header">
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
      </div>
      <div class="categories-grid">
        <div class="category-card" v-for="category in (categories || defaultCategories)" :key="category.title"
          @click="$emit('navigateToCategory', category.slug)">
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
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { FeaturedCategory } from './landing-types'

interface Props {
  title?: string
  subtitle?: string
  categories?: FeaturedCategory[]
}

const {
  title = 'Featured Categories',
  subtitle = 'Explore our premium gaming hardware collection',
  categories
} = defineProps<Props>()

defineEmits<{
  navigateToCategory: [slug: string]
}>()

const defaultCategories = ref<FeaturedCategory[]>([
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
</script>

<style lang="scss" scoped>
.featured-categories {
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

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.category-card {
  border-radius: $border-radius-card;
  background: $bg-card;
  overflow: hidden;
  cursor: pointer;
  transition: $transition-transform;

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
  transition: opacity $transition-default;
}

.category-info {
  padding: $card-padding-small;

  h3 {
    font-size: $font-size-card-title;
    font-weight: $font-weight-semibold;
    margin-bottom: 0.5rem;
    color: $text-primary;
  }

  p {
    color: $text-secondary;
    margin-bottom: 0.5rem;
  }
}

.category-price {
  color: $price-current;
  font-weight: $font-weight-semibold;
}
</style>
