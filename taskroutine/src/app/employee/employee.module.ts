import { NgModule } from '@angular/core';
import { TasksComponent } from './components/tasks/tasks.component';
import { EmployeeRoutingModule } from './employee-routing/employee-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';




@NgModule({
  declarations: [
    TasksComponent,
    CreateTaskComponent,
    EditTaskComponent,

    
  ],
  imports: [
    SharedModule,
    EmployeeRoutingModule
  ],
  exports:[
    TasksComponent,
    CreateTaskComponent,
    EditTaskComponent,

  ]
})
export class EmployeeModule { }
