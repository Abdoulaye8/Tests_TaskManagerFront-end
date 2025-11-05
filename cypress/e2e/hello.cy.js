describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})
describe('Hello Component', () => {
  it('un message de bienvenue est à decouvrir', () => {
    cy.visit('http://localhost:8081');
    cy.contains('Welcome to the Task Manager API!');
  });
});
