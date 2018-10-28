import { Component, OnInit } from '@angular/core';
import { BOOKS } from '../../data/book-data';
import { Book } from '../../models/books';
import { BookService } from '../../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books: Book[] = BOOKS;
  selectedBook: Book;

  constructor(private readonly booksService: BookService) { }

  ngOnInit() {
  }

  onSelect(book: Book): void {
    console.log('selecting', book);

    this.selectedBook = this.selectedBook === book ? null : book;
  }

  onCreate(book: Book): void {
    console.log('creating book', book);

    this.books.push(book);
  }
}
