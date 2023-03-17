import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import {AdminLoginComponent} from './components/admin-login/admin-login.component'
import {ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestComponent } from './components/test/test.component';
import { SignupComponent } from './components/signup/signup.component';
@NgModule({
  declarations: [
    AdminLoginComponent,
    TestComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
