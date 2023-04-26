import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { JwtInterceptorService } from './service/jwt-interceptor.service';
import { JwtUnAuthorizedInterceptorService } from './service/jwt-authorized-interceptor.service';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { EmployeeModule } from './employee/employee.module';
import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './admin/components/about/about.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    AboutComponent



  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    EmployeeModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () =>
        {
          return (sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser") as any).token : null)
        }
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtUnAuthorizedInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
