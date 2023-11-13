describe("Home Page", () => {
  it("displays first 3 products on the home page", () => {
    cy.visit("http://localhost:3000");
    // cy.get('[data-test="product-item"]').should("have.length", 6);
    cy.get('[data-test="product-item"]')
      .eq(0)
      .within(() => {
        cy.get('[data-test="product-name"]').should(
          "contain",
          "Rogue Strongman Sandbag"
        );
        cy.get('[data-test="product-price"]').should("contain", "£125.36");
      });

    cy.get('[data-test="product-item"]')
      .eq(1)
      .within(() => {
        cy.get('[data-test="product-name"]').should(
          "contain",
          "Rogue Husafell Strongman Bag"
        );
        cy.get('[data-test="product-price"]').should("contain", "£198.49");
      });

    cy.get('[data-test="product-item"]')
      .eq(2)
      .within(() => {
        cy.get('[data-test="product-name"]').should(
          "contain",
          "Rogue Rubber Atlas Stone"
        );
        cy.get('[data-test="product-price"]').should("contain", "£532.79");
      });

  });

});
