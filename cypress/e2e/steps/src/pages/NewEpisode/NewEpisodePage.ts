import { Person } from '@support/types/entities';

export default class NewEpisodePage {
  createNewEpisode(): void {
    cy.xpath('//button[@data-testid="carelon-btn"]').click();
    cy.wait(500);
  }

  fillConcerns(concern: string): void {
    cy.xpath('//div[@data-testid="name-select"]').click();
    cy.xpath(`//li[@value='${concern}']`).click();
    cy.get('body').type('{esc}');
    cy.xpath(
      '//label[text()="Limits of Confidentiality Explained *"]/following::input[1]'
    ).click();
    cy.xpath(
      '//label[text()="Permission to Leave a Voicemail *"]/following::input[1]'
    ).click();
    cy.xpath(
      '//label[text()="Permission to Record the Call *"]/following::input[1]'
    ).click();
  }

  fillCrisisLocation(): void {}

  fillPersonInformation(person: Person): void {
    const components = {
      firstName: this.getFirstNameField(),
      lastName: this.getLastNameField(),
      middleName: this.getMiddleNameField(),
      preferredName: this.getPreferredNameField(),
      dateOfBirth: this.getDateOfBirthField(),
      phoneNumber: this.getPhoneNumberField(),
      phoneExtension: this.getPhoneExtensionField(),
      email: this.getEmailField(),
      addressLine1: this.getAddressLine1Field(),
      addressLine2: this.getAddressLine2Field(),
      city: this.getCityField(),
      state: this.getStateField(),
      zipCode: this.getZipCodeField(),
      zipSuffix: this.getZipSuffixField(),
      housingStatus: this.getHousingStatusField(),
      genderIdentity: this.getGenderIdentityField(),
      language: this.getLanguageField(),
      sexualOrientation: this.getSexualOrientationField(),
      pronouns: this.getPronounsField(),
      race: this.getRaceField(),
      veteranStatus: this.getVeteranStatusField(),
      disabilityStatus: this.getDisabilityStatusField(),
      ethnicity: this.getEthnicityField(),
    };

    cy.fillForm(components, person, true);
  }

  // Page Object Model for each field
  getFirstNameField() {
    return cy.xpath('//div[@data-testid="firstName"]//input[@type="text"]');
  }

  getLastNameField() {
    return cy.xpath('//div[@data-testid="lastName"]//input[@type="text"]');
  }

  getMiddleNameField() {
    return cy.xpath('//div[@data-testid="middleName"]//input[@type="text"]');
  }

  getPreferredNameField() {
    return cy.xpath('//div[@data-testid="preferredName"]//input[@type="text"]');
  }

  getDateOfBirthField() {
    return cy.xpath(
      '//div[@data-testid="dateOfBirth"]//input[@placeholder="MM/DD/YYYY"]'
    );
  }

  getPhoneNumberField() {
    return cy.xpath('//div[@data-testid="phoneNumber"]//input[@type="text"]');
  }

  getPhoneExtensionField() {
    return cy.xpath(
      '//div[@data-testid="phoneExtension"]//input[@type="text"]'
    );
  }

  getEmailField() {
    return cy.xpath('//div[@data-testid="email"]//input[@type="email"]');
  }

  getAddressLine1Field() {
    return cy.xpath('//div[@data-testid="addressLine1"]//input[@type="text"]');
  }

  getAddressLine2Field() {
    return cy.xpath('//div[@data-testid="addressLine2"]//input[@type="text"]');
  }

  getCityField() {
    return cy.xpath('//div[@data-testid="city"]//input[@type="text"]');
  }

  getStateField() {
    return cy.get('#mui-component-select-state');
  }

  getZipCodeField() {
    return cy.xpath('//div[@data-testid="zipCode"]//input[@type="text"]');
  }

  getZipSuffixField() {
    return cy.get('input[name="zipExt"]');
  }

  getHousingStatusField() {
    return cy.get('#mui-component-select-housingStatus');
  }

  getGenderIdentityField() {
    return cy.get('#mui-component-select-genderIdentity');
  }

  getLanguageField() {
    return cy.get('#mui-component-select-language');
  }

  getSexualOrientationField() {
    return cy.get('#mui-component-select-sexualOrientation');
  }

  getPronounsField() {
    return cy.get('#mui-component-select-pronouns');
  }

  getRaceField() {
    return cy.get('#mui-component-select-race');
  }

  getVeteranStatusField() {
    return cy.get('#mui-component-select-veteranStatus');
  }

  getDisabilityStatusField() {
    return cy.get('#mui-component-select-disabilityStatus');
  }

  getEthnicityField() {
    return cy.get('#mui-component-select-ethnicity');
  }
}
