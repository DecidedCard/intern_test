import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      sourcemaps: {
        filesToDeleteAfterUpload: "./dist/**/*.map",
      },
      org: "card-nk",
      project: "javascript-react",
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  ],

  build: {
    sourcemap: true,
  },
});
