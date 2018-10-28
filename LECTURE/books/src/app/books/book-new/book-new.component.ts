import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/books';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  book = new Book();

  @Output()
  createBook = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  // onSubmit method for the create book form
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('Submited form value: ', form.value);

    this.createBook.emit(form.value);

    this.book = new Book(); // create a new reference each time

    form.reset();
  }
}
