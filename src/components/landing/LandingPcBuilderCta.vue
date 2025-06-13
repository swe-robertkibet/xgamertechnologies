<template>
  <section class="pc-builder-cta">
    <div class="container">
      <div class="cta-content">
        <div class="cta-text">
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
          <div class="cta-features">
            <div class="cta-feature" v-for="feature in features" :key="feature">
              <q-icon name="check_circle" color="green" />
              <span>{{ feature }}</span>
            </div>
          </div>
          <q-btn unelevated size="lg" class="primary-btn" @click="handleCtaClick">
            {{ buttonText }}
            <q-icon name="build" class="q-ml-sm" />
          </q-btn>
        </div>
        <div class="cta-visual">
          <div class="builder-preview">
            <img :src="previewImage" :alt="previewImageAlt" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  description?: string
  features?: string[]
  buttonText?: string
  previewImage?: string
  previewImageAlt?: string
}

interface Emits {
  (e: 'cta-click'): void
}

withDefaults(defineProps<Props>(), {
  title: 'Build Your Perfect Gaming PC',
  description: 'Use our advanced PC builder tool to create a custom gaming rig tailored to your needs and budget. Compatible parts guaranteed.',
  features: () => [
    'Compatibility Guaranteed',
    'Expert Assembly Available',
    '3-Year Warranty'
  ],
  buttonText: 'Launch PC Builder',
  previewImage: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  previewImageAlt: 'PC Builder Interface'
})

const emit = defineEmits<Emits>()

const handleCtaClick = () => {
  emit('cta-click')
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.pc-builder-cta {
  padding: 5rem 0;
  background: rgb(9, 9, 11);
}

.cta-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.cta-text {
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

.cta-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
}

.cta-feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    color: rgb(161, 161, 170);
  }
}

.cta-visual {
  display: flex;
  justify-content: center;
}

.builder-preview {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: auto;
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
