// src/index.js

// --- AUTOMATED COMPONENT IMPORTS ---
// Use require.context to automatically import all .vue files
const components = import.meta.glob('/src/*.vue');

// 2. CREATE THE PLUGIN'S INSTALL METHOD
const install = (app) => {
  // This plugin's only job is to register its own components.
  // The main application will be responsible for installing BootstrapVue.
  for (const fileName in components) {
    const componentConfig = components(fileName);
    const componentName = fileName
      .replace(/^\.\//, '')
      .replace(/\.vue$/, '');

    // Async import (dynamic import)
    componentConfig().then(module => {
      app.component(componentName, module.default || module);
    });
  }
};

// 3. EXPORT THE PLUGIN
const plugin = {
  install,
};
export default plugin;
