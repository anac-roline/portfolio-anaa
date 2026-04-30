import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    mode === "development" &&
      // Lovable component tagger (dev only) — optional, ignored if not installed
      (() => {
        try {
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          const { componentTagger } = require("lovable-tagger");
          return componentTagger();
        } catch {
          return null;
        }
      })(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
}));
