import { terser } from "rollup-plugin-terser";

module.exports = {
  input: 'static/js/script.js',
  output: {
    file: '_site/static/js/script.js',
    format: 'iife'
  },
  plugins: [
    terser(),
  ]
};
