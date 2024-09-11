import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://example.cypress.io",
    env: {
      apiKey: 'development-api-key',
    },
    setupNodeEvents(on, config) {

    },
  },
});
