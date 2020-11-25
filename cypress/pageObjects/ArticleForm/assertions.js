class ArticleFormAssertion{
   checkVisibiltyOfArticleFormFields(){
      cy.get('[ng-model="$ctrl.article.title"]').should('be.visible')
      cy.get('[ng-model="$ctrl.article.description"]').should('be.visible')
      cy.get('[ng-model="$ctrl.article.body"]').should('be.visible')
      cy.get('[ng-model="$ctrl.tagField"]').should('be.visible')
      cy.get('[ng-click="$ctrl.submit()"]').should('be.visible')
   }
   checkVisibiltyOfArticle(){
      cy.get('[ng-bind="::$ctrl.article.title"]').should('be.visible')
      cy.get('[ng-bind-html="::$ctrl.article.body"]').should('be.visible')
      cy.get('[ng-show="$ctrl.canModify"]').should('be.visible')
   }
   TitleOfPage(value){
      cy.title().should('include',value)
   }
   errorMessage(value){
      cy.get('ul.error-messages').contains(value)
   }
}
export default ArticleFormAssertion;