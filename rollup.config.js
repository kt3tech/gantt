import sass from "rollup-plugin-sass";
import { terser } from "rollup-plugin-terser";

const dev = {
  input: "src/index.js",
  output: {
    name: "Gantt",
    file: "dist/k3_kt_com-gantt.js",
    sourcemap: true,
    format: "iife",
  },
  plugins: [
    sass({
      output: true,
    }),
  ],
};
const prod = {
  input: "src/index.js",
  output: {
    name: "Gantt",
    file: "dist/k3_kt_com-gantt.min.js",
    sourcemap: true,
    format: "iife",
  },
  plugins: [
    sass({
      output: true,
      options: {
        outputStyle: "compressed",
      },
    }),
    terser(),
  ],
};

export default [dev, prod];
