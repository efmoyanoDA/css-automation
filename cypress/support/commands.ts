/// <reference types="cypress" />

import { DeleteOptions, QueryOptions } from './types/db';

/*Cypress.Commands.add('loginWithAPI', (user = 'admin') => {
  cy.fixture('users.json').then((users) => {
    cy.session(user, () => {
      cy.request('POST', '/api/log-in', {
        email: users[user].email,
        password: users[user].password,
      }).then((resp) => {
        expect(resp.status).to.eq(200);
        Cypress.env('token', resp.headers['x-self-assessment-otp']);
        const passwordLength = JSON.stringify(users[user].password).length;
        Cypress.log({
          name: 'Set Token',
          displayName: `Logging in with username ${user}`,
          message: `User: ${user}`,
          consoleProps: () => {
            return {
              email: user,
              password: '*'.repeat(passwordLength),
            };
          },
        });
        window.localStorage.setItem('jwt_access_token', Cypress.env('token'));
        return resp.headers['x-self-assessment-otp'];
      });
    });
  });
});*/

Cypress.Commands.add('queryTable', (tableName: string, whereClause: string) => {
  return cy.task('queryDb', `SELECT * FROM ${tableName} WHERE ${whereClause}`);
});

Cypress.Commands.add('dataCy', (value) => {
  return cy.get(`[data-cy=${value}]`);
});

Cypress.Commands.add('customLog', (value: string) => {
  cy.log('This is a custom log');
  cy.log(value);
});

Cypress.Commands.add('queryDbExtensible', (options: QueryOptions) => {
  const {
    table,
    columns = ['*'],
    where = '1=1',
    join = '',
    orderBy = '',
    limit,
  } = options;

  let query = `SELECT ${columns.join(', ')} FROM ${table} ${join} WHERE ${where}`;

  if (orderBy) query += ` ORDER BY ${orderBy}`;
  if (limit) query += ` LIMIT ${limit}`;

  return cy.task('queryDb', query);
});

Cypress.Commands.add('deleteFromTableSafe', (options: DeleteOptions) => {
  const { table, where, params = [] } = options;
  const query = `DELETE FROM ${table} WHERE ${where}`;

  return cy.task('queryDbWithParams', { query, params });
});

Cypress.Commands.add(
  'fillForm',
  (
    components: Record<string, Cypress.Chainable>,
    formData: Record<string, object>,
    wait: boolean = false
  ) => {
    Object.keys(components).forEach((key) => {
      const component = components[key];
      const value = formData[key];

      if (value) {
        component.then(($el) => {
          if (
            $el.attr('role') === 'combobox' ||
            $el.hasClass('MuiSelect-select')
          ) {
            component.click();

            cy.get(`[data-value="${value}"]`).click();
            cy.get('body').type('{esc}');
          } else {
            component.click().wait(1000);

            component.type(`${value}`, { delay: 10 });
          }
          if (wait) cy.wait(500);
        });
      }
    });

    return cy.wrap(null); // Ensure we return something to keep Cypress chainable
  }
);
