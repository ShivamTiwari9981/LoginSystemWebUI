import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLoginComponent} from '../admin/components/admin-login/admin-login.component'
import {SignupComponent} from '../admin/components/signup/signup.component'
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/components/dashboard/dashboard.component';

const routes: Routes = [
{path: '',pathMatch: 'full',redirectTo: 'login'},
{path: 'login',component: AdminLoginComponent},
{path: 'signup',component: SignupComponent},
{path: 'appcomponents',component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
