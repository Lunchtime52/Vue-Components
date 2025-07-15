<!-- In your library's src/Footer.vue -->

<script setup>
import { inject, computed } from 'vue';

// 1. Inject the config object from the main app
const config = inject('config', {});

// 2. Define the component's props using the defineProps macro
const props = defineProps({
  copyright: {
    type: String,
    default: '',
  },
  padding: {
    type: Number,
    default: 4
  },
  background: {
    type: String,
    default: 'primary'
  },
  footerLinks: {
    type: Array,
    default: () => []
  },
});

// 3. Create the final copyright text using a computed property
const copyrightText = computed(() => {
  // If the user passed a custom copyright prop, use that
  if (props.copyright) {
    return props.copyright;
  }
  // Otherwise, build the default using the injected config
  if (config.BUSINESS_NAME) {
    return `© ${new Date().getFullYear()} ${config.BUSINESS_NAME} All rights reserved.`;
  }
  // A final fallback if nothing is available
  return `© ${new Date().getFullYear()} All rights reserved.`;
});
</script>

<template>
  <footer>
    <p>{{ copyrightText }}</p>
    <!-- You can add logic for your footerLinks here -->
  </footer>
</template>