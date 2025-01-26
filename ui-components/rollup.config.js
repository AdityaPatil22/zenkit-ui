import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: [
    { file: "dist/zen-ui.cjs.js", format: "cjs" },
    { file: "dist/zen-ui.esm.js", format: "esm" },
  ],
  plugins: [
    resolve(),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-react"],
      exclude: "node_modules/**",
    }),
    commonjs(),
    terser(),
  ],
};
