import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://example.cypress.io",
    env: {
      apiKey: 'qa-api-key',
    },
    setupNodeEvents(on, config) {

    },
  },
});
