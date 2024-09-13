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
