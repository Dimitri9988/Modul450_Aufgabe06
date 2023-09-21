describe('Testsuite', () => {
    beforeEach(() => {
        cy.visit('http://localhost:9000')
    });
    it ('Create Card', () => {
        cy.get('input[id=frageInput]').type("Frage")
        cy.get('input[id=antwortInput]').type("Antwort")
        cy.get('button[id=addButton]').click()
    });
    it ('flip Card', () => {
        cy.get('input[id=frageInput]').type("Frage")
        cy.get('input[id=antwortInput]').type("Antwort")
        cy.get('button[id=addButton]').click()
        cy.get('button[id=flipButton]').click()
    });
    it ('Delet Card', () => {
        cy.get('input[id=frageInput]').type("Frage")
        cy.get('input[id=antwortInput]').type("Antwort")
        cy.get('button[id=addButton]').click()
        cy.get('button[id=flipButton]').click()
        cy.get('button[id=deletButton]').click()
    });
});