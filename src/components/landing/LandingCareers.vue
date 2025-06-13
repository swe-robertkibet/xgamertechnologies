<!-- src/components/landing-page/CareersPreview.vue -->
<template>
  <section class="careers-preview">
    <div class="container">
      <div class="careers-content">
        <div class="careers-text">
          <h2>{{ props.title }}</h2>
          <p>{{ props.description }}</p>
          <div class="open-positions">
            <h4>{{ props.positionsTitle }}</h4>
            <ul>
              <li v-for="position in (props.openPositions || openPositions)" :key="position">
                {{ position }}
              </li>
            </ul>
          </div>
          <q-btn unelevated class="primary-btn" @click="$emit('viewCareers')">
            {{ props.buttonText }}
            <q-icon name="work" class="q-ml-sm" />
          </q-btn>
        </div>
        <div class="careers-stats">
          <div class="stat-card" v-for="stat in (props.stats || stats)" :key="stat.label">
            <h3>{{ stat.value }}</h3>
            <p>{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { CareerStat } from './landing-types'

interface Props {
  title?: string
  description?: string
  positionsTitle?: string
  buttonText?: string
  openPositions?: string[]
  stats?: CareerStat[]
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Join Our Team',
  description: 'Passionate about gaming and technology? We\'re always looking for talented individuals to join our growing team.',
  positionsTitle: 'Current Openings:',
  buttonText: 'View All Positions'
})

defineEmits<{
  viewCareers: []
}>()

const openPositions = ref<string[]>([
  'Senior PC Technician',
  'Customer Support Specialist',
  'Warehouse Operations Manager',
  'Digital Marketing Coordinator'
])

const stats = ref<CareerStat[]>([
  { value: '50+', label: 'Team Members' },
  { value: '98%', label: 'Employee Satisfaction' },
  { value: '5★', label: 'Glassdoor Rating' }
])
</script>

<style lang="scss" scoped>
.careers-preview {
  padding: $section-padding;
  background: $bg-primary;
}

.container {
  max-width: $breakpoint-xl;
  margin: 0 auto;
  padding: $container-padding;
}

.careers-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.careers-text {
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

.open-positions {
  margin: 2rem 0;

  h4 {
    font-weight: $font-weight-semibold;
    margin-bottom: 1rem;
    color: $text-primary;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      color: $text-secondary;
      padding: 0.5rem 0;
      border-bottom: 1px solid $border-primary;
      position: relative;

      &:before {
        content: "→";
        color: $icon-primary;
        margin-right: 0.5rem;
        font-weight: $font-weight-bold;
      }

      &:hover {
        color: $text-primary;
      }
    }
  }
}

.careers-stats {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.stat-card {
  text-align: center;
  padding: $card-padding;
  background: $bg-card-hover;
  border-radius: $border-radius-card;
  transition: $transition-transform;

  &:hover {
    transform: translateY(-2px);
  }

  h3 {
    font-size: 2rem;
    font-weight: $font-weight-bold;
    color: $icon-primary;
    margin-bottom: 0.5rem;
  }

  p {
    color: $text-secondary;
    font-size: $font-size-small;
  }
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
</style>
