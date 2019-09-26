/* Contains shared steps, before and after test functionality, 
	as well as useful interactions with commonly used elements */

import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../elements/pages/LoginPage';

const loginPg = new LoginPage();
const url = 'https://beta-aol-account.ao-qa.com/login';

// Retry mechanism
Cypress.env('RETRIES', 2);

// Before and after each test
beforeEach(() => {
	cy.visit(url);
});

afterEach(() => {
	cy.clearCookies();
});

// Common steps - Log in
Given('I am on the log in page', () => {
	cy.url().should('contain', 'https://beta-aol-account.ao-qa.com/login');
});

When('I click sign in', () => {
	cy.submitLogin();
});
