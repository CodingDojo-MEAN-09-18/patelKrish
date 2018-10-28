import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../models/author';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  // url for mock api
  private readonly base = "http://5bcfb971142d360013a171f9.mockapi.io/api/authors";

  constructor(private readonly _http: HttpClient) { }

  // get all authors (GET)
  showAllAuthors(): Observable<Author[]> {
    return this._http.get<Author[]>(this.base);
  }

  // get author by id (GET)
  showAuthor(id: number): Observable<Author> {
    return this._http.get<Author>(`${this.base}/${id}`);
  }

  // create author (POST)
  createAuthor(author: Author): Observable<Author> {
    return this._http.post<Author>(this.base, author);
  }

  // update author (PUT)
  updateAuthor(id: number, author: Author): Observable<Author> {
    return this._http.put<Author>(`${this.base}/${id}`, author);
  }

  // delete author (DELETE)
  deleteAuthor(id: number): Observable<Author> {
    return this._http.delete<Author>(`${this.base}/${id}`);
  }
}
