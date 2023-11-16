class LoginPage {

    //Locators
    usernameField = "input[id='1-email']";
    passwordField = "input[name='password']";
    landingPageHeader = "div .auth0-lock-header-welcome";
    captchaLabel = "div.recaptcha-checkbox-spinner";
    signInButton = "button .auth0-label-submit";
    cookiesModal = "div .type-modal";
    cookieAcceptButton = "button[title='Fine By Me!']";
    signInNavigationButton = "span.top-banner-signed-out-text";

    fillUserName(userName) {
        cy.get(this.usernameField).should('be.visible').type(userName);
    }

    assertPageIsDisplayed() {
        cy.get(this.landingPageHeader).should('be.visible');
    }

    fillPassword(password) {
        cy.get(this.passwordField).should('be.visible').type(password);
    }

    clickLoginButton() {
        cy.get(this.signInButton).should('be.visible').click();
    }

    clickSignInButton() {
        cy.get(this.signInNavigationButton).should('be.visible').click();
    }

    acceptCaptcha() {
        cy.getIframeBodyWaiting('iframe[title="reCAPTCHA"]').then(($body) => {
            cy.wrap($body).find(this.captchaLabel).click();
        });
    }

    login(username, password) {
        this.clickSignInButton();
        this.assertPageIsDisplayed();
        this.fillUserName(username);
        this.fillPassword(password);
        this.acceptCaptcha();
        this.clickLoginButton();
    }

    acceptCookiesModal() {
        cy.getIframeBody('iframe[id=sp_message_iframe_915645]').within(() => {
            cy.get(this.cookiesModal).should('be.visible');
            cy.get(this.cookieAcceptButton).click();
        });
    }
}

export default LoginPage;