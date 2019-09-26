import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
And('I enter a registered account email and password', () => {
	cy.enterEmailAndPassword('qatestao@gmail.com', '&zcX&k0G6N2');
});

Then('I will be logged in to my account', () => {
	cy.url().should('contain', 'https://beta-aol-account.ao-qa.com/home/');
});
