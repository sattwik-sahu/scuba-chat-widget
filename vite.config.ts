import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// TODO Put all allowed origins here
const allowedOrigins = ["http://localhost:4173", "http://localhost:5173"];

export default defineConfig({
  plugins: [react(), envCompatible(), nodePolyfills()],
  server: {
    cors: {
      origin: (origin, callback) => {
        // Origin is allowed?
        if (!origin || allowedOrigins.indexOf(origin) >= 0) {
          callback(null, true);
        } else {
          // Origin not allowed
          callback(new Error("Not allowed by CORS"), origin);
        }
      },
      methods: "GET,POST",
      credentials: true,
    },
  },
});
