class LoginPage {
	constructor() {}

	visit() {
		cy.visit('https://beta-aol-account.ao-qa.com/login');
	}

	inputEmail(email) {
		cy.get('#input-email').type(email);
	}

	inputPassword(password) {
		cy.get('#input-password').type(password);
	}

	submitLogin() {
		cy.get('[data-testid=submit-login]').click();
	}

	errorMessage() {
		return cy.get('.u-c--error');
	}
}

export default LoginPage;
