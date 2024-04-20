import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import pkg from './package.json' assert { type: 'json' };
import solidPkg from 'solid-js/package.json' assert { type: 'json' };

export default defineConfig({
  input: 'src/solid.js',
  output: {
    file: 'dist/solid.js',
    format: 'umd',
    name: 'VM.solid',
    indent: false,
    extend: true,
    esModule: false,
    banner: `/*! ${pkg.name}@${pkg.version}/solid-js  solid-js@${solidPkg.version} | ${solidPkg.license} License */`,
    plugins: [terser()],
  },
  plugins: [resolve()],
});
