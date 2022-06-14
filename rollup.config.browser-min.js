import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/polyfill.js",
  output: {
    file: "dist/sanitizer-polyfill.min.js",
    format: "iife",
  },
  plugins: [nodeResolve(), terser()],
};
