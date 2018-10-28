import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/app/models/author';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css']
})
export class AuthorNewComponent implements OnInit {
  author = new Author();

  constructor(private readonly _httpService: AuthorService, private readonly router: Router) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', form.value);

    this._httpService.createAuthor(form.value).subscribe(() => {
      this.author = new Author();
      form.reset();
      this.router.navigateByUrl('/');
    },
    error => {
      console.log(error);
    });
  }

}
