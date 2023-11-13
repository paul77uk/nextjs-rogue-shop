describe("Header", () => {
  it("links to the correct pages", () => {
    cy.visit("http://localhost:3000");
    cy.getBySel("logo").click();
    cy.location("pathname").should("eq", "/");
  });
});
