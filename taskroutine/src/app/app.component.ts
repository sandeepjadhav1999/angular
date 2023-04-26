import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from './service/login.service';
import { RouterLoggerService } from './service/router-logger.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(public loginService: LoginService, private domSanitizer:DomSanitizer,
    private routerLoggerService:RouterLoggerService,private router: Router)
  {
  }

  ngOnInit() {
    this.loginService.detectLoggedin()
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let userName = (this.loginService.currentUserName) ? this.loginService.currentUserName : "anonymous";

        let logMsg = new Date().toLocaleString() + ": " + userName + " navigates to " + event.url;

        this.routerLoggerService.log(logMsg).subscribe();
      }
    });
  }

  
  onSearchClick()
  {
    console.log(this.loginService.currentUserName);
  }
  
}
