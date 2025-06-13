<template>
  <section class="repair-services">
    <div class="container">
      <div class="repair-content">
        <div class="repair-text">
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
          <div class="repair-features">
            <div class="repair-feature" v-for="feature in features" :key="feature.title">
              <q-icon :name="feature.icon" size="1.5rem" />
              <div>
                <h4>{{ feature.title }}</h4>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </div>
          <q-btn outline size="lg" class="secondary-btn" @click="handleBookRepair">
            {{ buttonText }}
          </q-btn>
        </div>
        <div class="repair-visual">
          <img :src="repairImage" :alt="repairImageAlt" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
export interface RepairFeature {
  icon: string
  title: string
  description: string
}

interface Props {
  title?: string
  description?: string
  buttonText?: string
  repairImage?: string
  repairImageAlt?: string
  features?: RepairFeature[]
}

interface Emits {
  (e: 'book-repair'): void
}

withDefaults(defineProps<Props>(), {
  title: 'Professional Repair Services',
  description: 'Expert technicians ready to diagnose and fix your gaming rig. From hardware upgrades to virus removal, we\'ve got you covered.',
  buttonText: 'Book Repair Service',
  repairImage: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  repairImageAlt: 'Repair Services',
  features: () => [
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
  ]
})

const emit = defineEmits<Emits>()

const handleBookRepair = () => {
  emit('book-repair')
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.repair-services {
  padding: 5rem 0;
  background: rgb(9, 9, 11);
}

.repair-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.repair-text {
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
    color: rgb(147, 51, 234);
  }

  h4 {
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: #fff;
  }

  p {
    color: rgb(161, 161, 170);
    font-size: 0.875rem;
  }
}

.repair-visual {
  img {
    width: 100%;
    border-radius: 1rem;
  }
}

.secondary-btn {
  border: 1px solid rgb(113, 113, 122);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-weight: 500;
  padding: 0.75rem 1.5rem;

  &:hover {
    background: rgb(39, 39, 42);
  }
}
</style>
