<!-- src/components/landing-page/RepairServices.vue -->
<template>
  <section class="repair-services">
    <div class="container">
      <div class="repair-content">
        <div class="repair-text">
          <h2>{{ props.title }}</h2>
          <p>{{ props.description }}</p>
          <div class="repair-features">
            <div class="repair-feature" v-for="feature in features" :key="feature.title">
              <q-icon :name="feature.icon" size="1.5rem" />
              <div>
                <h4>{{ feature.title }}</h4>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </div>
          <q-btn outline size="lg" class="secondary-btn" @click="$emit('bookRepair')">
            {{ props.buttonText }}
          </q-btn>
        </div>
        <div class="repair-visual">
          <img :src="props.serviceImage" :alt="props.imageAlt" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { RepairFeature } from './landing-types'

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
  }
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
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.repair-text {
  h2 {
    font-size: $font-size-section-title;
    font-weight: $font-weight-bold;
    margin-bottom: 1rem;
    color: $text-primary;
  }

  p {
    font-size: $font-size-body;
    color: $text-secondary;
    line-height: $line-height-normal;
    margin-bottom: 2rem;
  }
}

.repair-features {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}

.repair-feature {
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  .q-icon {
    color: $icon-primary;
    margin-top: 0.25rem;
  }

  h4 {
    font-weight: $font-weight-semibold;
    margin-bottom: 0.25rem;
    color: $text-primary;
  }

  p {
    color: $text-secondary;
    font-size: $font-size-small;
    line-height: $line-height-normal;
  }
}

.repair-visual {
  img {
    width: 100%;
    border-radius: $border-radius-card;
  }
}

.secondary-btn {
  border: 1px solid $btn-secondary-border;
  background: $btn-secondary-bg;
  color: $text-primary;
  font-weight: $font-weight-medium;
  padding: 1rem 2rem;

  &:hover {
    background: $btn-secondary-hover;
  }
}
</style>
