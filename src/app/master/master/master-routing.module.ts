import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from 'src/app/components/pagenotfound/pagenotfound.component';
import { RoleComponent } from '../components/role/role.component';

const routes: Routes = [
  {path:"Role",component:RoleComponent},
   {path:"**",component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
