// src/index.js

// --- AUTOMATED COMPONENT IMPORTS ---
// Use require.context to automatically import all .vue files
const components = import.meta.glob("./*.vue");

const install = async (app) => {
  // Make the install function async
  // This plugin's only job is to register its own components.
  // The main application will be responsible for installing BootstrapVue.
  const registrationPromises = [];

  for (const fileName in components) {
    const componentConfig = components[fileName]; // Get the function that imports the module
    const componentName = fileName
      .replace(/^.\//, "") // Remove "./"
      .replace(/\.vue$/, "");
    const registrationPromise = componentConfig().then((module) => {
      // Create a promise for each component registration
      app.component(componentName, module.default || module);
    });
    registrationPromises.push(registrationPromise);
  }

  await Promise.all(registrationPromises); // Wait for all components to be registered
};

// 3. EXPORT THE PLUGIN
const plugin = {
  install,
};
export default plugin;
