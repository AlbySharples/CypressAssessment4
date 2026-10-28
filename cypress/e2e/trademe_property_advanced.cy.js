describe('Trade Me Advanced Property Search', () => {
    it('Searches for Apartment and House in Chartwell, Hamilton', () => {

        // Open Trade Me property sales page
        cy.visit('https://www.trademe.co.nz/a/property/residential/sale');

        // Check the correct page opened
        cy.url().should('include', '/property/residential/sale');

        // Select Waikato as the region
        cy.get('select[name="region"]')
            .select('Waikato', { force: true });

        // Select Hamilton as the district
        cy.get('select[name="district"]')
            .should('not.be.disabled')
            .select('Hamilton', { force: true });


   // Open the suburb dropdown
        cy.get('button.tm-property-location-search-multi-dropdown__suburb-button')
            .click();

            // Select Chartwell
        cy.get('input[type="checkbox"][name="Chartwell"]')
            .check({ force: true });

            // Open Property type dropdown
        cy.get('#propertyTypeSearchButton').click();

        // Select Apartment
        cy.contains('span.o-checkbox__label-text', 'Apartment')
            .click();

        // Select House
        cy.contains('span.o-checkbox__label-text', 'House')
            .click();


           // Click the Search button
    
            cy.get('button[title="Search"]').click();
            });

         
}); 