import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../server/http.service';
import { Author } from 'src/app/models/author/author';

@Component({
  selector: 'app-author-all',
  templateUrl: './author-all.component.html',
  styleUrls: ['./author-all.component.css']
})
export class AuthorAllComponent implements OnInit {
  authors: Author[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getAllAuthors();
  }

  getAllAuthors() {
    this.httpService.getAllAuthors().subscribe(data => this.authors = data)
  }
}
