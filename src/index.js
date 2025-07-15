// src/index.js

/**
 * This file acts as the entry point for your component library.
 * It automatically finds all .vue components in the same directory
 * and exports them as a single object.
 *
 * This approach uses Vite's `import.meta.glob` feature for dynamic module loading.
 */

// 1. DYNAMICALLY IMPORT ALL VUE COMPONENTS
// This glob pattern looks for .vue files in the same directory as index.js.
const modules = import.meta.glob('./*.vue', { eager: true });

// 2. CREATE AN OBJECT TO HOLD THE COMPONENTS
const components = {};

// 3. LOOP THROUGH THE FOUND MODULES AND PREPARE THEM FOR EXPORT
for (const path in modules) {
  const component = modules[path].default;

  // Make sure the component is a valid object before proceeding
  if (component) {
    // Derive the component name from the file path
    const componentNameMatch = path.match(/([^/\\]+)\.vue$/);
    if (componentNameMatch) {
      const componentName = componentNameMatch[1];
      components[componentName] = component;
    }
  }
}

// DEBUGGING: Log the final object of components that will be exported.
console.log('[Component Library] Exporting components:', components);

// 4. EXPORT THE COMPONENTS OBJECT
// This will be imported by the consuming application.
export default components;
