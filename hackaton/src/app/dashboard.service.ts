import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getTeamDatils(){
    var TeamSummary=[
      {TeamName:'BitByBit',TeamCount:3,available:0},
      {TeamName:'SRS',TeamCount:3,available:0},
      {TeamName:'Tech Phantom',TeamCount:3,available:0}
    ]
    return TeamSummary
  }

getTeamMember(){
  var TeamMember=[
    {
      TeamName:'BitByBit',Member:[
        {Id:1,Name:'Chetan',Available:'Available'},
        {Id:2,Name:'Sandeep',Available:'Available'},
        {Id:3,Name:'Thnushree',Available:'Available'},
      ] 
    },
    {
      TeamName:'SRS',Member:[
        {Id:1,Name:'Shiledra Pal',Available:'Available'},
        {Id:2,Name:'Ravalika',Available:'Available'},
        {Id:3,Name:'Sadiq',Available:'Available'},
      ] 
    },
    {
      TeamName:'Tech Phantom',Member:[
        {Id:1,Name:'Ramya Yande',Available:'Available'},
        {Id:2,Name:'Neeraj Kumar',Available:'Available'},
        {Id:3,Name:'Seemarani G',Available:'Available'},
      ] 
    },
  ]  
  return TeamMember
}
}
