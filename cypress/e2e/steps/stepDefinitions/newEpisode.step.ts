import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import NewEpisodePage from '../src/pages/NewEpisode/NewEpisodePage';
import { generateRandomPerson } from '@support/utils/personGenerator';

When('User creates new episode', function () {
  this.newEpisode_page = new NewEpisodePage();
  this.newEpisode_page.createNewEpisode();
});

When(
  'User fills all the required fields {string}, {string}, {string}',
  function (concern: string, crisisLocation: string, locationType: string) {
    const randomPerson = generateRandomPerson();

    this.newEpisode_page.fillConcerns(concern);
    this.newEpisode_page.fillCrisisLocation(crisisLocation, locationType);
    this.newEpisode_page.fillPersonInformation(randomPerson);
  }
);

When('User submit the episode with only contact and notes', function () {
  this.newEpisode_page.fillNotes();
  this.newEpisode_page.submitEpisodeContactAndNotes();
});

Then('All fields should be recorded in the database', function () {});
