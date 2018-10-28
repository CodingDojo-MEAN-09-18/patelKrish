import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/app/models/author';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {
  author = new Author();

  constructor(private readonly _httpService: AuthorService, private route: ActivatedRoute, private readonly router: Router) { }

  ngOnInit() {
    this.getAuthor();
  }

  getAuthor() {
    this.route.params.subscribe(id => {
      this._httpService.showAuthor(parseInt(id['id'])).subscribe(data => this.author = data);
    })
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log(form.value);

    this.route.params.subscribe(id => {
      this._httpService.updateAuthor(parseInt(id['id']),form.value).subscribe(() => {
        form.reset();
        this.router.navigateByUrl('/');
      },
      error => {
        console.log(error);
      });
    })
  }
}
