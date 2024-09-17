import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import NewEpisodePage from '../src/pages/NewEpisode/NewEpisodePage';

When('User creates new episode', function () {
    this.newEpisode_page = new NewEpisodePage();
    this.newEpisode_page.createNewEpisode();

});

When('User fills all the required fields {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}', function (concern: string, crisisLocation: string, locationType: string, firstName: string, lastName: string, middleName: string, preferredName: string, dateOfBirth: string, phoneNumber: string, phoneExtension: string, email: string, addressLine1: string, addressLine2: string, city: string, zipCode: string, zipSuffix: string, state: string, housingStatus: string, genderIdentity: string, language: string, sexualOrientation: string, pronouns: string, race: string, veteranStatus: string, disabilityStatus: string, ethnicity: string) {
    this.newEpisode_page.fillConcerns(concern);
    this.newEpisode_page.fillCrisisLocation(crisisLocation, locationType);
    this.newEpisode_page.fillPersonInformation(firstName, lastName, middleName, preferredName, dateOfBirth, phoneNumber, phoneExtension, email, addressLine1, addressLine2, city, zipCode, zipSuffix, state, housingStatus, genderIdentity, language, sexualOrientation, pronouns, race, veteranStatus, disabilityStatus, ethnicity);
});

When('User submit the episode', function () {

});

Then('All fields should be recorded in the database', function () {

});
