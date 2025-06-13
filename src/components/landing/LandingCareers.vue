<template>
  <section class="careers-preview">
    <div class="container">
      <div class="careers-content">
        <div class="careers-text">
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
          <div class="open-positions" v-if="openPositions.length > 0">
            <h4>Current Openings:</h4>
            <ul>
              <li v-for="position in openPositions" :key="position">
                {{ position }}
              </li>
            </ul>
          </div>
          <q-btn unelevated class="primary-btn" @click="handleViewCareers">
            {{ buttonText }}
            <q-icon name="work" class="q-ml-sm" />
          </q-btn>
        </div>
        <div class="careers-stats">
          <div class="stat-card" v-for="stat in stats" :key="stat.label">
            <h3>{{ stat.value }}</h3>
            <p>{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
export interface CareerStat {
  value: string
  label: string
}

interface Props {
  title?: string
  description?: string
  buttonText?: string
  openPositions?: string[]
  stats?: CareerStat[]
}

interface Emits {
  (e: 'view-careers'): void
}

withDefaults(defineProps<Props>(), {
  title: 'Join Our Team',
  description: 'Passionate about gaming and technology? We\'re always looking for talented individuals to join our growing team.',
  buttonText: 'View All Positions',
  openPositions: () => [
    'Senior PC Technician',
    'Customer Support Specialist',
    'Warehouse Operations Manager',
    'Digital Marketing Coordinator'
  ],
  stats: () => [
    { value: '50+', label: 'Team Members' },
    { value: '98%', label: 'Employee Satisfaction' },
    { value: '5★', label: 'Glassdoor Rating' }
  ]
})

const emit = defineEmits<Emits>()

const handleViewCareers = () => {
  emit('view-careers')
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.careers-preview {
  padding: 5rem 0;
}

.careers-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.careers-text {
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #fff;
  }

  p {
    font-size: 1.125rem;
    color: rgb(161, 161, 170);
    line-height: 1.6;
  }
}

.open-positions {
  margin: 2rem 0;

  h4 {
    font-weight: 600;
    margin-bottom: 1rem;
    color: #fff;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      color: rgb(161, 161, 170);
      padding: 0.5rem 0;
      border-bottom: 1px solid rgb(39, 39, 42);

      &:before {
        content: "→";
        color: rgb(147, 51, 234);
        margin-right: 0.5rem;
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
  padding: 2rem;
  background: rgba(39, 39, 42, 0.5);
  border-radius: 1rem;

  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: rgb(147, 51, 234);
    margin-bottom: 0.5rem;
  }

  p {
    color: rgb(161, 161, 170);
    font-size: 0.875rem;
  }
}

.primary-btn {
  background: linear-gradient(to right, rgb(147, 51, 234), rgb(59, 130, 246));
  color: #fff;
  font-weight: 500;
  padding: 0.75rem 1.5rem;

  &:hover {
    background: linear-gradient(to right, rgb(126, 34, 206), rgb(37, 99, 235));
  }
}
</style>
