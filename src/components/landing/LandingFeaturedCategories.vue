<template>
  <section class="featured-categories">
    <div class="container">
      <div class="section-header">
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
      </div>
      <div class="categories-grid">
        <div class="category-card" v-for="category in categories" :key="category.title"
          @click="handleCategoryClick(category)">
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
export interface Category {
  title: string
  description: string
  image: string
  startingPrice: number
  slug: string
}

interface Props {
  title?: string
  subtitle?: string
  categories?: Category[]
}

interface Emits {
  (e: 'category-click', category: Category): void
}

withDefaults(defineProps<Props>(), {
  title: 'Featured Categories',
  subtitle: 'Explore our premium gaming hardware collection',
  categories: () => [
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
  ]
})

const emit = defineEmits<Emits>()

const handleCategoryClick = (category: Category) => {
  emit('category-click', category)
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.featured-categories {
  padding: 5rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(to right, #fff, rgb(196, 181, 253));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.125rem;
    color: rgb(161, 161, 170);
  }
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.category-card {
  border-radius: 1rem;
  background: rgb(39, 39, 42);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;

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
  transition: opacity 0.2s;
}

.category-info {
  padding: 1.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgb(161, 161, 170);
    margin-bottom: 0.5rem;
  }
}

.category-price {
  color: rgb(34, 197, 94);
  font-weight: 600;
}
</style>
