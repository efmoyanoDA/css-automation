// support/utils/personGenerator.ts
import { faker } from '@faker-js/faker';
import { Person } from '@support/types/entities';

export function generateRandomPerson(): Person {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    middleName: faker.name.middleName(),
    preferredName: faker.name.firstName(),
    dateOfBirth: faker.date
      .birthdate({ min: 18, max: 65, mode: 'age' })
      .toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
    phoneNumber: faker.phone.number(),
    phoneExtension: '1111',
    email: faker.internet.email(),
    addressLine1: faker.address.streetAddress(),
    addressLine2: faker.address.secondaryAddress(),
    city: faker.address.city(),
    state: faker.location.state({ abbreviated: true }),
    zipCode: faker.address.zipCode('#####'),
    zipSuffix: faker.address.zipCode('####'),
    housingStatus: faker.helpers.arrayElement([
      'Other',
      'Homeless',
      'DV Shelter',
      'Foster Care',
    ]),
    genderIdentity: faker.helpers.arrayElement(['Male', 'Female', 'Other']),
    language: faker.helpers.arrayElement([
      'English',
      'Spanish',
      'French',
      'German',
    ]),
    sexualOrientation: faker.helpers.arrayElement(['Other']),
    pronouns: faker.helpers.arrayElement(['Other']),
    race: faker.helpers.arrayElement(['Other']),
    veteranStatus: faker.helpers.arrayElement(['Active Duty']),
    disabilityStatus: faker.helpers.arrayElement(['Other']),
    ethnicity: faker.helpers.arrayElement(['Hispanic', 'Non-Hispanic']),
  };
}
