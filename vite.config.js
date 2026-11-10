import react from "@vitejs/plugin-react";
import { copyFile } from "node:fs/promises";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

const buildDate = new Date().toISOString();
const { buildNumber } = JSON.parse(
  readFileSync(new URL("./build-number.json", import.meta.url), "utf8"),
);

function githubPagesSpaFallback() {
  return {
    name: "github-pages-spa-fallback",
    apply: "build",
    async writeBundle({ dir }) {
      if (dir) {
        await copyFile(resolve(dir, "index.html"), resolve(dir, "404.html"));
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), githubPagesSpaFallback()],
  base: "/sparelab-landingpage/",
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "three",
              test: /node_modules[\\/]three[\\/]/,
              maxSize: 400 * 1024,
            },
          ],
        },
      },
    },
  },
  define: {
    __BUILD_DATE__: JSON.stringify(buildDate),
    __BUILD_NUMBER__: JSON.stringify(buildNumber),
  },
});
