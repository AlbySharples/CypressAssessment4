
describe('Calculator Test', () => {
    it('Tests multiplication and subtraction', () => {
        cy.visit('https://www.calculator.net/');

        // Click the number 6
        cy.contains('span.scinm', '6').click();

        // Click multiply
        cy.contains('span', '×').click();

        // Click 5
        cy.contains('span.scinm', '5').click();

        // Click equals
        cy.contains('span', '=').click();

        // Check multiplication result
        cy.get('#sciOutPut').should('contain.text', '30');

        // Clear the calculator
        cy.contains('span', 'AC').click();

        // Enter 150
        cy.contains('span.scinm', '1').click();
        cy.contains('span.scinm', '5').click();
        cy.contains('span.scinm', '0').click();

        // Subtract 50
        cy.get('span.sciop[onclick="r(\'-\')"]').click();
        cy.contains('span.scinm', '5').click();
        cy.contains('span.scinm', '0').click();

        // Calculate the result
        cy.contains('span', '=').click();

        // Check subtraction result
        cy.get('#sciOutPut').should('contain.text', '100');
    });
});
