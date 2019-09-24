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

	submit() {
		cy.get('data-testid=submit-login').click();
	}
}

export default LoginPage;