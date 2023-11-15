import data from "../../fixtures/data";

describe('movie tickets reservation screen', () => {
   beforeEach(() => {
     cy.visit('/');
   })
  it('should display 7 days', () => {
    cy.visit("/")
    cy.get(data.selectors.titlePageCinema).should("be.visible");
    cy.get(data.selectors.days).should("have.length", 7);
  })
})