import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService
{
  urlPrefix: string = "http://localhost:3000/projects";

  constructor(private httpClient: HttpClient)
  {
  }

  getAllProjects(): Observable<any>
  {
    return this.httpClient.get<any>(`${this.urlPrefix}`);
  }

  insertProject(projects:any):Observable<any>
  {
    return this.httpClient.post<any>(`${this.urlPrefix}`,projects)
  }
  updateProject(projects:any):Observable<any>
  {
    return this.httpClient.put<any>(`${this.urlPrefix}`,projects)
  }

  deleteProject(projects:any):Observable<any>
  {
    return this.httpClient.post<any>(`${this.urlPrefix}/delete`,projects)
  }


}
