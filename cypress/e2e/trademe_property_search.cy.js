
describe('Trade Me Property Search Test', () => {
    it('Searches for properties in Waikato, Hamilton', () => {

        // Open Trade Me residential property sales
        cy.visit('https://www.trademe.co.nz/a/property/residential/sale');

        // Verify the correct page opened
        cy.url().should('include', '/property/residential/sale');

        // Open the location dropdown
       cy.get('select[name="region"]').select('Waikato');
       cy.get('select[name="district"]').select('Hamilton');
       cy.contains('button', 'Search').click();

    });
});
