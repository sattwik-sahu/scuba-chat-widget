import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [react(), envCompatible(), nodePolyfills()],
  build: {
    lib: {
      entry: "./src/components/index.tsx",
      name: "ScubaChatWidget",
      fileName: "index",
      formats: ["umd", "iife"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
