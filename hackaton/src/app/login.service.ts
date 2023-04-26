import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlPrefix="http://localhost:3000/login"

  constructor(private httpClient:HttpClient) { }

  currentUserName:any=null

  public Login(login:any):Observable<any>{
    return this.httpClient.post<any>(`${this.urlPrefix}`,login)
    .pipe(map(user =>
      {
        console.log(user)
        return user
        
      }));
  }
  public Logout()
  {
    this.currentUserName = null;
  }
}
