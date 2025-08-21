<template>
    <BContainer class="section-padding">
      <div class="bg-light p-5 rounded-lg shadow-md d-flex flex-column align-items-center">
        <img v-if="props.image" :src="props.image" :alt="props.author" class="w-10 h-10 rounded-full object-cover mb-4" />
        <blockquote class="text-secondary text-center mb-4">
          <p class="italic">"{{ quote }}"</p>
        </blockquote>
        <p class="text-muted fw-semibold">{{ author }}</p>
      </div>
    </BContainer>
  </template>
    
  <script setup>
  import { BContainer } from 'bootstrap-vue-next';
  const props = defineProps({
    quote: {
      type: String,
      required: false,
      default: 'No quote provided',
    },
    author: {
      type: String,
      required: false,
      default: 'No author provided',
    },
    image: {
      type: String,
      default: null,
    },
  });
 
  </script>