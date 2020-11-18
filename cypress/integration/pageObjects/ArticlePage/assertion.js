class ArticleAssertion {
     
    assert(){
        cy.title().should('include','Editor - Conduit')
    }
}
export default ArticleAssertion