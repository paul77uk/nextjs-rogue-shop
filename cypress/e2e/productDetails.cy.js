describe("ProductDetails Page", () => {

  it("links to the correct pages", () => {
    cy.visit("http://localhost:3000");
    cy.getBySel("product-item").eq(0).click();
    cy.location("pathname").should("eq", "/products/655206357bcd77460eb8dd20");
    cy.getBySel("detail-product-name").should("contain", "Rogue Strongman Sandbag")

    cy.visit("http://localhost:3000");
    cy.getBySel("product-item").eq(1).click();
    cy.location("pathname").should("eq", "/products/655206357bcd77460eb8dd21");
    cy.getBySel("detail-product-name").should("contain", "Rogue Husafell Strongman Bag")
  });
});
