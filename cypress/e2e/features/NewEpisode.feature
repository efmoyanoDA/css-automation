Feature: Login to CSP Application

  Background:
    Given User is on CSP Home Page
    And User select login as "CallCenterAdmin@PeachPhoneCenter.com"

  @CreateAndSubmitNewEpisode
  Scenario Outline: Create and submit new episode
    When User creates new episode
    And User fills all the required fields "<Concern>", "<CrisisLocation>", "<LocationType>"
    And User submit the episode
    Then All fields should be recorded in the database

    Examples:
      | Concern | CrisisLocation | LocationType |
      | Grief   | New York, NY   | other        |
