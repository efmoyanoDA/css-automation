import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://example.cypress.io",
    env: {
      apiKey: 'staging-api-key',
    },
    setupNodeEvents(on, config) {

    },
  },
});
