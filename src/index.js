// src/index.js

// --- AUTOMATED COMPONENT IMPORTS ---
// Import each component from your library here.
import CallToAction from './CallToAction.vue';
import Card from './Card.vue';
import ContactForm from './ContactForm.vue';
import FeatureList from './FeatureList.vue';
import Footer from './Footer.vue';
import Gallery from './Gallery.vue';
import Hero from './Hero.vue';
import ImageWithText from './ImageWithText.vue';
import Navbar from './Navbar.vue';
import Testimonial from './Testimonial.vue';

// CREATE THE PLUGIN'S INSTALL METHOD
const install = (app) => {
  // This plugin's only job is to register its own components.
  app.component('CallToAction', CallToAction);
  app.component('Card', Card);
  app.component('ContactForm', ContactForm);
  app.component('FeatureList', FeatureList);
  app.component('Footer', Footer);
  app.component('Gallery', Gallery);
  app.component('Hero', Hero);
  app.component('ImageWithText', ImageWithText);
  app.component('Navbar', Navbar);
  app.component('Testimonial', Testimonial);
};

// 3. EXPORT THE PLUGIN
const plugin = {
  install,
};
export default plugin;
