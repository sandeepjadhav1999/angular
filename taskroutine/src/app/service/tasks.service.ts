import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs';
import { GroupedTask } from '../models/grouped-task';

@Injectable({
  providedIn: 'root'
})
export class TasksService
{
  urlPrefix: string = "http://localhost:9090";    //the client side server running URL
  constructor(private httpClient: HttpClient)
  {
  }

  
  insertTask(newTask: Task): Observable<Task> //inserting the new task and its details in the database
  {
    // making use of post method and the response type is of Json
    return this.httpClient.post<Task>(this.urlPrefix +"/api/createtask", newTask, { responseType: "json" });
  }

  getTask():Observable<Task[]>    //making a get request to recieve all the task data 
  {
    //making use of get method to get all the task data which is present in the database, the response type will be Json
    return this.httpClient.get<Task[]>(this.urlPrefix + "/api/tasks",{responseType:"json"})  //response type will be json
  }

  getTaskbyTaskName(taskName:Task):Observable<Task> //making a get request and the response type os Json
  {
    //getting the task details of a specific task.. this method is used of the task updation
    return this.httpClient.get<Task>(this.urlPrefix+"/api/tasks/"+taskName,{responseType:"json"})
  }

  updateTask(taskName: Task): Observable<Task> //making a put request and the response type is Json
  {
    //after reciving the details of the specific task, making put request for updating the task
    return this.httpClient.put<Task>(this.urlPrefix +"/api/tasks", taskName, { responseType: "json" });
  }
}

