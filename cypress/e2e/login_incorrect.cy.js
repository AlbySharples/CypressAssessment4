
describe('Login with Incorrect Credentials', () => {
    it('Rejects login with an incorrect email and password', () => {

        // Open Automation Exercise
        cy.visit('https://automationexercise.com/');

        // Verify homepage loaded
        cy.url().should('include', 'automationexercise.com');

        // Click Signup / Login
        cy.contains('a', 'Signup / Login').click();

        // Verify login form appears
        cy.contains('Login to your account')
            .should('be.visible');

        // Enter incorrect email
        cy.get('[data-qa="login-email"]')
            .type('wronguser123456@example.com');

        // Enter incorrect password
        cy.get('[data-qa="login-password"]')
            .type('WrongPassword123!');

        // Click Login
        cy.get('[data-qa="login-button"]').click();

        // Verify error message appears
        cy.contains('Your email or password is incorrect!')
            .should('be.visible');

        // Verify user remains on login page
        cy.url().should('include', '/login');

    });
});
