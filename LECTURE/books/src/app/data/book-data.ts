import { Book } from '../models/books';

export const BOOKS: Book[] = [
  {
    id: randomId(),
    title: 'stranger in a strange land',
    author: 'robert heinlein',
    publisher: 'G. P. Punam\'s Sons',
    year: 1961,
    pages: 408
  },
  {
    id: randomId(),
    title: 'leviathan wakes',
    author: 'james s. a. corey',
    publisher: 'Orbit Books',
    year: 2011,
    pages: 582
  },
  {
    id: randomId(),
    title: 'foundation',
    author: 'isaac asimov',
    publisher: 'Gnome Press',
    year: 1951,
    pages: 255
  }
];

function randomId(): number {
  return Math.floor(Math.random() * 1000);
}
