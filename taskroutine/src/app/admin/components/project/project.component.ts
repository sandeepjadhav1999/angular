import { Component, OnInit, Input, Output, EventEmitter,OnChanges } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit
{
  @Input("currentProject") project: Project | any = null;
  @Input("recordIndex") i: number = 0;

  @Output() editClick=new EventEmitter
  @Output() deleteClick=new EventEmitter

  constructor()
  {
  }
  ngOnChanges(){
    console.log('change')
  }
  ngOnInit()
  {
  }

  onEditClick(event: any, i: number)
  {
    this.editClick.emit({event,i})
  }

  onDeleteClick(event: any, i: number)
  {
    this.deleteClick.emit({event,i})
  }
}