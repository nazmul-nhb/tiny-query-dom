import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/tinyquery.js',
        format: 'iife',
        name: 'TinyQuery',
    },
    plugins: [
        typescript(),
        nodeResolve(),
        commonjs(),
        terser(),
    ],
};
