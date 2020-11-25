class ArticleFormActions{
    openNewArticleTab(){
        cy.visit('https://demo.productionready.io/')
        cy.get('[ui-sref="app.editor"]').should("be.visible").trigger("click")
    }
    fillArticalForm(title,desc,body,tags){
        cy.get('[ng-model="$ctrl.article.title"]').clear().type(title)
        cy.get('[ng-model="$ctrl.article.description"]').clear().type(desc)
        cy.get('[ng-model="$ctrl.article.body"]').clear().type(body)
        cy.get('[ng-model="$ctrl.tagField"]').clear().type(tags)
        return this 
     }
    publishArticleBtn(){
        cy.get('[ng-click="$ctrl.submit()"]').click()
    } 
}
export default ArticleFormActions;