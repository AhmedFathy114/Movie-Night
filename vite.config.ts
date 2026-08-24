import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    proxy: {
      "/api/alooy": {
        target: "http://api.dfkz.site",
        changeOrigin: true,

        rewrite: (path) => {
          const query = path.includes("?")
            ? path.substring(path.indexOf("?"))
            : "";

          return `/alooy/${query}`;
        },
      },
    },
  },
});
