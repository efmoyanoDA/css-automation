export default class MockLoginPage {
  open(): void {
    cy.visit(Cypress.config('baseUrl') + '/login');
  }

  login(user: string): void {
    cy.contains(user).click();
  }
}
