// describe("Visual Tests - Automation Test Store", () => {
//   before(function () {
//     if (!Cypress.env("VISUAL_TESTS")) {
//       this.skip();
//     }
//   });

//   it("Homepage snapshot", () => {
//     cy.visit("https://automationteststore.com/");
//     cy.compareSnapshot("homepage");
//   });

//   it("Item page snapshot", () => {
//     cy.visit("https://automationteststore.com/");
//     cy.get(".prdocutname").first().click();
//     cy.compareSnapshot("item-page");
//   });

//   it("Profile page snapshot (My Account)", () => {
//     cy.visit("https://automationteststore.com/");
//     cy.get('a[href*="account/login"]').click();
//     cy.compareSnapshot("profile-login-page");
//   });

//   it("Cart page snapshot", () => {
//     cy.visit("https://automationteststore.com/");
//     cy.get("#cart").click();
//     cy.compareSnapshot("cart-page");
//   });

//   it("Search result page snapshot", () => {
//     cy.visit("https://automationteststore.com/");
//     cy.get("#filter_keyword").type("shampoo{enter}");
//     cy.compareSnapshot("search-results");
//   });
// });

describe("Visual Tests - Automation Test Store", () => {
  before(function () {
    if (!Cypress.env("VISUAL_TESTS")) {
      this.skip();
    }
  });

  it("Homepage snapshot", { tags: ["visual"] }, () => {
    cy.visit("https://automationteststore.com/");
    cy.compareSnapshot("homepage");
  });

  it("Item page snapshot", { tags: ["visual"] }, () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".prdocutname").first().click();
    cy.compareSnapshot("item-page");
  });

  it("Profile page snapshot (My Account)", { tags: ["visual"] }, () => {
    cy.visit("https://automationteststore.com/");
    cy.get('a[href*="account/login"]').click();
    cy.compareSnapshot("profile-login-page");
  });

  it("Cart page snapshot", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("#cart").click();
    cy.compareSnapshot("cart-page");
  });

  it("Search result page snapshot", { tags: ["visual"] }, () => {
    cy.visit("https://automationteststore.com/");
    cy.get("#filter_keyword").type("shampoo{enter}");
    cy.compareSnapshot("search-results");
  });
});
