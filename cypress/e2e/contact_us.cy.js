
describe('Contact Us Form Test', () => {
    it('Submits the Contact Us form successfully', () => {

        // Open Automation Exercise
        cy.visit('https://automationexercise.com/');

        // Click Contact Us
        cy.contains('a', 'Contact us').click();

        // Verify Contact Us page
        cy.contains('Get In Touch').should('be.visible');

        // Enter contact information
        cy.get('[data-qa="name"]').type('Test User');
        cy.get('[data-qa="email"]').type('testuser@example.com');
        cy.get('[data-qa="subject"]').type('Cypress Testing');
        cy.get('[data-qa="message"]')
            .type('This is an automated Contact Us form test.');

        // Submit form and accept confirmation alert
        cy.on('window:confirm', () => true);

        cy.get('[data-qa="submit-button"]').click();

        // Verify success message
        cy.contains(
            'Success! Your details have been submitted successfully.'
        ).should('be.visible');

    });
});
