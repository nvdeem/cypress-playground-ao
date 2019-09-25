import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../elements/pages/LoginPage';

const loginPg = new LoginPage();

And('I enter an unrecognised email and password', () => {
	loginPg.inputEmail('wrong@email.com');
	loginPg.inputPassword('secret');
});

Then('I will be logged in to my account', () => {
	cy.url().should(
		'contain',
		'https://beta-aol-account.ao-qa.com/home/order-history'
	);
});
