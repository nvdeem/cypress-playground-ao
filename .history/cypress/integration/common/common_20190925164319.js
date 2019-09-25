import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../elements/pages/LoginPage';

const loginPg = new LoginPage();
const url = 'https://beta-aol-account.ao-qa.com/login';

/* Retry mechanism */
Cypress.env('RETRIES', 2);

beforeEach(() => {
	cy.visit(url);
});

afterEach(() => {
	cy.clearCookies();
});

Given('I am on the log in page', () => {
	// cy.visit('https://beta-aol-account.ao-qa.com/login');
	cy.url().should('contain', 'https://beta-aol-account.ao-qa.com/login');
});

When('I click sign in', () => {
	loginPg.submitLogin();
	cy.wait(500);
});
