import { page, visitable, fillable, clickable } from 'cypress-page-object';
import LoginPage from '../elements/pages/LoginPage';

//-PAGE-//
//-TESTS-//

describe('Log in page tests', () => {
	it('should error when end user inputs an unrecognised email and password', () => {
		LoginPage.visit()
			.fillEmail('wrongemail@ao.com')
			.fillPassword('wrongpassword')
			.submit()
			.errorMessage()
			.should('contain', "We don't recognise this email address or password.");
	});
});
