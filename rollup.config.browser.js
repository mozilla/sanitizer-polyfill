import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "./src/polyfill.js",
  output: {
    file: "dist/sanitizer-polyfill.js",
    format: "iife",
  },
  plugins: [nodeResolve()],
};
