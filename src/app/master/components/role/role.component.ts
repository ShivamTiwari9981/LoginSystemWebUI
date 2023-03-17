
import { Component } from '@angular/core';
import { FormGroup, FormControl,  Validators } from '@angular/forms';
import { UtilityServiceService } from 'src/app/UtilityService/utility-service.service';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent {
  respo:any;
  constructor(private utilitly:UtilityServiceService){}
  title = 'Role';
  ngOnInit() {
    this.GetAllRole();
  }
  GetAllRole(){
    let url="/Role/role"
    this.utilitly.GetResponse(url).subscribe(
      (response) => { this.respo = response;
        console.log(this.respo)
      },
  (error) => { console.log(error); });
  }

}

