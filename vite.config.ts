import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react-swc";

import { resolve } from "path";

export default defineConfig({
  plugins: [viteReact()],
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
});
