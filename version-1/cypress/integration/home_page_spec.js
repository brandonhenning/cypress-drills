describe('The Home Page', function() {
    it('shows the right things', function() {
        cy.visit('/index.html')
      
    //   The page should have a logo that displays the image at `./images/phptravels-logo.png`
        cy.get('img').should('have.attr', 'src', './images/phptravels-logo.png')

        // The page should have a secondary header that says "Application Test Drive."
        cy.get('h2').should('have.text', 'Application Test Drive.')


    //  The page should have navigation links for: demo, order, product

        cy.get('body > header nav > ul > li').as('dropdown-menu')
        cy.get('@dropdown-menu').eq(0).find('a').should('have.text', 'Demo')
        cy.get('@dropdown-menu').eq(1).find('a').should('have.text', 'Order')
        // cy.get('@dropdown-menu').eq(2).find('a').contains('Product').should('have.text', 'Product')

    // The Product link should have a sub-menu with the following items: Documentation, Features, Technology
        cy.get('nav > button').click()
        cy.get('@dropdown-menu').eq(2).find('ul > li').as('sub-menu')
        cy.get('@sub-menu').eq(1).should('have.text', 'Documentation')
        cy.get('@sub-menu').eq(2).should('have.text', 'Features')
        cy.get('@sub-menu').eq(3).should('have.text', 'Technology')


        // The FAQ should have 6 items
        cy.get('section').eq(2).find('h4').should('have.length', 6)


        // When you click on the "Order" navigation link, you should go to `/order`
        cy.get('a').contains('Order').click()
        cy.url().should('be', '/order')

    })
})


