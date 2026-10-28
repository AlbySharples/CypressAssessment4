
describe('Trade Me Search Test', () => {
    it('Searches for Software developer', () => {
        // Open Trade Me
        cy.visit('https://www.trademe.co.nz/a/');

        // Find the search bar and type the search term
        cy.get('#search').type('Software developer');

        // Press Enter to search
        cy.get('#search').type('{enter}');
        cy.contains("results for 'Software developer'").should('be.visible');
    });
});
