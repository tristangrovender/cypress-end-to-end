describe("Testing our volunteer from", function() {
    beforeEach(function() {
        cy.visit("http://localhost:3000/"); // test for being able to access page
    });
    it("Add test to inputs and submit form", function() {
        cy.get('[for="name"] > input')
            .type("Tristan")
            .should("have.value", "Tristan");
        cy.get("input[name='email']")
            .type("email@email.com")
            .should("have.value", "email@email.com");
        cy.get("textarea")
            .type("I have a HUGE heart.")
            .should("have.value", "I have a HUGE heart.");
        cy.get("#positions")
            .select("Yard Work")
            .should("have.value", "Yard Work");
        cy.get('[type="checkbox"]')
            .check()
            .should("be.checked");
        cy.get("button").click();
    });
});
