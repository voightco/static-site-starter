import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

module.exports = {
  input: 'static/js/script.js',
  output: {
    file: '_site/static/js/script.js',
    format: 'iife'
  },
  plugins: [
    terser(),
    resolve(),
    commonjs(),
  ]
};
