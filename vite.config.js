import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      authToken: "process.env.SENTRY_AUTH_TOKEN",
      org: "Apple-iPhone",
      project: "iPhone-15-Pro",
      release: {
        name: "i15v.0.1",
      },
       telemetry: false,
    }),
  ],

  server: {
    port: process.env.PORT || 3000,
  },

  build: {
    sourcemap: true,
  },
});
