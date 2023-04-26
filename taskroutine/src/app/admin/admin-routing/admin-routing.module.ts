import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuardService } from 'src/app/guards/can-activate-guard.service';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ProjectsComponent } from '../components/projects/projects.component';


const routes:Routes=[
  {path:"", canActivate: [ CanActivateGuardService ],data: { expectedRole: "Admin" },children:[
    {path:"dashboard",component:DashboardComponent},
    {path:"projects", component:ProjectsComponent }
  ]},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AdminRoutingModule { }
