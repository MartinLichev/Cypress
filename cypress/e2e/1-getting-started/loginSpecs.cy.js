import LoginPage from '../../pageObjects/loginPage.cy';

describe('Login Test', () => {
    before(() => {
        cy.visit(Cypress.config('baseUrl'));
    });

    it('Should be able to login', () => {
        const loginPage = new LoginPage();
        const username = Cypress.env('username');
        const password = Cypress.env('password');

        loginPage.acceptCookiesModal();
        loginPage.login(username, password);

    });
});