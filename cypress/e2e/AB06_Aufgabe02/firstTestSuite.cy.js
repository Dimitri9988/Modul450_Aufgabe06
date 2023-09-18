describe('Test Suite', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com/')
    });
    it ('serch something on Googel', () => {
        cy.get('button[id=L2AGLb]').click()
        cy.get('textarea[id=APjFqb]').type("something{enter}")
    });

});