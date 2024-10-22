export default {
    // Use 'ts-jest' preset to handle TypeScript files.
    // This preset configures Jest to work seamlessly with TypeScript.
    preset: 'ts-jest',

    // Set the testing environment to 'jsdom'.
    // 'jsdom' simulates a browser-like environment for testing,
    // which is useful for testing DOM manipulations and interactions.
    testEnvironment: 'jsdom',

    // Transform settings specify how files should be processed.
    // Here we define a regex pattern to match TypeScript files (.ts or .tsx).
    // When a file matches this pattern, it will be transformed using 'ts-jest'.
    transform: {
        '^.+\\.tsx?$': 'ts-jest', // Use ts-jest to process TypeScript files
    },

    // This array specifies the file extensions Jest will recognize.
    // It helps Jest to understand which file types to include when running tests.
    moduleFileExtensions: [
        'ts',   // TypeScript files
        'js',   // JavaScript files
        'json', // JSON files
        'node', // Node.js files
    ],
};
