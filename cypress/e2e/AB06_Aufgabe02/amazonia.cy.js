describe('TestSuite Amazonia', () => {
    it('loging für Amazonia', () => {
      cy.visit('http://localhost:3000/signin');
      cy.get('#email').type('admin@example.com');
      cy.get('#password').type('1234{enter}');
    });
  });