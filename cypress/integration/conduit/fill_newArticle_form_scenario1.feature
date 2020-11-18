Feature: Fill all fields with correct values 


    Background:
    Given A user in New article tab

    Scenario: Keep all fields blank  
    Given A user in New article form 
    And He didn't fill any field in the form 
    When He clicks on publich Article button 
    Then The message "" should be displayed 

    Scenario: Fill one field only in the form 
    Given A user in New article form 
    When He fills one field only  
    And He clicks on publich Article button 
    Then The message "" should be displayed 

    Scenario: Fill all fields in the form 
    Given A user in New article form 
    When He enters a correct Title as title 
    And He enters a correct description as description 
    And He enters a correct body as body 
    And He enters a correct tags as tags 
    And He clicks on publich Article button 
    Then The article will be published in Home page 