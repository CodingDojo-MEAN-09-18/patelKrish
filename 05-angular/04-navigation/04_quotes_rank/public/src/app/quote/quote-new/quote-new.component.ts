import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/server/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Quotes } from 'src/app/models/quote/quotes';
import { Author } from 'src/app/models/author/author';


@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.css']
})
export class QuoteNewComponent implements OnInit {
  author = new Author();
  quotes = new Quotes();

  constructor(private readonly http: HttpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    this.route.params.subscribe(author_id => {
      this.http.createQuote(parseInt(author_id['id']), form.value).subscribe(() => {
        this.quotes = new Quotes();
        form.reset;
        this.router.navigateByUrl(`/quotes/${parseInt(author_id['id'])}`)
      })
    })
  }

  onCancel(event: Event, author_id: number) {
    event.preventDefault();

    this.route.params.subscribe(author_id => {
      this.router.navigateByUrl(`/quotes/${parseInt(author_id['id'])}`)
    })
  }
}
