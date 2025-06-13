<template>
  <section class="popular-builds">
    <div class="container">
      <div class="section-header">
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
      </div>
      <div class="builds-grid">
        <div class="build-card" v-for="build in builds" :key="build.id">
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
              <span v-if="build.originalPrice" class="original-price">
                ${{ build.originalPrice }}
              </span>
            </div>
            <q-btn unelevated class="primary-btn full-width" @click="handleBuildClick(build)">
              View Build
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
export interface Build {
  id: number
  name: string
  description: string
  image: string
  keySpecs: string[]
  currentPrice: number
  originalPrice?: number
  isOnSale: boolean
  discount: number
}

interface Props {
  title?: string
  subtitle?: string
  builds?: Build[]
}

interface Emits {
  (e: 'build-click', build: Build): void
}

withDefaults(defineProps<Props>(), {
  title: 'Popular Builds & Weekly Deals',
  subtitle: 'Hand-picked configurations from our experts',
  builds: () => [
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
      originalPrice: undefined,
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
  ]
})

const emit = defineEmits<Emits>()

const handleBuildClick = (build: Build) => {
  emit('build-click', build)
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.popular-builds {
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

.builds-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.build-card {
  background: rgb(39, 39, 42);
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.2s;

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
  background: rgb(239, 68, 68);
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
}

.build-info {
  padding: 1.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgb(161, 161, 170);
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
  background: rgb(9, 9, 11);
  color: rgb(161, 161, 170);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
}

.build-pricing {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.current-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(34, 197, 94);
}

.original-price {
  font-size: 1rem;
  color: rgb(161, 161, 170);
  text-decoration: line-through;
}

.primary-btn {
  background: linear-gradient(to right, rgb(147, 51, 234), rgb(59, 130, 246));
  color: #fff;
  font-weight: 500;
  padding: 0.75rem 1.5rem;

  &:hover {
    background: linear-gradient(to right, rgb(126, 34, 206), rgb(37, 99, 235));
  }

  &.full-width {
    width: 100%;
  }
}
</style>
