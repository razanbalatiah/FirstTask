class Article {

    openTab(){
         cy.get('[ui-sref="app.editor"]')
         .click();
    }
}
export default Article