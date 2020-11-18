class ArticleForm{
    title(){
        cy.get('[ng-model="$ctrl.article.title"]')
         return this
    }
    describtion(){
        cy.get('[ng-model="$ctrl.article.description"]')
         return this
    }
    body(){
        cy.get('[ng-model="$ctrl.article.body"]')
        return this
    }
    tags(){
        cy.get('[ng-model="$ctrl.tagField"]')
         return this
    }
    publishBtn(){
          cy.get('[ng-click="$ctrl.submit()"]')
     }
}
export default ArticleForm;