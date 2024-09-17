Feature: Login to CSP Application
  Background:
    Given User is on CSP Home Page
    And User select login as "CallCenterAdmin@PeachPhoneCenter.com"
    
 @CreateAndSubmitNewEpisode
  Scenario Outline: Create and submit new episode
    When User creates new episode
    And User fills all the required fields "<Concern>", "<CrisisLocation>", "<LocationType>", "<FirstName>", "<LastName>", "<MiddleName>", "<PreferredName>", "<DateOfBirth>", "<PhoneNumber>", "<PhoneExtension>", "<Email>", "<AddressLine1>", "<AddressLine2>", "<City>", "<ZIPCode>", "<ZIPSuffix>", "<State>", "<HousingStatus>", "<GenderIdentity>", "<Language>", "<SexualOrientation>", "<Pronouns>", "<Race>", "<VeteranStatus>", "<DisabilityStatus>", "<Ethnicity>"
    And User submit the episode
    Then All fields should be recorded in the database
    Examples:
      |  Concern | CrisisLocation | LocationType |  FirstName | LastName | MiddleName | PreferredName | DateOfBirth | PhoneNumber | PhoneExtension |      Email      | AddressLine1 | AddressLine2 | City | ZIPCode | ZIPSuffix | State | HousingStatus | GenderIdentity | Language | SexualOrientation | Pronouns | Race | VeteranStatus | DisabilityStatus | Ethnicity |
      | Grief    |  New York, NY  |    other     |  Oscar     | Perez    | middle     |  preferred    |   10201992  | 1111111111  |   111          | email@email.com |    line1     |    line2     | city |  12345  |    1234   |   AK  |     Other     |    Male        |  German  |    Bisexual       |  Other   | Other|  Active Duty  |      Other       |  Hispanic |
