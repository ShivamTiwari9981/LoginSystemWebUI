import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AdminModule} from '../app/admin/admin.module';
import {MasterModule} from '../app/master/master/master.module'
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
// import { ViewmapComponent } from './map/components/viewmap/viewmap.component';
// import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
// import { RoleComponent } from './master/components/role/role.component';
// import { CityComponent } from './master/components/city/city.component';
// import { StateComponent } from './master/components/state/state.component';
// import { CountryComponent } from './master/components/country/country.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,

    // ViewmapComponent,
    // PagenotfoundComponent,
    // RoleComponent,
    // CityComponent,
    // StateComponent,
    // CountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    ToastrModule,
    MasterModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
