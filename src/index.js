// src/index.js
import { createBootstrap } from 'bootstrap-vue-next';

/**
 * This file acts as the entry point for your component library.
 * It's a Vue plugin that registers both its own components and all
 * components from bootstrap-vue-next globally.
 */

// 1. DYNAMICALLY IMPORT ALL OF THIS LIBRARY'S VUE COMPONENTS
const modules = import.meta.glob('./*.vue', { eager: true });

// 2. CREATE THE PLUGIN'S INSTALL METHOD
const install = (app) => {
  // First, install all of bootstrap-vue-next's components.
  // This makes them available to both the main app and this library's components.
  app.use(createBootstrap());

  // Second, loop through this library's components and register them.
  for (const path in modules) {
    const component = modules[path].default;
    if (component) {
      const componentNameMatch = path.match(/([^/\\]+)\.vue$/);
      if (componentNameMatch) {
        const componentName = componentNameMatch[1];
        app.component(componentName, component);
      }
    }
  }
};

// 3. EXPORT THE PLUGIN
const plugin = {
  install,
};

// DEBUGGING: Log the plugin object to the console before exporting.
console.log('[Component Library] Exporting plugin:', plugin);

export default plugin;
