class ArticleFormAssertion{
    title(value){
        const title=cy.get('[ng-model="$ctrl.article.title"]')
        title.should('have.attr','placeholder',value)
        return this
    }
    describtion(value){
        const desc=cy.get('[ng-model="$ctrl.article.description"]')
        desc.should('have.attr','placeholder',value)
        return this
    }
    body(value){
        const body=cy.get('[ng-model="$ctrl.article.body"]')
        body.should('have.attr','placeholder',value)
        return this
    }
    tags(value){
        const tags=cy.get('[ng-model="$ctrl.tagField"]')
        tags.should('have.attr','placeholder',value)
        return this
    }
    publishBtn(){
         const publishBtn=cy.get('[ng-click="$ctrl.submit()"]')
         publishBtn.should('be.visible')
    }
}
export default ArticleFormAssertion;