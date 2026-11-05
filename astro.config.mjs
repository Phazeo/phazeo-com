import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
  // Keeps Astro 5's whitespace output; moving to 'jsx' (Astro 7's default) is a later, deliberate change.
  compressHTML: true,
  site: "https://phazeo.com",
  // Hashed Content-Security-Policy for scripts and styles, generated at build time (Astro 6+).
  // The remaining directives are sent as a header: public/_headers.
  security: {
    csp: {
      // Inline style="" attributes only (animation delays, motion): <style> elements stay hashed.
      styleDirective: {
        resources: ["'self'", { resource: "'unsafe-inline'", kind: "attribute" }],
      },
    },
  },
});
