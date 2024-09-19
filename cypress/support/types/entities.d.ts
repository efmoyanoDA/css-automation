// support/types/entities.ts
export interface Person {
  firstName: string;
  lastName: string;
  middleName: string;
  preferredName: string;
  dateOfBirth: string;
  phoneNumber: string;
  phoneExtension?: string;
  email: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipCode: string;
  zipSuffix?: string;
  housingStatus: string;
  genderIdentity: string;
  language: string;
  sexualOrientation: string;
  pronouns: string;
  race: string;
  veteranStatus: string;
  disabilityStatus: string;
  ethnicity: string;
}
