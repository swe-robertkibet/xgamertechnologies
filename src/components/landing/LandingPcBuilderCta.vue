<!-- src/components/landing-page/PcBuilderCta.vue -->
<template>
  <section class="pc-builder-cta">
    <div class="container">
      <div class="cta-content">
        <div class="cta-text">
          <h2>{{ props.title }}</h2>
          <p>{{ props.description }}</p>
          <div class="cta-features">
            <div class="cta-feature" v-for="feature in features" :key="feature">
              <q-icon name="check_circle" color="green" />
              <span>{{ feature }}</span>
            </div>
          </div>
          <q-btn unelevated size="lg" class="primary-btn" @click="$emit('startBuilder')">
            {{ props.buttonText }}
            <q-icon name="build" class="q-ml-sm" />
          </q-btn>
        </div>
        <div class="cta-visual">
          <div class="builder-preview">
            <img :src="props.previewImage" :alt="props.imageAlt" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  title?: string
  description?: string
  features?: string[]
  buttonText?: string
  previewImage?: string
  imageAlt?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Build Your Perfect Gaming PC',
  description: 'Use our advanced PC builder tool to create a custom gaming rig tailored to your needs and budget. Compatible parts guaranteed.',
  buttonText: 'Launch PC Builder',
  previewImage: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  imageAlt: 'PC Builder Interface'
})

defineEmits<{
  startBuilder: []
}>()

const features = ref<string[]>([
  'Compatibility Guaranteed',
  'Expert Assembly Available',
  '3-Year Warranty'
])
</script>

<style lang="scss" scoped>
.pc-builder-cta {
  padding: $section-padding;
  background: $bg-secondary;
}

.container {
  max-width: $breakpoint-xl;
  margin: 0 auto;
  padding: $container-padding;
}

.cta-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.cta-text {
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
    color: $text-secondary;
    font-weight: $font-weight-medium;
  }
}

.cta-visual {
  display: flex;
  justify-content: center;
}

.builder-preview {
  border-radius: $border-radius-card;
  overflow: hidden;
  box-shadow: $shadow-card;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
}

.primary-btn {
  background: $gradient-primary;
  color: $text-primary;
  font-weight: $font-weight-medium;
  padding: 1rem 2rem;

  &:hover {
    background: $gradient-primary-hover;
  }
}
</style>
