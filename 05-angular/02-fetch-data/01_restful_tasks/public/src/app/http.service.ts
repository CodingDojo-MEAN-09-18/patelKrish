import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getIDTasks({id: Number});
  }

  getTasks(){
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log('SUCCESS',data));
  }
}
