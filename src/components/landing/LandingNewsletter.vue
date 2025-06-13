<!-- src/components/landing-page/NewsletterSignup.vue -->
<template>
  <section class="newsletter-signup">
    <div class="container">
      <div class="newsletter-content">
        <div class="newsletter-text">
          <h2>{{ props.title }}</h2>
          <p>{{ props.description }}</p>
        </div>
        <div class="newsletter-form">
          <q-input v-model="email" :placeholder="props.placeholder" outlined dense class="email-input" dark
            @keyup.enter="handleSubscribe" />
          <q-btn unelevated class="primary-btn" @click="handleSubscribe" :loading="isSubscribing" :disable="!email">
            {{ props.buttonText }}
          </q-btn>
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
  placeholder?: string
  buttonText?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Stay Updated',
  description: 'Get the latest deals, new product announcements, and gaming tips delivered to your inbox.',
  placeholder: 'Enter your email address',
  buttonText: 'Subscribe'
})

const emit = defineEmits<{
  subscribe: [email: string]
}>()

const email = ref('')
const isSubscribing = ref(false)

const handleSubscribe = () => {
  if (!email.value) return

  isSubscribing.value = true
  try {
    emit('subscribe', email.value)
    // Clear email after successful subscription
    email.value = ''
  } catch (error) {
    console.error('Subscription failed:', error)
  } finally {
    isSubscribing.value = false
  }
}
</script>

<style lang="scss" scoped>
.newsletter-signup {
  padding: $section-padding;
  background: $bg-secondary;
}

.container {
  max-width: $breakpoint-xl;
  margin: 0 auto;
  padding: $container-padding;
}

.newsletter-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
}

.newsletter-text {
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
  }
}

.newsletter-form {
  display: flex;
  gap: 1rem;

  @media (max-width: $breakpoint-sm) {
    flex-direction: column;
  }
}

.email-input {
  flex: 1;

  :deep(.q-field__control) {
    background: $bg-card;
    border-color: $border-primary;
  }

  :deep(.q-field__native) {
    color: $text-primary;
  }

  :deep(.q-field__label) {
    color: $text-secondary;
  }
}

.primary-btn {
  background: $gradient-primary;
  color: $text-primary;
  font-weight: $font-weight-medium;
  padding: 0.75rem 1.5rem;
  min-width: 120px;

  &:hover {
    background: $gradient-primary-hover;
  }
}
</style>
