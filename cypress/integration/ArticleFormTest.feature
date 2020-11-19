Feature:  ArticlForm

   Scenario: opening New article tab
      Given A user In Home page 
      When He clicks on New article tab 
      Then New article tab will be opened 

    Scenario: Article fields in form 
      When A user visits the article page   
      Then The fields of the form should be displayed   

    Scenario: Fill all fields in the form 
      Given A user in New article form 
      And He fills all fields corrcetly 
      When He clicks on publish Article button
      Then The article will be published in Home page

    Scenario: Keep all fields blank  
      Given A user in New article form 
      And He didn't fill any field in the form 
      When He clicks on publish Article button 
      Then The Error message "title cannot be blank and title is too short and description cannot be blank and description is too short and body cannot be blank" should be displayed
      
    Scenario: Fill Title field only in the form 
      Given A user in New article form 
      When He fills Title field only  
      And He clicks on publish Article button 
      Then The Error message "description cannot be blank and description is too short and body cannot be blank" should be displayed
      
    Scenario: Fill description field only in the form 
      Given A user in New article form 
      When He fills description field only  
      And He clicks on publish Article button 
      Then The Error message "title cannot be blank and title is too short and body cannot be blank" should be displayed

    Scenario: Fill body field only in the form 
      Given A user in New article form 
      When He fills body field only  
      And He clicks on publish Article button 
      Then The Error message "title cannot be blank and title is too short and description cannot be blank and description is too short" should be displayed

    Scenario: Fill Title and description fields only in the form 
      Given A user in New article form 
      When He fills Title and description field only  
      And He clicks on publish Article button 
      Then The Error message "body can't be blank" should be displayed 
 
     Scenario: Fill Title and body fields only in the form 
      Given A user in New article form 
      When He fills Title and body fields 
      And He clicks on publish Article button 
      Then The Error message "description cannot be blank and description is too short" should be displayed
 
    Scenario: Fill description and body fields only in the form 
      Given A user in New article form 
      When He fills description and body fields  
      And He clicks on publish Article button 
      Then The error message "title cannot be blank and title is too short" should be displayed

    Scenario: Fill tags only in the form 
     Given A user in New article form 
      When He fills tags field only  
      And He clicks on publish Article button 
      Then The Error message "title cannot be blank and title is too short and description cannot be blank and description is too short and body cannot be blank" should be displayed



