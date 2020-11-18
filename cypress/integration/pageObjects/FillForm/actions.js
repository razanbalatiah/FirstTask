class FillForm{

    fillTitle(value){
        cy.get('[ng-model="$ctrl.article.title"]')
         .clear()
         .type(value)
        return this
    }
    fillDesc(value){
         cy.get('[ng-model="$ctrl.article.description"]')
         .clear()
         .type(value)
        return this
    }
    fillBody(value){
       cy.get('[ng-model="$ctrl.article.body"]')
         .clear()
         .type(value)
        return this
    }
    fillTags(value){
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
export default FillForm