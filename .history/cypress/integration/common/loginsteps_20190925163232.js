import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../elements/pages/LoginPage';

const loginPg = new LoginPage();

And('I enter a registered account email and password', () => {
	loginPg.inputEmail('qatestao@gmail.com');
	loginPg.inputPassword('&zcX&k0G6N2');
});

Then('I will be logged in to my account', () => {
	cy.url().should('contain', 'https://beta-aol-account.ao-qa.com/home/');
});
