 
class ArticleFormUtil{

    deleteArticle(){
          cy.request({
              methode:'DELETE',
              url:'https://conduit.productionready.io/api/articles/title-6dr7yn',
              failOnStatus: false
            }).then((response)=>{
            expect(response.status).equal(404)   
        })
     }
     updateArticle(){
        cy.request({
            methode:'PUT',
            url:'https://conduit.productionready.io/api/articles/title-6dr7yn',
             failOnStatus: false
          }).then((response)=>{
          expect(response.status).equal(200)   
       })
     }
     postArticle(){
         cy.request({
             methode:'POST',
             url:'http://conduit.productionready.io/api/articles',
             failOnStatus: false
            }).then((response)=>{
            expect(response.status).equal(200)
            
         })
     }
}
export default ArticleFormUtil;