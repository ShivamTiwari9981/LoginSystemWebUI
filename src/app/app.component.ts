import { Component } from '@angular/core';
import {UtilityServiceService} from '../app/UtilityService/utility-service.service'
import {ResponseModel}from './Models/GetResponseModel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  respo:any;
  constructor(private utilitly:UtilityServiceService){}
  title = 'login_system';
  IsLoginSuccess=false;
  ngOnInit() {
    this.IsLogin();
  }

  private IsLogin(){
  let login=localStorage.getItem('islogin');
    if(login=="1")
    {
      this.GetAllModule();
      this.IsLoginSuccess=true
    }
    else{
      this.IsLoginSuccess=false;
    }
    return this.IsLoginSuccess;
  }

  GetAllModule(){
    let url="/Account/module"
    this.utilitly.GetResponse(url).subscribe(
      (response) => { this.respo = response;
      console.log(this.respo)
      },
  (error) => { console.log(error); });
  }
}
