describe('movie tickets reservation screen', () => {
   beforeEach(() => {
     cy.visit('/');
   })
  it('should display 7 days', () => {
    cy.visit("/")
    cy.get(".page-header__title").should("be.visible");
    cy.get(".page-nav__day").should("have.length", 7);
   // cy.get('.page-nav__day').should('have.length', 7)
  })
})