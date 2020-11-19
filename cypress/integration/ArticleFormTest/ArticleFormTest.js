import {Given , When , Then , And } from 'cypress-cucumber-preprocessor/steps';
 import ArticleFormActions from '../../pageObjects/ArticleForm/actions';
import ArticleFormAssertion from '../../pageObjects/ArticleForm/assertions';

const articleFormActions=new ArticleFormActions();
const articleFormAssertion=new ArticleFormAssertion(); 

    beforeEach(()=>{
       articleFormActions.visitLoginPage()
       articleFormActions.fillEmailInLoginForm('razanbalatiah96@gmail.com')
       .fillPasswordInLoginForm('123456789')
       .submitLoginForm() 
       articleFormActions.openNewArticleTab()
    }) 

    Given('A user In Home page',()=>{
      articleFormAssertion.TitleOfPage('Home — Conduit')
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
         articleFormAssertion.TitleOfPage('Editor — Conduit')
    }) 
    And ("He fills all fields corrcetly",()=>{
        articleFormActions.fillArticalForm('Title','Desc  ','body  ','tag{enter}  ')
    }) 
    When('He clicks on publish Article button',()=>{
        articleFormActions.publishArticleBtn()
    }) 
    Then('The article will be published in Home page',()=>{
      articleFormAssertion.checkVisibiltyOfArticle()
      })
      
    Given('A user in New article form',()=>{    
      articleFormAssertion.TitleOfPage('Editor — Conduit')
    }) 
    And ("He didn't fill any field in the form",()=>{
        articleFormActions.fillArticalForm(' ','  ','  ','  ')
    }) 
    When('He clicks on publish Article button',()=>{
        articleFormActions.publishArticleBtn()
    }) 
    Then('The Error message "title cannot be blank and title is too short and description cannot be blank and description is too short and body cannot be blank" should be displayed',()=>{
      articleFormAssertion.errorMessage("title can't be blank")
      articleFormAssertion.errorMessage("title is too short (minimum is 1 character)")
      articleFormAssertion.errorMessage("description can't be blank")
      articleFormAssertion.errorMessage("description is too short (minimum is 1 character)")
      articleFormAssertion.errorMessage("body can't be blank")

    })
    
      Given('A user in New article form',()=>{
         articleFormAssertion.TitleOfPage('Editor — Conduit')
      }) 
      And ("He fills Title and description field only",()=>{
        articleFormActions.fillArticalForm(' Title ',' Desc ','  ','  ')

      }) 
      When('He clicks on publish Article button',()=>{
        articleFormActions.publishArticleBtn()
      }) 
      Then('The Error message "body can\'t be blank" should be displayed',()=>{
        articleFormAssertion.errorMessage("body can't be blank")
      })

      Given('A user in New article form',()=>{
         articleFormAssertion.TitleOfPage('Editor — Conduit')
      }) 
      And ("He fills Title and body fields",()=>{
        articleFormActions.fillArticalForm(' Title ','  ','  body ','  ')
      }) 
      When('He clicks on publish Article button',()=>{
        articleFormActions.publishArticleBtn()
      }) 
      Then('The Error message "description cannot be blank and description is too short" should be displayed',()=>{
         articleFormAssertion.errorMessage("description can't be blank") 
         articleFormAssertion.errorMessage("description is too short (minimum is 1 character)")
      })
   
 
      Given('A user in New article form',()=>{
        articleFormAssertion.TitleOfPage('Editor — Conduit')
     }) 
     And ("He fills description and body fields",()=>{
      articleFormActions.fillArticalForm(' ',' desc ',' body ','  ')

     }) 
     When('He clicks on publish Article button',()=>{
       articleFormActions.publishArticleBtn()
     }) 
     Then('The error message "title cannot be blank and title is too short" should be displayed',()=>{
        articleFormAssertion.errorMessage("title can't be blank")
        articleFormAssertion.errorMessage("title is too short (minimum is 1 character)")
     })

   
    Given('A user in New article form',()=>{
      articleFormAssertion.TitleOfPage('Editor — Conduit')
    }) 
    And ("He fills tags field only",()=>{
      articleFormActions.fillArticalForm(' ','  ','  ',' tag{enter} ')
    }) 
    When('He clicks on publish Article button',()=>{
      articleFormActions.publishArticleBtn()
    }) 
    Then('The Error message "title cannot be blank and title is too short and description cannot be blank and description is too short and body cannot be blank" should be displayed',()=>{
      articleFormAssertion.errorMessage("title can't be blank")
      articleFormAssertion.errorMessage("title is too short (minimum is 1 character)")
      articleFormAssertion.errorMessage("description can't be blank")
      articleFormAssertion.errorMessage("description is too short (minimum is 1 character)")
      articleFormAssertion.errorMessage("body can't be blank")

    })

   
    Given('A user in New article form',()=>{
       articleFormAssertion.TitleOfPage('Editor — Conduit')
    }) 
    And ("He fills Title field only",()=>{
      articleFormActions.fillArticalForm('Title ','  ','  ','  ')
    }) 
    When('He clicks on publish Article button',()=>{
      articleFormActions.publishArticleBtn()
    }) 
    Then('The Error message "description cannot be blank and description is too short and body cannot be blank" should be displayed',()=>{
      articleFormAssertion.errorMessage("description can't be blank")
      articleFormAssertion.errorMessage("description is too short (minimum is 1 character)")
      articleFormAssertion.errorMessage("body can't be blank")

    })

     
    Given('A user in New article form',()=>{
       articleFormAssertion.TitleOfPage('Editor — Conduit')
    }) 
    And ("He fills description field only",()=>{
      articleFormActions.fillArticalForm(' ',' desc ','  ','  ')
    }) 
    When('He clicks on publish Article button',()=>{
      articleFormActions.publishArticleBtn()
    }) 
    Then('The Error message "title cannot be blank and title is too short and body cannot be blank" should be displayed',()=>{
      articleFormAssertion.errorMessage("title can't be blank")
      articleFormAssertion.errorMessage("title is too short (minimum is 1 character)")
       articleFormAssertion.errorMessage("body can't be blank")

    })

    Given('A user in New article form',()=>{
       articleFormAssertion.TitleOfPage('Editor — Conduit')
    }) 
    And ("He fills body field only",()=>{
      articleFormActions.fillArticalForm(' ','  ',' body ','  ')
    }) 
    When('He clicks on publish Article button',()=>{
      articleFormActions.publishArticleBtn()
    }) 
    Then('The Error message "title cannot be blank and title is too short and description cannot be blank and description is too short" should be displayed',()=>{
      articleFormAssertion.errorMessage("title can't be blank")
      articleFormAssertion.errorMessage("title is too short (minimum is 1 character)")
      articleFormAssertion.errorMessage("description can't be blank")
      articleFormAssertion.errorMessage("description is too short (minimum is 1 character)")
 
    })

     
    
     