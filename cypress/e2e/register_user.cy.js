
describe('Login with Correct Credentials', () => {
    it('Creates an account, logs out, and logs back in', () => {

        const email = `testuser${Date.now()}@example.com`;
        const password = 'TestPassword123!';

        // Open website
        cy.visit('https://automationexercise.com/');

        // Open Signup / Login
        cy.contains('a', 'Signup / Login').click();

        // Register a new account
        cy.get('[data-qa="signup-name"]').type('Test User');
        cy.get('[data-qa="signup-email"]').type(email);
        cy.get('[data-qa="signup-button"]').click();

        // Fill account information
        cy.contains('Enter Account Information')
            .should('be.visible');

        cy.get('#id_gender1').check();
        cy.get('[data-qa="password"]').type(password);

        cy.get('[data-qa="days"]').select('15');
        cy.get('[data-qa="months"]').select('May');
        cy.get('[data-qa="years"]').select('2000');

        // Fill address information
        cy.get('[data-qa="first_name"]').type('Test');
        cy.get('[data-qa="last_name"]').type('User');
        cy.get('[data-qa="address"]').type('123 Test Street');
        cy.get('[data-qa="country"]').select('New Zealand');
        cy.get('[data-qa="state"]').type('Waikato');
        cy.get('[data-qa="city"]').type('Hamilton');
        cy.get('[data-qa="zipcode"]').type('3200');
        cy.get('[data-qa="mobile_number"]').type('0211234567');

        // Create account
        cy.get('[data-qa="create-account"]').click();

        // Verify account created
        cy.contains('Account Created!').should('be.visible');

        // Continue to homepage
        cy.get('[data-qa="continue-button"]').click();

        // Verify user is logged in
        cy.contains('Logged in as Test User')
            .should('be.visible');

        // Log out
        cy.contains('a', 'Logout').click();

        // Verify login page
        cy.contains('Login to your account')
            .should('be.visible');

        // Log in using correct credentials
        cy.get('[data-qa="login-email"]').type(email);
        cy.get('[data-qa="login-password"]').type(password);
        cy.get('[data-qa="login-button"]').click();

        // Verify successful login
        cy.contains('Logged in as Test User')
            .should('be.visible');

    });
});
