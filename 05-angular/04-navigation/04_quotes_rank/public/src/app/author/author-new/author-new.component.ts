import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/server/http.service';
import { Author } from 'src/app/models/author/author';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css']
})
export class AuthorNewComponent implements OnInit {
  author = new Author();

  constructor(private httpService: HttpService,  private router: Router) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    this.httpService.createAuthor(form.value).subscribe(() => {
      this.author = new Author();
      form.reset();
      this.router.navigateByUrl('/');
    }, error => console.log(error));
  }

  onCancel(event: Event) {
    event.preventDefault();

    this.router.navigateByUrl('/');
  }
}
