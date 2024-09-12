/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('loginWithAPI', (user = 'admin') => {
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
});

Cypress.Commands.add('dataCy', (value) => {
  return cy.get(`[data-cy=${value}]`);
});

Cypress.Commands.add('customLog', (value: string) => {
  cy.log('This is a custom log');
  cy.log(value);
});
