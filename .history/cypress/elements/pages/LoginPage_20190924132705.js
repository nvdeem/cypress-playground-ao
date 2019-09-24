class LoginPage {
	constructor() {}

	visit() {
		cy.visit('https://beta-aol-account.ao-qa.com/login');
	}

	inputEmail() {
		cy.get('#input-email').type('wrong@email.com');
	}

	inputPassword() {
		cy.get('#input-password').type('secret');
	}

	submitLogin() {
		cy.get('[data-testid=submit-login]').click();
	}

	errorMessage() {
		return cy.get('.u-c--error');
	}
}

export default LoginPage;
