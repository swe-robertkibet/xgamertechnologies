<template>
  <section class="why-choose-us">
    <div class="container">
      <div class="section-header">
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
      </div>
      <div class="features-grid">
        <div class="feature-card" v-for="feature in features" :key="feature.title">
          <div class="feature-icon">
            <q-icon :name="feature.icon" size="2rem" />
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
export interface Feature {
  icon: string
  title: string
  description: string
}

interface Props {
  title?: string
  subtitle?: string
  features?: Feature[]
}

withDefaults(defineProps<Props>(), {
  title: 'Why Choose Tech Fusion?',
  subtitle: 'Industry-leading expertise and unmatched customer service',
  features: () => [
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
  ]
})
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.why-choose-us {
  padding: 5rem 0;
  background: rgb(9, 9, 11);
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  text-align: center;
  padding: 2rem;
  border-radius: 1rem;
  background: rgba(39, 39, 42, 0.5);
  border: 1px solid rgb(39, 39, 42);
  transition: transform 0.2s, border-color 0.2s;

  &:hover {
    transform: translateY(-4px);
    border-color: rgb(147, 51, 234);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 1rem 0 0.5rem;
  }

  p {
    color: rgb(161, 161, 170);
    line-height: 1.6;
  }
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: linear-gradient(135deg, rgb(147, 51, 234), rgb(59, 130, 246));
  color: #fff;
  margin-bottom: 1rem;
}
</style>
