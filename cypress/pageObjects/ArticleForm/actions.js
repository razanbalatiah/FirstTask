class ArticleFormActions{
    visitLoginPage(){
        cy.visit('https://demo.productionready.io/#/login')
    }
    fillEmailInLoginForm(value){
        cy.get('[type="email"]').clear().type(value)
         return this 
    }
    fillPasswordInLoginForm(value){
       cy.get('[type="password"]').clear().type(value)
        return this 
    }
    submitLoginForm(){
        cy.get('[type="submit"]').click()
    }
    openNewArticleTab(){
        cy.get('[ui-sref="app.editor"]').should("be.visible").trigger("click")
 
    }
    fillTitleInArticleForm(value){
        cy.get('[ng-model="$ctrl.article.title"]')
          .clear()
          .type(value)
          return this
    }
    fillDescInArticleForm(value){
        cy.get('[ng-model="$ctrl.article.description"]')
        .clear()
        .type(value)
        return this
    }
    fillBodyInArticleForm(value){
        cy.get('[ng-model="$ctrl.article.body"]')
            .clear()
            .type(value)
            return this
    }
    fillTagsInArticleForm(value){
      cy.get('[ng-model="$ctrl.tagField"]')
        .clear()
        .type(value)
        return this
    }
    publishArticleBtn(){
        cy.get('[ng-click="$ctrl.submit()"]')
        .click()
    }
   
}
export default ArticleFormActions;