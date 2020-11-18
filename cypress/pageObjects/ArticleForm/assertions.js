import { expect } from "chai"

class ArticleFormAssertion{
    visibilityOfTitle(value){
       cy.get('[ng-model="$ctrl.article.title"]').should('be.visible')
         .and('have.attr','placeholder',value)
        return this
    }
    visibilityOfDescribtion(value){
        cy.get('[ng-model="$ctrl.article.description"]').should('be.visible')
          .and('have.attr','placeholder',value)
        return this
    }
    visibilityOfBody(){
        cy.get('[ng-model="$ctrl.article.body"]').should('be.visible')
     }
    visibilityOfTags(value){
        cy.get('[ng-model="$ctrl.tagField"]').should('be.visible')
          .and('have.attr','placeholder',value)
        return this
    }
    visibilityOfPublishBtn(){
        cy.get('[ng-click="$ctrl.submit()"]')
          .should('be.visible')
    }
    TitleOfPage(value){
       cy.title().and('include',value)
    }

    SingleError(value){
     cy.get('ul.error-messages').children().children().should('contain',value)
     }

    errorMessages(values){
        const arr =cy.get('ul.error-messages').children().children() 
         arr.each(($li,index)=>{
          assert.equal($li.text(), values[index], 'vals equal')
           //expect($li.text()).to.contain(values[index])
        })
    }
}
export default ArticleFormAssertion;