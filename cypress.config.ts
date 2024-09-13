import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';
import config from 'config'; // Import the config module
import { Client } from 'pg'; // PostgreSQL client

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  cypressConfig: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, cypressConfig);

  // Get DB config from the environment-specific config file
  const dbConfig = config.get('db');

  on('task', {
    queryDb: (query) => {
      const client = new Client({
        host: dbConfig.host,
        user: dbConfig.username,
        password: dbConfig.password,
        database: dbConfig.database,
        port: dbConfig.port,
      });

      client.connect();

      return new Promise((resolve, reject) => {
        client.query(query, (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res.rows);
          }
          client.end();
        });
      });
    },
  });

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(cypressConfig)],
    })
  );

  return {
    ...cypressConfig,
    baseUrl: config.get('baseUrl'),
  };
}

export default defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    setupNodeEvents,
  },
});
