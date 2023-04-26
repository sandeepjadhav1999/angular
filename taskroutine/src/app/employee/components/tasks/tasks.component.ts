import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { LoginService } from 'src/app/service/login.service';
import { TasksService } from 'src/app/service/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks:Task[] 

  constructor(private taskservice:TasksService, public loginService:LoginService) { }
  ngOnInit() {
    this.taskservice.getTask().subscribe(    //calling the getTask method from the taskService and 
      (response:Task[])=>{                //and subscribing to the response
        this.tasks=response                 //storing the response data in the tasks
        console.log(this.tasks)
      }
    )
    
  }  
}
