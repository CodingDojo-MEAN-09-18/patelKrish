import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly url = "http://5bd67081a6871d001332336b.mockapi.io/notes"

  constructor(private http: HttpClient) { }

  // GET - All Notes
  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.url);
  }

  // POST - Create Notes
  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.url, note);
  }

}
