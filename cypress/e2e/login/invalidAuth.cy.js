describe("authorization admin page", () => {
    const data = require("../../fixtures/data");
    beforeEach(() => {
      cy.visit("/admin");
    });

    it("login invalid", () => {
        cy.login(data.emailInvalid, data.passwordValid);
        cy.contains(data.errorMessage).should("be.visible");
      });
    
      it("password invalid", () => {
        cy.login(data.emailValid, data.passwordInvalid);
        cy.contains(data.errorMessage).should("be.visible");
      });
    });