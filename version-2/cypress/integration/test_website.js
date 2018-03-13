describe("Website Testing", function () {
    it("has a bunch of items on the page", function () {
        cy.visit("/");
        
        // Make sure the title has "Vue HN 2.0" in it
        cy.title().should('include', 'Vue HN 2.0')

        // Make sure more than 1 news items show up on the page
        cy.get('ul').should('have.length', 1)

        // Go to the "New" area via the link
        cy.get('a').contains('New').click()
        cy.url().should('contain', '/new')

        // Make sure more than 1 items show up on the page
        cy.get('ul').should('have.length', 1)


        // Go to the next set of results with the "more" link
        cy.get('a').contains('New').click()
        cy.get('a').contains('more').click()
        cy.url().should('contain', '/new/')

        // Make sure more than 1 news items show up on the page
        cy.get('ul').should('have.length', 1)


        // Go to the jobs page via the link
        cy.get('a').contains('Jobs').click()
        cy.url().should('contain', '/job')
        cy.get('ul').should('have.length', 1)



    });
});



