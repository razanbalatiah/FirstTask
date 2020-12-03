  /// <reference types="Cypress" />
import { Article } from './../../pageObjects/ArticleForm/createDataTypes';
import ArticleFormUtil from './../../pageObjects/ArticleForm/dataUtil';
import {Given , When , Then , And } from 'cypress-cucumber-preprocessor/steps';
import ArticleFormActions from "../../pageObjects/ArticleForm/actions";
import ArticleFormAssertion from "../../pageObjects/ArticleForm/assertions";
 
const articleFormActions=new ArticleFormActions();
const articleFormAssertion=new ArticleFormAssertion(); 
const AFU = new ArticleFormUtil();
let articleID = ""; 
let token=""; 

let article: Article = {
    title:"Hello",
    description:"welcome",
    body:"Hi again",
}
 
let article1: Article = {
    title:"Hello",
    description:"welcome 2 ",
    body:"Hi again",
}

    beforeEach(()=>{
      // @ts-ignore
      cy.login() 
    })
     
    afterEach(()=>{
      // @ts-ignore
        cy.logout()
    })

    before(()=>{
      // @ts-ignore
      cy.login().then((resp:any)=>{
         token = resp.body.user.token; 
         AFU.createArticle(article,token).then((response:any)=>{
         articleID = response.body.article.slug;})
      })
    })
  
    after(()=>{
       AFU.deleteArticle(articleID,token) 
    })
   
    When ('User update article', ()=>{
       AFU.updateArticle(article1,articleID,token) 
    })

    Given('A user In Home page',()=>{
      cy.visit('https://demo.productionready.io/')
    })
    When('He clicks on New article tab',()=>{
        articleFormActions.openNewArticleTab()
     })
    Then('New article tab will be opened',()=>{
       articleFormAssertion.TitleOfPage('Editor — Conduit')
    })

    When('A user visits the article page',()=>{
      articleFormActions.openNewArticleTab()
    })
    Then('The fields of the form should be displayed',()=>{
      articleFormAssertion.checkVisibiltyOfArticleFormFields()
    })
  
    Given('A user in New article form',()=>{
      articleFormActions.openNewArticleTab()
    }) 
    And ("He fills all fields corrcetly",()=>{
        articleFormActions.fillArticalForm('Title','Desc  ','body  ','tag{enter}  ')
    }) 
    When('He clicks on publish Article button',()=>{
        articleFormActions.publishArticleBtn()
    }) 
    Then('The article will be published in Article page',()=>{
      articleFormAssertion.checkVisibiltyOfArticle()
    })
      
      
    Given('A user in New article form',()=>{    
      articleFormActions.openNewArticleTab()
    }) 
    And ("He didn't fill any field in the form",()=>{
        articleFormActions.fillArticalForm(' ','  ','  ','  ')
    }) 
    When('He clicks on publish Article button',()=>{
        articleFormActions.publishArticleBtn()
    }) 
    Then('Error message should appear{string}',(errorMessage)=>{
        articleFormAssertion.errorMessage(errorMessage)
    })
    
    Given('A user in New article form',()=>{
      articleFormActions.openNewArticleTab()
    }) 
    And ("He fills Title and description field only",()=>{
      articleFormActions.fillArticalForm(' Title ',' Desc ','  ','  ')

    }) 
    When('He clicks on publish Article button',()=>{
      articleFormActions.publishArticleBtn()
    }) 
    Then('Error message should appear {string}',(errorMessage)=>{
      articleFormAssertion.errorMessage(errorMessage)
    })

    Given('A user in New article form',()=>{
      articleFormActions.openNewArticleTab()
    }) 
    Then ("He fills Title and body fields",()=>{
      articleFormActions.fillArticalForm(' Title ','  ','  body ','  ')
    }) 
    When('He clicks on publish Article button',()=>{
      articleFormActions.publishArticleBtn()
    }) 
    Then('Error message should appear {string}',(errorMessage)=>{
      articleFormAssertion.errorMessage(errorMessage)
    })
  
    Given('A user in New article form',()=>{
      articleFormActions.openNewArticleTab()
    }) 
    And ("He fills description and body fields",()=>{
    articleFormActions.fillArticalForm(' ',' desc ',' body ','  ')

    }) 
    When('He clicks on publish Article button',()=>{
      articleFormActions.publishArticleBtn()
    }) 
    Then('Error message should appear {string}',(errorMessage)=>{
    articleFormAssertion.errorMessage(errorMessage)
    })

    Given('A user in New article form',()=>{
      articleFormActions.openNewArticleTab()
    }) 
    And ("He fills tags field only",()=>{
      articleFormActions.fillArticalForm(' ','  ','  ',' tag{enter} ')
    }) 
    When('He clicks on publish Article button',()=>{
      articleFormActions.publishArticleBtn()
    }) 
    Then('Error message should appear {string}',(errorMessage)=>{
      articleFormAssertion.errorMessage(errorMessage)
    })

    Given('A user in New article form',()=>{
      articleFormActions.openNewArticleTab()
    }) 
    And ("He fills Title field only",()=>{
      articleFormActions.fillArticalForm('Title ','  ','  ','  ')
    }) 
    When('He clicks on publish Article button',()=>{
      articleFormActions.publishArticleBtn()
    }) 
    Then('Error message should appear {string}',(errorMessage)=>{
      articleFormAssertion.errorMessage(errorMessage)
    })
     
    Given('A user in New article form',()=>{
      articleFormActions.openNewArticleTab()
    }) 
    And ("He fills description field only",()=>{
      articleFormActions.fillArticalForm(' ',' desc ','  ','  ')
    }) 
    When('He clicks on publish Article button',()=>{
      articleFormActions.publishArticleBtn()
    }) 
    Then('Error message should appear {string}',(errorMessage)=>{
      articleFormAssertion.errorMessage(errorMessage)
    })

    Given('A user in New article form',()=>{
      articleFormActions.openNewArticleTab()
    }) 
    And ("He fills body field only",()=>{
      articleFormActions.fillArticalForm(' ','  ',' body ','  ')
    }) 
    When('He clicks on publish Article button',()=>{
      articleFormActions.publishArticleBtn()
    }) 
    Then('Error message should appear {string}',(errorMessage)=>{
      articleFormAssertion.errorMessage(errorMessage)
    })
     
    
  