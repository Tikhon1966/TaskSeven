import data from "../fixtures/data";

describe("booking tickets on movie", () => {
  it("should book a movie in an available hall", () => {
    cy.visit("/admin")
    cy.login(data.emailValid, data.passwordValid)
    cy.fixture('data').then((data) => {
      const expectedHallName = data.hallNames[3]
      cy.get("#hall-control ul > li")
        .should("have.length", data.hallNames.length)
        .each((element, index) => {
          cy.wrap(element)
            .invoke("text")
            .then((text) => {
              if (text.includes(expectedHallName)) {
                cy.log(
                  `Element contains the expected hall: ${expectedHallName}`
                );
                expect(text).to.equal(expectedHallName)
              }
            })
        })
    })
    cy.visit("/")
    cy.get(data.selectors.days).eq(3).click()
    cy.get(".movie").last().contains("12:00").click()
    cy.fixture("seats").then((seats) => {
      seats.forEach((seat) => {
        cy.get(
          `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
        ).click()
      })
    })
    cy.contains(data.ButtonBookingName).click()
    cy.contains(data.BookingResult).should("be.visible")
  })
})