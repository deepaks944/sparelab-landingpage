import react from "@vitejs/plugin-react";
import { copyFile } from "node:fs/promises";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

const packageVersion = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf8"),
).version;
const buildVersion = `${packageVersion}+${new Date()
  .toISOString()
  .replace(/\D/g, "")
  .slice(0, 14)}`;

function githubPagesSpaFallback() {
  return {
    name: "github-pages-spa-fallback",
    apply: "build",
    async writeBundle({ dir }) {
      if (dir) {
        await copyFile(
          resolve(dir, "index.html"),
          resolve(dir, "404.html"),
        );
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), githubPagesSpaFallback()],
  base: "/sparelab-landingpage/",
  define: {
    __APP_VERSION__: JSON.stringify(
      process.env.VITE_APP_VERSION ?? buildVersion,
    ),
  },
});
