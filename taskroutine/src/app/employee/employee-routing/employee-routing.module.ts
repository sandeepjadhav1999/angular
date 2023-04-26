import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuardService } from 'src/app/guards/can-activate-guard.service';
import { TasksComponent } from '../components/tasks/tasks.component';
import { CreateTaskComponent } from '../components/create-task/create-task.component';
import { EditTaskComponent } from '../components/edit-task/edit-task.component';

const routes:Routes=[
  {path:"",canActivate: [ CanActivateGuardService ],data: { expectedRole: "Employee" },children:[
    {path:"tasks",component:TasksComponent,data:{linkIndex:1} },
    {path:"createtask",component:CreateTaskComponent,data:{linkIndex:2}},
    {path:"edittask/:taskName",component:EditTaskComponent,data:{linkIndex:3}},
  ]}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class EmployeeRoutingModule { }
