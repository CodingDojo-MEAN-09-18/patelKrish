import { Component } from '@angular/core';
import { HttpService } from './server/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';

  constructor(private readonly httpService: HttpService) { }

}
