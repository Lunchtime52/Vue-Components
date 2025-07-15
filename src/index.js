// src/index.js

/**
 * This file acts as the entry point for your component library.
 * It automatically finds all .vue components in this directory and its subdirectories,
 * then registers them globally as a Vue plugin.
 *
 * This approach uses Vite's `import.meta.glob` feature for dynamic module loading.
 * https://vitejs.dev/guide/features.html#glob-import
 */

// 1. DYNAMICALLY IMPORT ALL VUE COMPONENTS
const modules = import.meta.glob('./**/*.vue', { eager: true });

// 2. CREATE THE VUE PLUGIN
const install = (app) => {
  // DEBUGGING: Log all the modules that Vite found.
  console.log('[Component Library] Found modules:', modules);

  // 3. LOOP THROUGH THE FOUND MODULES AND REGISTER EACH COMPONENT
  for (const path in modules) {
    const component = modules[path].default;

    // Make sure the component is a valid object before proceeding
    if (!component) {
      console.error(`[Component Library] Failed to load component from path: ${path}`);
      continue; // Skip to the next one
    }

    const componentNameMatch = path.match(/([^/\\]+)\.vue$/);

    if (componentNameMatch) {
        const componentName = componentNameMatch[1];
        
        // DEBUGGING: Log each component as it's being registered.
        console.log(`[Component Library] Registering component: ${componentName}`);

        // 5. REGISTER THE COMPONENT GLOBALLY
        app.component(componentName, component);
    }
  }
};

// 6. EXPORT THE PLUGIN
export default {
  install,
};
