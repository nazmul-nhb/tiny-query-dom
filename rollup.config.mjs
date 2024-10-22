import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser'; // Default import for Terser

export default {
    input: 'src/index.ts', // Entry point for the bundle
    output: [
        {
            file: 'dist/tinyquery.js', // Output file for development
            format: 'umd', // Universal Module Definition
            name: 'TinyQuery', // Name of the global variable in UMD
            sourcemap: true, // Enable source maps for easier debugging
        },
        {
            file: 'dist/tinyquery.min.js', // Minified output file for production
            format: 'umd', // Universal Module Definition
            name: 'TinyQuery', // Name of the global variable in UMD
            plugins: [terser()], // Minify for production
            sourcemap: true, // Enable source maps for minified output
        },
        {
            file: 'dist/tinyquery.esm.js', // Output file for ES module
            format: 'esm', // ES Module format
            sourcemap: true, // Enable source maps for easier debugging
        },
    ],
    plugins: [
        typescript({
            sourceMap: true, // Generate source maps for TypeScript files
        }), // Transpile TypeScript to JavaScript
        nodeResolve(), // Resolve third-party dependencies in node_modules
        commonjs(), // Enable importing CommonJS modules
        // terser(), // Minify output JavaScript code
    ],
    external: [
        // List any external dependencies here that should not be bundled
        // For example: 'react', 'lodash'
    ],
};
