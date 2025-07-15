// src/index.js

// --- AUTOMATED COMPONENT IMPORTS ---
// Use require.context to automatically import all .vue files
const components = require.context('/src', false, /\.vue$/);

// 2. CREATE THE PLUGIN'S INSTALL METHOD
const install = (app) => {
  // This plugin's only job is to register its own components.
  // The main application will be responsible for installing BootstrapVue.
  components.keys().forEach(fileName => {
    const componentConfig = components(fileName);
    const componentName = fileName
      .replace(/^\.\//, '')
      .replace(/\.\w+$/, '');
    app.component(componentName, componentConfig.default || componentConfig);
  });
};

// 3. EXPORT THE PLUGIN
const plugin = {
  install,
};
export default plugin;
