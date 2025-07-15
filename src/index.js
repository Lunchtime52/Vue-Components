// src/index.js

// --- MANUAL COMPONENT IMPORTS ---
// 1. Manually import each component from your library here.
import Footer from './Footer.vue';
import Hero from './Hero.vue';

// 2. CREATE THE PLUGIN'S INSTALL METHOD
const install = (app) => {
  // This plugin's only job is to register its own components.
  // The main application will be responsible for installing BootstrapVue.
  app.component('Footer', Footer);
  app.component('Hero', Hero);
};

// 3. EXPORT THE PLUGIN
const plugin = {
  install,
};

export default plugin;
