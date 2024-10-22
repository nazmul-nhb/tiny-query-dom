import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/index.ts', // The entry point for the bundle; this is where Rollup starts bundling
    output: {
        file: 'dist/tinyquery.js', // The output file where the bundled code will be saved

        /**
         * IIFE:
         * Execution: The code executes immediately, which means it runs as soon as it’s defined. It’s great for self-contained scripts that don’t need to be loaded by module loaders.
         * Usage: Often included directly in <script> tags in HTML, where the code is executed immediately and any variables or functions defined within it are not accessible outside its scope.
         * UMD:

         * Execution: It doesn’t execute immediately; it defines a module structure. The module is loaded only when requested by the environment (e.g., CommonJS, AMD, or as a global variable).
         * Usage: Suitable for libraries that need to work in different environments (e.g., Node.js, browser). It allows you to define dependencies and exports.
        */
        format: 'umd', // The format of the output bundle; 
        // 'iife' is used for immediately - invoked function expressions suitable for inclusion in a script tag
        name: 'TinyQuery', // The name of the global variable to use in the IIFE format; this will expose your library as a global variable
        sourcemap: true, // Enable source maps for easier debugging
    },
    plugins: [
        typescript({
            sourceMap: true, // Generate source maps for the TypeScript files
        }), // Include the TypeScript plugin to compile TypeScript files to JavaScript
        nodeResolve(), // Include the Node Resolve plugin to allow Rollup to resolve third-party dependencies in node_modules
        commonjs(), // Include the CommonJS plugin to enable importing CommonJS modules (like many npm packages)
        terser(), // Include the Terser plugin to minify the output JavaScript code for smaller file size
    ],
};
