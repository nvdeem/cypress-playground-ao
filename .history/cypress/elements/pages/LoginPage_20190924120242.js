import { page, visitable, fillable, clickable } from 'cypress-page-object';

class LoginPage {
	loginPage = page({
		visit: visitable('https://beta-aol-account.ao-qa.com/login'),
		fillEmail: fillable('#input-email'),
		fillPassword: fillable('#input-password'),
		submit: clickable('[data-testid=submit-login]'),

		errorMessage() {
			return cy.get('.u-c--error');
		}
	});
}

export default LoginPage;
