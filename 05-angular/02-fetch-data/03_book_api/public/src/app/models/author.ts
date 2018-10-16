export class Author {
  id: string;
  firstName: string;
  lastName: string;
  country: string;
  birthDate: Date;
  books = [new Author()];
}
