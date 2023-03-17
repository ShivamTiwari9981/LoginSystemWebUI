import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MasterRoutingModule } from './master-routing.module';
import { RoleComponent } from '../components/role/role.component';


@NgModule({
  declarations: [
    RoleComponent,
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class MasterModule { }
