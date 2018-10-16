import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  // get all author
  getAuthors() {
    return this._http.get('/authors')
  }

  getBooks() {
    return this._http.get('/books')
  }
}
