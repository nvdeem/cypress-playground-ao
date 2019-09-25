import { Given, And, When, Then } from 'cypress-cucumber-preprocessor';
import LoginPage from '../elements/pages/LoginPage';

const loginPg = new LoginPage();
const url = 'https://beta-aol-account.ao-qa.com/login';

Given('I am on the log in page', () => {
	cy.visit(url);
});

And('I enter a registered account email and password', () => {});
