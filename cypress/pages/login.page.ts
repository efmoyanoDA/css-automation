import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  constructor() {
    super();
  }

  get loginButton() {
    cy.log('Click Login Button');

    return cy.get(
      ':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a'
    );
  }

  login() {
    cy.log('Test');
  }
}
