import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TasksService } from 'src/app/service/tasks.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  taskName:any
  currentTask:Task=new Task()
  newTaskForm: FormGroup|any;
 



  constructor(private taskService:TasksService, private router:Router, private activeRoute:ActivatedRoute) { }

  projectID=this.currentTask.projectID    
  ngOnInit() {
    this.activeRoute.params.subscribe((params)=>{   //get the task details of the specified task
      this.taskName=params['taskName']  //making use of activate route to get the task name 
      console.log(this.taskName)      //storing the task Name in the taskName
    })

    this.taskService.getTaskbyTaskName(this.taskName).subscribe(    //calling the gettaskbytaskName
      (response)=>{               //fr the task service and sending the taskName as a parameter 
        this.currentTask=response  //and subscribing to the response
      }        //response contains the task details
    )
    
    this.newTaskForm = new FormGroup({
      taskID: new FormControl(0),
      taskName: new FormControl(null, [ Validators.required ]),
      description: new FormControl(null, []),
      projectID: new FormControl(null, [ Validators.required ]),
      assignedTo: new FormControl(null, [ Validators.required ]),
      createdBy:new FormControl(null, [ Validators.required ]),
      lastUpdatedOn:new FormControl([])

    });

  }

  onUpdateTaskClick(event:any)
  {
    this.newTaskForm["submitted"] = true;

    if (this.newTaskForm.valid)
    {
      this.taskService.updateTask(this.newTaskForm.value).subscribe(() => { //calling the updatetask method
        this.router.navigate( [ "/employee", "tasks" ]);   //once the form is valid and its successfully 
      }, (error) => {               //updated than we are redirected to the task page(tasks.component)
        console.log(error);
      });
    }
    else
    {
      console.log(this.newTaskForm.errors);
    }
  }
  }
  
  


