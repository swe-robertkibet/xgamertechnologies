<template>
  <div class="landing-page">
    <!-- Header -->
    <LandingHeader :cart-item-count="cartItemCount" @toggle-mobile-menu="handleMobileMenuToggle" />

    <main>
      <!-- Hero Section -->
      <LandingHero @primary-action="startCustomBuild" @secondary-action="browseDeals" />

      <!-- Why Choose Us -->
      <LandingWhyChooseUs :features="whyChooseUsFeatures" />

      <!-- Featured Categories -->
      <LandingFeaturedCategories :categories="featuredCategories" @category-click="navigateToCategory" />

      <!-- Custom PC Builder CTA -->
      <LandingPcBuilderCta @cta-click="startBuilder" />

      <!-- Popular Builds / Weekly Deals -->
      <LandingPopularBuilds :builds="popularBuilds" @build-click="viewBuild" />

      <!-- Repair Services Preview -->
      <LandingRepairServices @book-repair="bookRepair" />

      <!-- Careers Preview -->
      <LandingCareers @view-careers="viewCareers" />

      <!-- Newsletter Signup -->
      <LandingNewsletter @newsletter-submit="subscribeNewsletter" />
    </main>

    <!-- Footer -->
    <LandingFooter @social-click="openSocial" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Import components
import LandingHeader from 'src/components/landing/LandingHeader.vue'
import LandingHero from 'src/components/landing/LandingHero.vue'
import LandingWhyChooseUs from 'src/components/landing/LandingWhyChooseUs.vue'
import LandingFeaturedCategories from 'src/components/landing/LandingFeaturedCategories.vue'
import LandingPcBuilderCta from 'src/components/landing/LandingPcBuilderCta.vue'
import LandingPopularBuilds from 'src/components/landing/LandingPopularBuilds.vue'
import LandingRepairServices from 'src/components/landing/LandingRepairServices.vue'
import LandingCareers from 'src/components/landing/LandingCareers.vue'
import LandingNewsletter from 'src/components/landing/LandingNewsletter.vue'
import LandingFooter from 'src/components/landing/LandingFooter.vue'

// Import types
import type { Feature } from 'src/components/landing/LandingWhyChooseUs.vue'
import type { Category } from 'src/components/landing/LandingFeaturedCategories.vue'
import type { Build } from 'src/components/landing/LandingPopularBuilds.vue'
import type { SocialLink } from 'src/components/landing/LandingFooter.vue'

const router = useRouter()

// Reactive data
const cartItemCount = ref(3)

// Why Choose Us features
const whyChooseUsFeatures = ref<Feature[]>([
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

// Featured categories
const featuredCategories = ref<Category[]>([
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

// Popular builds
const popularBuilds = ref<Build[]>([
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
])

// Event handlers
const handleMobileMenuToggle = () => {
  console.log('Mobile menu toggled')
  // Handle mobile menu toggle logic
}

const startCustomBuild = () => {
  void router.push('/pc-builder')
}

const browseDeals = () => {
  void router.push('/deals')
}

const navigateToCategory = (category: Category) => {
  void router.push(`/category/${category.slug}`)
}

const startBuilder = () => {
  void router.push('/pc-builder')
}

const viewBuild = (build: Build) => {
  void router.push(`/build/${build.id}`)
}

const bookRepair = () => {
  void router.push('/repair-booking')
}

const viewCareers = () => {
  void router.push('/careers')
}

const subscribeNewsletter = async (email: string) => {
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Newsletter subscription:', email)
    // Handle newsletter subscription logic here
    // You could call an API, show a success message, etc.
  } catch (error) {
    console.error('Newsletter subscription failed:', error)
  }
}

const openSocial = (social: SocialLink) => {
  window.open(social.url, '_blank')
}
</script>

<style lang="scss" scoped>
.landing-page {
  min-height: 100vh;
  background: #000;
  color: #fff;
}
</style>
