Feature:  Login

   Scenario: opening conduit Home page 
      Given A user in Sign in page
      When He enters a valid Email in email field
      And He enters a valid password in password field
      And He clicks on sign in button 
      Then The user should be redirected to Home page