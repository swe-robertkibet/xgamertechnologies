<template>
  <section class="newsletter-signup">
    <div class="container">
      <div class="newsletter-content">
        <div class="newsletter-text">
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
        </div>
        <div class="newsletter-form">
          <q-input v-model="email" :placeholder="placeholder" outlined dense class="email-input" dark
            @keyup.enter="handleSubmit" />
          <q-btn unelevated class="primary-btn" @click="handleSubmit" :loading="isLoading" :disable="!email.trim()">
            {{ buttonText }}
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

interface Emits {
  (e: 'newsletter-submit', email: string): void
}

withDefaults(defineProps<Props>(), {
  title: 'Stay Updated',
  description: 'Get the latest deals, new product announcements, and gaming tips delivered to your inbox.',
  placeholder: 'Enter your email address',
  buttonText: 'Subscribe'
})

const emit = defineEmits<Emits>()

const email = ref('')
const isLoading = ref(false)

const handleSubmit = async () => {
  if (!email.value.trim()) return

  isLoading.value = true
  try {
    emit('newsletter-submit', email.value.trim())
    // Reset form after successful submission
    email.value = ''
  } finally {
    isLoading.value = false
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.newsletter-signup {
  padding: 5rem 0;
  background: rgb(9, 9, 11);
}

.newsletter-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
}

.newsletter-text {
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

.newsletter-form {
  display: flex;
  gap: 1rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
}

.email-input {
  flex: 1;
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
