import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author';

@Component({
  selector: 'app-author-all',
  templateUrl: './author-all.component.html',
  styleUrls: ['./author-all.component.css']
})
export class AuthorAllComponent implements OnInit {
  authors: Author[] = [];

  constructor(private readonly _httpService: AuthorService) { }

  ngOnInit() {
    this.getAll();
  }

  // get all authors
  getAll() {
    return this._httpService.showAllAuthors().subscribe(data => this.authors = data);
  }

  onDelete(id: number) {
    return this._httpService.deleteAuthor(id).subscribe(deletedAuthor => this.authors = this.authors.filter(author => author.id !== deletedAuthor.id));
  }
}
