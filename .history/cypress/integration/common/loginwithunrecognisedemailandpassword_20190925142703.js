import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../elements/pages/LoginPage';

const loginPg = new LoginPage();

And('I enter an unrecognised email and password', () => {
	loginPg.inputEmail('wrong@email.com');
	loginPg.inputPassword('secret');
});
