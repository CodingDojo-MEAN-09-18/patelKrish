import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';
// import { Tasks } from './models/tasks'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';

  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllAuthors();
    this.getAllBooks();
  }

  getAllAuthors(){
    this._httpService.getAuthors().subscribe(data => {
      console.log(data);
    });
  }

  getAllBooks(){
    this._httpService.getBooks().subscribe(data => {
      console.log(data);
    });
  }
}
