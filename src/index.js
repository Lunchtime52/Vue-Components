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
// The `import.meta.glob` function finds all files matching the pattern.
// - './**/*.vue' means look in the current directory and all subdirectories for .vue files.
// - `{ eager: true }` tells Vite to import these files immediately, rather than lazy-loading them.
const modules = import.meta.glob('./**/*.vue', { eager: true });

// 2. CREATE THE VUE PLUGIN
// A Vue plugin is an object with an `install` method.
// When you call `app.use(yourPlugin)`, Vue will execute this method.
const install = (app) => {
  // 3. LOOP THROUGH THE FOUND MODULES AND REGISTER EACH COMPONENT
  for (const path in modules) {
    // The module object contains the component definition under the `default` key.
    const component = modules[path].default;

    // 4. DERIVE THE COMPONENT NAME FROM THE FILE PATH (ROBUST METHOD)
    // This logic extracts the component name from the path in a way that
    // works across all operating systems (Windows, macOS, Linux).
    // It finds the last part of the path and removes the .vue extension.
    const componentNameMatch = path.match(/([^/\\]+)\.vue$/);

    if (componentNameMatch) {
        const componentName = componentNameMatch[1];
        console.log(`[MyLibrary] Registering component: ${componentName}`);

        // 5. REGISTER THE COMPONENT GLOBALLY
        // This makes the component available throughout the app that uses this library.
        // For example, a 'Button.vue' component can be used as `<Button />`.
        app.component(componentName, component);
    }
  }
};

// 6. EXPORT THE PLUGIN
// This is the primary export of your library.
export default {
  install,
};
