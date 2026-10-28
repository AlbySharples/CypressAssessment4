describe('Google Search Test', () => {
    it('Searches for Auckland weather', () => {
      cy.visit('https://www.google.co.nz');
      
      cy.get('[name="q"]').type('Auckland weather');
      cy.get('[name="q"]').type('{enter}');
  });
});