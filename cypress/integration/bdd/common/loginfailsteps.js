import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../elements/pages/LoginPage';

const loginPg = new LoginPage();

And('I enter a unrecognised account email and password', () => {
	cy.enterEmailAndPassword('unrecognised@email.com', 'secret');
});

Then('I will see an error message', () => {
	loginPg
		.errorMessage()
		.should('contain', "We don't recognise this email address or password.");
});
