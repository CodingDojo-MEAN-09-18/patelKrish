import { Component } from '@angular/core';

import { Book } from './models/book';
import { NgForm } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  book = new Book();
  books: Book[] = [];

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    console.log('submitting form',this.book);

    this.books.push(this.book);

    this.book = new Book();

    console.log(this.books);

    form.reset();
  }
}
