import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './admin/components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { CanActivateGuardService } from './guards/can-activate-guard.service';
import { SignUpComponent } from './components/sign-up/sign-up.component';




const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignUpComponent},
  {path:"about",component:AboutComponent},
  {path:"admin",loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)},
  {path:"employee",loadChildren:()=>import("./employee/employee.module").then(m=>m.EmployeeModule)}
  
  
  
  
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,preloadingStrategy:PreloadAllModules})], //userHash helps in the navigation even if the url is copied in dfferent browswer
  exports: [RouterModule]
})
export class AppRoutingModule { }
