describe("Visual Test", () => {
  it("should match homepage", () => {
    cy.visit("https://demoqa.com/");
    // cy.contains("MAKEUP").first().click();
    cy.compareSnapshot("homepage");
  });
});
