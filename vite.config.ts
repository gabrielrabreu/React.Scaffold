/// <reference types="vitest/config" />

import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react-swc";

import { resolve } from "path";

export default defineConfig({
  build: {
    copyPublicDir: false,
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  plugins: [viteReact()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./lib/setupTests.ts",
    coverage: {
      exclude: [
        "**/*.test.@(js|jsx|mjs|ts|tsx)",
        "**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "**/index.@(js|jsx|mjs|ts|tsx)",
      ],
    },
  },
});
