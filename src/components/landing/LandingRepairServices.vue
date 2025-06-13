<!-- src/components/landing-page/RepairServices.vue -->
<template>
  <section class="repair-services">
    <div class="container">
      <div class="repair-content">
        <!-- Left Content -->
        <div class="repair-text">
          <div class="section-header">
            <h2>{{ props.title }}</h2>
            <p class="main-description">{{ props.description }}</p>
          </div>

          <!-- Features Grid -->
          <div class="repair-features-grid">
            <div class="repair-feature-card" v-for="feature in features" :key="feature.title">
              <div class="feature-icon-wrapper">
                <q-icon :name="feature.icon" size="1.5rem" />
              </div>
              <div class="feature-content">
                <h4>{{ feature.title }}</h4>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </div>

          <!-- Service Stats -->
          <div class="service-stats">
            <div class="stat-item" v-for="stat in serviceStats" :key="stat.label">
              <span class="stat-number">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>

          <!-- CTA Section -->
          <div class="cta-section">
            <q-btn unelevated size="lg" class="primary-btn" @click="$emit('bookRepair')">
              {{ props.buttonText }}
              <q-icon name="arrow_forward" class="q-ml-sm" />
            </q-btn>
            <div class="contact-info">
              <q-icon name="phone" size="1rem" />
              <span>Call us: +1 (555) 123-TECH</span>
            </div>
          </div>
        </div>

        <!-- Right Visual -->
        <div class="repair-visual">
          <div class="image-container">
            <img :src="props.serviceImage" :alt="props.imageAlt" />
            <div class="image-overlay">
              <div class="overlay-badge">
                <q-icon name="verified" />
                <span>Certified Repairs</span>
              </div>
            </div>
          </div>

          <!-- Process Steps -->
          <div class="process-steps">
            <h4>Our Repair Process</h4>
            <div class="steps-list">
              <div class="step-item" v-for="(step, index) in repairProcess" :key="step">
                <div class="step-number">{{ index + 1 }}</div>
                <span class="step-text">{{ step }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { RepairFeature } from './landing-types'

interface ServiceStat {
  value: string
  label: string
}

interface Props {
  title?: string
  description?: string
  buttonText?: string
  serviceImage?: string
  imageAlt?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Professional Repair Services',
  description: 'Expert technicians ready to diagnose and fix your gaming rig. From hardware upgrades to virus removal, we\'ve got you covered.',
  buttonText: 'Book Repair Service',
  serviceImage: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  imageAlt: 'Repair Services'
})

defineEmits<{
  bookRepair: []
}>()

const features = ref<RepairFeature[]>([
  {
    icon: 'speed',
    title: 'Fast Turnaround',
    description: 'Most repairs completed within 24-48 hours'
  },
  {
    icon: 'verified',
    title: 'Certified Technicians',
    description: 'Industry-certified professionals with 10+ years experience'
  },
  {
    icon: 'security',
    title: 'Warranty Protection',
    description: '90-day warranty on all repair work'
  },
  {
    icon: 'support',
    title: 'Free Diagnostics',
    description: 'No charge for initial problem assessment'
  }
])

const serviceStats = ref<ServiceStat[]>([
  { value: '24-48h', label: 'Avg. Repair Time' },
  { value: '98%', label: 'Success Rate' },
  { value: '5000+', label: 'PCs Repaired' }
])

const repairProcess = ref<string[]>([
  'Free Diagnosis',
  'Quote Approval',
  'Expert Repair',
  'Quality Testing',
  'Delivery'
])
</script>

<style lang="scss" scoped>
.repair-services {
  padding: $section-padding;
  background: $bg-secondary;
}

.container {
  max-width: $breakpoint-xl;
  margin: 0 auto;
  padding: $container-padding;
}

.repair-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: flex-start;

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.repair-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section-header {
  h2 {
    font-size: $font-size-section-title;
    font-weight: $font-weight-bold;
    margin-bottom: 1rem;
    color: $text-primary;
    line-height: 1.2;
  }

  .main-description {
    font-size: $font-size-body;
    color: $text-secondary;
    line-height: $line-height-normal;
    margin: 0;
  }
}

.repair-features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.repair-feature-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: $bg-card;
  border-radius: $border-radius-card;
  border: 1px solid $border-primary;
  transition: all $transition-default;

  &:hover {
    border-color: $border-hover;
    transform: translateY(-2px);
  }
}

.feature-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: $border-radius-button;
  background: rgba(147, 51, 234, 0.1);
  color: $icon-primary;
  flex-shrink: 0;
}

.feature-content {
  flex: 1;

  h4 {
    font-weight: $font-weight-semibold;
    margin-bottom: 0.5rem;
    color: $text-primary;
    font-size: 1.1rem;
  }

  p {
    color: $text-secondary;
    font-size: $font-size-small;
    line-height: $line-height-normal;
    margin: 0;
  }
}

.service-stats {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background: rgba(147, 51, 234, 0.05);
  border-radius: $border-radius-card;
  border: 1px solid rgba(147, 51, 234, 0.2);

  @media (max-width: $breakpoint-sm) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: $font-weight-bold;
  color: $icon-primary;
  line-height: 1;
}

.stat-label {
  font-size: $font-size-small;
  color: $text-secondary;
  margin-top: 0.25rem;
}

.cta-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: $text-secondary;
  font-size: $font-size-small;

  .q-icon {
    color: $icon-primary;
  }
}

.repair-visual {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.image-container {
  position: relative;
  border-radius: $border-radius-card;
  overflow: hidden;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
  }
}

.image-overlay {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.overlay-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.8);
  color: $text-primary;
  border-radius: $border-radius-button;
  font-size: $font-size-small;
  font-weight: $font-weight-medium;

  .q-icon {
    color: $icon-primary;
  }
}

.process-steps {
  h4 {
    font-weight: $font-weight-semibold;
    margin-bottom: 1rem;
    color: $text-primary;
    text-align: center;
  }
}

.steps-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.step-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: $bg-card;
  border-radius: $border-radius-button;
  transition: all $transition-default;

  &:hover {
    background: $bg-card-hover;
  }
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: $gradient-primary;
  color: $text-primary;
  font-weight: $font-weight-bold;
  font-size: $font-size-small;
  flex-shrink: 0;
}

.step-text {
  color: $text-secondary;
  font-size: $font-size-small;
  font-weight: $font-weight-medium;
}

.primary-btn {
  background: $gradient-primary;
  color: $text-primary;
  font-weight: $font-weight-medium;
  padding: 1rem 2rem;
  align-self: flex-start;

  &:hover {
    background: $gradient-primary-hover;
  }
}

@media (max-width: $breakpoint-md) {
  .repair-features-grid {
    grid-template-columns: 1fr;
  }

  .service-stats {
    margin: 1rem 0;
  }

  .image-container img {
    height: 250px;
  }
}
</style>
