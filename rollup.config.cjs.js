import { nodeResolve } from "@rollup/plugin-node-resolve";
import pkg from "./package.json";

export default {
  input: "./src/polyfill.js",
  external: Object.keys(pkg.dependencies || {}),
  output: {
    file: "dist/sanitizer-polyfill.cjs",
    format: "cjs",
  },
  plugins: [nodeResolve()],
};
