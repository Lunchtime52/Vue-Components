<template>
    <div v-if="props.imgSrc || props.imgAlt || props.imgTop" :class="['customMargin', cardMargin]">
    
        <img v-if="props.imgSrc" :src="props.imgSrc" :alt="props.imgAlt" :top="props.imgTop" />
     
      <h5 :class="`fs-${titleScale}`">{{ title }}</h5>
      <p :class="`fs-${textScale}`">{{ text }}</p>
      <slot></slot>
      <BButton
        v-if="buttonText"
        :variant="props.buttonVariant"
        :to="{ name: buttonHref }">
        {{ buttonText }}
      </BButton>
    </div>
    <div v-else :class="['customMargin', cardMargin]">
      <h5>:class="`fs-${titleScale}`">{{ title }}</h5>
      <p :class="`fs-${textScale}`">{{ text }}</p>
      <slot></slot>
      <BButton
        v-if="buttonText"
        :variant="props.buttonVariant"
        :to="{ name: buttonHref }">
        {{ buttonText }}
      </BButton>
    </div>
  </template>
  
  <script setup>
  import { BButton } from "bootstrap-vue-next";
  const props = defineProps({
    title: { type: String, default: "Card Title" },
    text: { type: String, default: "Some example text." },
    imgSrc: { type: String, required: false },
    imgAlt: { type: String, required: false },
    imgTop: { type: Boolean, default: false },
    buttonText: { type: String, required: false },
    buttonVariant: { type: String, default: "success" },
    buttonHref: { type: String, default: "NotFound" },
    titleScale: { type: Number, default: 4 },
    textScale: { type: Number, default: 5 },
    cardMargin: { type: String, default: "" },
  });
  </script>
  
  
 
  