import { Author } from "./author";

export class Book {
  id: string;
  title: string;
  year: string;
  author = new Author();
}
