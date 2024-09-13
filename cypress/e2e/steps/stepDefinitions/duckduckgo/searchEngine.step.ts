import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../src/pages/duckduckgo/HomePage';
import SearchPage from '../../src/pages/duckduckgo/SearchPage';
import { QueryDbResult } from '@support/custom';

Given('I go to the Duckduckgo page', function () {
  this.home_page = new HomePage();
  this.home_page.open();
});

Given(
  'I fill the search input with the {string} term on the Search Engine page',
  function (text: string) {
    this.home_page.fillSearch(text);
  }
);

When('I click on the search button on the Search Engine page', function () {
  this.home_page.search();
});

Then(
  'the text {string} should be visible on the result page on the Search Engine page',
  function (text: string) {
    this.search_page = new SearchPage();
    this.search_page.resultContain((elemText: string) => {
      expect(elemText).contains(text);
    });
    const title = 'Junior AQA';
    cy.task(
      'queryDb',
      `SELECT * FROM qualification WHERE title = '${title}'`
    ).then((result: QueryDbResult) => {
      expect(result).to.have.length(1);
      expect(result[0].description).to.equal(
        'Junior qualification for qa automation'
      );
    });
  }
);
