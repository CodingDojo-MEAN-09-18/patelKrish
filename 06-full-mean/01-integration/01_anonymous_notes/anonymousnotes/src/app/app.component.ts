import { Component, OnInit } from '@angular/core';
import { HttpService } from './server/http.service';
import { Note } from './models/note';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anonymousnotes';
  note = new Note();
  notes: Note[] = [];

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllNotes();
  }

  getAllNotes() {
    this.http.getAllNotes().subscribe(data => this.notes = data);
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log(form.value);

    this.http.createNote(form.value).subscribe(() => {
      console.log(form.value);

      this.note = new Note();
      form.reset();
    },
    error => console.log("error"))
  }

}
