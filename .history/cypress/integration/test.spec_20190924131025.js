import LoginPage from '../elements/pages/LoginPage';

const login = new LoginPage();

//-PAGE-//
//-TESTS-//

describe('Log in page tests', () => {
	it('should error when end user inputs an unrecognised email and password', () => {
		login.visit();
	});
});
