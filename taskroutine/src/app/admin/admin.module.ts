import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { DashboardService } from '../service/dashboard.service';
import { ProjectComponent } from './components/project/project.component';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './components/projects/projects.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    MyprofileComponent,
    ProjectsComponent,
    ProjectComponent
 
  ],
  imports: [
    CommonModule, FormsModule,AdminRoutingModule,SharedModule
  ],
  exports:[
    DashboardComponent,
    MyprofileComponent,
    ProjectsComponent,
    ProjectComponent

  ],
  providers:[DashboardService]

})
export class AdminModule { }
