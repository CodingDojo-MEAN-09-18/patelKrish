import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author/author';
import { Quotes } from '../../models/quote/quotes';
import { HttpService } from 'src/app/server/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote-all',
  templateUrl: './quote-all.component.html',
  styleUrls: ['./quote-all.component.css']
})
export class QuoteAllComponent implements OnInit {
  author = new Author();
  quotes: Quotes[] = [];
  quote = new Quotes();

  constructor(private readonly http: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getQuote();
    this.getAuthor();
  }

  getAuthor() {
    this.route.params.subscribe(author_id => {
      this.http.getAuthorById(parseInt(author_id['id'])).subscribe(data => this.author = data)
    })
  }

  getQuote() {
    this.route.params.subscribe(author_id => {
      this.http.getAllQuotes(parseInt(author_id['id'])).subscribe(data => this.quotes = data)
    })
  }

  onDelete(quote_id: number, author_id: number) {
    this.http.deleteQuote(author_id,quote_id).subscribe(deletedQuote => this.quotes = this.quotes.filter(quote => quote.id !== deletedQuote.id));
  }

  voteUp(id: number) {
    this.route.params.subscribe(author_id => {
      this.http.getQuoteById(parseInt(author_id['id']),id).subscribe(data => {
        this.quote = data;
        this.quote.votes += 1;
        this.http.updateQuote(parseInt(author_id['id']),id, this.quote).subscribe(() => {location.reload();});
      })
    })
  }

  voteDown(id: number) {
    this.route.params.subscribe(author_id => {
      this.http.getQuoteById(parseInt(author_id['id']),id).subscribe(data => {
        this.quote = data;
        this.quote.votes -= 1;
        this.http.updateQuote(parseInt(author_id['id']),id, this.quote).subscribe(() => {location.reload();});
      })
    })
  }
}
