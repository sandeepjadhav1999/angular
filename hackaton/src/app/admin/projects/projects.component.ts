import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:Project[]
  newProject:Project=new Project
  editProject:Project=new Project
  editIndex:any=null
  deleteProject:Project=new Project
  deleteIndex:any=null

  constructor(private projectService:ProjectsService) { }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe(
      (response)=>{
        this.projects=response.projects

      }
    )
  }
  
  save(){
    this.projectService.insertProject(this.newProject).subscribe(
      (response)=>{
        this.projects.push(this.newProject)
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  onEditClick(event:any,index:number){
    {
      this.editProject.projectName = this.projects[index].projectName;
      this.editProject.description = this.projects[index].description;
      this.editProject.teamSize = this.projects[index].teamSize;
      this.editIndex = index;
    }
  }

  update(){
    this.projectService.updateProject(this.editProject).subscribe(
      (res)=>{
        this.projects[this.editIndex]=this.editProject
      }
    )
  }

  onDeleteClick(event:any,index:number){
    {
      this.deleteProject.projectName = this.projects[index].projectName;
      this.deleteProject.description = this.projects[index].description;
      this.deleteProject.teamSize = this.projects[index].teamSize;
      this.deleteIndex = index;
    }
  }

  onDeleteConfirmClick(){
    console.log(this.deleteProject)
    this.projectService.deleteProject(this.deleteProject).subscribe(
      (res)=>{
        this.projectService.getAllProjects().subscribe(
          (response)=>{
            this.projects=response.projects
    
          }
        )
      }
    )
  }



  

}
