import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component'; 
import { DashboardService } from '../dashboard.service';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    DashboardComponent,
    AboutComponent,
    ProjectsComponent
  ],
  providers:[DashboardService]
})
export class AdminModule { }
