import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SigupComponent } from '../sigup/sigup.component';

const routes: Routes = [
  {path:'',component:SigupComponent},
  {path:'login', component:LoginComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesmodelRoutingModule { }
 