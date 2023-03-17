import { Component } from '@angular/core';
import { FormGroup, FormControl,  Validators } from '@angular/forms';
import { ILoginModel } from '../../Interface/ILoginModel';
import {AuthService}from '../../services/auth.service'
import {ResponseModel}from '../../../Models/GetResponseModel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  res:ResponseModel|any;
  constructor(public authService:AuthService,private router: Router){}
  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    userPassword: new FormControl('', [Validators.required, Validators.maxLength(8)])
})
LoginUser(){

  let loginData:ILoginModel={
    UsrNam:this.loginForm.value.userName??"",
    UsrPwd:this.loginForm.value.userPassword??"",
  }
  this.authService.UserLogin(loginData).subscribe(
    (response) => { this.res = response;
      if(this.res.status==true)
      {
        localStorage.removeItem('islogin');
        localStorage.setItem('islogin', "1");
         this.router.navigate(['/appcomponents'])
      }
      else{
        alert("Invalid user name or password")
      }
      console.log(this.res.status)
},
(error) => { console.log(error); });
}

}
