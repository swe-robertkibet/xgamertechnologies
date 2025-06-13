<!-- src/pages/IndexPage.vue -->
<template>
  <div class="landing-page">
    <LandingHeader :cart-item-count="cartItemCount" @toggle-mobile-menu="handleToggleMobileMenu" />

    <main>
      <LandingHero @start-custom-build="handleStartCustomBuild" @browse-deals="handleBrowseDeals" />

      <LandingWhyChooseUs />

      <LandingFeaturedCategories @navigate-to-category="handleNavigateToCategory" />

      <LandingPcBuilderCta @start-builder="handleStartBuilder" />

      <LandingPopularBuilds @view-build="handleViewBuild" />

      <LandingRepairServices @book-repair="handleBookRepair" />

      <LandingCareers @view-careers="handleViewCareers" />

      <LandingNewsletter @subscribe="handleSubscribeNewsletter" />
    </main>

    <LandingFooter @open-social="handleOpenSocial" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Import all landing page components from centralized index
import {
  LandingHeader,
  LandingHero,
  LandingWhyChooseUs,
  LandingFeaturedCategories,
  LandingPcBuilderCta,
  LandingPopularBuilds,
  LandingRepairServices,
  LandingCareers,
  LandingNewsletter,
  LandingFooter
} from 'components/landing'

const router = useRouter()

// Reactive data
const cartItemCount = ref(3)

// Event handlers
const handleToggleMobileMenu = () => {
  // Handle mobile menu toggle
  console.log('Toggle mobile menu')
}

const handleStartCustomBuild = () => {
  void router.push('/pc-builder')
}

const handleBrowseDeals = () => {
  void router.push('/deals')
}

const handleNavigateToCategory = (slug: string) => {
  void router.push(`/category/${slug}`)
}

const handleStartBuilder = () => {
  void router.push('/pc-builder')
}

const handleViewBuild = (buildId: number) => {
  void router.push(`/build/${buildId}`)
}

const handleBookRepair = () => {
  void router.push('/repair-booking')
}

const handleViewCareers = () => {
  void router.push('/careers')
}

const handleSubscribeNewsletter = async (email: string) => {
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Subscribing email:', email)
    // Handle successful subscription (show success message, etc.)
  } catch (error) {
    console.error('Subscription failed:', error)
    // Handle error (show error message, etc.)
  }
}

const handleOpenSocial = (url: string) => {
  window.open(url, '_blank')
}
</script>

<style lang="scss" scoped>
.landing-page {
  min-height: 100vh;
  background: $bg-primary;
  color: $text-primary;
}
</style>
