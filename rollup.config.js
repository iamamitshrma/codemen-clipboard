import { defineConfig } from "rollup"
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';
import typescript from "@rollup/plugin-typescript"
import tailwindConfig from "./tailwind.config.js";

export default defineConfig({
    input: "src/index.ts",
    output: {
        dir: "dist",
        format: "es",
        name: "codemen-clipboard"
    },
    external: ["react", "react-dom", "tailwindcss"],
    plugins: [typescript({tsconfig: "tsconfig.json"}), postcss({
        extensions: ['.css'],
        plugins: [tailwindcss(tailwindConfig)],
    })]
})