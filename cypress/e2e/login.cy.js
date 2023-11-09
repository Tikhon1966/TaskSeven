const { data } = require("cypress/types/jquery");

describe("authorization admin page", () => {
    const data = require("../fixtures/data");
    beforeEach(() => {
      cy.visit("/admin");
    });
  
    it("login and pass validation", () => {
      cy.login(data.emailValid, data.passwordValid);
      cy.contains(data.authorizationName).should("be.visible");
    });
});