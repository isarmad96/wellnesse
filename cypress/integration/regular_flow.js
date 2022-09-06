it('Wellnesse regular flow', function(){
    cy.viewport(1700,1200)
    cy.visit('https://wellnesse.com/')
    //Landing Page
    cy.wait(7000)
    //Pop-Up closing
    cy.get('.klaviyo-close-form').click()
    cy.wait(5000)
    //Strawberry Toothpaste product button click
    cy.get('.hero_slider_btns a').click()
    cy.wait(4000)
    //Selected 1 product from the products page
    cy.get('.bundler--product-card-image-wrap').eq(1).click()
    cy.wait(5000)
    //Adding product to cart
    cy.contains('Add to cart').click()
    cy.wait(7000)
    //Clicking on checkout button
    cy.get('.c-btn--primary').click()
    //Adding Assertion of Checkout form tag for confirmation
    cy.get('.edit_checkout')
        .should('contain', 'Shipping address')
        
})