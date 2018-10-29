import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../models/author/author';
import { Quotes } from '../models/quote/quotes';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly url_author = 'http://5bd633d3a6871d001332333c.mockapi.io/author';

  constructor(private readonly http: HttpClient) { }

  // ----------------------- AUTHOR ----------------------- //

  // ...GET      (all authors)             /author
  getAllAuthors(): Observable<Author[]> { return this.http.get<Author[]>(this.url_author); }

  // ...GET      (author by id)            /author/:id
  getAuthorById(author_id: number): Observable<Author> { return this.http.get<Author>(`${this.url_author}/${author_id}`); }

  // ...POST     (create author)           /author
  createAuthor(author: Author): Observable<Author> { return this.http.post<Author>(this.url_author, author); }

  // ...PUT      (update author)           /author/:id
  updateAuthor(author_id: number, author: Author): Observable<Author> { return this.http.put<Author>(`${this.url_author}/${author_id}`, author); }

  // ----------------------- QUOTE ----------------------- //

  // ...GET      (all qoutes by author)    /author/:id/quotes
  getAllQuotes(author_id: number): Observable<Quotes[]> { return this.http.get<Quotes[]>(`${this.url_author}/${author_id}/quotes`); }

  // ...GET      (qoutes by id)    /author/:id/quotes/:id
  getQuoteById(author_id: number, quote_id: number): Observable<Quotes> { return this.http.get<Quotes>(`${this.url_author}/${author_id}/quotes/${quote_id}`); }

  // ...POST     (create quote)            /author/:id/quotes
  createQuote(author_id: number, quote: Quotes): Observable<Quotes> { return this.http.post<Quotes>(`${this.url_author}/${author_id}/quotes`, quote); }

  // ...PUT      (update quote)            /author/:id/quotes/:id
  updateQuote(author_id: number, quote_id: number, quote: Quotes): Observable<Quote> { return this.http.put<Quotes>(`${this.url_author}/${author_id}/quotes/${quote_id}`, quote); }

  // ...DELETE   (delete quote)            /author/:id/quotes/:id
  deleteQuote(author_id: number, quote_id: number): Observable<Quotes> { return this.http.delete<Quotes>(`${this.url_author}/${author_id}/quotes/${quote_id}`); }
}



