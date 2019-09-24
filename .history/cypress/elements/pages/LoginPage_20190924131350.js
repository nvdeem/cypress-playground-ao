import { page, visitable, fillable, clickable } from 'cypress-page-object';

class LoginPage {
	constructor() {}

	visit() {
		visitable('https://beta-aol-account.ao-qa.com/login');
		// cy.visit('https://beta-aol-account.ao-qa.com/login');
	}
}

export default LoginPage;
