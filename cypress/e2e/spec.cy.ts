import { LoginPage } from "../pages/login.page";

describe("Suite 1", () => {
  let loginPage: LoginPage;

  before(() => {
    cy.log(`Running in ${Cypress.env("apiKey")}`);
    loginPage = new LoginPage();
  });

  beforeEach(() => {
    cy.log("BEFORE EACH");
    cy.visit("https://example.cypress.io");
  });

  it("Test 1", () => {
    loginPage.loginButton.click();

    cy.xpath("//h1").should("have.length", 1);

    cy.log("test assertions");

    cy.customLog("Custom Log of something");

    // cy.loginWithAPI();
  });
});
