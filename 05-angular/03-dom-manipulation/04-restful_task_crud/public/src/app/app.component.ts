import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Tasks } from './models/tasks';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MEAN';
  tasks: string[];
  task = new Tasks();
  data: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit(){
    this.getTaskFromService();
    this.data = { title: "", description: "" }
  }

  getTaskFromService(){
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("GOT DATA!", data);
      this.tasks = data['data'];
      this.tasks.forEach(e => {console.log(e);});
    })
  }

  getTaskByIDFromService(id: string){
    this._httpService.getTaskByID(id).subscribe(data => {
      console.log('by id',data)
      this.task.id = data['data'][0]['_id']
      this.task.title = data['data'][0]['title']
      this.task.description = data['data'][0]['description']
    })
  }

  updateTask(id:string,form: NgForm) {
    this._httpService.putTaskByID(id,this.task).subscribe(data => console.log(data))
    form.reset();
  }

  postTask(form: NgForm) {
    this._httpService.postTaskByID(this.task).subscribe(data => console.log(data))
    form.reset();
  }

  deleteTask(id: string) {
    this._httpService.deleteTask(id).subscribe(id => {
      console.log('deleted', id)
      this.getTaskFromService();
    })
  }
}
