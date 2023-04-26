import { Component, OnInit } from '@angular/core';
import { LoginViewModel } from 'src/app/models/login-view-model';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{
  loginViewModel: LoginViewModel = new LoginViewModel();   //creating a new object of loginViewModel 
  loginError: string = "";

  constructor(private loginService: LoginService, private router: Router) 
  {
  }

  ngOnInit()
  {
  }

  onLoginClick(event: any)
  {
    this.loginService.Login(this.loginViewModel).subscribe( //callng the login method from the service
      (response) =>     //response contians the Username Password n role
      {
        if(this.loginService.currentUserRole=="Admin"){  //when logged in as a Admin than ull be 
          this.router.navigate(["/admin","dashboard"]); //redirected to the dashboard page
        }else{                                          
          this.router.navigate(["/employee","tasks"]); //when logged in as a employee than you will 
        }                                              //be redirected to the create task page
        
      },
      (error) =>
      {
        console.log(error);
        this.loginError = "Invalid Username or Password";
      },
    );
  }

}