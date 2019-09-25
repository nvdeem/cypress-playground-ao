import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../elements/pages/LoginPage';

const loginPg = new LoginPage();
const url = 'https://beta-aol-account.ao-qa.com/login';

// BEFORE TEST //
beforeEach(() => {
	cy.visit(url);
});

Given('I am on the log in page', () => {
	// cy.visit('https://beta-aol-account.ao-qa.com/login');
	cy.url().should('contain', 'https://beta-aol-account.ao-qa.com/login');
});

// And('I enter a registered account email and password', () => {
// 	loginPg.inputEmail('qatestao@gmail.com');
// 	loginPg.inputPassword('&zcX&k0G6N2');
// });

When('I click sign in', () => {
	loginPg.submitLogin();
	cy.wait(500);
});

// Then('I will be logged in to my account', () => {
// 	cy.url().should('contain', 'https://beta-aol-account.ao-qa.com/home/');
// });