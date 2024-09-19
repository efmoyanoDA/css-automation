import { last } from 'cypress/types/lodash';

export default class NewEpisodePage {
  createNewEpisode(): void {
    cy.xpath("//button[@data-testid='carelon-btn']").click();
    cy.wait(500);
  }

  fillConcerns(concern: string): void {
    cy.xpath("//div[@data-testid='name-select']").click();
    cy.xpath("//li[@value='" + concern + "']").click();
    cy.get('body').type('{esc}');
    cy.xpath(
      "//label[text()='Limits of Confidentiality Explained *']/following::input[1]"
    ).click();
    cy.xpath(
      "//label[text()='Permission to Leave a Voicemail *']/following::input[1]"
    ).click();
    cy.xpath(
      "//label[text()='Permission to Record the Call *']/following::input[1]"
    ).click();
  }

  fillCrisisLocation(crisisLocation: string, locationType: string): void {}

  fillPersonInformation(
    firstName: string,
    lastName: string,
    middleName: string,
    preferredName: string,
    dateOfBirth: string,
    phoneNumber: string,
    phoneExtension: string,
    email: string,
    addressLine1: string,
    addressLine2: string,
    city: string,
    zipCode: string,
    zipSuffix: string,
    state: string,
    housingStatus: string,
    genderIdentity: string,
    language: string,
    sexualOrientation: string,
    pronouns: string,
    race: string,
    veteranStatus: string,
    disabilityStatus: string,
    ethnicity: string
  ): void {
    cy.xpath("//div[@data-testid='firstName']//input[@type='text']").type(
      firstName
    );
    cy.xpath("//div[@data-testid='lastName']//input[@type='text']").click();
    cy.wait(500);
    cy.xpath("//div[@data-testid='lastName']//input[@type='text']").type(
      lastName
    );
    cy.xpath("//div[@data-testid='middleName']//input[@type='text']").click();
    cy.wait(500);
    cy.xpath("//div[@data-testid='middleName']//input[@type='text']").type(
      middleName
    );
    cy.xpath(
      "//div[@data-testid='preferredName']//input[@type='text']"
    ).click();
    cy.wait(500);
    cy.xpath("//div[@data-testid='preferredName']//input[@type='text']").type(
      preferredName
    );
    cy.xpath(
      '//div[@data-testid="dateOfBirth"]//input[@placeholder="MM/DD/YYYY"]'
    ).click();
    cy.wait(500);
    cy.xpath(
      '//div[@data-testid="dateOfBirth"]//input[@placeholder="MM/DD/YYYY"]'
    ).type(dateOfBirth);
    cy.xpath("//div[@data-testid='phoneNumber']//input[@type='text']").click();
    cy.wait(600);
    cy.xpath("//div[@data-testid='phoneNumber']//input[@type='text']").type(
      phoneNumber
    );
    cy.xpath(
      "//div[@data-testid='phoneExtension']//input[@type='text']"
    ).click();
    cy.wait(500);
    cy.xpath("//div[@data-testid='phoneExtension']//input[@type='text']").type(
      phoneExtension
    );
    cy.xpath("//div[@data-testid='email']//input[@type='email']").click();
    cy.wait(500);
    cy.xpath("//div[@data-testid='email']//input[@type='email']").type(email);
    cy.xpath("//div[@data-testid='addressLine1']//input[@type='text']").click();
    cy.wait(500);
    cy.xpath("//div[@data-testid='addressLine1']//input[@type='text']").type(
      addressLine1
    );
    cy.xpath("//div[@data-testid='addressLine2']//input[@type='text']").click();
    cy.wait(500);
    cy.xpath("//div[@data-testid='addressLine2']//input[@type='text']").type(
      addressLine2
    );
    cy.xpath("//div[@data-testid='city']//input[@type='text']").click();
    cy.wait(500);
    cy.xpath("//div[@data-testid='city']//input[@type='text']").type(city);
    cy.xpath(
      "//div[contains(@data-testid, 'state') and contains(@class, 'MuiInputBase-root')]"
    ).click();
    cy.wait(500);
    cy.xpath("//li[@data-value='" + state + "']").click();
    cy.xpath("//div[@data-testid='zipCode']//input[@type='text']").click();
    cy.wait(500);
    cy.xpath("//div[@data-testid='zipCode']//input[@type='text']").type(
      zipCode
    );
    cy.xpath("//div[@data-testid='zipExt']//input[@type='text']").click();
    cy.wait(500);
    cy.xpath("//div[@data-testid='zipExt']//input[@type='text']").type(
      zipSuffix
    );
    cy.xpath(
      "//div[contains(@data-testid, 'housingStatus') and contains(@class, 'MuiInputBase-root')]"
    ).click();
    cy.wait(500);
    cy.xpath("//li[@data-value='" + housingStatus + "']").click();
    cy.xpath(
      "//div[contains(@data-testid, 'genderIdentity') and contains(@class, 'MuiInputBase-root')]"
    ).click();
    cy.wait(500);
    cy.xpath("//li[@data-value='" + genderIdentity + "']").click();
    cy.xpath(
      "//div[contains(@data-testid, 'language') and contains(@class, 'MuiInputBase-root')]"
    ).click();
    cy.wait(500);
    cy.xpath("//li[@data-value='" + language + "']").click();
    cy.xpath(
      "//div[contains(@data-testid, 'sexualOrientation') and contains(@class, 'MuiInputBase-root')]"
    ).click();
    cy.wait(500);
    cy.xpath("//li[@data-value='" + sexualOrientation + "']").click();
    cy.xpath(
      "//div[contains(@data-testid, 'pronouns') and contains(@class, 'MuiInputBase-root')]"
    ).click();
    cy.wait(500);
    cy.xpath("//li[@data-value='" + pronouns + "']").click();
    cy.xpath(
      "//div[contains(@data-testid, 'race') and contains(@class, 'MuiInputBase-root')]"
    ).click();
    cy.wait(500);
    cy.xpath("//li[@data-value='" + race + "']").click();
    cy.get('body').type('{esc}');
    cy.xpath(
      "//div[contains(@data-testid, 'veteranStatus') and contains(@class, 'MuiInputBase-root')]"
    ).click();
    cy.wait(500);
    cy.xpath("//li[@data-value='" + veteranStatus + "']").click();
    cy.xpath(
      "//div[contains(@data-testid, 'disabilityStatus') and contains(@class, 'MuiInputBase-root')]"
    ).click();
    cy.wait(500);
    cy.xpath("//li[@data-value='" + disabilityStatus + "']").click();
    cy.get('body').type('{esc}');
    cy.xpath(
      "//div[contains(@data-testid, 'ethnicity') and contains(@class, 'MuiInputBase-root')]"
    ).click();
    cy.wait(500);
    cy.xpath("//li[@data-value='" + ethnicity + "']").click();
    cy.wait(500);
  }

  fillNotesAndSubmit(): void {
    cy.xpath(
      "//div[@data-testid='interventions-component']//textarea[@placeholder='Add Notes']"
    ).type('Submit Notes');
    cy.xpath("//button[@data-testid='interventions-submit']").click();
    cy.xpath("li[text()='Contact & Notes Only']").click();
  }

  closeSearch(): void {
    cy.xpath("//button[text()='Cancel']").click();
  }
}
