/// <reference types="vitest/config" />

import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      exclude: ["src/setupTests.ts", "**/*.stories.tsx", "**/*.test.tsx"],
    }),
    viteStaticCopy({
      targets: [
        {
          src: "src/styles",
          dest: "",
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      input: {
        main: resolve(__dirname, "src/main.ts"),
      },
      output: {
        entryFileNames: "main.js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    css: true,
    coverage: {
      reporter: ["json", "lcov"],
      include: ["src/components"],
      exclude: ["**/*.stories.tsx"],
    },
  },
});
