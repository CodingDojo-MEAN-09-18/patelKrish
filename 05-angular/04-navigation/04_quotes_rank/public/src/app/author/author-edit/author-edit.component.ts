import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author/author';
import { HttpService } from 'src/app/server/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {
  author = new Author();

  constructor(private http: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAuthor();
  }

  getAuthor() {
    this.route.params.subscribe(authorId => {
      this.http.getAuthorById(parseInt(authorId['id'])).subscribe(author => this.author = author)
    })
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    this.route.params.subscribe(authorId => {
      this.http.updateAuthor(parseInt(authorId['id']), form.value).subscribe(() => {
        form.reset;
        this.router.navigateByUrl('/');
      })
    })
  }

  onCancel(event: Event) {
    event.preventDefault();
    this.router.navigateByUrl('/')
  }

}
