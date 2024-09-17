import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import MockLoginPage from '../src/pages/Login/MockLoginPage';
import HomePage from '../src/pages/HomePage/HomePage';


Given('User is on CSP Home Page', function () {
  this.mockLogin_page = new MockLoginPage();
  this.mockLogin_page.open();
});

When('User select login as {string}', function (user: string) {
  this.mockLogin_page.login(user);
});

Then('User should be able to login successfully', function () {
  this.home_page = new HomePage();
  this.home_page.dashboardValidation();
});
