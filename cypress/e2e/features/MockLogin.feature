Feature: Login to CSP Application
  Background:
    Given User is on CSP Home Page

    @CallCenterAdmin
    Scenario Outline: Login as a Call Center Admin
      When User select login as "<user>"
      Then User should be able to login successfully

       Examples:
      | user | 
      | CallCenterAdmin@PeachPhoneCenter.com |
    
     