import ArticleFormUtil from "../ArticleForm/dataUtil"

const AFU = new ArticleFormUtil();

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
        AFU.postArticle()
    } 
    deleteBtn(){
        cy.get('.article-actions').contains('Delete Article').click()
        AFU.deleteArticle()   
    }
    updateBtn(){
        cy.get('.article-actions').contains('Edit Article').click()
    }
    
    afterUpdate(){
        cy.get('[ng-click="$ctrl.submit()"]').click()
        AFU.updateArticle()
     }


}
export default ArticleFormActions;