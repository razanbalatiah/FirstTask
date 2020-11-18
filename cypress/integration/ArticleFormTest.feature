Feature:  ArticlForm

   Scenario: opening New article tab
      Given A user In Home page 
      When He clicks on New article tab 
      Then New article tab will be opened 

    Scenario: Article Title field in form 
      Given A user in New article form 
      When He reviews fields in the form   
      Then He should find Article Title field in form with placholder "Article Title"   

    Scenario: Description field in form 
      Given A user in New article form 
      When He reviews fields in the form   
      Then He should find Description field in form with placholder "What's this article about?"  

    Scenario: Body field in form 
      Given A user in New article form 
      When He reviews fields in the form   
      Then He should find body field in form
    
    Scenario: Enter tags field in form 
      Given A user in New article form 
      When He reviews fields in the form   
      Then He should find Enter tags field in form with placholder "Enter tags"  

    Scenario: Publish Article button in form 
      Given A user in New article form 
      When He reviews elements in the form   
      Then He should find Publish Article button in form

    Scenario: Fill all fields in the form 
      Given A user in New article form 
      When He enters a correct Title as title 
      And He enters a correct description as description 
      And He enters a correct body as body 
      And He enters a correct tags as tags 
      And He clicks on publish Article button 
      Then The article will be published in Home page 


   
    Scenario: Keep all fields blank  
      Given A user in New article form 
      And He didn't fill any field in the form 
      When He clicks on publich Article button 
      Then The Error message should be displayed 

   
    Scenario: Fill Title field only in the form 
      Given A user in New article form 
      When He fills Title field only  
      And He clicks on publich Article button 
      Then error messages should be displayed 

    Scenario: Fill description field only in the form 
      Given A user in New article form 
      When He fills description field only  
      And He clicks on publich Article button 
      Then error msg will be displayed 

    Scenario: Fill body field only in the form 
      Given A user in New article form 
      When He fills body field only  
      And He clicks on publich Article button 
      Then An Err message will be displayed

    Scenario: Fill Title and description fields only in the form 
      Given A user in New article form 
      When He fills Title and description field only  
      And He clicks on publich Article button 
      Then The Error message "body can't be blank" should be displayed 

    Scenario: Fill Title and body fields only in the form 
      Given A user in New article form 
      When He fills Title and body fields 
      And He clicks on publich Article button 
      Then An error message will be displayed

    Scenario: Fill description and body fields only in the form 
      Given A user in New article form 
      When He fills description and body fields  
      And He clicks on publich Article button 
      Then An error messages will be displayed

    Scenario: Fill tags only in the form 
      Given A user in New article form 
      When He fills tags field only  
      And He clicks on publich Article button 
      Then Error Msg Will be displayed 



